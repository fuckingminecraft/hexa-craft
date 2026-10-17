// Main Application Logic for HEXA CRAFT
const KEYBOARD_LAYOUTS = {
  '60': [
    [
      { label: 'ESC', width: 'key-u1', code: 'Escape', role: 'mod' },
      { label: '1', width: 'key-u1', code: 'Digit1' },
      { label: '2', width: 'key-u1', code: 'Digit2' },
      { label: '3', width: 'key-u1', code: 'Digit3' },
      { label: '4', width: 'key-u1', code: 'Digit4' },
      { label: '5', width: 'key-u1', code: 'Digit5' },
      { label: '6', width: 'key-u1', code: 'Digit6' },
      { label: '7', width: 'key-u1', code: 'Digit7' },
      { label: '8', width: 'key-u1', code: 'Digit8' },
      { label: '9', width: 'key-u1', code: 'Digit9' },
      { label: '0', width: 'key-u1', code: 'Digit0' },
      { label: '-', width: 'key-u1', code: 'Minus' },
      { label: '=', width: 'key-u1', code: 'Equal' },
      { label: 'BACKSPACE', width: 'key-u2', code: 'Backspace', role: 'mod' }
    ],
    [
      { label: 'TAB', width: 'key-u1-5', code: 'Tab', role: 'mod' },
      { label: 'Q', width: 'key-u1', code: 'KeyQ' },
      { label: 'W', width: 'key-u1', code: 'KeyW' },
      { label: 'E', width: 'key-u1', code: 'KeyE' },
      { label: 'R', width: 'key-u1', code: 'KeyR' },
      { label: 'T', width: 'key-u1', code: 'KeyT' },
      { label: 'Y', width: 'key-u1', code: 'KeyY' },
      { label: 'U', width: 'key-u1', code: 'KeyU' },
      { label: 'I', width: 'key-u1', code: 'KeyI' },
      { label: 'O', width: 'key-u1', code: 'KeyO' },
      { label: 'P', width: 'key-u1', code: 'KeyP' },
      { label: '[', width: 'key-u1', code: 'BracketLeft' },
      { label: ']', width: 'key-u1', code: 'BracketRight' },
      { label: '\\', width: 'key-u1-5', code: 'Backslash' }
    ],
    [
      { label: 'CAPS', width: 'key-u1-75', code: 'CapsLock', role: 'mod' },
      { label: 'A', width: 'key-u1', code: 'KeyA' },
      { label: 'S', width: 'key-u1', code: 'KeyS' },
      { label: 'D', width: 'key-u1', code: 'KeyD' },
      { label: 'F', width: 'key-u1', code: 'KeyF' },
      { label: 'G', width: 'key-u1', code: 'KeyG' },
      { label: 'H', width: 'key-u1', code: 'KeyH' },
      { label: 'J', width: 'key-u1', code: 'KeyJ' },
      { label: 'K', width: 'key-u1', code: 'KeyK' },
      { label: 'L', width: 'key-u1', code: 'KeyL' },
      { label: ';', width: 'key-u1', code: 'Semicolon' },
      { label: '\'', width: 'key-u1', code: 'Quote' },
      { label: 'ENTER', width: 'key-u2-25', code: 'Enter', role: 'accent' }
    ],
    [
      { label: 'SHIFT', width: 'key-u2-25', code: 'ShiftLeft', role: 'mod' },
      { label: 'Z', width: 'key-u1', code: 'KeyZ' },
      { label: 'X', width: 'key-u1', code: 'KeyX' },
      { label: 'C', width: 'key-u1', code: 'KeyC' },
      { label: 'V', width: 'key-u1', code: 'KeyV' },
      { label: 'B', width: 'key-u1', code: 'KeyB' },
      { label: 'N', width: 'key-u1', code: 'KeyN' },
      { label: 'M', width: 'key-u1', code: 'KeyM' },
      { label: ',', width: 'key-u1', code: 'Comma' },
      { label: '.', width: 'key-u1', code: 'Period' },
      { label: '/', width: 'key-u1', code: 'Slash' },
      { label: 'SHIFT', width: 'key-u2-25', code: 'ShiftRight', role: 'mod' }
    ],
    [
      { label: 'CTRL', width: 'key-u1-25', code: 'ControlLeft', role: 'mod' },
      { label: 'WIN', width: 'key-u1-25', code: 'MetaLeft', role: 'mod' },
      { label: 'ALT', width: 'key-u1-25', code: 'AltLeft', role: 'mod' },
      { label: 'SPACE', width: 'key-space', code: 'Space', role: 'space' },
      { label: 'ALT', width: 'key-u1-25', code: 'AltRight', role: 'mod' },
      { label: 'WIN', width: 'key-u1-25', code: 'MetaRight', role: 'mod' },
      { label: 'FN', width: 'key-u1-25', code: 'Fn', role: 'mod' },
      { label: 'CTRL', width: 'key-u1-25', code: 'ControlRight', role: 'mod' }
    ]
  ]
};

