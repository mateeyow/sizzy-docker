import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import questions from 'config/faq-questions';

//styled-components
import {
  FaqView,
  PageTitle,
  Question,
  Questions,
  QuestionTitle,
  Answer
} from './styles';

@inject('store')
@observer
class FaqViewComponent extends Component {
  render() {
    const {store} = this.props;
    const {router} = store;

    return (
      <FaqView>
        <PageTitle> FAQ </PageTitle>

        <Questions>
          {questions.map(question => (
            <Question
              current={question.id === router.params.questionId}
              key={question.id}
            >
              <QuestionTitle>
                {question.title}
              </QuestionTitle>
              <Answer> {question.answer} </Answer>
            </Question>
          ))}
        </Questions>

      </FaqView>
    );
  }
}

export default FaqViewComponent;
