import styled from 'styled-components';
import flex from 'styles/flex';
import {toolbarHeight} from 'styles/sizes';
import {colorTransition} from 'styles/shared';

export const Toolbar = styled.div`
  ${flex.horizontal}
  ${flex.centerHorizontalV}
  ${flex.spaceBetween}
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  z-index: 9999;
  transition: ${colorTransition};
  width: 100%;
  height: ${toolbarHeight}px;

  ${p => p.theme.toolbarStyle}

  padding: 0 30px;
`;

export const Logo = styled.img`
  margin-right: 30px;
  cursor: pointer;
`;

export const ToolbarLeft = styled.div`
  ${flex.horizontal}
  ${flex.centerHorizontalV}
  min-width: 350px;
`;
