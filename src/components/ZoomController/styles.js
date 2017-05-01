import styled from 'styled-components';
import flex from 'styles/flex';

export const Text = styled.div`
  ${flex.horizontal}
  ${flex.centerHorizontal}
  margin-bottom: 7px;
`;

export const ZoomController = styled.div`
  ${flex.vertical}
  ${flex.centerVerticalV}
  color: ${p => p.theme.color};
`;

export const ZoomLabel = styled.div`

`;

export const ZoomLevel = styled.div`
  font-weight: 400;
  margin: 0 10px;
`;
