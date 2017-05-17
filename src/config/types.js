// @flow
export type InputEvent = {
  target: {
    value: any
  }
};

export type DeviceSettings = {
  zoom?: number,
  orientation?: string,
  showSizes?: boolean,
  showKeyboard?: boolean
};

export type MeasureObject = {
  height: number,
  width: number
};
