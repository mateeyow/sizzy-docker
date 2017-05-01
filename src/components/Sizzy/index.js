// @flow
import typeof store from 'stores/store';
import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

//styled-components
import {Sizzy, Devices} from './styles';

//components
import Device from 'components/Device';
import Sidebar from 'components/Sidebar';

type Props = {
  store: any | store,
  children?: React.Element<*>
};

@inject('store')
@observer
class SizzyComponent extends Component {
  props: Props;

  static defaultProps = {
    store: null
  };

  render() {
    const {store: {app}, children} = this.props;

    const {theme, urlToLoad, url, isVisible, settings, devices} = app;

    const {zoom, orientation} = settings;

    return (
      <Sizzy>
        <Sidebar />
        {/* todo: revert */}
        {false &&
          <Devices>
            {devices.map((device, key) => (
              <Device
                key={key}
                orientation={orientation}
                visible={isVisible(device)}
                zoom={zoom}
                theme={theme}
                url={url}
                urlToLoad={urlToLoad}
                device={device}
              >
                {children}
              </Device>
            ))}
          </Devices>}
      </Sizzy>
    );
  }
}

export default SizzyComponent;
