import styled from 'styled-components';
import $Icon from 'react-fontawesome';
import flex from 'styles/flex';

//external
import {Link} from 'mobx-router';

const headerStyles = `
  ${flex.horizontal}
  ${flex.centerHorizontalV}
  color: white;
  opacity: 0.7;
  margin-right: 20px;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    opacity: 0.9;
  }
`;

export const HeaderLink = styled.a`
  ${headerStyles}
`;

export const Text = styled.div`
  font-size: 15px;
  color: white;
  font-weight: 300;
`;

export const Icon = styled($Icon)`
  margin-right: 8px;
  font-size: 15px !important;
`;

export const RouterLink = styled(Link)`
  ${headerStyles}
`;
