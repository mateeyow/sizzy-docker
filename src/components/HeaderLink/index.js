// @flow
import React, {Component} from 'react';

//styled-components
import {HeaderLink, Icon, Link} from './styles';

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
      <HeaderLink>
        <Icon name={icon} />
        <Link href={link} target="_blank"> {text} </Link>
      </HeaderLink>
    );
  }
}

export default HeaderLinkComponent;
