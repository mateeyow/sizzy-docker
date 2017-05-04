import devices from './devices';

//default
const MEDIA = '@media';
const ALL = 'all';
const MOBILE_PREFIX = `${MEDIA} handheld, screen`;

//width
const MIN_WIDTH = 'min-width';
const MAX_WIDTH = 'max-width';

//height
const MIN_HEIGHT = 'min-height';
const MAX_HEIGHT = 'max-height';

//orientation
const LANDSCAPE = `and (orientation: landscape)`;
const PORTRAIT = `and (orientation: portrait)`;

//functions
export const minWidth = x => `and (${MIN_WIDTH}: ${x}px)`;
export const maxWidth = x => `and (${MAX_WIDTH}: ${x}px)`;
export const minHeight = x => `and (${MIN_HEIGHT}: ${x}px)`;
export const maxHeight = x => `and (${MAX_HEIGHT}: ${x}px)`;
export const maxDeviceSize = device =>
  `${maxWidth(device.width)} ${maxHeight(device.height)}`;
export const minDeviceSize = device =>
  `${minWidth(device.width)} ${minHeight(device.height)}`;
export const maxSize = (x, y = x) => `${maxWidth(x)} ${maxHeight(y)}`;
export const rotated = device => ({
  width: device.height,
  height: device.width
});

export const helpers = {
  minWidth,
  maxWidth,
  rotated,
  minHeight,
  maxHeight,
  maxDeviceSize,
  minDeviceSize,
  maxSize,
  landscape: LANDSCAPE,
  portrait: PORTRAIT,
  mobilePrefix: MOBILE_PREFIX,
  media: MEDIA,
  all: ALL
};

export const media = (...rules) => {
  return `${MEDIA} ${ALL} ${rules.join(' ')}`;
};

export const queries = {
  landscapeExceptBigTablet: `${MOBILE_PREFIX} ${maxDeviceSize(rotated(devices.tabletM))} ${LANDSCAPE}`,
  bigTabletLandscape: `${MOBILE_PREFIX} ${minDeviceSize(rotated(devices.tabletM))} ${LANDSCAPE}`,
  landscape: `${MOBILE_PREFIX} ${LANDSCAPE}`
};
