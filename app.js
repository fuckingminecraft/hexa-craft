// Main Application Logic for HEXA CRAFT
// Handles state management, dynamic keyboard layout rendering, price calculation, and cart system

// --- Pre-defined Layout Matrices ---
const KEYBOARD_LAYOUTS = {
  '60': [
    // 60% Classic Poker Layout (VENOM 60 / 60HE / 60HE v2)
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
  ],
  '75': [
    // Row 1 (Function row + Del)
    [
      { label: 'ESC', width: 'key-u1', code: 'Escape', role: 'mod' },
      { label: 'F1', width: 'key-u1', code: 'F1' },
      { label: 'F2', width: 'key-u1', code: 'F2' },
      { label: 'F3', width: 'key-u1', code: 'F3' },
      { label: 'F4', width: 'key-u1', code: 'F4' },
      { label: 'F5', width: 'key-u1', code: 'F5' },
      { label: 'F6', width: 'key-u1', code: 'F6' },
      { label: 'F7', width: 'key-u1', code: 'F7' },
      { label: 'F8', width: 'key-u1', code: 'F8' },
      { label: 'F9', width: 'key-u1', code: 'F9' },
      { label: 'F10', width: 'key-u1', code: 'F10' },
      { label: 'F11', width: 'key-u1', code: 'F11' },
      { label: 'F12', width: 'key-u1', code: 'F12' },
      { label: 'DEL', width: 'key-u1', code: 'Delete', role: 'mod' }
    ],
    // Row 2 (Number Row)
    [
      { label: '` ~', width: 'key-u1', code: 'Backquote' },
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
      { label: 'BACK', width: 'key-u2', code: 'Backspace', role: 'mod' },
      { label: 'HOME', width: 'key-u1', code: 'Home', role: 'mod' }
    ],
    // Row 3 (QWERTY)
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
      { label: '\\', width: 'key-u1-5', code: 'Backslash' },
      { label: 'PGUP', width: 'key-u1', code: 'PageUp', role: 'mod' }
    ],
    // Row 4 (ASDF)
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
      { label: 'ENTER', width: 'key-u2-25', code: 'Enter', role: 'accent' },
      { label: 'PGDN', width: 'key-u1', code: 'PageDown', role: 'mod' }
    ],
    // Row 5 (ZXCV)
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
      { label: 'SHIFT', width: 'key-u1-75', code: 'ShiftRight', role: 'mod' },
      { label: '▲', width: 'key-u1', code: 'ArrowUp', role: 'mod' },
      { label: 'END', width: 'key-u1', code: 'End', role: 'mod' }
    ],
    // Row 6 (Space & Bottom Mods)
    [
      { label: 'CTRL', width: 'key-u1-25', code: 'ControlLeft', role: 'mod' },
      { label: 'WIN', width: 'key-u1-25', code: 'MetaLeft', role: 'mod' },
      { label: 'ALT', width: 'key-u1-25', code: 'AltLeft', role: 'mod' },
      { label: 'SPACE', width: 'key-space', code: 'Space', role: 'space' },
      { label: 'ALT', width: 'key-u1', code: 'AltRight', role: 'mod' },
      { label: 'FN', width: 'key-u1', code: 'Fn', role: 'mod' },
      { label: '◄', width: 'key-u1', code: 'ArrowLeft', role: 'mod' },
      { label: '▼', width: 'key-u1', code: 'ArrowDown', role: 'mod' },
      { label: '►', width: 'key-u1', code: 'ArrowRight', role: 'mod' }
    ]
  ],
  '65': [
    // 65% Compact
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
      { label: 'BACK', width: 'key-u2', code: 'Backspace', role: 'mod' },
      { label: 'DEL', width: 'key-u1', code: 'Delete', role: 'mod' }
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
      { label: '\\', width: 'key-u1-5', code: 'Backslash' },
      { label: 'PGUP', width: 'key-u1', code: 'PageUp', role: 'mod' }
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
      { label: 'ENTER', width: 'key-u2-25', code: 'Enter', role: 'accent' },
      { label: 'PGDN', width: 'key-u1', code: 'PageDown', role: 'mod' }
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
      { label: 'SHIFT', width: 'key-u1-75', code: 'ShiftRight', role: 'mod' },
      { label: '▲', width: 'key-u1', code: 'ArrowUp', role: 'mod' }
    ],
    [
      { label: 'CTRL', width: 'key-u1-25', code: 'ControlLeft', role: 'mod' },
      { label: 'WIN', width: 'key-u1-25', code: 'MetaLeft', role: 'mod' },
      { label: 'ALT', width: 'key-u1-25', code: 'AltLeft', role: 'mod' },
      { label: 'SPACE', width: 'key-space', code: 'Space', role: 'space' },
      { label: 'ALT', width: 'key-u1', code: 'AltRight', role: 'mod' },
      { label: 'FN', width: 'key-u1', code: 'Fn', role: 'mod' },
      { label: '◄', width: 'key-u1', code: 'ArrowLeft', role: 'mod' },
      { label: '▼', width: 'key-u1', code: 'ArrowDown', role: 'mod' },
      { label: '►', width: 'key-u1', code: 'ArrowRight', role: 'mod' }
    ]
  ],
  'tkl': [
    // Standard TKL
    [
      { label: 'ESC', width: 'key-u1', code: 'Escape', role: 'mod' },
      { label: 'F1', width: 'key-u1', code: 'F1' },
      { label: 'F2', width: 'key-u1', code: 'F2' },
      { label: 'F3', width: 'key-u1', code: 'F3' },
      { label: 'F4', width: 'key-u1', code: 'F4' },
      { label: 'F5', width: 'key-u1', code: 'F5' },
      { label: 'F6', width: 'key-u1', code: 'F6' },
      { label: 'F7', width: 'key-u1', code: 'F7' },
      { label: 'F8', width: 'key-u1', code: 'F8' },
      { label: 'F9', width: 'key-u1', code: 'F9' },
      { label: 'F10', width: 'key-u1', code: 'F10' },
      { label: 'F11', width: 'key-u1', code: 'F11' },
      { label: 'F12', width: 'key-u1', code: 'F12' },
      { label: 'PRT', width: 'key-u1', code: 'PrintScreen', role: 'mod' },
      { label: 'SCRL', width: 'key-u1', code: 'ScrollLock', role: 'mod' },
      { label: 'PAUS', width: 'key-u1', code: 'Pause', role: 'mod' }
    ],
    [
      { label: '` ~', width: 'key-u1', code: 'Backquote' },
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
      { label: 'BACK', width: 'key-u2', code: 'Backspace', role: 'mod' },
      { label: 'INS', width: 'key-u1', code: 'Insert', role: 'mod' },
      { label: 'HOME', width: 'key-u1', code: 'Home', role: 'mod' },
      { label: 'PGUP', width: 'key-u1', code: 'PageUp', role: 'mod' }
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
      { label: '\\', width: 'key-u1-5', code: 'Backslash' },
      { label: 'DEL', width: 'key-u1', code: 'Delete', role: 'mod' },
      { label: 'END', width: 'key-u1', code: 'End', role: 'mod' },
      { label: 'PGDN', width: 'key-u1', code: 'PageDown', role: 'mod' }
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
      { label: 'SHIFT', width: 'key-u2-25', code: 'ShiftRight', role: 'mod' },
      { label: '▲', width: 'key-u1', code: 'ArrowUp', role: 'mod' }
    ],
    [
      { label: 'CTRL', width: 'key-u1-25', code: 'ControlLeft', role: 'mod' },
      { label: 'WIN', width: 'key-u1-25', code: 'MetaLeft', role: 'mod' },
      { label: 'ALT', width: 'key-u1-25', code: 'AltLeft', role: 'mod' },
      { label: 'SPACE', width: 'key-space', code: 'Space', role: 'space' },
      { label: 'ALT', width: 'key-u1-25', code: 'AltRight', role: 'mod' },
      { label: 'WIN', width: 'key-u1-25', code: 'MetaRight', role: 'mod' },
      { label: 'MENU', width: 'key-u1-25', code: 'ContextMenu', role: 'mod' },
      { label: 'CTRL', width: 'key-u1-25', code: 'ControlRight', role: 'mod' },
      { label: '◄', width: 'key-u1', code: 'ArrowLeft', role: 'mod' },
      { label: '▼', width: 'key-u1', code: 'ArrowDown', role: 'mod' },
      { label: '►', width: 'key-u1', code: 'ArrowRight', role: 'mod' }
    ]
  ]
};

