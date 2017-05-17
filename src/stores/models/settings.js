// @flow
import type {DeviceSettings} from 'config/types';

import store from 'stores/store';

import {observable, action} from 'mobx';
import ORIENTATIONS from 'config/orientations';
import {getOppositeOrientation} from 'utils/utils';

class Settings {
  constructor(global: ?boolean) {
    if (global) {
      this.global = global;
    }
  }

  global: boolean = false;

  /* Observables */

  @observable zoom: number = 100;
  @observable showSizes: boolean = true;
  @observable showKeyboard: boolean = false;
  @observable orientation: string = ORIENTATIONS.PORTRAIT;

  /* Actions */

  @action update = ({
    zoom,
    orientation,
    showSizes,
    showKeyboard
  }: DeviceSettings) => {
    console.log('showKeyboard', showKeyboard);

    if (zoom !== undefined) {
      this.zoom = zoom;
    }
    if (orientation !== undefined) {
      this.orientation = orientation;
    }
    if (showSizes !== undefined) {
      this.showSizes = showSizes;
    }
    if (showKeyboard !== undefined) {
      this.showKeyboard = showKeyboard;
    }
  };

  //if global zoom/orientation changed, update all devices
  @action modifyGlobalSettings = (settings: DeviceSettings) => {
    if (this.global === true) {
      store.app.updateAllDevices(settings);
    }
  };

  @action reset = () => {
    this.zoom = 100;
    this.orientation = ORIENTATIONS.PORTRAIT;
    this.showSizes = true;
    this.showKeyboard = false;
  };

  @action setZoom = (value: number) => {
    const zoom = value;
    this.zoom = zoom;
    this.modifyGlobalSettings({zoom});
  };

  @action toggleShowSizes = () => {
    const showSizes = !this.showSizes;
    this.showSizes = showSizes;
    this.modifyGlobalSettings({showSizes});
  };

  @action toggleOrientation = () => {
    const orientation = getOppositeOrientation(this.orientation);
    this.orientation = orientation;
    this.modifyGlobalSettings({orientation});
  };

  @action toggleKeyboard = () => {
    let showKeyboard = !this.showKeyboard;
    this.showKeyboard = showKeyboard;
    this.modifyGlobalSettings({showKeyboard});
  };

  /* Helpers */

  getValues = (): DeviceSettings => ({
    zoom: this.zoom,
    showSizes: this.showSizes,
    orientation: this.orientation,
    showKeyboard: this.showKeyboard
  });
}

export default Settings;
