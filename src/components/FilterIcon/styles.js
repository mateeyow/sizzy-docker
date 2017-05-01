import styled from 'styled-components';
import {colorTransition} from 'styles/shared';
import {cond} from 'utils/sc-utils';

//external
import $Icon from 'react-fontawesome';

export const FilterIcon = styled($Icon)`
  color: white;
  transition: ${colorTransition};
  cursor: pointer;
  opacity: ${p => (p.selected ? 1 : 0.3)};
  font-size: 28px !important;
  
  ${p => (p.theme.sidebarFullSize ? `margin-right: 20px;` : `margin-bottom: 10px;`)}
  &:hover {
    ${p => cond(!p.selected, `
      opacity: 0.7;
    `)}
`;
