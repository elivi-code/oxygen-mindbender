type CB = () => void;

export default class PausableTimeout {
  timeoutId: ReturnType<typeof setTimeout> = undefined;
  start: number = undefined;
  remaining: number = undefined;
  callback: CB = undefined;

  constructor(callback: CB, delay: number) {
    this.remaining = delay;
    this.callback = callback;

    this.resume();
  }

  resume() {
    this.start = new Date().getTime();

    clearTimeout(this.timeoutId);

    this.timeoutId = setTimeout(this.callback, this.remaining);
  }

  pause() {
    clearTimeout(this.timeoutId);

    this.remaining -= new Date().getTime() - this.start;
  }

  clear() {
    clearTimeout(this.timeoutId);
  }
}
