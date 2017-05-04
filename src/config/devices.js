import {DEVICE_TYPES, OS} from 'config/tags';

const devices = {
  iPhone4: {
    id: 'iphone4',
    name: 'iPhone 4',
    os: OS.APPLE,
    type: DEVICE_TYPES.PHONE,
    width: 320,
    height: 480,
    iconName: ''
  },
  iPhone5: {
    id: 'iphone5',
    name: 'iPhone 5',
    os: OS.APPLE,
    type: DEVICE_TYPES.PHONE,
    width: 320,
    height: 568
  },
  iPhone6: {
    id: 'iphone6',
    name: 'iPhone 6',
    os: OS.APPLE,
    type: DEVICE_TYPES.PHONE,
    width: 375,
    height: 667
  },
  iPhone7plus: {
    id: 'iphone7plus',
    name: 'iPhone 7 Plus',
    os: OS.APPLE,
    type: DEVICE_TYPES.PHONE,
    width: 414,
    height: 736
  },
  iPadAir: {
    id: 'ipadair',
    name: 'iPad Air',
    os: OS.APPLE,
    type: DEVICE_TYPES.TABLET,
    width: 768,
    height: 1024
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
