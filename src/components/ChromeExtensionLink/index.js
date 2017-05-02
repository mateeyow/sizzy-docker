import React, {Component} from 'react';

//styled-components
import {ChromeExtensionLink, Icon, Text} from './styles';
import {iconClassName} from './styles';

class ChromeExtensionLinkComponent extends Component {
  render() {
    return (
      <ChromeExtensionLink
        href="https://chrome.google.com/webstore/detail/sizzy/nfhlbmjiiogoelaflfclodlkncbdiefo"
        target="_blank"
      >
        <Icon className={iconClassName} name="chrome" />
        <Text>
          Download Chrome Extension
        </Text>
      </ChromeExtensionLink>
    );
  }
}

export default ChromeExtensionLinkComponent;