// --- Curated Pre-Build Catalog Products ---
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
  },
  {
    id: 'VENOM-60-CLASSIC-BLACK',
    category: 'venom_classic',
    name: 'VENOM 60 Classic Custom',
    subtitle: '베놈 60 기계식 기판 + 카본 파이버 + 알파카 V2 풀윤활',
    price: 309000,
    specs: ['기판: 베놈 60 기계식 표준 핫스왑 기판', '보강판: 카본 파이버 (Carbon Fiber)', '스위치: Alpaca V2 리니어 크라이톡스 수제 풀윤활', '하우징: 건메탈 티타늄 다크 알루미늄 바디', '소프트웨어: QMK / VIA 오픈소스 웹 매핑 지원']
  },
  {
    id: 'VENOM-60HE-TITAN-LIMITED',
    category: 'venom_he',
    name: 'VENOM 60HE Titan Stealth',
    subtitle: '베놈 60HE v2 + 알루미늄 보강판 + 닌자 사이드각인',
    price: 379000,
    specs: ['기판: 베놈 60HE v2 초저지연 8000Hz 폴링레이트', '보강판: CNC 통알루미늄 클래키 보강판', '스위치: Gateron Magnetic Jade 자석축', '하우징: 스페이스 다크 그레이 아노다이징', '키캡: 미드나잇 섀도우 닌자 측각 PBT']
  }
];

