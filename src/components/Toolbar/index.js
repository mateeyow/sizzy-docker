/* eslint-disable */
// @flow
import typeof store from 'stores/store';

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import views from 'config/views';

//images
import LogoSvg from 'img/logo.svg';

//styled-components
import {Toolbar, ToolbarLeft, ToolbarRight, Logo, UrlBar} from './styles';

//components
import HeaderLink from 'components/HeaderLink';

type Props = {
  store: any | store
};

@inject('store')
@observer
class ToolbarComponent extends Component {
  static defaultProps = {
    store: null
  };

  props: Props;

  render() {
    const {store} = this.props;
    const {app, router} = store;
    const {isValidUrl} = app;

    return (
      <Toolbar>
        <ToolbarLeft>
          <Logo
            onClick={app.resetToHome}
            src={LogoSvg}
            alt="Sizzy"
            width="70px"
          />
          {isValidUrl && <UrlBar />}
        </ToolbarLeft>

        <ToolbarRight>
          {/* <HeaderLink
            icon="github"
            text="Code"
            link="https://github.com/kitze/sizzy"
          /> */}
          <HeaderLink
            icon="twitter"
            text="Follow"
            link="https://twitter.com/sizzyapp"
          />
        </ToolbarRight>
      </Toolbar>
    );
  }
}

export default ToolbarComponent;
