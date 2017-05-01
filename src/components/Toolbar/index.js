// @flow
import typeof store from 'stores/store';

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

//images
import LogoSvg from 'img/logo.svg';

//styled-components
import {Toolbar, ToolbarLeft, Logo} from './styles';

//components
import UrlBar from 'components/UrlBar';

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
    const {store: {app}} = this.props;
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

      </Toolbar>
    );
  }
}

export default ToolbarComponent;
