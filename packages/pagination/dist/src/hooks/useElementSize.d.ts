type Size = {
    width: number;
    height: number;
};
type ElementSize<T> = [(node: T | null) => void, Size];
declare function useElementSize<T extends HTMLElement>(throttleTimeout?: number): ElementSize<T>;
export default useElementSize;
//# sourceMappingURL=useElementSize.d.ts.map