import styled from 'styled-components';
import flex from 'styles/flex';
import {colorTransition} from 'styles/shared';

export const ZoomController = styled.div`
  color: ${p => p.theme.color};
`;

export const Text = styled.div`
  ${flex.horizontal}
  ${flex.centerHorizontal}
  margin-bottom: 7px;
`;

export const ZoomLabel = styled.div``;

export const ZoomLevel = styled.div`
  font-weight: 400;
  margin: 0 10px;
`;

export const FullSize = styled.div`
  ${flex.vertical}
  ${flex.centerVerticalV}
`;

export const Minimal = styled.div`
  
`;

export const ZoomLevelButton = styled.div`
  width: 1;
  cursor: pointer;
  color: white;
  padding: 8px 0;
  
  &:hover {
    background-color: #1d2027;
  }
  
  text-align: center;
  font-size: 12px;
  transition: ${colorTransition};
`;

export const Input = styled.input`
  width: 100%;
`;
