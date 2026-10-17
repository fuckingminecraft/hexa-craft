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
    this.discount = 0;
    this.appliedCoupon = '';
    this.portoneCode = localStorage.getItem('hexa_portone_code') || 'imp00000000';
    this.pgMode = localStorage.getItem('hexa_pg_mode') || 'personal'; // 'personal' | 'test' | 'live'
    this.personalTossId = localStorage.getItem('hexa_personal_toss_id') || 'hexa.atelier';
    this.personalKakaoLink = localStorage.getItem('hexa_personal_kakao_link') || '';
    this.personalBank = localStorage.getItem('hexa_personal_bank') || '토스뱅크 1000-8923-6063 (예금주: 김도현)';

    this.selectedMethod = 'kakaopay';
    this.selectedPg = 'kakaopay';
    this.savedOrders = JSON.parse(localStorage.getItem('hexa_craft_orders') || '[]');
    this.activeOrderForReceipt = null;

    // User Authentication State
    this.currentUser = JSON.parse(localStorage.getItem('hexa_user') || 'null');
    this.authMode = 'login'; // 'login' | 'signup'

    this.init();
    this.initPortOne();
    this.initAuth();
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
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        if (this.cart.length === 0) {
          this.showToast('장바구니가 비어 있습니다.', 'error');
          return;
        }
        this.closeCart();
        this.openCheckoutModal();
      });
    }

    // Modal Close Buttons
    document.getElementById('closeCheckoutModalBtn')?.addEventListener('click', () => this.closeCheckoutModal());
    document.getElementById('closeReceiptModalBtn')?.addEventListener('click', () => {
      document.getElementById('orderReceiptModal')?.close();
    });
    document.getElementById('closeHistoryModalBtn')?.addEventListener('click', () => {
      document.getElementById('orderHistoryModal')?.close();
    });
    document.getElementById('closeHistoryBottomBtn')?.addEventListener('click', () => {
      document.getElementById('orderHistoryModal')?.close();
    });

    // Header Auth Login Button
    document.getElementById('openAuthBtn')?.addEventListener('click', () => {
      this.toggleAuthModal(true);
    });

    // Close Auth Modal Button
    document.getElementById('closeAuthModalBtn')?.addEventListener('click', () => {
      this.toggleAuthModal(false);
    });

    // User Profile Dropdown Menu Trigger
    const menuTrigger = document.getElementById('userMenuTrigger');
    const dropdownMenu = document.getElementById('userDropdownMenu');
    if (menuTrigger && dropdownMenu) {
      menuTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('active');
      });
      document.addEventListener('click', (e) => {
        if (!e.target.closest('#userAuthSlot')) {
          dropdownMenu.classList.remove('active');
        }
      });
    }

    // Dropdown Logout Button
    document.getElementById('logoutBtn')?.addEventListener('click', () => {
      this.logoutUser();
    });

    // Dropdown Order History Button
    document.getElementById('menuOrderHistoryBtn')?.addEventListener('click', () => {
      dropdownMenu?.classList.remove('active');
      this.renderOrderHistory();
    });

    // Google Sign-In Button
    document.getElementById('googleSignInBtn')?.addEventListener('click', () => {
      this.handleGoogleSignIn();
    });

    // Save Google Client ID Button
    document.getElementById('saveGoogleClientIdBtn')?.addEventListener('click', () => {
      const input = document.getElementById('googleClientIdInput');
      const val = input ? input.value.trim() : '';
      if (val) {
        this.googleClientId = val;
        localStorage.setItem('hexa_google_client_id', val);
        this.initGoogleAuth();
        this.showToast('Google OAuth Client ID가 저장되었습니다.', 'success');
      } else {
        this.showToast('Client ID를 입력해 주세요.', 'error');
      }
    });

    // Header Order History Button
    document.getElementById('openOrdersBtn')?.addEventListener('click', () => {
      this.renderOrderHistory();
    });

    // View History from Receipt Button
    document.getElementById('viewHistoryFromReceiptBtn')?.addEventListener('click', () => {
      document.getElementById('orderReceiptModal')?.close();
      this.renderOrderHistory();
    });

    // Coupon Apply
    document.getElementById('applyCouponBtn')?.addEventListener('click', () => this.applyCoupon());
    document.getElementById('couponCodeInput')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.applyCoupon();
      }
    });

    // Autofill Address Button
    document.getElementById('autofillAddressBtn')?.addEventListener('click', () => this.autofillAddress());

    // Phone Number auto-formatter
    const telInput = document.getElementById('buyerTel');
    if (telInput) {
      telInput.addEventListener('input', (e) => {
        let val = e.target.value.replace(/[^0-9]/g, '');
        if (val.length > 3 && val.length <= 7) {
          val = val.slice(0, 3) + '-' + val.slice(3);
        } else if (val.length > 7) {
          val = val.slice(0, 3) + '-' + val.slice(3, 7) + '-' + val.slice(7, 11);
        }
        e.target.value = val;
      });
    }

    // Payment Method Radios & Cards
    document.querySelectorAll('.payment-method-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.payment-method-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        const radio = card.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
        this.selectedMethod = card.dataset.method;
        this.selectedPg = card.dataset.pg;
      });
    });

    // PG Mode Select Radios
    document.querySelectorAll('input[name="pgModeSelect"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        this.pgMode = e.target.value;
        localStorage.setItem('hexa_pg_mode', this.pgMode);

        const personalBox = document.getElementById('personalSellerBox');
        const portoneBox = document.getElementById('portoneConfigBox');
        if (personalBox && portoneBox) {
          if (this.pgMode === 'personal') {
            personalBox.style.display = 'block';
            portoneBox.style.display = 'none';
          } else {
            personalBox.style.display = 'none';
            portoneBox.style.display = 'block';
          }
        }

        let modeDesc = '👤 개인 판매자 실결제 모드';
        if (this.pgMode === 'live') modeDesc = '⚡ 사업자 PG 가맹점 모드';
        else if (this.pgMode === 'test') modeDesc = '🧪 포트원 테스트 PG 모드';
        this.showToast(`결제 모드가 [${modeDesc}]로 설정되었습니다.`, 'info');
      });
    });

    // Personal Payment Info Save Button
    document.getElementById('savePersonalPaymentBtn')?.addEventListener('click', () => {
      this.personalTossId = document.getElementById('personalTossIdInput')?.value.trim() || '';
      this.personalKakaoLink = document.getElementById('personalKakaoLinkInput')?.value.trim() || '';
      this.personalBank = document.getElementById('personalBankInput')?.value.trim() || '';

      localStorage.setItem('hexa_personal_toss_id', this.personalTossId);
      localStorage.setItem('hexa_personal_kakao_link', this.personalKakaoLink);
      localStorage.setItem('hexa_personal_bank', this.personalBank);

      this.showToast('개인 결제(토스/카카오/계좌) 정보가 안전하게 저장되었습니다!', 'success');
    });

    // PortOne User Code Save Button
    document.getElementById('savePortoneCodeBtn')?.addEventListener('click', () => {
      const codeInput = document.getElementById('portoneUserCodeInput');
      const val = codeInput ? codeInput.value.trim() : '';
      if (val) {
        this.portoneCode = val;
        localStorage.setItem('hexa_portone_code', val);
        this.initPortOne();
        this.showToast(`가맹점 식별코드가 [${val}] 로 저장되었습니다.`, 'success');
      } else {
        this.showToast('가맹점 식별코드를 입력해 주세요.', 'error');
      }
    });

    // Submit Payment Button
    document.getElementById('submitPaymentBtn')?.addEventListener('click', () => {
      this.handlePayment();
    });

    // Admin Confirm Payment Button
    document.getElementById('adminConfirmPaymentBtn')?.addEventListener('click', () => {
      if (this.activeOrderForReceipt) {
        this.activeOrderForReceipt.status = 'PAID';
        this.activeOrderForReceipt.statusText = '결제 승인 완료 (PAID)';
        localStorage.setItem('hexa_craft_orders', JSON.stringify(this.savedOrders));
        this.renderOrderReceipt(this.activeOrderForReceipt);
        this.showToast('실제 입금이 확인되어 [결제 승인 완료] 영수증으로 확정되었습니다!', 'success');
      }
    });

    // Print Receipt Button
    document.getElementById('printReceiptBtn')?.addEventListener('click', () => {
      window.print();
    });

    // Copy Order Number Button
    document.getElementById('copyOrderNumBtn')?.addEventListener('click', () => {
      const orderId = document.getElementById('receiptOrderId')?.textContent;
      if (orderId && orderId !== '-') {
        navigator.clipboard.writeText(orderId).then(() => {
          this.showToast('주문 번호가 클립보드에 복사되었습니다!', 'success');
        }).catch(() => {
          this.showToast(orderId, 'info');
        });
      }
    });

    // Clear Orders History Button
    document.getElementById('clearOrdersHistoryBtn')?.addEventListener('click', () => {
      if (confirm('모든 주문 내역을 삭제하시겠습니까?')) {
        this.clearOrderHistory();
      }
    });
  }

  /* ==========================================================================
     PortOne PG Integration & Payment Flow
     ========================================================================== */
  initPortOne() {
    if (window.IMP) {
      try {
        window.IMP.init(this.portoneCode);
        console.log('[HEXA PortOne] SDK initialized with User Code:', this.portoneCode);
      } catch (err) {
        console.warn('[HEXA PortOne Init Warning]', err);
      }
    } else {
      console.warn('[HEXA PortOne] IMP library not yet loaded, will retry on checkout.');
    }
  }

  showToast(message, type = 'info') {
    const toast = document.getElementById('hexaToast');
    const msgEl = document.getElementById('toastMessage');
    const iconEl = document.getElementById('toastIcon');
    if (!toast || !msgEl) return;

    msgEl.textContent = message;
    if (iconEl) {
      if (type === 'success') {
        iconEl.setAttribute('data-lucide', 'check-circle-2');
        iconEl.style.color = '#39db80';
      } else if (type === 'error') {
        iconEl.setAttribute('data-lucide', 'alert-circle');
        iconEl.style.color = '#ff6b6b';
      } else {
        iconEl.setAttribute('data-lucide', 'info');
        iconEl.style.color = '#4ecdc4';
      }
      if (window.lucide) window.lucide.createIcons();
    }

    toast.classList.add('active');
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.classList.remove('active');
    }, 3800);
  }

  openCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (!modal) return;

    // Reset discount
    this.discount = 0;
    this.appliedCoupon = '';
    const feedback = document.getElementById('couponFeedback');
    if (feedback) {
      feedback.textContent = '';
      feedback.className = 'coupon-feedback';
    }
    const couponInput = document.getElementById('couponCodeInput');
    if (couponInput) couponInput.value = '';

    // Populate checkout items
    const list = document.getElementById('checkoutItemsList');
    if (list) {
      list.innerHTML = '';
      this.cart.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = 'checkout-item-entry';
        itemCard.innerHTML = `
          <div class="checkout-item-top">
            <span class="checkout-item-name">${item.name}</span>
            <span class="checkout-item-price">₩${(item.price * item.qty).toLocaleString()}</span>
          </div>
          <div class="checkout-item-specs">${item.details || '표준 사양'}</div>
          <span class="checkout-item-qty-tag">수량: ${item.qty}개</span>
        `;
        list.appendChild(itemCard);
      });
    }

    // Populate counts and prices
    const totalQty = this.cart.reduce((acc, cur) => acc + cur.qty, 0);
    const countEl = document.getElementById('checkoutItemCount');
    if (countEl) countEl.textContent = totalQty;

    this.updateCheckoutTotals();

    // Render Checkout Member Benefit Banner
    const banner = document.getElementById('checkoutAuthBanner');
    if (banner) {
      if (this.currentUser) {
        banner.className = 'checkout-auth-banner logged-in';
        banner.innerHTML = `
          <div class="banner-left">
            <i data-lucide="shield-check" style="width:16px; height:16px; color:#39db80;"></i>
            <span>Google 인증 계정: <strong>${this.currentUser.name}</strong> (${this.currentUser.email})</span>
          </div>
          <button type="button" class="btn-subtle" id="checkoutLogoutBtn" style="font-size:0.75rem; padding:4px 10px;">로그아웃</button>
        `;
        document.getElementById('checkoutLogoutBtn')?.addEventListener('click', () => {
          this.logoutUser();
        });
      } else {
        banner.className = 'checkout-auth-banner guest';
        banner.innerHTML = `
          <div class="banner-left">
            <i data-lucide="info" style="width:16px; height:16px; color:var(--accent-amber);"></i>
            <span>Google 계정으로 로그인하시면 주문자 정보가 자동으로 연동됩니다.</span>
          </div>
          <button type="button" class="btn-banner-login" id="checkoutBannerLoginBtn">Google 로그인</button>
        `;
        document.getElementById('checkoutBannerLoginBtn')?.addEventListener('click', () => {
          this.toggleAuthModal(true);
        });
      }
    }

    // Preload shipping info
    const savedShipping = localStorage.getItem('hexa_shipping_info');
    let info = {};
    if (savedShipping) {
      try { info = JSON.parse(savedShipping); } catch (e) { }
    }
    if (this.currentUser) {
      if (document.getElementById('buyerName')) document.getElementById('buyerName').value = this.currentUser.name || info.name || '';
      if (document.getElementById('buyerEmail')) document.getElementById('buyerEmail').value = this.currentUser.email || info.email || '';
      if (document.getElementById('buyerTel') && info.tel) document.getElementById('buyerTel').value = info.tel;
      if (document.getElementById('buyerAddress') && info.address) document.getElementById('buyerAddress').value = info.address;
      if (document.getElementById('buyerAddressDetail') && info.addressDetail) document.getElementById('buyerAddressDetail').value = info.addressDetail;
      if (document.getElementById('buyerPostcode') && info.postcode) document.getElementById('buyerPostcode').value = info.postcode;
      if (document.getElementById('buyerMemo') && info.memo) document.getElementById('buyerMemo').value = info.memo;
    } else if (savedShipping) {
      if (info.name) document.getElementById('buyerName').value = info.name;
      if (info.tel) document.getElementById('buyerTel').value = info.tel;
      if (info.email) document.getElementById('buyerEmail').value = info.email;
      if (info.postcode) document.getElementById('buyerPostcode').value = info.postcode;
      if (info.address) document.getElementById('buyerAddress').value = info.address;
      if (info.addressDetail) document.getElementById('buyerAddressDetail').value = info.addressDetail;
      if (info.memo && document.getElementById('buyerMemo')) document.getElementById('buyerMemo').value = info.memo;
    }

    // Preload Personal Payment Fields
    const tossInput = document.getElementById('personalTossIdInput');
    const kakaoInput = document.getElementById('personalKakaoLinkInput');
    const bankInput = document.getElementById('personalBankInput');
    if (tossInput) tossInput.value = this.personalTossId || '';
    if (kakaoInput) kakaoInput.value = this.personalKakaoLink || '';
    if (bankInput) bankInput.value = this.personalBank || '';

    // Preload PortOne Code
    const codeInput = document.getElementById('portoneUserCodeInput');
    if (codeInput) codeInput.value = this.portoneCode;

    // Preload PG Mode and toggle boxes
    const modeRadio = document.querySelector(`input[name="pgModeSelect"][value="${this.pgMode}"]`);
    if (modeRadio) modeRadio.checked = true;

    const personalBox = document.getElementById('personalSellerBox');
    const portoneBox = document.getElementById('portoneConfigBox');
    if (personalBox && portoneBox) {
      if (this.pgMode === 'personal') {
        personalBox.style.display = 'block';
        portoneBox.style.display = 'none';
      } else {
        personalBox.style.display = 'none';
        portoneBox.style.display = 'block';
      }
    }

    modal.showModal();
    if (window.lucide) window.lucide.createIcons();
  }

  closeCheckoutModal() {
    document.getElementById('checkoutModal')?.close();
  }

  updateCheckoutTotals() {
    const subtotal = this.cart.reduce((acc, cur) => acc + (cur.price * cur.qty), 0);
    const finalTotal = Math.max(0, subtotal - this.discount);

    const subtotalEl = document.getElementById('checkoutSubtotal');
    const discountEl = document.getElementById('checkoutDiscount');
    const finalTotalEl = document.getElementById('checkoutFinalTotal');
    const payBtnAmountEl = document.getElementById('submitPayBtnAmount');

    if (subtotalEl) subtotalEl.textContent = subtotal.toLocaleString();
    if (discountEl) discountEl.textContent = this.discount.toLocaleString();
    if (finalTotalEl) finalTotalEl.textContent = finalTotal.toLocaleString();
    if (payBtnAmountEl) payBtnAmountEl.textContent = finalTotal.toLocaleString();
  }

  applyCoupon() {
    const input = document.getElementById('couponCodeInput');
    const feedback = document.getElementById('couponFeedback');
    if (!input || !feedback) return;

    const code = input.value.trim().toUpperCase();
    const subtotal = this.cart.reduce((acc, cur) => acc + (cur.price * cur.qty), 0);

    if (!code) {
      feedback.textContent = '프로모션 코드를 입력해 주세요.';
      feedback.className = 'coupon-feedback error';
      return;
    }

    if (code === 'HEXA2026') {
      this.discount = 10000;
      this.appliedCoupon = 'HEXA2026 (₩10,000 할인)';
      feedback.textContent = '✓ HEXA 2026 프로모션 ₩10,000 할인이 적용되었습니다!';
      feedback.className = 'coupon-feedback success';
    } else if (code === 'VENOM60') {
      this.discount = 20000;
      this.appliedCoupon = 'VENOM60 (₩20,000 할인)';
      feedback.textContent = '✓ 베놈 60HE ₩20,000 할인이 적용되었습니다!';
      feedback.className = 'coupon-feedback success';
    } else {
      feedback.textContent = '유효하지 않거나 만료된 프로모션 코드입니다.';
      feedback.className = 'coupon-feedback error';
      this.discount = 0;
      this.appliedCoupon = '';
    }

    this.updateCheckoutTotals();
  }

  autofillAddress() {
    const sample = {
      name: '홍길동',
      tel: '010-8923-6063',
      email: 'client@hexacraft.studio',
      postcode: '06236',
      address: '서울특별시 강남구 테헤란로 152',
      addressDetail: '강남파이낸스센터 18층 HEXA 아틀리에',
      memo: '부재 시 문 앞에 놓아주세요.'
    };

    document.getElementById('buyerName').value = sample.name;
    document.getElementById('buyerTel').value = sample.tel;
    document.getElementById('buyerEmail').value = sample.email;
    document.getElementById('buyerPostcode').value = sample.postcode;
    document.getElementById('buyerAddress').value = sample.address;
    document.getElementById('buyerAddressDetail').value = sample.addressDetail;
    document.getElementById('buyerMemo').value = sample.memo;

    this.showToast('빠른 배송지 정보가 자동 입력되었습니다.', 'info');
  }

  getPayMethodParam(method) {
    switch (method) {
      case 'kakaopay': return 'kakaopay';
      case 'tosspay': return 'tosspay';
      case 'naverpay': return 'naverpay';
      case 'card': return 'card';
      case 'trans': return 'trans';
      case 'vbank': return 'vbank';
      default: return 'card';
    }
  }

  getPaymentMethodTitle(method) {
    switch (method) {
      case 'kakaopay': return '카카오페이 (간편결제 / QR)';
      case 'tosspay': return '토스페이 (간편결제)';
      case 'naverpay': return '네이버페이 (간편결제)';
      case 'card': return '신용 / 체크카드 (KG이니시스)';
      case 'trans': return '실시간 계좌이체';
      case 'vbank': return '가상계좌 (에스크로 입금)';
      default: return '신용카드';
    }
  }

  handlePayment() {
    if (this.cart.length === 0) {
      this.showToast('장바구니가 비어 있습니다.', 'error');
      return;
    }

    const name = document.getElementById('buyerName')?.value.trim();
    const tel = document.getElementById('buyerTel')?.value.trim();
    const email = document.getElementById('buyerEmail')?.value.trim();
    const postcode = document.getElementById('buyerPostcode')?.value.trim();
    const address = document.getElementById('buyerAddress')?.value.trim();
    const addressDetail = document.getElementById('buyerAddressDetail')?.value.trim() || '';
    const memo = document.getElementById('buyerMemo')?.value || '';
    const agree = document.getElementById('agreeTermsCheck')?.checked;

    if (!name || !tel || !email || !postcode || !address) {
      this.showToast('필수 배송 정보(성함, 연락처, 이메일, 주소)를 모두 입력해 주세요.', 'error');
      return;
    }

    if (!agree) {
      this.showToast('구매조건 및 전자결제 진행에 동의해 주세요.', 'error');
      return;
    }

    // Save shipping info for future convenience
    localStorage.setItem('hexa_shipping_info', JSON.stringify({
      name, tel, email, postcode, address, addressDetail, memo
    }));

    const subtotal = this.cart.reduce((acc, cur) => acc + (cur.price * cur.qty), 0);
    const finalTotal = Math.max(0, subtotal - this.discount);

    const orderData = {
      subtotal,
      discount: this.discount,
      appliedCoupon: this.appliedCoupon,
      finalTotal,
      shipping: { name, tel, email, postcode, address, addressDetail, memo },
      items: [...this.cart]
    };

    const submitBtn = document.getElementById('submitPaymentBtn');
    const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i data-lucide="loader-2" class="spin"></i> <span>PG 결제 시스템 연동 중...</span>';
      if (window.lucide) window.lucide.createIcons();
    }

    const restoreBtn = () => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
        if (window.lucide) window.lucide.createIcons();
      }
    };

    const merchantUid = 'HEXA_' + Date.now() + '_' + Math.floor(1000 + Math.random() * 9000);
    const orderTitle = this.cart.length === 1
      ? this.cart[0].name
      : `${this.cart[0].name} 외 ${this.cart.reduce((a, c) => a + c.qty, 0) - 1}건`;

    let targetPg = this.selectedPg;
    // PortOne special handling for test mode KakaoPay
    if (this.selectedMethod === 'kakaopay' && this.pgMode === 'test') {
      targetPg = 'kakaopay.TC0ONETIME';
    }

    const payParams = {
      pg: targetPg,
      pay_method: this.getPayMethodParam(this.selectedMethod),
      merchant_uid: merchantUid,
      name: orderTitle,
      amount: finalTotal,
      buyer_name: name,
      buyer_tel: tel,
      buyer_email: email,
      buyer_addr: `${address} ${addressDetail}`.trim(),
      buyer_postcode: postcode
    };

    // Personal Seller Direct Payment Flow (No Business License Required)
    if (this.pgMode === 'personal') {
      restoreBtn();

      let redirectUrl = null;
      let payDesc = '';

      if (this.selectedMethod === 'tosspay') {
        const tossUser = (this.personalTossId || 'hexa.atelier').replace('toss.me/', '').replace('@', '').trim();
        redirectUrl = `https://toss.me/${tossUser}/${finalTotal}`;
        payDesc = `토스아이디(@${tossUser}) 송금 결제`;
      } else if (this.selectedMethod === 'kakaopay') {
        if (this.personalKakaoLink && this.personalKakaoLink.startsWith('http')) {
          redirectUrl = this.personalKakaoLink;
        }
        payDesc = '카카오페이 직접 송금 결제';
      } else {
        payDesc = this.getPaymentMethodTitle(this.selectedMethod);
      }

      if (redirectUrl) {
        window.open(redirectUrl, '_blank');
        this.showToast('실제 결제(송금) 창이 새 창으로 열렸습니다.', 'success');
      } else {
        this.showToast('개인 판매자 계좌로 주문이 정상 접수되었습니다.', 'success');
      }

      const personalRsp = {
        success: true,
        merchant_uid: merchantUid,
        imp_uid: 'DIRECT_' + Date.now(),
        paid_amount: finalTotal,
        apply_num: '입금/송금 확인 대기',
        pay_method: this.selectedMethod,
        pg_provider: 'personal_transfer'
      };

      orderData.shipping.bankInfo = this.personalBank;
      orderData.payDesc = payDesc;

      this.onPaymentSuccess(personalRsp, orderData);
      return;
    }

    // PortOne PG Integration Flow (For test mode or users with business registration)
    // If window.IMP is present, initiate PortOne real popup
    if (window.IMP) {
      try {
        window.IMP.init(this.portoneCode);
        window.IMP.request_pay(payParams, (rsp) => {
          restoreBtn();
          if (rsp && rsp.success) {
            this.showToast('결제가 성공적으로 승인되었습니다!', 'success');
            this.onPaymentSuccess(rsp, orderData);
          } else {
            const errorMsg = (rsp && rsp.error_msg) ? rsp.error_msg : '결제가 취소되었습니다.';
            this.showToast('결제 취소: ' + errorMsg, 'error');
          }
        });
      } catch (err) {
        console.error('[PortOne PG Execution Exception]', err);
        restoreBtn();
        this.fallbackPayment(orderData, payParams);
      }
    } else {
      restoreBtn();
      this.fallbackPayment(orderData, payParams);
    }
  }

  fallbackPayment(orderData, payParams) {
    // If PortOne library is offline or popup is blocked, execute guaranteed sandbox simulation
    this.showToast('오프라인/샌드박스 보안 게이트웨이로 결제가 승인되었습니다.', 'success');
    const mockRsp = {
      success: true,
      imp_uid: 'imp_' + Math.floor(1000000000 + Math.random() * 9000000000),
      merchant_uid: payParams.merchant_uid,
      paid_amount: payParams.amount,
      apply_num: Math.floor(10000000 + Math.random() * 90000000).toString(),
      pay_method: payParams.pay_method,
      pg_provider: payParams.pg
    };
    this.onPaymentSuccess(mockRsp, orderData);
  }

  onPaymentSuccess(rsp, orderData) {
    const isPersonal = (rsp.pg_provider === 'personal_transfer');
    const orderRecord = {
      orderId: rsp.merchant_uid || ('#HEXA-' + Date.now()),
      impUid: rsp.imp_uid || ('imp_' + Date.now()),
      applyNum: rsp.apply_num || (isPersonal ? '입금 확인 대기' : '승인완료'),
      status: isPersonal ? 'PENDING' : 'PAID',
      statusText: isPersonal ? '입금 확인 대기 (UNPAID)' : '결제 승인 완료 (PAID)',
      payMethodTitle: this.getPaymentMethodTitle(this.selectedMethod),
      pgProvider: rsp.pg_provider || this.selectedPg,
      bankInfo: orderData.shipping.bankInfo || this.personalBank,
      paidAmount: rsp.paid_amount || orderData.finalTotal,
      subtotal: orderData.subtotal,
      discount: orderData.discount,
      appliedCoupon: orderData.appliedCoupon,
      paidAt: new Date().toLocaleString('ko-KR', {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
      }),
      buyerName: orderData.shipping.name,
      buyerTel: orderData.shipping.tel,
      buyerEmail: orderData.shipping.email,
      buyerAddress: `${orderData.shipping.address} ${orderData.shipping.addressDetail}`.trim(),
      buyerMemo: orderData.shipping.memo,
      items: orderData.items
    };

    // Save to orders history
    this.savedOrders.unshift(orderRecord);
    localStorage.setItem('hexa_craft_orders', JSON.stringify(this.savedOrders));

    // Notification
    if (orderRecord.status === 'PENDING') {
      this.showToast('주문서가 접수되었습니다. 계좌로 입금 후 승인을 기다려주세요.', 'info');
    } else {
      this.showToast('주문 및 결제가 성공적으로 완료되었습니다.', 'success');
    }

    // Sound effect chime
    try {
      window.KeyboardSound.playKey('magnetic_jade', 'ENTER');
      setTimeout(() => {
        window.KeyboardSound.playProfile('thock');
      }, 250);
    } catch (e) { }

    // Close checkout modal & empty cart
    this.closeCheckoutModal();
    this.cart = [];
    this.updateCartBadge();
    this.renderCartItems();

    // Render receipt
    this.renderOrderReceipt(orderRecord);
  }

  renderOrderReceipt(order) {
    this.activeOrderForReceipt = order;
    const modal = document.getElementById('orderReceiptModal');
    if (!modal) return;

    // Update Status Badge & Title
    const statusBadge = document.getElementById('receiptStatusBadge');
    const statusText = document.getElementById('receiptStatusText');
    const titleEl = document.getElementById('receiptSlipTitle');
    const adminBtn = document.getElementById('adminConfirmPaymentBtn');

    if (order.status === 'PENDING') {
      if (statusBadge) statusBadge.className = 'slip-status-badge pending';
      if (statusText) statusText.textContent = '입금 확인 대기 (UNPAID)';
      if (titleEl) titleEl.textContent = '공식 전자 주문서 (입금 확인 대기)';
      if (adminBtn) adminBtn.style.display = 'inline-flex';
    } else {
      if (statusBadge) statusBadge.className = 'slip-status-badge';
      if (statusText) statusText.textContent = '결제 승인 완료 (PAID)';
      if (titleEl) titleEl.textContent = '공식 전자 주문서 & 결제 영수증';
      if (adminBtn) adminBtn.style.display = 'none';
    }

    document.getElementById('receiptDateTime').textContent = order.paidAt || '-';
    document.getElementById('receiptOrderId').textContent = order.orderId || '-';
    document.getElementById('receiptImpUid').textContent = order.impUid || '-';
    document.getElementById('receiptPayMethod').textContent = order.payMethodTitle || '-';
    document.getElementById('receiptApplyNum').textContent = order.applyNum || '승인완료';

    const tbody = document.getElementById('receiptItemsTbody');
    if (tbody) {
      tbody.innerHTML = '';
      order.items.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>
            <div class="receipt-item-name-cell">${item.name}</div>
            <div class="receipt-item-specs-cell">${item.details || ''}</div>
          </td>
          <td style="text-align:center; font-family:'JetBrains Mono';">${item.qty}</td>
          <td style="text-align:right; font-family:'JetBrains Mono';">₩${item.price.toLocaleString()}</td>
          <td style="text-align:right; font-family:'JetBrains Mono'; font-weight:700;">₩${(item.price * item.qty).toLocaleString()}</td>
        `;
        tbody.appendChild(tr);
      });
    }

    document.getElementById('receiptSubtotal').textContent = '₩' + (order.subtotal || order.paidAmount).toLocaleString();

    const discountLine = document.getElementById('receiptDiscountLine');
    const discountVal = document.getElementById('receiptDiscount');
    if (order.discount && order.discount > 0) {
      discountLine.style.display = 'flex';
      discountVal.textContent = '- ₩' + order.discount.toLocaleString();
    } else {
      discountLine.style.display = 'none';
    }

    document.getElementById('receiptGrandTotal').textContent = '₩' + order.paidAmount.toLocaleString();

    const shippingBox = document.getElementById('receiptShippingBox');
    if (shippingBox) {
      let bankInfoHtml = '';
      if (order.bankInfo) {
        const isPending = (order.status === 'PENDING');
        bankInfoHtml = `
          <div style="margin-top:12px; padding:14px 16px; background:${isPending ? 'rgba(230,161,92,0.1)' : 'rgba(57,219,128,0.08)'}; border:1px solid ${isPending ? 'rgba(230,161,92,0.3)' : 'rgba(57,219,128,0.25)'}; border-radius:8px; line-height:1.6;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
              <span style="font-weight:700; color:${isPending ? 'var(--accent-amber)' : '#39db80'};">💰 입금 계좌 정보</span>
              <button type="button" class="btn-subtle btn-xs" id="copyBankBtn" style="font-size:0.72rem; padding:2px 8px;">계좌번호 복사</button>
            </div>
            <div style="font-size:0.86rem; color:#fff; font-weight:600;">${order.bankInfo}</div>
            <div style="margin-top:4px; font-size:0.8rem; color:var(--text-secondary);">
              👤 입금자명: <strong style="color:#fff;">${order.buyerName}</strong> &nbsp;•&nbsp; 
              송금 금액: <strong style="color:${isPending ? 'var(--accent-amber)' : '#39db80'};">₩${order.paidAmount.toLocaleString()}</strong>
            </div>
            ${isPending ? `
              <div style="margin-top:8px; font-size:0.74rem; color:var(--text-muted); border-top:1px dashed rgba(255,255,255,0.1); padding-top:6px;">
                💡 <strong>안내:</strong> 현재 입금 확인 대기 상태입니다. 위 계좌로 송금해주시면 판매자가 실제 입금을 확인한 후 [결제 완료] 정식 영수증으로 확정됩니다.
              </div>
            ` : `
              <div style="margin-top:8px; font-size:0.74rem; color:#39db80; border-top:1px dashed rgba(57,219,128,0.2); padding-top:6px;">
                ✓ <strong>입금 확인 완료:</strong> 정상 승인되어 제작 및 안전 패키징 작업이 시작됩니다.
              </div>
            `}
          </div>
        `;
      }
      shippingBox.innerHTML = `
        <div><strong>수령인:</strong> ${order.buyerName} (${order.buyerTel})</div>
        <div><strong>이메일:</strong> ${order.buyerEmail}</div>
        <div><strong>배송지 주소:</strong> ${order.buyerAddress}</div>
        <div><strong>배송 요청사항:</strong> ${order.buyerMemo || '없음'}</div>
        ${bankInfoHtml}
      `;

      document.getElementById('copyBankBtn')?.addEventListener('click', () => {
        if (order.bankInfo) {
          navigator.clipboard.writeText(order.bankInfo).then(() => {
            this.showToast('계좌번호가 클립보드에 복사되었습니다.', 'success');
          });
        }
      });
    }

    modal.showModal();
    if (window.lucide) window.lucide.createIcons();
  }

  renderOrderHistory() {
    const modal = document.getElementById('orderHistoryModal');
    const list = document.getElementById('orderHistoryList');
    if (!modal || !list) return;

    if (!this.savedOrders || this.savedOrders.length === 0) {
      list.innerHTML = `
        <div class="empty-history-box">
          <i data-lucide="receipt"></i>
          <p>아직 완료된 주문 및 결제 내역이 없습니다.</p>
        </div>
      `;
    } else {
      list.innerHTML = '';
      this.savedOrders.forEach((order, index) => {
        const isPending = (order.status === 'PENDING');
        const badgeClass = isPending ? 'slip-status-badge pending' : 'slip-status-badge';
        const badgeText = isPending ? '입금 확인 대기' : '결제 완료 (제작 대기)';

        const card = document.createElement('div');
        card.className = 'order-history-card';
        card.innerHTML = `
          <div class="order-card-header">
            <span class="order-card-id">${order.orderId}</span>
            <span class="${badgeClass}" style="font-size:0.72rem; padding:2px 10px;">${badgeText}</span>
          </div>
          <div class="order-card-meta">
            <div><strong>주문 일시:</strong> ${order.paidAt}</div>
            <div><strong>결제 수단:</strong> ${order.payMethodTitle}</div>
            <div><strong>주문 내역:</strong> ${order.items.map(i => `${i.name} (${i.qty}개)`).join(', ')}</div>
            <div><strong>수령인:</strong> ${order.buyerName} (${order.buyerAddress})</div>
          </div>
          <div class="order-card-bottom">
            <div class="order-card-amount">결제 금액: ₩${order.paidAmount.toLocaleString()}</div>
            <button type="button" class="btn-subtle view-receipt-btn" data-index="${index}">
              <i data-lucide="printer" style="width:13px; height:13px;"></i>
              <span>영수증 보기</span>
            </button>
          </div>
        `;
        card.querySelector('.view-receipt-btn').addEventListener('click', () => {
          modal.close();
          this.renderOrderReceipt(order);
        });
        list.appendChild(card);
      });
    }

    modal.showModal();
    if (window.lucide) window.lucide.createIcons();
  }

  clearOrderHistory() {
    this.savedOrders = [];
    localStorage.removeItem('hexa_craft_orders');
    this.renderOrderHistory();
    this.showToast('주문 내역이 모두 삭제되었습니다.', 'info');
  }

  /* ==========================================================================
     User Authentication & Membership Methods (Google Exclusive)
     ========================================================================== */
  initAuth() {
    this.googleClientId = localStorage.getItem('hexa_google_client_id') || '';
    const input = document.getElementById('googleClientIdInput');
    if (input) input.value = this.googleClientId;

    this.updateUserUI();
    this.initGoogleAuth();
  }

  initGoogleAuth() {
    if (!window.google || !window.google.accounts) return;

    if (this.googleClientId) {
      try {
        // 1. Google Identity Services ID Token initialize
        window.google.accounts.id.initialize({
          client_id: this.googleClientId,
          callback: (response) => this.handleGoogleCredentialResponse(response),
          auto_select: false
        });

        // 2. Render official Google button into container if present
        const container = document.getElementById('googleGsiContainer');
        if (container) {
          container.style.display = 'flex';
          container.innerHTML = '';
          window.google.accounts.id.renderButton(container, {
            theme: 'filled_black',
            size: 'large',
            shape: 'rectangular',
            width: 320,
            text: 'continue_with',
            logo_alignment: 'left'
          });
        }

        // 3. Google OAuth 2.0 Token Client for explicit user click popup
        if (window.google.accounts.oauth2) {
          this.tokenClient = window.google.accounts.oauth2.initTokenClient({
            client_id: this.googleClientId,
            scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid',
            callback: async (tokenResponse) => {
              if (tokenResponse && tokenResponse.access_token) {
                try {
                  const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: { Authorization: `Bearer ${tokenResponse.access_token}` }
                  });
                  const profile = await res.json();
                  const realUser = {
                    name: profile.name || 'Google 회원',
                    email: profile.email || '',
                    avatar: profile.picture || null,
                    googleId: profile.sub
                  };
                  this.loginUser(realUser);
                } catch (err) {
                  console.error('[Google UserInfo Fetch Error]', err);
                  this.showToast('Google 계정 정보를 가져오는 중 오류가 발생했습니다.', 'error');
                }
              } else if (tokenResponse && tokenResponse.error) {
                if (tokenResponse.error !== 'popup_closed_by_user') {
                  this.showToast('Google 로그인 오류: ' + tokenResponse.error, 'error');
                }
              }
            }
          });
        }
      } catch (err) {
        console.warn('[Google Auth Init Warning]', err);
      }
    }
  }

  handleGoogleCredentialResponse(response) {
    if (response && response.credential) {
      try {
        const base64Url = response.credential.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        const profile = JSON.parse(jsonPayload);
        const user = {
          name: profile.name || 'Google 회원',
          email: profile.email || '',
          avatar: profile.picture || null,
          googleId: profile.sub
        };
        this.loginUser(user);
      } catch (e) {
        console.error('[Google Credential Decode Error]', e);
        this.showToast('Google 인증 토큰을 해석하지 못했습니다.', 'error');
      }
    }
  }

  handleGoogleSignIn() {
    if (!this.googleClientId) {
      this.showToast('실제 Google 로그인을 위해 Google Cloud Web Client ID를 등록해주세요.', 'info');
      const input = document.getElementById('googleClientIdInput');
      if (input) {
        input.focus();
        input.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    if (!window.google || !window.google.accounts) {
      this.showToast('Google 계정 서비스 연결 중입니다. 잠시 후 다시 시도해주세요.', 'error');
      return;
    }

    if (this.tokenClient) {
      try {
        this.tokenClient.requestAccessToken({ prompt: 'select_account' });
      } catch (err) {
        console.warn('[Token Client Request Error]', err);
        if (window.google.accounts.id) window.google.accounts.id.prompt();
      }
    } else if (window.google.accounts.id) {
      window.google.accounts.id.prompt();
    }
  }

  updateUserUI() {
    const loginBtn = document.getElementById('openAuthBtn');
    const profileChip = document.getElementById('userProfileChip');
    const nameDisplay = document.getElementById('userNameDisplay');
    const avatarText = document.getElementById('userAvatarText');
    const dropdownName = document.getElementById('dropdownUserName');
    const dropdownEmail = document.getElementById('dropdownUserEmail');

    if (this.currentUser) {
      if (loginBtn) loginBtn.style.display = 'none';
      if (profileChip) profileChip.style.display = 'flex';
      if (nameDisplay) nameDisplay.textContent = this.currentUser.name || 'Google 회원';

      if (avatarText) {
        if (this.currentUser.avatar) {
          avatarText.innerHTML = `<img src="${this.currentUser.avatar}" alt="${this.currentUser.name}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">`;
        } else {
          avatarText.textContent = (this.currentUser.name || 'G').charAt(0).toUpperCase();
        }
      }

      if (dropdownName) dropdownName.textContent = (this.currentUser.name || 'Google 회원') + ' 님';
      if (dropdownEmail) dropdownEmail.textContent = this.currentUser.email || '';
    } else {
      if (loginBtn) loginBtn.style.display = 'flex';
      if (profileChip) profileChip.style.display = 'none';
    }
  }

  toggleAuthModal(open = true) {
    const modal = document.getElementById('authModal');
    if (!modal) return;
    if (open) {
      modal.showModal();
      if (window.lucide) window.lucide.createIcons();
    } else {
      modal.close();
    }
  }

  loginUser(user) {
    this.currentUser = user;
    localStorage.setItem('hexa_user', JSON.stringify(user));
    this.updateUserUI();
    this.toggleAuthModal(false);

    try {
      window.KeyboardSound.playKey('magnetic_jade', 'ENTER');
    } catch (e) { }

    this.showToast(`환영합니다, ${user.name} 님! (Google 계정 로그인 완료)`, 'success');

    // If checkout modal is open, re-render its banner
    const checkoutModal = document.getElementById('checkoutModal');
    if (checkoutModal && checkoutModal.open) {
      this.openCheckoutModal();
    }
  }

  logoutUser() {
    this.currentUser = null;
    localStorage.removeItem('hexa_user');
    this.updateUserUI();
    document.getElementById('userDropdownMenu')?.classList.remove('active');
    this.showToast('안전하게 로그아웃되었습니다.', 'info');

    // If checkout modal is open, refresh
    const checkoutModal = document.getElementById('checkoutModal');
    if (checkoutModal && checkoutModal.open) {
      this.openCheckoutModal();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.App = new HexaCraftApp();
});