import styled from 'styled-components';
import flex from 'styles/flex';
import { colorTransition } from 'styles/shared';
import { toolbarHeight } from 'styles/sizes';

export const Home = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${p => p.theme.backgroundColor};
  transition: ${colorTransition};
  ${flex.vertical}
`;

export const Devices = styled.div`
  ${flex.horizontal}
  ${flex.wrap}
  padding: 30px;
`;

export const Content = styled.div`
  padding-top: ${toolbarHeight}px;  
  ${flex.vertical}
  flex: 1;
`;
