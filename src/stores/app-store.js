// @flow
import type {DeviceSettings, MeasureObject} from 'config/types';
import {observable, action, computed} from 'mobx';
import {isWebUri} from 'valid-url';
import {isUrlSameProtocol, getOppositeProtocol} from 'utils/url-utils';
import allDevices from 'config/devices';
import store from 'stores/store';
import views from 'config/views';
//constants
import {LOADING_TIME_MS} from 'config/constants';
import KEYS from 'config/keys';

//models
import Settings from 'stores/models/settings';
import Device from 'stores/models/device';
import Filters from 'stores/models/filters';

//config
import themes from 'styles/themes';
import devices from 'config/devices';

//lodash
import filter from 'lodash/filter';
import map from 'lodash/map';
import findIndex from 'lodash/findIndex';
import find from 'lodash/find';

class AppStore {
  /* Observables */
  @observable themeIndex: number = 1;
  @observable url: string;
  @observable devicesSpaceHeight: number;
  @observable urlToLoad: string;
  @observable loading: boolean = false;
  @observable showWelcomeContent: boolean = true;
  @observable focusedDeviceId: ?string;
  @observable sidebarFullSize: boolean = true;
  @observable deviceTypeFilters: Filters = new Filters();
  @observable osFilters: Filters = new Filters();
  @observable devices: Array<Device> = map(
    allDevices,
    device => new Device(device)
  );
  settings: Settings = new Settings(true);

  /* Actions */

  @action toggleFocusDevice = (focusedDeviceId: ?string) => {
    this.focusedDeviceId = this.focusedDeviceId ? null : focusedDeviceId;
  };

  @action setFocusedDevice = (focusedDeviceId: string) => {
    this.focusedDeviceId = focusedDeviceId;
  };

  //update zoom/orientation values of all devices with the global settings
  @action updateAllDevices = (settings: DeviceSettings) => {
    this.devices.forEach(device => device.settings.update(settings));
  };

  @action resetAllSettings = () => {
    this.themeIndex = 1;
    this.settings.reset();
    const currentSettings = this.settings.getValues();
    this.updateAllDevices(currentSettings);
    this.focusedDeviceId = undefined;
  };

  @action toggleSidebar = () => {
    this.sidebarFullSize = !this.sidebarFullSize;
  };

  @action navigateToDeviceInDirection = (direction: 'left' | 'right') => {
    const currentDeviceIndex = findIndex(this.devices, {
      id: this.focusedDeviceId
    });

    let nextDeviceIndex = 0;

    if (direction === 'left') {
      nextDeviceIndex = currentDeviceIndex === 0
        ? this.devices.length - 1
        : currentDeviceIndex - 1;
    } else if (direction === 'right') {
      nextDeviceIndex = currentDeviceIndex < this.devices.length - 1
        ? currentDeviceIndex + 1
        : 0;
    }

    const nextDevice = this.devices[nextDeviceIndex];

    if (nextDevice && nextDevice.id) {
      this.setFocusedDevice(nextDevice.id);
    }
  };

  @action rotateCurrentDevice = () => {
    const currentDevice = this.getCurrentDevice();
    if (currentDevice) {
      currentDevice.settings.toggleOrientation();
    }
  };

  @action toggleKeyboardOnDevice = () => {
    const currentDevice = this.getCurrentDevice();
    if (currentDevice) {
      currentDevice.settings.toggleKeyboard();
    }
  };

  @action onKeyPress = (key: string) => {
    if (this.focusedDeviceId) {
      if (key === KEYS.ARROW_LEFT) {
        this.navigateToDeviceInDirection('left');
      } else if (key === KEYS.ARROW_RIGHT) {
        this.navigateToDeviceInDirection('right');
      } else if (key === KEYS.R) {
        this.rotateCurrentDevice();
      } else if (key === KEYS.K) {
        this.toggleKeyboardOnDevice();
      }
    }

    if (key === KEYS.F) {
      this.toggleFocusedMode();
    }
  };

  @action clearFocusedDevice = () => {
    this.focusedDeviceId = null;
  };

  @action toggleFocusedMode = () => {
    if (this.focusedDeviceId) {
      this.clearFocusedDevice();
    } else {
      let firstDevice = this.devices[0];
      if (firstDevice && firstDevice.id) {
        this.setFocusedDevice(firstDevice.id);
      }
    }
  };

  @action setUrl = (url: string) => (this.url = url);

  @action setUrltoLoad = (
    urlToLoad: string,
    redirectOnProtocolChange: boolean = false,
    insertIntoUrl: boolean = false
  ) => {
    if (urlToLoad !== this.urlToLoad) {
      let {protocol, host} = window.location;

      if (!urlToLoad || urlToLoad.trim() === '') {
        return false;
      }

      //if invalid url (doesn't have protcol), try to append current protocol
      if (!isWebUri(urlToLoad)) {
        const urlWithProtocol = `${protocol}//${urlToLoad}`;
        urlToLoad = urlWithProtocol;
      }

      let urlIsSameProtocol = isUrlSameProtocol(urlToLoad, protocol);
      let oppositeProtocol = getOppositeProtocol(protocol);

      let shouldRefreshPage =
        !urlIsSameProtocol && redirectOnProtocolChange === true;

      if (shouldRefreshPage && oppositeProtocol !== false) {
        const newUrl = `${oppositeProtocol}//${host}?url=${urlToLoad}`;
        return (window.location.href = newUrl);
      }

      this.showLoadingAnimation();

      this.urlToLoad = urlToLoad;
      this.url = urlToLoad;

      if (insertIntoUrl) {
        store.router.goTo(views.home, {}, store, {url: this.urlToLoad});
      }
    }
  };

  @action showLoadingAnimation = () => {
    this.loading = true;
    this.showWelcomeContent = false;

    setTimeout(() => {
      this.loading = false;
    }, LOADING_TIME_MS);
  };

  @action loadCurrentUrl = () => {
    this.setUrltoLoad(this.url, true, true);
  };

  //cycle through themes
  @action switchTheme = () => {
    const themeKeys = Object.keys(themes);
    let newThemeIndex = this.themeIndex + 1;
    this.themeIndex = newThemeIndex >= themeKeys.length ? 0 : newThemeIndex;
  };

  @action resetToHome = () => (window.location.href = window.location.origin);

  @action loadExampleUrl = () => {
    const exampleUrl = `${window.location.protocol}//kitze.io`;
    this.setUrl(exampleUrl);
    this.setUrltoLoad(exampleUrl, false, true);
  };

  @action onDevicesSpaceMeasure = ({height}: MeasureObject) => {
    this.devicesSpaceHeight = height;
  };

  /* Computed */

  @computed get filteredDeviceNames(): Array<string> {
    let filteredDevices = filter(devices, device => {
      return (
        this.osFilters.shouldShow(device.os) &&
        this.deviceTypeFilters.shouldShow(device.type)
      );
    });
    return map(filteredDevices, device => device.name);
  }

  @computed get theme(): Object {
    return themes[Object.keys(themes)[this.themeIndex]];
  }

  @computed get isValidUrl(): boolean {
    return isWebUri(this.urlToLoad);
  }

  @computed get urlIsLoaded(): boolean {
    return this.isValidUrl && this.loading === false;
  }

  /* Helpers */

  getCurrentDevice = (): ?Device => {
    if (this.focusedDeviceId) {
      const currentDevice = find(this.devices, {id: this.focusedDeviceId});
      return currentDevice;
    }
    return null;
  };

  isVisible = (device: Device) => {
    return device && device.name
      ? this.filteredDeviceNames.indexOf(device.name) !== -1
      : false;
  };
}

export default AppStore;
