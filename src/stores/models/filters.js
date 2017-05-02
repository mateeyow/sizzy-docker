// @flow
import {observable, computed} from 'mobx';
import {toggleInArray} from 'utils/array-utils';

class Filters {
  @observable filters: Array<string> = [];

  toggleFilter = (filterName: string) => {
    this.filters = toggleInArray(this.filters, filterName);
  };

  shouldShow = (filterName: string) => {
    return this.isEmpty || this.contains(filterName);
  };

  contains = (filterName: string) => {
    return this.filters.indexOf(filterName) !== -1;
  };

  @computed get isEmpty(): boolean {
    return this.filters.length === 0;
  }
}

export default Filters;
