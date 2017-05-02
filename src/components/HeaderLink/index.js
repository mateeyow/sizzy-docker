// @flow
import React, {Component} from 'react';

//styled-components
import {HeaderLink, Icon, Text} from './styles';

type Props = {
  icon: string,
  text: string,
  link: string
};

class HeaderLinkComponent extends Component {
  props: Props;

  render() {
    const {icon, text, link} = this.props;

    return (
      <HeaderLink href={link} target="_blank">
        <Icon name={icon} />
        <Text> {text} </Text>
      </HeaderLink>
    );
  }
}

export default HeaderLinkComponent;