// --- Main App State Manager ---
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
      caseColor: '#111215',
      caseBorder: '#2a2c33',
      casePrice: 0,
      keycap: 'stealth',
      keycapName: '스텔스 다크 그레이 PBT',
      keycapPrice: 0,
      switch: 'magnetic_jade',
      switchName: '게이트론 마그네틱 제이드 (자석축)',
      switchPrice: 42000,
      engraving: 'VENOM 60HE ATELIER • BRASS WEIGHT ENGRAVING'
    };

    this.cart = [];
    this.init();
  }

  init() {
    this.renderKeyboard();
    this.renderCatalog('all');
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

      case 'graphite':
        if (role === 'accent') return { bg: '#e6a15c', color: '#141518', shadow: '#995a1c' };
        if (role === 'space') return { bg: '#333742', color: '#fff', shadow: '#1a1c22' };
        if (role === 'mod') return { bg: '#171920', color: '#8a91a0', shadow: '#0c0d10' };
        return { bg: '#262933', color: '#e0e4ec', shadow: '#14161c' };

      case 'midnight':
        if (role === 'accent') return { bg: '#202228', color: '#687082', shadow: '#0d0e11' };
        if (role === 'mod') return { bg: '#0f1013', color: '#4a5060', shadow: '#07080a' };
        return { bg: '#17181d', color: '#555c6d', shadow: '#0c0d10' };

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
      housing.style.borderRadius = '18px';
      housing.style.boxShadow = '0 30px 60px rgba(0,0,0,0.85), inset 0 1px 1px rgba(255,255,255,0.2)';
    } else if (this.state.case === 'tofu60_gray') {
      housing.style.background = 'linear-gradient(145deg, #2b2f38 0%, #1a1c22 100%)';
      housing.style.borderColor = '#3c4352';
      housing.style.borderRadius = '16px';
      housing.style.boxShadow = '0 28px 55px rgba(0,0,0,0.8), inset 0 1px 2px rgba(255,255,255,0.18)';
    } else if (this.state.case === 'blade60_gunmetal') {
      housing.style.background = 'linear-gradient(135deg, #252932 0%, #14161b 100%)';
      housing.style.borderColor = '#3e4554';
      housing.style.borderRadius = '22px';
      housing.style.boxShadow = '0 30px 60px rgba(0,0,0,0.9), inset 0 2px 2px rgba(255,255,255,0.12)';
    } else if (this.state.case === 'freebird60_charcoal') {
      housing.style.background = 'linear-gradient(145deg, #1c1d24 0%, #101115 100%)';
      housing.style.borderColor = '#2c2f3a';
      housing.style.borderRadius = '14px';
      housing.style.boxShadow = '0 35px 70px rgba(0,0,0,0.9), inset 0 1px 1px rgba(255,255,255,0.1)';
    } else if (this.state.case === 'frost_smoked') {
      housing.style.background = 'radial-gradient(ellipse at 50% 20%, rgba(45, 52, 68, 0.7) 0%, rgba(18, 20, 26, 0.9) 100%)';
      housing.style.borderColor = '#485268';
      housing.style.borderRadius = '18px';
      housing.style.boxShadow = '0 25px 50px rgba(0,0,0,0.8), 0 0 25px rgba(78, 205, 196, 0.15), inset 0 1px 2px rgba(255,255,255,0.25)';
    } else {
      housing.style.background = '#121316';
      housing.style.borderColor = '#242730';
      housing.style.borderRadius = '16px';
      housing.style.boxShadow = '0 30px 60px rgba(0,0,0,0.85), inset 0 1px 1px rgba(255,255,255,0.15)';
    }

    if (this.state.plate === 'carbon') {
      plate.style.borderColor = '#1f242d';
      plate.style.background = 'repeating-linear-gradient(45deg, #16181d, #16181d 4px, #0e1014 4px, #0e1014 8px)';
      plate.style.boxShadow = 'inset 0 0 10px rgba(0,0,0,0.8)';
    } else if (this.state.plate === 'aluminum') {
      plate.style.borderColor = '#4a5160';
      plate.style.background = 'linear-gradient(145deg, #2a2e38 0%, #1c1f26 100%)';
      plate.style.boxShadow = 'inset 0 1px 2px rgba(255,255,255,0.15)';
    } else {
      plate.style.borderColor = '#2a2e38';
      plate.style.background = '#14161c';
    }

    const activeLayoutLabel = document.getElementById('activeLayoutName');
    if (activeLayoutLabel) {
      activeLayoutLabel.textContent = `VENOM 60HE (${this.state.pcbName}) • ${this.state.plateName}`;
    }

    const layoutMatrix = KEYBOARD_LAYOUTS[this.state.layout] || KEYBOARD_LAYOUTS['75'];
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

  renderCatalog(filter = 'all') {
    const container = document.getElementById('productsCatalogGrid');
    if (!container) return;

    container.innerHTML = '';
    const filtered = filter === 'all' 
      ? PRESET_PRODUCTS 
      : PRESET_PRODUCTS.filter(p => p.category === filter);

    filtered.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-item-card';

      card.innerHTML = `
        <div class="product-thumb-visual">
          <span class="badge-flag">READY TO SHIP</span>
          <div class="keyboard-preview-mini">
            <div style="width: 170px; height: 75px; background: #161820; border-radius: 8px; border: 1px solid #323644; box-shadow: 0 8px 20px rgba(0,0,0,0.6); display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 4px; padding: 6px;">
              <div style="display: flex; gap: 3px;">
                <div style="width: 24px; height: 12px; background: #282c38; border-radius: 2px;"></div>
                <div style="width: 24px; height: 12px; background: #282c38; border-radius: 2px;"></div>
                <div style="width: 24px; height: 12px; background: #282c38; border-radius: 2px;"></div>
                <div style="width: 24px; height: 12px; background: #282c38; border-radius: 2px;"></div>
                <div style="width: 24px; height: 12px; background: #3c4355; border-radius: 2px;"></div>
              </div>
              <div style="display: flex; gap: 3px;">
                <div style="width: 18px; height: 12px; background: #1a1c24; border-radius: 2px;"></div>
                <div style="width: 72px; height: 12px; background: #323644; border-radius: 2px;"></div>
                <div style="width: 18px; height: 12px; background: #1a1c24; border-radius: 2px;"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="product-info-box">
          <h4>${product.name}</h4>
          <ul class="product-specs-list">
            ${product.specs.map(s => `<li><i data-lucide="check" style="width:14px; height:14px; color:#39db80;"></i> ${s}</li>`).join('')}
          </ul>
          <div class="product-bottom-row">
            <div class="item-price">₩${product.price.toLocaleString()}</div>
            <button class="add-btn" data-id="${product.id}">
              <i data-lucide="shopping-bag" style="width:14px; height:14px;"></i>
              <span>장바구니 담기</span>
            </button>
          </div>
        </div>
      `;

      const btn = card.querySelector('.add-btn');
      btn.addEventListener('click', () => {
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
      const totalCount = this.cart.reduce((acc, cur) => acc + cur.qty, 0);
      badge.textContent = totalCount;
    }
  }

  renderCartItems() {
    const list = document.getElementById('cartItemsList');
    const totalDisplay = document.getElementById('cartTotalSum');
    if (!list || !totalDisplay) return;

    if (this.cart.length === 0) {
      list.innerHTML = `
        <div class="empty-cart-msg">
          <i data-lucide="shopping-bag" style="width:40px; height:40px; margin-bottom: 12px; stroke-width: 1.5;"></i>
          <p>장바구니에 담긴 제품이 없습니다.</p>
          <p style="font-size: 0.8rem; margin-top: 6px;">나만의 커스텀 키보드를 빌드해보세요.</p>
        </div>
      `;
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
      row.innerHTML = `
        <div class="cart-item-title-row">
          <span class="cart-item-title">${item.name}</span>
          <span class="cart-item-delete" data-index="${index}"><i data-lucide="trash-2" style="width:16px; height:16px;"></i></span>
        </div>
        <div class="cart-item-details">${item.details}</div>
        <div class="cart-item-bottom">
          <span class="cart-item-qty">수량: ${item.qty}개</span>
          <span class="cart-item-price">₩${(item.price * item.qty).toLocaleString()}</span>
        </div>
      `;

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

    const engravingInput = document.getElementById('engravingText');
    const weightBar = document.querySelector('.case-weight-bar');
    if (engravingInput && weightBar) {
      engravingInput.addEventListener('input', (e) => {
        const val = e.target.value.trim().toUpperCase();
        this.state.engraving = val || 'VENOM 60HE ATELIER';
        weightBar.textContent = this.state.engraving;
      });
    }

    const typingInput = document.getElementById('liveTypingInput');
    if (typingInput) {
      typingInput.addEventListener('keydown', (e) => {
        if (e.repeat) return; // 꾹 누를 때 소리 중복 반복 출력 방지[cite: 1]

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
        id: `VENOM-${Date.now()}`,
        name: `VENOM 60HE 커스텀 빌드 (${this.state.pcbName})`,
        details: `보강판: ${this.state.plateName} • 하우징: ${this.state.caseName} • 스위치: ${this.state.switchName} • 키캡: ${this.state.keycapName} • 각인: "${this.state.engraving}"`,
        price: this.calculateTotal(),
        qty: 1
      };
      this.addToCart(customItem);
    });

    document.getElementById('saveShareConfigBtn').addEventListener('click', () => {
      const summaryText = `[VENOM 60HE 커스텀 빌드 견적서]\n기판: ${this.state.pcbName}\n보강판: ${this.state.plateName}\n하우징: ${this.state.caseName}\n스위치: ${this.state.switchName}\n키캡: ${this.state.keycapName}\n황동각인: ${this.state.engraving}\n총 견적 합계: ₩${this.calculateTotal().toLocaleString()}`;
      navigator.clipboard.writeText(summaryText).then(() => {
        alert('클립보드에 베놈 60HE 커스텀 빌드 사양이 복사되었습니다!');
      }).catch(() => {
        alert(summaryText);
      });
    });

    document.querySelectorAll('.tab-btn').forEach(tab => {
      tab.addEventListener('click', (e) => {
        document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const filter = e.currentTarget.dataset.filter;
        this.renderCatalog(filter);
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
        
        receipt.innerHTML = `
          <div><strong>주문 번호:</strong> #HEXA-${Math.floor(100000 + Math.random() * 900000)}</div>
          <div><strong>주문 내역:</strong> ${this.cart.map(c => `${c.name} (${c.qty}개)`).join(', ')}</div>
          <div><strong>최종 결제 금액:</strong> ₩${totalSum.toLocaleString()} (무료배송)</div>
          <div><strong>발송 예정:</strong> 48시간 내 풀윤활 및 빌드 검수 완료 후 우체국 VIP 특송</div>
        `;

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