const PRESET_PRODUCTS = [
  {
    id: 'VENOM-60HE-CARBON-PRO',
    category: 'venom_he',
    name: 'VENOM 60HE Carbon Black Edition',
    subtitle: '베놈 60HE v2 기판 + 카본파이버 보강판 + 마그네틱 제이드',
    price: 368000,
    specs: ['기판: 베놈 60HE v2 (0.02mm 초정밀 래피드 트리거)', '보강판: 특주 카본 파이버 (Carbon Fiber)', '스위치: Gateron Magnetic Jade 자석축 풀윤활', '하우징: CNC 6063 통알루미늄 옵시디언 블랙', '키캡: 스텔스 다크그레이 체리 프로파일 PBT']
  },
  {
    id: 'VENOM-60HE-ALU-TWOTONE',
    category: 'venom_he',
    name: 'VENOM 60HE Dual Tone Master',
    subtitle: '베놈 60HE 기판 + 알루미늄 보강판 + 마그네틱 RAW HE',
    price: 345000,
    specs: ['기판: 베놈 60HE 정품 홀센서 기판', '보강판: CNC 알루미늄 아노다이징 보강판', '스위치: Gateron RAW HE 듀얼 레일 자석축', '하우징: 상판 딥블랙 + 하판 스페이스그레이 2톤', '키캡: 모노크롬 턱시도 PBT 각인']
  }
];

class HexaCraftApp {
  constructor() {
    this.basePrice = 249000;
    this.state = {
      layout: '60',
      pcb: 'venom60he_v2',
      pcbName: '베놈 60HE v2 (차세대 플래그십)',
      pcbPrice: 55000,
      plate: 'carbon',
      plateName: '카본 파이버 (Carbon Fiber)',
      platePrice: 18000,
      case: 'tofu60_black',
      caseName: '토푸 60 2.0 (옵시디언 딥블랙)',
      casePrice: 0,
      keycap: 'stealth',
      keycapName: '스텔스 다크 그레이 PBT',
      keycapPrice: 0,
      switch: 'magnetic_jade',
      switchName: '게이트론 마그네틱 제이드 (자석축)',
      switchPrice: 42000
    };

    this.cart = [];
    this.init();
  }

