// @flow
import React, {Component} from 'react';

//styled-components
import {ZoomController, ZoomLabel, ZoomLevel, Text} from './styles';

type Props = {
  zoom: number,
  setZoom: () => {}
};

class ZoomControllerComponent extends Component {
  props: Props;

  render() {
    const {zoom, setZoom} = this.props;

    return (
      <ZoomController>
        <Text>
          <ZoomLabel> Zoom </ZoomLabel>
          <ZoomLevel>({zoom}%)</ZoomLevel>
        </Text>
        <input
          type="range"
          min="25"
          max="100"
          onChange={setZoom}
          value={zoom}
        />
      </ZoomController>
    );
  }
}

export default ZoomControllerComponent;
