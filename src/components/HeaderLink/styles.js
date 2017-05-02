import styled from 'styled-components';
import $Icon from 'react-fontawesome';
import flex from 'styles/flex';

export const HeaderLink = styled.a`
  ${flex.horizontal}
  ${flex.centerHorizontalV}
  color: white;
  opacity: 0.7;
  margin-right: 25px;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    opacity: 0.9;
  }
  
`;

export const Text = styled.div`
  font-size: 16px;
  color: white;
  font-weight: 300;
`;

export const Icon = styled($Icon)`
  margin-right: 10px;
  font-size: 20px !important;
`;
