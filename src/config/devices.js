import {DEVICE_TYPES, OS} from 'config/tags';

//keyboards
import iphone5keyboard from 'img/iphone-5-keyboard.png';
import iphone5keyboardlandscape from 'img/iphone-5-keyboard-landscape.png';

import iphone6keyboard from 'img/iphone-6-keyboard.png';
import iphone6keyboardlandscape from 'img/iphone-6-keyboard-landscape.png';

import iphone7keyboardportrait from 'img/iphone-7-plus-keyboard-portrait.png';
import iphone7keyboardlandscape from 'img/iphone-7-plus-keyboard-landscape.png';

import ipadAirKeyboardPortrait from 'img/ipad-air-keyboard-portrait.png';
import ipadAirKeyboardLandscape from 'img/ipad-air-keyboard-landscape.png';

const devices = {
  iPhone4: {
    id: 'iphone4',
    name: 'iPhone 4',
    os: OS.APPLE,
    type: DEVICE_TYPES.PHONE,
    width: 320,
    height: 480,
    iconName: '',
    keyboardImg: {
      portrait: iphone5keyboard,
      landscape: iphone5keyboardlandscape
    }
  },
  iPhone5: {
    id: 'iphone5',
    name: 'iPhone 5',
    os: OS.APPLE,
    type: DEVICE_TYPES.PHONE,
    width: 320,
    height: 568,
    keyboardImg: {
      portrait: iphone5keyboard,
      landscape: iphone5keyboardlandscape
    }
  },
  iPhone6: {
    id: 'iphone6',
    name: 'iPhone 6',
    os: OS.APPLE,
    type: DEVICE_TYPES.PHONE,
    width: 375,
    height: 667,
    keyboardImg: {
      portrait: iphone6keyboard,
      landscape: iphone6keyboardlandscape
    }
  },
  iPhone7plus: {
    id: 'iphone7plus',
    name: 'iPhone 7 Plus',
    os: OS.APPLE,
    type: DEVICE_TYPES.PHONE,
    width: 414,
    height: 736,
    keyboardImg: {
      portrait: iphone7keyboardportrait,
      landscape: iphone7keyboardlandscape
    }
  },
  iPadAir: {
    id: 'ipadair',
    name: 'iPad Air',
    os: OS.APPLE,
    type: DEVICE_TYPES.TABLET,
    width: 768,
    height: 1024,
    keyboardImg: {
      portrait: ipadAirKeyboardPortrait,
      landscape: ipadAirKeyboardLandscape
    }
  },
  nexus6p: {
    id: 'nexus6p',
    name: 'Nexus 6P',
    os: OS.ANDROID,
    type: DEVICE_TYPES.PHONE,
    width: 411,
    height: 731
  },
  galaxys4: {
    id: 'galaxys4',
    name: 'Galaxy S4',
    os: OS.ANDROID,
    type: DEVICE_TYPES.PHONE,
    width: 360,
    height: 640
  },
  nexus7: {
    id: 'nexus7',
    os: OS.ANDROID,
    type: DEVICE_TYPES.TABLET,
    name: 'Nexus 7',
    width: 600,
    height: 960
  }
};

export default devices;
