import styled from 'styled-components';
import flex from 'styles/flex';

import {colorTransition} from 'styles/shared';

export const App = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${p => p.theme.backgroundColor};
  transition: ${colorTransition};
  ${flex.vertical}
`;
