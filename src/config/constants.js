export const IS_LOCAL_DEV = window.location.hostname === 'localhost';
export const LOADING_TIME_MS = IS_LOCAL_DEV ? 100 : 1800;
