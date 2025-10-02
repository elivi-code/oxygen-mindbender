type CB = () => void;
export default class PausableTimeout {
    timeoutId: ReturnType<typeof setTimeout>;
    start: number;
    remaining: number;
    callback: CB;
    constructor(callback: CB, delay: number);
    resume(): void;
    pause(): void;
    clear(): void;
}
export {};
//# sourceMappingURL=pausableTimeout.d.ts.map