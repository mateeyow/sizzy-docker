import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import questions from 'config/faq-questions';
import {toolbarHeight} from 'styles/sizes';
import views from 'config/views';

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
  componentDidMount() {
    const {store} = this.props;
    const {router} = store;
    if (router.params && router.params.questionId) {
      const elementToScrollTo = document.getElementById(
        router.params.questionId
      );

      if (elementToScrollTo) {
        const newScrollPosition =
          elementToScrollTo.offsetTop - toolbarHeight - 20;
        document.getElementById('faq-view').scrollTop = newScrollPosition;
      }
    }
  }

  render() {
    const {store} = this.props;
    const {router} = store;

    return (
      <FaqView id="faq-view">

        <PageTitle> FAQ </PageTitle>

        <Questions>
          {questions.map(question => (
            <Question
              onClick={() =>
                router.goTo(views.faq, {questionId: question.id}, store)}
              params={{questionId: question.id}}
              id={question.id}
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
