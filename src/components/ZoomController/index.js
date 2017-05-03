// @flow
import React, {Component} from 'react';
import type {InputEvent} from 'config/types';

//styled-components
import {
  ZoomController,
  ZoomLabel,
  ZoomLevel,
  Text,
  FullSize,
  Minimal,
  ZoomLevelButton,
  Input
} from './styles';

type Props = {
  zoom: number,
  setZoom: () => {},
  fullSize: boolean
};

class ZoomControllerComponent extends Component {
  props: Props;

  render() {
    const {zoom, setZoom, fullSize} = this.props;

    return (
      <ZoomController>
        {fullSize &&
          <FullSize>
            <Text>
              <ZoomLabel> Zoom </ZoomLabel>
              <ZoomLevel>({zoom}%)</ZoomLevel>
            </Text>
            <Input
              type="range"
              min="25"
              max="100"
              onChange={(e: InputEvent) => setZoom(e.target.value)}
              value={zoom}
            />
          </FullSize>}

        {!fullSize &&
          <Minimal>
            <ZoomLevelButton onClick={() => setZoom(25)}> 25% </ZoomLevelButton>
            <ZoomLevelButton onClick={() => setZoom(50)}> 50% </ZoomLevelButton>
            <ZoomLevelButton onClick={() => setZoom(75)}> 75% </ZoomLevelButton>
            <ZoomLevelButton onClick={() => setZoom(100)}>
              100%
            </ZoomLevelButton>
          </Minimal>}

      </ZoomController>
    );
  }
}

export default ZoomControllerComponent;
