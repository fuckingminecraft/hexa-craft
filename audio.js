// Audio Player Engine: 기계식 스위치는 무음 처리, 자석축만 실제 오디오 파일(.wav) 재생
class KeyboardSoundEngine {
  constructor() {
    this.muted = false;
    
    // 실제 오디오 파일이 존재하는 자석축 오디오 파일 경로 매핑
    this.audioFiles = {
      'magnetic_jade': 'audio/magnetic_jade.wav',
      'magnetic_raw': 'audio/magnetic_raw.wav'
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
        console.warn(`[Audio Warning] 파일을 찾을 수 없습니다: ${path}`);
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

    // 기계식 스위치 종류(linear, tactile, silent, clicky 등)는 소리가 나지 않도록 무음 처리
    if (!this.audioFiles[switchType]) {
      return; 
    }

    let targetSound = this.sounds[switchType];
    
    if (targetSound && targetSound.src) {
      const clone = targetSound.cloneNode();
      const isSpacebar = keyName === 'SPACE' || keyName === ' ' || keyName === 'Space';
      clone.playbackRate = isSpacebar ? 0.85 : (0.95 + Math.random() * 0.1);
      clone.volume = isSpacebar ? 1.0 : 0.8;

      clone.play().catch(e => {
        console.warn('오디오 재생 차단 또는 오류:', e);
      });
    }
  }

  playProfile(profile) {
    // 프로필 데모도 자석축 기반(magnetic_jade)으로 동작하도록 설정
    const phrases = [
      { key: 'H', delay: 0 },
      { key: 'E', delay: 110 },
      { key: 'X', delay: 180 },
      { key: 'A', delay: 280 },
      { key: 'SPACE', delay: 400 }
    ];

    phrases.forEach(item => {
      setTimeout(() => {
        this.playKey('magnetic_jade', item.key);
      }, item.delay);
    });
  }
}

// Global Export
window.KeyboardSound = new KeyboardSoundEngine();