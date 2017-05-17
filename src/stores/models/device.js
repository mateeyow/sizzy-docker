// @flow
import Settings from 'stores/models/settings';

class Device {
  name: ?string;
  tags: ?Array<string>;
  width: ?number;
  height: ?number;
  iconName: ?string;
  keyboardImg: ?{
    portrait: string,
    landscape: string
  };
  id: ?string;

  settings: Settings = new Settings();

  constructor(device: Object) {
    this.name = device.name;
    this.tags = device.tags;
    this.width = device.width;
    this.height = device.height;
    this.iconName = device.iconName;
    this.id = device.id;
    this.keyboardImg = device.keyboardImg;
  }
}

export default Device;
