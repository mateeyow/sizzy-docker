// @flow
import typeof store from 'stores/store';
import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

//styled-components
import {Home, Content} from './styles';

//components
import WelcomeBox from 'components/WelcomeBox';
import Sizzy from 'components/Sizzy';

//external
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

type Props = {
  store: any | store,
  children?: React.Element<*>
};

@inject('store')
@observer
class HomeComponent extends Component {
  props: Props;

  static defaultProps = {
    store: null
  };

  render() {
    const {store: {app}} = this.props;

    const {isValidUrl, urlIsLoaded} = app;

    return (
      <Home>

        <Content>

          <ReactCSSTransitionGroup
            transitionName="fadeout"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={400}
          >
            {!urlIsLoaded && <WelcomeBox />}
          </ReactCSSTransitionGroup>

          {isValidUrl && <Sizzy />}
        </Content>
      </Home>
    );
  }
}

export default HomeComponent;
