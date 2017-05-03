// @flow
import React, {Component} from 'react';

//styled-components
import {HeaderLink, Icon, Text, RouterLink} from './styles';

type Props = {
  icon: string,
  text: string,
  link?: string,
  view?: Object,
  router?: Object
};

class HeaderLinkComponent extends Component {
  props: Props;

  render() {
    const {icon, text, router, view, link} = this.props;

    if (view) {
      return (
        <RouterLink view={view} router={router}>
          <Icon name={icon} />
          <Text> {text} </Text>
        </RouterLink>
      );
    }

    return (
      <HeaderLink href={link} target="_blank">
        <Icon name={icon} />
        <Text> {text} </Text>
      </HeaderLink>
    );
  }
}

export default HeaderLinkComponent;
