import styled from 'styled-components';
import flex from 'styles/flex';

export const Sidebar = styled.div`
  min-width: ${p => (p.opened ? 240 : 30)}px;
  background-color: #242831;
  border-right: 1px solid #1b1e25;
  padding: 20px 15px;
  color: white;
`;

export const Filters = styled.div`
  ${flex.horizontal}
  ${flex.centerHorizontalV}
`;
