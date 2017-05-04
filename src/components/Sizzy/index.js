// @flow
import typeof store from 'stores/store';
import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import keydown from 'react-keydown';

//styled-components
import {Sizzy, Devices} from './styles';

//components
import Device from 'components/Device';
import Sidebar from 'components/Sidebar';
import VerticalDeviceList from 'components/VerticalDeviceList';

//external
import Measure from 'react-measure';

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

  @keydown('left', 'right', 'r', 'f')
  submit(event: Object) {
    this.props.store.app.onKeyPress(event.key);
  }

  render() {
    const {store: {app}, children} = this.props;

    const {
      theme,
      urlToLoad,
      url,
      isVisible,
      settings,
      devices,
      focusedDeviceId,
      devicesSpaceHeight
    } = app;

    const {zoom, orientation} = settings;

    return (
      <Sizzy>
        {!focusedDeviceId && <Sidebar />}

        {focusedDeviceId &&
          <VerticalDeviceList
            setFocusedDevice={app.setFocusedDevice}
            focusedDeviceId={focusedDeviceId}
            devices={devices}
          />}

        <Measure onMeasure={app.onDevicesSpaceMeasure}>
          <Devices hasFocusedDevice={!!focusedDeviceId}>
            {devices.map((device, key) => (
              <Device
                key={key}
                appHasFocusedDevice={!!focusedDeviceId}
                toggleFocusDevice={app.toggleFocusDevice}
                devicesSpaceHeight={devicesSpaceHeight}
                orientation={orientation}
                visible={
                  focusedDeviceId
                    ? device.id === focusedDeviceId
                    : isVisible(device)
                }
                zoom={zoom}
                theme={theme}
                url={url}
                urlToLoad={urlToLoad}
                device={device}
              >
                {children}
              </Device>
            ))}
          </Devices>
        </Measure>

      </Sizzy>
    );
  }
}

export default SizzyComponent;
