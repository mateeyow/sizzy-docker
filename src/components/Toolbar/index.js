// @flow
import typeof store from "stores/store";

import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import Logo from './logo.svg'

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
  AppName,
  Filters,
  ButtonIcon
} from "./styles";
import { OS, DEVICE_TYPES } from "config/tags";

//components
import FilterIcon from "components/FilterIcon";
import UrlBar from "components/UrlBar";

type Props = {
  store: any | store
};

@inject("store")
@observer
class ToolbarComponent extends Component {
  static defaultProps = {
    store: null
  };

  props: Props;

  render() {
    const { store: { app } } = this.props;
    const { filters, settings, isValidUrl } = app;
    const { zoom, orientation } = settings;

    const smallZoom = zoom < 50;

    return (
      <Toolbar>

        <ToolbarLeft>
          <AppName onClick={app.resetToHome}>
            <img src={Logo} alt="Sizzy" width="70px"/>
           </AppName>
          {isValidUrl && <UrlBar />}
        </ToolbarLeft>

        <Filters>
          <FilterIcon
            title="Toggle Apple devices"
            toggleFilterfn={app.toggleFilter}
            filters={filters}
            toggle={OS.APPLE}
            icon="apple"
          />
          <FilterIcon
            title="Toggle Android devices"
            toggleFilterfn={app.toggleFilter}
            filters={filters}
            toggle={OS.ANDROID}
            icon="android"
          />
          <FilterIcon
            title="Toggle mobile devices"
            toggleFilterfn={app.toggleFilter}
            filters={filters}
            toggle={DEVICE_TYPES.PHONE}
            icon="mobile"
          />
          <FilterIcon
            title="Toggle tablet devices"
            toggleFilterfn={app.toggleFilter}
            filters={filters}
            toggle={DEVICE_TYPES.TABLET}
            icon="tablet"
          />
        </Filters>

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
        </ToolbarRightSide>

      </Toolbar>
    );
  }
}

export default ToolbarComponent;
