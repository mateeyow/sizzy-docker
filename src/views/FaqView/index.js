import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

//styled-components
import {FaqView} from './styles';

@inject('store')
@observer
class FaqViewComponent extends Component {
  render() {
    const {store} = this.props;
    const {router} = store;

    return (
      <FaqView>
        FaqView {router.params && router.params.questionId}
      </FaqView>
    );
  }
}

export default FaqViewComponent;
