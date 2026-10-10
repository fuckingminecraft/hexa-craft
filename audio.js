// Audio Engine using actual audio files from the audio folder
class KeyboardSoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this._contextReady = false;
    this.audioBuffers = {}; // 로드된 오디오 버퍼 캐시
    this.audioFiles = {
      'magnetic_jade': 'audio/magnetic_jade.mp3', // 실제 파일 경로에 맞게 수정
      'magnetic_raw': 'audio/magnetic_raw.mp3',
      'linear': 'audio/linear.mp3',
      'tactile': 'audio/tactile.mp3',
      'silent': 'audio/silent.mp3',
      'clicky': 'audio/clicky.mp3'
    };

    // 사용자 제스처 시 오디오 컨텍스트 초기화 및 파일 사전 로드
    const initOnGesture = () => {
      if (!this._contextReady) {
        this._initAudioContext();
        this._preloadAudioFiles();
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

  async _preloadAudioFiles() {
    if (!this.ctx) return;
    for (const [key, path] of Object.entries(this.audioFiles)) {
      try {
        const response = await fetch(path);
        const arrayBuffer = await response.arrayBuffer();
        const decodedBuffer = await this.ctx.decodeAudioData(arrayBuffer);
        this.audioBuffers[key] = decodedBuffer;
      } catch (e) {
        console.warn(`오디오 파일 로드 실패 (${path}):`, e);
      }
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

  // 키를 누를 때 실제 오디오 샘플 재생
  playKey(switchType = 'linear', keyName = '') {
    if (this.muted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const buffer = this.audioBuffers[switchType] || this.audioBuffers['linear'];
    if (buffer) {
      const source = this.ctx.createBufferSource();
      source.buffer = buffer;

      // 스페이스바 등 특정 키는 피치(재생 속도)를 미세하게 조절하여 현장감 부여
      const isSpacebar = keyName === 'SPACE' || keyName === ' ' || keyName === 'Space';
      source.playbackRate.value = isSpacebar ? 0.85 : (0.95 + Math.random() * 0.1);

      const gainNode = this.ctx.createGain();
      gainNode.gain.value = isSpacebar ? 1.2 : 1.0;

      source.connect(gainNode);
      gainNode.connect(this.ctx.destination);
      source.start(0);
    } else {
      // 오디오 파일이 아직 로드되지 않았거나 없을 경우 기본 합성음 폴백 실행
      this._playSyntheticFallback(switchType);
    }
  }

  _playSyntheticFallback(switchType) {
    // 기존 합성음 로직 (필요시 비상용으로 유지)
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(150, now);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.06);
  }

  playProfile(profile) {
    this.ensureContext();
    const phrases = [
      { key: 'H', delay: 0 },
      { key: 'E', delay: 110 },
      { key: 'X', delay: 220 },
      { key: 'A', delay: 340 },
      { key: 'SPACE', delay: 470 }
    ];

    let switchType = 'linear';
    if (profile === 'thock') switchType = 'magnetic_jade';
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