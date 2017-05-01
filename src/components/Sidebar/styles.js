import styled from 'styled-components';
import flex from 'styles/flex';
import {colorTransition} from 'styles/shared';
import {rotateIconOnOrientationChange, cond} from 'utils/sc-utils';

//external
import $Icon from 'react-fontawesome';

export const Sidebar = styled.div`
  ${flex.vertical}
  ${flex.spaceBetween}
  
  ${p => {
  const width = p.theme.sidebarFullSize ? 180 : 50;
  return `
      min-width: ${width}px;
      max-width: ${width}px;
     `;
}}
  
  background-color: #242831;
  border-right: 1px solid #1b1e25;
  
  padding: ${p => (p.sidebarFullSize ? '20px 15px' : '10px 0')}
  color: white;
`;

export const Filters = styled.div`
  ${p => (p.theme.sidebarFullSize ? flex.horizontal : flex.vertical)}
  ${p => (p.theme.sidebarFullSize ? flex.centerHorizontalV : flex.centerHorizontal)}
`;

export const Top = styled.div`
  ${flex.vertical}
`;

export const Label = styled.div`
  font-size: ${p => (p.theme.sidebarFullSize ? 13 : 11)}px;
  color: rgba(255, 255, 255, 0.8);
  ${p => cond(!p.theme.sidebarFullSize, `text-align: center;`)}
  margin: 15px 0;
`;

export const ToolbarButtons = styled.div`
  ${flex.vertical}
  width: 100%;
`;

/* Button */
export const ToolbarButton = styled.div`
 ${flex.horizontal}
 ${p => (p.theme.sidebarFullSize ? flex.centerHorizontalV : flex.centerHorizontal)}
 ${p => (p.theme.sidebarFullSize ? `margin-right: 10px;` : `margin-bottom: 7px;`)}
 
 min-width: 40px;
 cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};
 font-size: 13px;
 border-radius: 3px;
 padding: 5px 0;
 transition: ${colorTransition};
 font-weight: 300;
 opacity: ${p => (p.disabled ? 0.3 : 1)};

  &:hover {
    background-color: #1d2027;
  }
  
  ${p => p.theme.buttonStyle}
`;

export const ButtonIcon = styled($Icon)`
  ${flex.horizontal}
  ${flex.centerHorizontal}
  text-align: center;
  color: ${p => p.theme.gold};
  cursor: pointer;
  font-size: 18px !important;
  transition: ${colorTransition};
  ${rotateIconOnOrientationChange}
  ${p => cond(p.sidebarFullSize, `margin-right: 8px;`)}
  min-width: 25px;
  opacity: 0.7;
`;

export const ButtonText = styled.div`
  
`;
