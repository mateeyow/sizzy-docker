import styled, {keyframes} from 'styled-components';
import flex from 'styles/flex';
import {cond, size, mustSize} from 'utils/sc-utils';
import {toolbarHeight} from 'styles/sizes';
import queries from 'styles/queries';

//components
import $UrlBar from 'components/UrlBar';

const scalePulseAnimation = keyframes`
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
`;

const shapesScaleAndRoatateAnimation = keyframes`
  from {
    transform: rotate(900deg);
  }
  to {
  }
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
  z-index: 99;
  background-color: ${p => p.theme.backgroundColor};
`;

export const IntroText = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 300;
  
  ${queries.notAvailable}{
    display: none;
  }
`;

export const MobileText = styled.div`
  color: white;
  font-size: 17px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 15px;
  padding: 0 30px;
  
  ${queries.onlyOnMobile}{
    display: none;
  }
`;

export const ExampleLink = styled.div`
  color: white;
  opacity: 0.8;
  font-size: 15px;
  text-decoration:underline;
  cursor: pointer;
  ${queries.notAvailable}{
    display: none;
  }
  
  &:hover {
    opacity: 1;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  ${flex.vertical}
  ${flex.centerVertical}
  transition: all 500ms linear;
  opacity: ${p => (p.show ? 1 : 0)};
  transform: translateY(${p => (p.show ? 0 : 300)}px) ${p => cond(!p.show, `scale(0.5)`)};
`;

export const LetterAndShapes = styled.div`
  ${flex.vertical}
  ${flex.centerVertical}
  position: relative;
  ${size('250px')}
  
  ${queries.notAvailable}{
    ${size('180px')}
  }
  
  margin-bottom: 30px;
  z-index: 0;
  transition: all 200ms linear;
  ${p => cond(p.loading, `transform: translateY(67px);`)}
`;

export const OnlyAvailable = styled.div`
  display: none;
  font-weight:300;
  color: #e2e2e2;
  font-size: 14px;
  margin-top: 10px;
  
  ${queries.notAvailable}{
    display: block;
  }
`;

export const Letter = styled.img`
  position: relative;
  top: 20px;
  z-index: 1;
  width: 90px;
  margin-bottom: 40px;
  ${p => cond(p.loading, `animation: ${scalePulseAnimation} 500ms infinite alternate-reverse;`)};
`;

export const ShapesWrap = styled.div`
  position: absolute;
  z-index: 0;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  opacity: 0.8;
  ${mustSize('100%')}
  
  ${p => cond(!p.loading, `animation: ${scalePulseAnimation} 2000ms infinite alternate-reverse`)};
  ${p => cond(p.loading, `animation: ${shapesScaleAndRoatateAnimation} 1500ms infinite alternate;`)};
`;

export const Shapes = styled.img`
   ${mustSize('100%')}
`;

export const MadeBy = styled.a`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  position: absolute;
  bottom: 13px;
  font-weight: 300;
  transition: color: 200ms linear;
  text-decoration: none;
  left: 0;
  right: 0;
  margin: auto;
  width: 110px;
  
  &:hover {
    text-decoration: underline;
    color: rgba(255, 255, 255, 1);
  }
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

export const UrlBar = styled($UrlBar)`
  margin: 20px;
  max-width: 336px;
  height: 50px;
  font-size: 16px;
  line-height: 16px;
  
  ${queries.notAvailable} {
    display: none;
  }
`;
