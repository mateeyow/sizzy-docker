import styled from 'styled-components';
import {toolbarHeight} from 'styles/sizes';
import {cond} from 'utils/sc-utils';
import flex from 'styles/flex';

export const FaqView = styled.div`
  ${flex.vertical}
  ${flex.centerVerticalH}
  color: white;
  padding: 0 30px 30px 30px;
  width: 100vw;
  height: calc(100vh - ${toolbarHeight}px);
  overflow-y: scroll;
`;

export const PageTitle = styled.div`
  font-size: 30px;
  color: white;
  font-weight: 300;
  margin: 50px 0;
`;

export const Questions = styled.div`
  max-width: 700px;
`;

export const Question = styled.div`
  margin-bottom: 20px;
  padding: 17px 20px;
  cursor: pointer;
  transition: all 50ms linear;
  border: 1px solid rgba(0,0,0,0);
  
  a {
    color: white;
    text-decoration: none;
    padding-bottom: 3px;
    border-bottom: 1px dashed rgba(255, 255, 255, 0.41);
  }
  
  ${p => cond(!p.current, `
    &:hover {
      background-color: rgba(34, 39, 47, 0.3);
    }
  `)}
  
  ${p => cond(p.current, `
    background-color: rgba(34, 39, 47, 0.6);
  `)}
`;

export const QuestionTitle = styled.div`
  font-size: 23px;
  font-weight: 300;
  margin-bottom: 20px;
  line-height: 33px;
`;

export const Answer = styled.div`
  font-size: 18px;
  font-weight: 100;
  color: #bbbbbb;
  line-height: 25px;
`;
