import styled from 'styled-components';
import flex from 'styles/flex';
import {cond} from 'utils/sc-utils';

export const VerticalDeviceList = styled.div`
  ${flex.vertical}
  width: 70px;
  background-color: rgb(36, 40, 49);
`;

export const Device = styled.div`
  ${flex.vertical}
  ${flex.centerVertical}
  flex: 1;
  height: 100px;
  width: 100%;
  color: white;
  cursor: pointer;
  border-bottom: 1px solid #1b1e25;
  border-right: 1px solid #1b1e25;
  font-size: 13px;
  font-weight: 300;
  text-align: center;
  
  ${p => cond(p.selected, `
    background-color: #333a48;
  `)}
`;
