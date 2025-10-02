export default class VirtualReference {
  clientRect = {
    width: 0,
    height: 0,
    top: undefined,
    bottom: undefined,
    left: undefined,
    right: undefined,
  };

  constructor(x, y) {
    this.clientRect = {
      ...this.clientRect,
      left: x,
      right: x,
      top: y,
      bottom: y,
      width: 0,
      height: 0,
    };
  }

  getBoundingClientRect() {
    return this.clientRect;
  }

  get clientWidth() {
    return this.getBoundingClientRect.width;
  }

  get clientHeight() {
    return this.getBoundingClientRect.height;
  }
}
