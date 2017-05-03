import styled from 'styled-components';
import {toolbarHeight} from 'styles/sizes';
import {cond} from 'utils/sc-utils';
import flex from 'styles/flex';
import {Link} from 'mobx-router';

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

export const Question = styled(Link)`
  text-decoration: none;
  display: block;
  color: white;

  margin-bottom: 20px;
  padding: 17px 20px;
  border: 1px solid rgba(241, 241, 241, 0.1);
  cursor: pointer;
  transition: all 50ms linear;
  
  
  ${p => cond(!p.current, `
    &:hover {
      border: 1px solid rgba(241, 241, 241, 0.2);
      background-color: rgba(34, 39, 47, 0.3);
    }
  `)}
  
  ${p => cond(p.current, `
    border: 1px solid rgba(241, 241, 241, 0.57);
    background-color: rgba(34, 39, 47, 0.8);
  `)}
`;

export const QuestionTitle = styled.div`
  font-size: 23px;
  font-weight: 300;
  margin-bottom: 5px;
`;

export const Answer = styled.div`
  font-size: 18px;
  font-weight: 100;
  color: #bbbbbb;
  line-height: 23px;
`;
