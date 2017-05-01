import styled from 'styled-components';
import {iconSize} from 'utils/sc-utils';

//external
import $Icon from 'react-fontawesome';

const sizes = {
  urlInput: {
    padding: 13
  },
  goIcon: {
    size: 20,
    offsetRight: 8
  }
};

export const UrlBar = styled.div`
   max-width: 260px;
   width: 100%;
   height: 35px;
   position: relative;
   font-size: 14px;
`;

export const UrlInput = styled.input`
  width: 100%;
  height: 100%;
  margin-right: 35px;
  font-size: 15px;
  line-height: 15px;
  padding: ${p => {
  const {padding = sizes.urlInput.padding} = p.styles || {};
  return `0 ${sizes.goIcon.size + sizes.goIcon.offsetRight * 2}px 0 ${padding}px;`;
}}
  border: none;
  border-bottom-color: #825acb;
  border-radius: 5px;
  box-shadow: inset 0 2px 5px rgba(0,0,0,.2);
  outline: none;
  font-weight: 300;
  
  ${p => p.theme.urlInputStyle}
`;

export const GoIcon = styled($Icon)`
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  position: absolute;
  top: 50%;
  bottom: 50%;
  margin: auto;
  
  ${p => {
  const iconSizes = p.styles && p.styles.sizes ? p.styles.sizes : sizes.goIcon;

  return `
      right: ${iconSizes.offsetRight}px;
      ${iconSize(iconSizes.size)}
    `;
}}

  transition: color 100ms linear;
  
  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }
  
  &:active {
    color: rgba(255, 255, 255, 1);
    transform: translateY(1px);
  }
`;
