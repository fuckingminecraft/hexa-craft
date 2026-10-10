// Audio Synthesizer Engine for Custom Keyboard Switches & Profiles
// Uses Web Audio API without any external dependencies

class KeyboardSoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.bufferCache = {};
    this._contextReady = false;

    // Defer AudioContext creation until first user gesture (browser autoplay policy)
    const initOnGesture = () => {
      if (!this._contextReady) {
        this._initAudioContext();
      }
    };
    document.addEventListener('click', initOnGesture);
    document.addEventListener('keydown', initOnGesture);
    document.addEventListener('touchstart', initOnGesture);
  }

  _initAudioContext() {
    if (this._contextReady && this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        if (this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
        this._contextReady = true;
      }
    } catch (e) {
      console.warn('Web Audio not supported in this browser.', e);
    }
  }

  ensureContext() {
    if (!this.ctx) {
      this._initAudioContext();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }

  // Play keystroke sound based on selected switch & plate profile
  playKey(switchType = 'linear', keyName = '') {
    if (this.muted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;

    // Small random frequency jitter to make typing sound authentic and not robotic
    const jitter = (Math.random() - 0.5) * 35;
    const isSpacebar = keyName === 'SPACE' || keyName === ' ' || keyName === 'Space';

    // Go directly to synthetic sound — individual per-key wav files are not shipped
    this._playSynthetic(now, jitter, isSpacebar, switchType);
  }

  // Internal helper: synthetic fallback (unchanged logic)
  _playSynthetic(now, jitter, isSpacebar, switchType) {
    switch (switchType) {
      case 'magnetic_jade': // Deep magnetic poppy thock (Gateron Magnetic Jade)
        this.synthMagneticJade(now, 160 + jitter, isSpacebar ? 0.38 : 0.24, isSpacebar ? 1.3 : 1.0);
        break;

      case 'magnetic_raw': // Crisp snappy magnetic clack (Gateron RAW HE)
        this.synthMagneticRaw(now, 230 + jitter, isSpacebar ? 0.34 : 0.22);
        break;

      case 'linear': // Smooth Thock / Clack blend (Alpaca V2)
        this.synthThock(now, 140 + jitter, isSpacebar ? 0.35 : 0.2, isSpacebar ? 1.4 : 1.0);
        break;

      case 'tactile': // Snappy bump + bottom out (Holy Panda X)
        this.synthTactile(now, 260 + jitter, isSpacebar ? 0.32 : 0.22);
        break;

      case 'silent': // Dampened soft thump (Gateron Silent Black)
        this.synthSilent(now, 110 + jitter, 0.12);
        break;

      case 'clicky': // Crisp sharp dual click (Kailh Box Navy)
        this.synthClicky(now, 850 + jitter, 0.25);
        break;

      default:
        this.synthThock(now, 150 + jitter, 0.2, 1.0);
    }
  }

  // 1. Deep Thock Sound (Deep low pitch wooden/stone resonance)
  synthThock(now, freq, vol = 0.25, spaceFactor = 1.0) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'triangle';
    const baseFreq = (freq / (spaceFactor > 1 ? 1.3 : 1.0));
    osc.frequency.setValueAtTime(baseFreq * 2.2, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq, now + 0.04);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(spaceFactor > 1 ? 400 : 700, now);
    filter.frequency.exponentialRampToValueAtTime(120, now + 0.08);

    gain.gain.setValueAtTime(vol * 1.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + (0.07 * spaceFactor));

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.09 * spaceFactor);

    // Micro mechanical tap noise
    this.synthNoiseTap(now, 0.04, vol * 0.4);
  }

  // 1-B. Magnetic Jade (Poppy deep wooden bottom out with crisp release)
  synthMagneticJade(now, freq, vol = 0.25, spaceFactor = 1.0) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'triangle';
    const baseFreq = (freq / (spaceFactor > 1 ? 1.25 : 1.0));
    osc.frequency.setValueAtTime(baseFreq * 2.8, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.9, now + 0.035);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(spaceFactor > 1 ? 550 : 850, now);
    filter.frequency.exponentialRampToValueAtTime(140, now + 0.07);

    gain.gain.setValueAtTime(vol * 1.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + (0.065 * spaceFactor));

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.08 * spaceFactor);

    this.synthNoiseTap(now, 0.03, vol * 0.45);
  }

  // 1-C. Magnetic RAW HE (Crisp snappy bottom-out clack)
  synthMagneticRaw(now, freq, vol = 0.22) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'square';
    osc.frequency.setValueAtTime(freq * 1.5, now);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.8, now + 0.03);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1100, now);
    filter.frequency.exponentialRampToValueAtTime(250, now + 0.06);

    gain.gain.setValueAtTime(vol, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.06);

    this.synthNoiseTap(now, 0.02, vol * 0.35);
  }

  // 2. Crisp Tactile Sound (Bump pop)
  synthTactile(now, freq, vol = 0.2) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq * 1.8, now);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.7, now + 0.03);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, now);
    filter.Q.value = 3;

    gain.gain.setValueAtTime(vol, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.06);

    // Initial bump pop
    this.synthNoiseTap(now, 0.025, vol * 0.6);
  }

  // 3. Silent Dampened Thump
  synthSilent(now, freq, vol = 0.1) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.03);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(250, now);

    gain.gain.setValueAtTime(vol, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  }

  // 4. Clicky Click-Bar Mechanism
  synthClicky(now, freq, vol = 0.25) {
    // Sharp click bar burst
    const clickOsc = this.ctx.createOscillator();
    const clickGain = this.ctx.createGain();
    clickOsc.type = 'square';
    clickOsc.frequency.setValueAtTime(freq, now);
    clickOsc.frequency.exponentialRampToValueAtTime(320, now + 0.015);

    clickGain.gain.setValueAtTime(vol * 0.8, now);
    clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

    clickOsc.connect(clickGain);
    clickGain.connect(this.ctx.destination);

    clickOsc.start(now);
    clickOsc.stop(now + 0.025);

    // Followed by solid bottom out
    this.synthThock(now + 0.01, 160, vol * 0.7, 0.8);
  }

  // Noise generator for switch stem friction and bottom out contact
  synthNoiseTap(now, duration = 0.03, vol = 0.1) {
    const bufferSize = this.ctx.sampleRate * duration;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1200;
    filter.Q.value = 1.2;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(vol, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    whiteNoise.start(now);
  }

  // Play a profile demo in sound lab
  playProfile(profile) {
    this.ensureContext();
    const phrases = [
      { key: 'H', delay: 0 },
      { key: 'E', delay: 110 },
      { key: 'X', delay: 220 },
      { key: 'A', delay: 340 },
      { key: 'SPACE', delay: 470 },
      { key: 'C', delay: 620 },
      { key: 'R', delay: 720 },
      { key: 'A', delay: 830 },
      { key: 'F', delay: 940 },
      { key: 'T', delay: 1050 }
    ];

    let switchType = 'linear';
    if (profile === 'thock') switchType = 'linear';
    if (profile === 'clack') switchType = 'tactile';
    if (profile === 'creamy') switchType = 'linear';

    phrases.forEach(item => {
      setTimeout(() => {
        this.playKey(switchType, item.key);
      }, item.delay);
    });
  }
}

// Global Export
window.KeyboardSound = new KeyboardSoundEngine();
