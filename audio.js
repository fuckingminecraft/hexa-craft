// Audio Player Engine using actual audio files (.wav) via HTML5 Audio
class KeyboardSoundEngine {
  constructor() {
    this.muted = false;
    // 실제 audio 폴더 내 .wav 파일 경로 매핑
    this.audioFiles = {
      'magnetic_jade': 'audio/magnetic_jade.wav',
      'magnetic_raw': 'audio/magnetic_raw.wav',
      'linear': 'audio/linear.wav',
      'tactile': 'audio/tactile.wav',
      'silent': 'audio/silent.wav',
      'clicky': 'audio/clicky.wav'
    };
    
    // 미리 Audio 객체를 생성하여 캐싱 (로딩 지연 방지)
    this.preloadElements();
  }

  preloadElements() {
    this.sounds = {};
    for (const [key, path] of Object.entries(this.audioFiles)) {
      const audio = new Audio(path);
      audio.preload = 'auto';
      this.sounds[key] = audio;
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }

  // 키를 누를 때 실제 오디오 파일(.wav) 재생
  playKey(switchType = 'linear', keyName = '') {
    if (this.muted) return;

    let targetSound = this.sounds[switchType] || this.sounds['linear'];
    
    if (targetSound) {
      // 다중 타건 시 겹쳐서 자연스럽게 소리가 나도록 복제(cloneNode)하여 재생
      const clone = targetSound.cloneNode();
      
      // 스페이스바 등은 재생 속도를 살짝 낮춰 무게감 표현
      const isSpacebar = keyName === 'SPACE' || keyName === ' ' || keyName === 'Space';
      clone.playbackRate = isSpacebar ? 0.85 : (0.95 + Math.random() * 0.1);
      clone.volume = isSpacebar ? 1.0 : 0.8;

      clone.play().catch(e => {
        console.warn('오디오 재생 실패 (audio 폴더 내 .wav 파일명을 확인해주세요):', e);
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