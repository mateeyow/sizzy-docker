// @flow
import typeof store from 'stores/store';

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import filterTypes from 'config/filter-types';

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
  Filters,
  ButtonIcon
} from './styles';
import {OS, DEVICE_TYPES} from 'config/tags';

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
    const {
      osFilters,
      deviceTypeFilters,
      settings,
      isValidUrl,
      urlIsLoaded
    } = app;
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
          <Filters>
            <FilterIcon
              title="Toggle Apple devices"
              toggleFilterfn={() =>
                osFilters.toggleFilter(OS.APPLE, filterTypes.OS)}
              selected={osFilters.contains(OS.APPLE)}
              icon="apple"
            />
            <FilterIcon
              title="Toggle Android devices"
              toggleFilterfn={() =>
                osFilters.toggleFilter(OS.ANDROID, filterTypes.OS)}
              selected={osFilters.contains(OS.ANDROID)}
              icon="android"
            />
            <FilterIcon
              title="Toggle mobile devices"
              toggleFilterfn={() =>
                deviceTypeFilters.toggleFilter(
                  DEVICE_TYPES.PHONE,
                  filterTypes.DEVICE_TYPE
                )}
              selected={deviceTypeFilters.contains(DEVICE_TYPES.PHONE)}
              icon="mobile"
            />
            <FilterIcon
              title="Toggle tablet devices"
              toggleFilterfn={() =>
                deviceTypeFilters.toggleFilter(
                  DEVICE_TYPES.TABLET,
                  filterTypes.DEVICE_TYPE
                )}
              selected={deviceTypeFilters.contains(DEVICE_TYPES.TABLET)}
              icon="tablet"
            />
          </Filters>}

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
