import React, {Component} from 'react';

//styled-components
import {VerticalDeviceList, Device} from './styles';

class VerticalDeviceListComponent extends Component {
  render() {
    const {devices, focusedDeviceId, setFocusedDevice} = this.props;

    return (
      <VerticalDeviceList>
        {devices.map(device => (
          <Device
            selected={focusedDeviceId === device.id}
            onClick={() => setFocusedDevice(device.id)}
          >
            {device.name}
          </Device>
        ))}
      </VerticalDeviceList>
    );
  }
}

export default VerticalDeviceListComponent;
