import styled from 'styled-components';
import $Icon from 'react-fontawesome';
import flex from 'styles/flex';

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
  padding: 10px 15px;
  margin-top: 60px;
  
  &:hover {
    opacity: 1;
    
    .${iconClassName}{
      transform: rotate(360deg);
    }
  }
`;

export const Icon = styled($Icon)`
  font-size: 30px !important;
  margin-right: 15px;
  transition: transform 500ms ease-in;
`;

export const Text = styled.div`
  font-size: 16px;
  font-weigth: 300;
`;
