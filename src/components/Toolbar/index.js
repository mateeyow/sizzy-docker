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
          <HeaderLink
            icon="github"
            text="Code"
            link="https://github.com/kitze/sizzy"
          />
          <HeaderLink
            icon="twitter"
            text="Follow"
            link="https://twitter.com/sizzyapp"
          />
          <HeaderLink
            icon="question-circle"
            text="FAQ"
            view={views.faq}
            router={router}
          />
          <HeaderLink
            icon="money"
            text="Support"
            link="https://opencollective.com/sizzy"
          />
          <HeaderLink
            icon="book"
            text="Story"
            link="https://medium.com/@kitze/introducing-sizzy-a-tool-for-developing-responsive-websites-crazy-fast-39a8c0061992"
          />
          <HeaderLink
            icon="video-camera"
            text="Coding"
            link="https://www.youtube.com/playlist?list=PLeRG3Z4BGWXR1yE8176LxtAj0Xyb_VI7L"
          />
          <HeaderLink
            icon="chrome"
            text="Extension"
            link="https://chrome.google.com/webstore/detail/sizzy/nfhlbmjiiogoelaflfclodlkncbdiefo"
          />
        </ToolbarRight>

      </Toolbar>
    );
  }
}

export default ToolbarComponent;
