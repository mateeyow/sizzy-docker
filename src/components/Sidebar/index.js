import typeof store from 'stores/store';
import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import filterTypes from 'config/filter-types';
import {OS, DEVICE_TYPES} from 'config/tags';
import {ThemeProvider, withTheme} from 'styled-components';

//styled-components
import {
  Sidebar,
  Filters,
  ButtonIcon,
  ToolbarButton,
  ToolbarButtons,
  Top,
  Label,
  ButtonText
} from './styles';

//components
import FilterIcon from 'components/FilterIcon';
import ZoomController from 'components/ZoomController';

type Props = {
  store: any | store
};

@inject('store')
@observer
class SidebarComponent extends Component {
  props: Props;

  static defaultProps = {
    store: null
  };

  render() {
    const {store, theme} = this.props;
    const {app} = store;
    const {
      osFilters,
      deviceTypeFilters,
      sidebarFullSize,
      urlIsLoaded,
      settings
    } = app;
    const {zoom, orientation} = settings;
    const smallZoom = zoom < 50;

    return (
      <ThemeProvider theme={{...theme, sidebarFullSize}}>
        <Sidebar>

          <Top>

            <Label> {sidebarFullSize ? 'Filter devices by OS' : 'OS'} </Label>

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
            </Filters>

            <Label>
              {sidebarFullSize ? 'Filter devices by type' : 'Type'}
            </Label>

            <Filters>
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
            </Filters>

            <ToolbarButtons>

              <Label> Settings </Label>

              <ToolbarButton
                disabled={smallZoom}
                title="Toggle sizes"
                onClick={app.settings.toggleShowSizes}
              >
                <ButtonIcon name="television" />
                {sidebarFullSize &&
                  <ButtonText>

                    {app.settings.showSizes ? 'Hide' : 'Show'}

                    dimensions

                  </ButtonText>}
              </ToolbarButton>

              <ToolbarButton
                title="Reset all settings"
                onClick={app.resetAllSettings}
              >
                <ButtonIcon name="repeat" />
                {sidebarFullSize &&
                  <ButtonText> Reset all settings</ButtonText>}
              </ToolbarButton>

              <ToolbarButton
                title="Switch orientation"
                onClick={app.settings.toggleOrientation}
              >
                <ButtonIcon orientation={orientation} name="mobile" />
                {sidebarFullSize &&
                  <ButtonText> Switch orientation </ButtonText>}
              </ToolbarButton>

              <ToolbarButton title="Switch theme" onClick={app.switchTheme}>
                <ButtonIcon name="paint-brush" />
                {sidebarFullSize && <ButtonText> Switch theme </ButtonText>}
              </ToolbarButton>

            </ToolbarButtons>

          </Top>
          <ZoomController zoom={zoom} setZoom={app.settings.setZoom} />

        </Sidebar>
      </ThemeProvider>
    );
  }
}

export default withTheme(SidebarComponent);
