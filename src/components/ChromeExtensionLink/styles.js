import styled from 'styled-components';
import $Icon from 'react-fontawesome';
import flex from 'styles/flex';
import queries from 'styles/queries';
const color = 'rgba(255,255,255, 0.8)';
export const iconClassName = 'c-chrome-extension__icon';

export const ChromeExtensionLink = styled.a`
  ${flex.horizontal}
  ${flex.centerHorizontalV}
  opacity: 0.3;
  transition: opacity 150ms linear;
  color: ${color};
  cursor: pointer;
  text-decoration: none;
  border: 1px solid ${color};
  border-radius: 4px;
  padding: 10px 13px;
  margin-top: 60px;
  
  &:hover {
    opacity: 1;
    
    .${iconClassName}{
      transform: rotate(360deg);
    }
  }
  
  
  ${queries.notAvailable} {
    display: none;
  }
`;

export const Icon = styled($Icon)`
  font-size: 25px !important;
  margin-right: 10px;
  transition: transform 500ms ease-in;
`;

export const Text = styled.div`
  font-size: 15px;
  font-weight: 300;
`;