  init() {
    this.renderKeyboard();
    this.renderCatalog();
    this.bindEvents();
    this.updatePrice();
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  calculateTotal() {
    return this.basePrice +
      this.state.pcbPrice +
      this.state.platePrice +
      this.state.casePrice +
      this.state.keycapPrice +
      this.state.switchPrice;
  }

  updatePrice() {
    const total = this.calculateTotal();
    const display = document.getElementById('totalPriceDisplay');
    if (display) {
      display.textContent = total.toLocaleString();
    }

    const sumPcb = document.getElementById('summaryPcb');
    if (sumPcb) sumPcb.textContent = this.state.pcbName;
    const sumPlate = document.getElementById('summaryPlate');
    if (sumPlate) sumPlate.textContent = this.state.plateName;
    const sumCase = document.getElementById('summaryCase');
    if (sumCase) sumCase.textContent = this.state.caseName;
    const sumSwitch = document.getElementById('summarySwitch');
    if (sumSwitch) sumSwitch.textContent = this.state.switchName;
  }

  getKeycapColors(role) {
    const theme = this.state.keycap;
    switch (theme) {
      case 'stealth':
        if (role === 'accent') return { bg: '#2b2f38', color: '#fff', shadow: '#101216' };
        if (role === 'mod') return { bg: '#131418', color: '#888f9e', shadow: '#090a0d' };
        return { bg: '#20222a', color: '#d2d6df', shadow: '#101115' };
      case 'monochrome':
        if (role === 'accent') return { bg: '#e2e6ee', color: '#111215', shadow: '#8a92a2' };
        if (role === 'mod') return { bg: '#15161b', color: '#9fa6b5', shadow: '#0c0d10' };
        return { bg: '#484d59', color: '#f0f3f8', shadow: '#22252c' };
      default:
        return { bg: '#20222a', color: '#d2d6df', shadow: '#101115' };
    }
  }

  renderKeyboard() {
    const grid = document.getElementById('keysGrid');
    const housing = document.getElementById('keyboardHousing');
    const plate = document.getElementById('keyboardPlate');
    if (!grid) return;

    if (this.state.case === 'wooting_twotone') {
      housing.style.background = 'linear-gradient(180deg, #101114 0%, #282c35 100%)';
      housing.style.borderColor = '#474d5c';
    } else if (this.state.case === 'tofu60_gray') {
      housing.style.background = 'linear-gradient(145deg, #2b2f38 0%, #1a1c22 100%)';
      housing.style.borderColor = '#3c4352';
    } else if (this.state.case === 'blade60_gunmetal') {
      housing.style.background = 'linear-gradient(135deg, #252932 0%, #14161b 100%)';
      housing.style.borderColor = '#3e4554';
    } else {
      housing.style.background = '#121316';
      housing.style.borderColor = '#242730';
    }

    if (this.state.plate === 'carbon') {
      plate.style.borderColor = '#1f242d';
      plate.style.background = 'repeating-linear-gradient(45deg, #16181d, #16181d 4px, #0e1014 4px, #0e1014 8px)';
    } else {
      plate.style.borderColor = '#4a5160';
      plate.style.background = 'linear-gradient(145deg, #2a2e38 0%, #1c1f26 100%)';
    }

    const activeLayoutLabel = document.getElementById('activeLayoutName');
    if (activeLayoutLabel) {
      activeLayoutLabel.textContent = `VENOM 60HE (${this.state.pcbName}) • ${this.state.plateName}`;
    }

    const layoutMatrix = KEYBOARD_LAYOUTS[this.state.layout] || KEYBOARD_LAYOUTS['60'];
    grid.innerHTML = '';

    layoutMatrix.forEach((row) => {
      const rowEl = document.createElement('div');
      rowEl.className = 'key-row';

      row.forEach((key) => {
        const keyEl = document.createElement('button');
        keyEl.className = `keycap ${key.width}`;
        keyEl.setAttribute('data-code', key.code);
        keyEl.textContent = key.label;

        const colors = this.getKeycapColors(key.role);
        keyEl.style.backgroundColor = colors.bg;
        keyEl.style.color = colors.color;
        keyEl.style.setProperty('--key-shadow', colors.shadow);

        keyEl.addEventListener('click', () => {
          this.triggerKeyVisual(keyEl);
          window.KeyboardSound.playKey(this.state.switch, key.label);
        });

        rowEl.appendChild(keyEl);
      });

      grid.appendChild(rowEl);
    });
  }

  triggerKeyVisual(keyEl) {
    keyEl.classList.add('key-pressed');
    setTimeout(() => {
      keyEl.classList.remove('key-pressed');
    }, 120);
  }

  renderCatalog() {
    const container = document.getElementById('productsCatalogGrid');
    if (!container) return;

    container.innerHTML = '';
    PRESET_PRODUCTS.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-item-card';

      let specsHtml = '';
      product.specs.forEach(s => {
        specsHtml += '<li><i data-lucide="check" style="width:14px; height:14px; color:#39db80;"></i> ' + s + '</li>';
      });

      card.innerHTML =
        '<div class="product-thumb-visual">' +
        '<span class="badge-flag">READY TO SHIP</span>' +
        '</div>' +
        '<div class="product-info-box">' +
        '<h4>' + product.name + '</h4>' +
        '<ul class="product-specs-list">' + specsHtml + '</ul>' +
        '<div class="product-bottom-row">' +
        '<div class="item-price">₩' + product.price.toLocaleString() + '</div>' +
        '<button class="add-btn" data-id="' + product.id + '">' +
        '<i data-lucide="shopping-bag" style="width:14px; height:14px;"></i>' +
        '<span>장바구니 담기</span>' +
        '</button>' +
        '</div>' +
        '</div>';

      card.querySelector('.add-btn').addEventListener('click', () => {
        this.addToCart({
          id: product.id,
          name: product.name,
          details: product.specs.join(' / '),
          price: product.price,
          qty: 1
        });
      });

      container.appendChild(card);
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  addToCart(item) {
    const existingIndex = this.cart.findIndex(i => i.id === item.id);
    if (existingIndex > -1) {
      this.cart[existingIndex].qty += 1;
    } else {
      this.cart.push(item);
    }
    this.updateCartBadge();
    this.openCart();
    this.renderCartItems();
  }

  removeFromCart(index) {
    this.cart.splice(index, 1);
    this.updateCartBadge();
    this.renderCartItems();
  }

  updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) {
      badge.textContent = this.cart.reduce((acc, cur) => acc + cur.qty, 0);
    }
  }

