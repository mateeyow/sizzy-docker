// @flow
import typeof store from 'stores/store';

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

//images
import LogoSvg from 'img/logo.svg';

//styled-components
import {
  Toolbar,
  ToolbarButton,
  Zoom,
  ZoomLabel,
  ZoomLevel,
  ToolbarButtons,
  ToolbarRightSide,
  ToolbarLeft,
  Logo,
  ButtonIcon
} from './styles';

//components
import FilterIcon from 'components/FilterIcon';
import UrlBar from 'components/UrlBar';

type Props = {
  store: any | store
};

@inject('store')
@observer
class ToolbarComponent extends Component {
  static defaultProps = {
    store: null
  };

  props: Props;

  render() {
    const {store: {app}} = this.props;
    const {settings, isValidUrl, urlIsLoaded} = app;
    const {zoom, orientation} = settings;

    const smallZoom = zoom < 50;

    return (
      <Toolbar>

        <ToolbarLeft>
          <Logo
            onClick={app.resetToHome}
            src={LogoSvg}
            alt="Sizzy"
            width="70px"
          />
          {isValidUrl && <UrlBar />}
        </ToolbarLeft>

        {urlIsLoaded &&
          <ToolbarRightSide>
            <ToolbarButtons>
              <ToolbarButton
                disabled={smallZoom}
                title="Toggle sizes"
                onClick={app.settings.toggleShowSizes}
              >
                <ButtonIcon name="sort-numeric-asc" />
              </ToolbarButton>
              <ToolbarButton
                title="Reset all settings"
                onClick={app.resetAllSettings}
              >
                <ButtonIcon name="repeat" />
              </ToolbarButton>
              <ToolbarButton
                title="Switch orientation"
                onClick={app.settings.toggleOrientation}
              >
                <ButtonIcon orientation={orientation} name="mobile" />
              </ToolbarButton>
              <ToolbarButton title="Switch theme" onClick={app.switchTheme}>
                <ButtonIcon name="paint-brush" />
              </ToolbarButton>
            </ToolbarButtons>

            <Zoom>
              <ZoomLabel> Zoom </ZoomLabel>
              <ZoomLevel>({zoom}%)</ZoomLevel>
              <input
                type="range"
                min="25"
                max="100"
                onChange={app.settings.setZoom}
                value={zoom}
              />
            </Zoom>
          </ToolbarRightSide>}

      </Toolbar>
    );
  }
}

export default ToolbarComponent;
