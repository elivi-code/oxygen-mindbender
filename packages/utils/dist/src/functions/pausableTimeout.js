export default class PausableTimeout {
    constructor(callback, delay) {
        this.timeoutId = undefined;
        this.start = undefined;
        this.remaining = undefined;
        this.callback = undefined;
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
