import typeof store from 'stores/store';
import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import filterTypes from 'config/filter-types';
import {OS, DEVICE_TYPES} from 'config/tags';

//styled-components
import {Sidebar, Filters} from './styles';

//components
import FilterIcon from 'components/FilterIcon';

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
    const {store} = this.props;
    const {app} = store;
    const {osFilters, deviceTypeFilters, urlIsLoaded} = app;

    return (
      <Sidebar opened={true}>
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
      </Sidebar>
    );
  }
}

export default SidebarComponent;
