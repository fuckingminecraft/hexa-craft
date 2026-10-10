// Audio Player Engine with robust fallback and error logging
class KeyboardSoundEngine {
  constructor() {
    this.muted = false;
    this.audioFiles = {
      'magnetic_jade': 'audio/magnetic_jade.wav',
      'magnetic_raw': 'audio/magnetic_raw.wav',
      'linear': 'audio/linear.wav',
      'tactile': 'audio/tactile.wav',
      'silent': 'audio/silent.wav',
      'clicky': 'audio/clicky.wav'
    };
    
    this.sounds = {};
    this.preloadElements();
  }

  preloadElements() {
    for (const [key, path] of Object.entries(this.audioFiles)) {
      const audio = new Audio();
      audio.src = path;
      audio.preload = 'auto';
      audio.onerror = () => {
        console.warn(`[Audio Warning] 파일을 찾을 수 없거나 로드 실패: ${path}`);
      };
      this.sounds[key] = audio;
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }

  playKey(switchType = 'linear', keyName = '') {
    if (this.muted) return;

    let targetSound = this.sounds[switchType] || this.sounds['linear'];
    
    if (targetSound && targetSound.src) {
      const clone = targetSound.cloneNode();
      const isSpacebar = keyName === 'SPACE' || keyName === ' ' || keyName === 'Space';
      clone.playbackRate = isSpacebar ? 0.85 : (0.95 + Math.random() * 0.1);
      clone.volume = isSpacebar ? 1.0 : 0.8;

      clone.play().catch(e => {
        // 브라우저 정책으로 차단되었거나 파일 오류 발생 시
        console.warn('오디오 재생이 차단되었거나 실패했습니다:', e);
      });
    }
  }

  playProfile(profile) {
    const phrases = [
      { key: 'H', delay: 0 },
      { key: 'E', delay: 110 },
      { key: 'X', delay: 180 },
      { key: 'A', delay: 280 },
      { key: 'SPACE', delay: 400 }
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