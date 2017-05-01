// @flow
import typeof store from 'stores/store';
import type {InputEvent} from 'config/types';

import React, {Component} from 'react';
import {onEnter} from 'utils/input-utils';
import {inject, observer} from 'mobx-react';

//styled-components
import {UrlBar, UrlInput, GoIcon} from './styles';

type Props = {
  store: any | store,
  styles: Object,
  className: ?string
};

@inject('store')
@observer
class UrlBarComponent extends Component {
  props: Props;

  static defaultProps = {
    store: null,
    styles: {},
    className: ''
  };

  render() {
    const {store, className, styles = {}} = this.props;
    const {app} = store;

    return (
      <UrlBar className={className}>
        <UrlInput
          {...onEnter(app.loadCurrentUrl)}
          onChange={(e: InputEvent) => app.setUrl(e.target.value)}
          value={app.url}
          type="text"
          placeholder="Enter an URL"
          styles={styles.input}
        />
        <GoIcon
          onClick={app.loadCurrentUrl}
          title="Go"
          name="arrow-circle-right"
          styles={styles.goIcon}
        />
      </UrlBar>
    );
  }
}

export default UrlBarComponent;
