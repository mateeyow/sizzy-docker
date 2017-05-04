import {helpers} from './responsive';

const {mobilePrefix, landscape, portrait, maxWidth, minWidth} = helpers;

const queries = {
  landscape: `${mobilePrefix} ${landscape}`,
  portrait: `${mobilePrefix} ${portrait}`,
  notAvailable: `${mobilePrefix} ${maxWidth(740)}`,
  onlyOnMobile: `${mobilePrefix} ${minWidth(740)}`
};

export default queries;
