// @flow
import React, {Component} from 'react';

//styled-components
import {FilterIcon} from './styles';

type Props = {
  title: string,
  selected: boolean,
  icon: string,
  toggleFilterfn: () => any
};

class FilterIconComponent extends Component {
  props: Props;

  render() {
    const {selected, title, icon, toggleFilterfn} = this.props;

    return (
      <FilterIcon
        title={title}
        onClick={toggleFilterfn}
        name={icon}
        selected={selected}
      />
    );
  }
}

export default FilterIconComponent;
