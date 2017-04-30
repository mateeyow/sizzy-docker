import styled, { keyframes } from 'styled-components';
import flex from 'styles/flex';
import { cond } from 'utils/sc-utils';
import { toolbarHeight } from 'styles/sizes';

//components
import $UrlBar from 'components/UrlBar';

//external
import $Icon from 'react-fontawesome';

const pulseAnimation = keyframes`
  from {opacity: 0.5;}
  to {opacity: 0.1;}
`;

export const WelcomeBox = styled.div`
  ${flex.vertical}
  ${flex.centerVertical}
  width: 100%;
  height: calc(100vh - ${toolbarHeight}px);
  flex: 1;
  color: white;
  position: absolute;
  top: ${toolbarHeight}px;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
  z-index: 9999;
  background-color: ${p => p.theme.backgroundColor};
`;

export const Globe = styled($Icon)`
  font-size: 170px !important;
  opacity: 0.1;
  position: absolute;
  transform: translateY(${p => (p.loading ? 0 : -165)}px) ${p => cond(p.loading, `scale(1.5)`)};
  transition: all 500ms linear;
  
  ${p => cond(p.loading, `
    animation: ${pulseAnimation} 800ms infinite alternate-reverse;
  `)}
`;

export const IntroText = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 300;
`;

export const ExampleLink = styled.div`
  color: white;
  opacity: 0.8;
  font-size: 15px;
  text-decoration:underline;
  cursor: pointer;
  
  &:hover {
    opacity: 1;
  }
`;

export const UrlBar = styled($UrlBar)`
  margin: 20px;
  width: 336px;
  height: 50px;
  font-size: 16px;
`;

export const Content = styled.div`
  ${flex.vertical}
  ${flex.centerVertical}
  transition: all 500ms linear;
  opacity: ${p => (p.show ? 1 : 0)};
  transform: translateY(${p => (p.show ? 0 : 300)}px) ${p => cond(!p.show, `scale(0.5)`)};
`;

/* Size overrides for internal elements of other components */

export const UrlInputStyles = {
  input: {
    sizes: {
      padding: 15
    }
  },
  goIcon: {
    sizes: {
      size: 25,
      offsetRight: 15
    }
  }
};