  renderCartItems() {
    const list = document.getElementById('cartItemsList');
    const totalDisplay = document.getElementById('cartTotalSum');
    if (!list || !totalDisplay) return;

    if (this.cart.length === 0) {
      list.innerHTML =
        '<div class="empty-cart-msg">' +
        '<i data-lucide="shopping-bag" style="width:40px; height:40px; margin-bottom: 12px; stroke-width: 1.5;"></i>' +
        '<p>장바구니에 담긴 제품이 없습니다.</p>' +
        '</div>';
      totalDisplay.textContent = '0';
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    let totalSum = 0;
    list.innerHTML = '';

    this.cart.forEach((item, index) => {
      totalSum += item.price * item.qty;
      const row = document.createElement('div');
      row.className = 'cart-item-row';
      row.innerHTML =
        '<div class="cart-item-title-row">' +
        '<span class="cart-item-title">' + item.name + '</span>' +
        '<span class="cart-item-delete" data-index="' + index + '"><i data-lucide="trash-2" style="width:16px; height:16px;"></i></span>' +
        '</div>' +
        '<div class="cart-item-details">' + item.details + '</div>' +
        '<div class="cart-item-bottom">' +
        '<span class="cart-item-qty">수량: ' + item.qty + '개</span>' +
        '<span class="cart-item-price">₩' + (item.price * item.qty).toLocaleString() + '</span>' +
        '</div>';

      row.querySelector('.cart-item-delete').addEventListener('click', () => {
        this.removeFromCart(index);
      });
      list.appendChild(row);
    });

    totalDisplay.textContent = totalSum.toLocaleString();
    if (window.lucide) window.lucide.createIcons();
  }

  openCart() {
    document.getElementById('cartDrawer').classList.add('active');
    document.getElementById('cartBackdrop').classList.add('active');
  }

  closeCart() {
    document.getElementById('cartDrawer').classList.remove('active');
    document.getElementById('cartBackdrop').classList.remove('active');
  }

  bindEvents() {
    const soundToggle = document.getElementById('soundToggleBtn');
    if (soundToggle) {
      soundToggle.addEventListener('click', () => {
        const isMuted = window.KeyboardSound.toggleMute();
        soundToggle.classList.toggle('muted', isMuted);
        soundToggle.querySelector('span').textContent = isMuted ? '타건음 OFF' : '타건음 ON';
      });
    }

    document.getElementById('openCartBtn').addEventListener('click', () => {
      this.renderCartItems();
      this.openCart();
    });
    document.getElementById('closeCartBtn').addEventListener('click', () => this.closeCart());
    document.getElementById('cartBackdrop').addEventListener('click', () => this.closeCart());

    document.querySelectorAll('.option-card').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget;
        const type = target.dataset.type;
        const value = target.dataset.value;
        const price = parseInt(target.dataset.price || '0', 10);
        const name = target.dataset.name || target.querySelector('.option-name')?.textContent;

        target.closest('.options-grid').querySelectorAll('.option-card').forEach(c => c.classList.remove('active'));
        target.classList.add('active');

        if (type === 'pcb') {
          this.state.pcb = value;
          this.state.pcbName = name;
          this.state.pcbPrice = price;
        } else if (type === 'plate') {
          this.state.plate = value;
          this.state.plateName = name;
          this.state.platePrice = price;
        } else if (type === 'case') {
          this.state.case = value;
          this.state.caseName = name;
          this.state.casePrice = price;
        } else if (type === 'keycap') {
          this.state.keycap = value;
          this.state.keycapName = name;
          this.state.keycapPrice = price;
        } else if (type === 'switch') {
          this.state.switch = value;
          this.state.switchName = name;
          this.state.switchPrice = price;
          window.KeyboardSound.playKey(this.state.switch, 'Preview');
        }

        this.renderKeyboard();
        this.updatePrice();
      });
    });

    const typingInput = document.getElementById('liveTypingInput');
    if (typingInput) {
      typingInput.addEventListener('keydown', (e) => {
        if (e.repeat) return;
        const code = e.code;
        const keycap = document.querySelector(`.keycap[data-code="${code}"]`);
        if (keycap) {
          this.triggerKeyVisual(keycap);
        }
        window.KeyboardSound.playKey(this.state.switch, e.key.toUpperCase());
      });
    }

    const playDemoBtn = document.getElementById('playFullSoundBtn');
    if (playDemoBtn) {
      playDemoBtn.addEventListener('click', () => {
        window.KeyboardSound.playProfile('thock');
      });
    }

    document.getElementById('addCustomToCartBtn').addEventListener('click', () => {
      const customItem = {
        id: 'VENOM-' + Date.now(),
        name: 'VENOM 60HE 커스텀 빌드 (' + this.state.pcbName + ')',
        details: '보강판: ' + this.state.plateName + ' • 하우징: ' + this.state.caseName + ' • 스위치: ' + this.state.switchName + ' • 키캡: ' + this.state.keycapName,
        price: this.calculateTotal(),
        qty: 1
      };
      this.addToCart(customItem);
    });

    document.getElementById('saveShareConfigBtn').addEventListener('click', () => {
      const summaryText = '[VENOM 60HE 커스텀 빌드 견적서]\n기판: ' + this.state.pcbName + '\n보강판: ' + this.state.plateName + '\n하우징: ' + this.state.caseName + '\n스위치: ' + this.state.switchName + '\n키캡: ' + this.state.keycapName + '\n총 견적 합계: ₩' + this.calculateTotal().toLocaleString();
      navigator.clipboard.writeText(summaryText).then(() => {
        alert('클립보드에 베놈 60HE 커스텀 빌드 사양이 복사되었습니다!');
      }).catch(() => {
        alert(summaryText);
      });
    });

    const checkoutBtn = document.getElementById('checkoutBtn');
    const orderModal = document.getElementById('orderSuccessModal');
    const closeOrderBtn = document.getElementById('closeOrderModalBtn');

    if (checkoutBtn && orderModal) {
      checkoutBtn.addEventListener('click', () => {
        if (this.cart.length === 0) {
          alert('장바구니가 비어 있습니다.');
          return;
        }

        const receipt = document.getElementById('orderReceiptDetails');
        const totalSum = this.cart.reduce((acc, cur) => acc + (cur.price * cur.qty), 0);

        receipt.innerHTML =
          '<div><strong>주문 번호:</strong> #HEXA-' + Math.floor(100000 + Math.random() * 900000) + '</div>' +
          '<div><strong>주문 내역:</strong> ' + this.cart.map(c => c.name + ' (' + c.qty + '개)').join(', ') + '</div>' +
          '<div><strong>최종 결제 금액:</strong> ₩' + totalSum.toLocaleString() + ' (무료배송)</div>';

        this.closeCart();
        orderModal.showModal();
        this.cart = [];
        this.updateCartBadge();
      });

      if (closeOrderBtn) {
        closeOrderBtn.addEventListener('click', () => {
          orderModal.close();
        });
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.App = new HexaCraftApp();
});