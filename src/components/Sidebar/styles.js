import styled from 'styled-components';
import flex from 'styles/flex';
import {colorTransition} from 'styles/shared';
import {rotateIconOnOrientationChange} from 'utils/sc-utils';

//external
import $Icon from 'react-fontawesome';

export const Sidebar = styled.div`
  ${flex.vertical}
  ${flex.spaceBetween}
  
  ${p => {
  const width = p.opened ? 240 : 30;
  return `
      min-width: ${width}px;
      max-width: ${width}px;
     `;
}}
  
  background-color: #242831;
  border-right: 1px solid #1b1e25;
  padding: 20px 15px;
  color: white;
`;

export const Filters = styled.div`
  ${flex.horizontal}
  ${flex.centerHorizontalV}
`;

export const Top = styled.div`
  ${flex.vertical}
`;

export const Label = styled.div`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  margin: 15px 0;
`;

export const ToolbarButtons = styled.div`
  ${flex.vertical}
`;

/* Button */
export const ToolbarButton = styled.button`
 ${flex.horizontal}
 ${flex.centerHorizontalV}
 margin-right: 10px;
 min-width: 40px;
 cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};
 background: none;
 border: none;
 outline: none;
 color: ${p => p.theme.color};
 font-size: 14px;
 border-radius: 3px;
 transition: ${colorTransition};
 padding: 6px 10px;
 font-weight: 100;
 opacity: ${p => (p.disabled ? 0.3 : 1)};
 ${p => p.theme.buttonStyle}
 margin-bottom: 10px
`;

export const ButtonIcon = styled($Icon)`
  color: white;
  cursor: pointer;
  font-size: 18px !important;
  transition: ${colorTransition};
  ${rotateIconOnOrientationChange}
  margin-right: 8px;
  min-width: 25px;
  opacity: 0.7;
`;

export const ButtonText = styled.div`
  
`;
