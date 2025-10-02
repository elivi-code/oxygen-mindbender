import { SliderState } from '../../types';
export declare const useSliderState: () => {
    state: SliderState;
    setFocused: (focused: boolean) => void;
    setActive: (active: boolean) => void;
    setBeforeThumbTrackWidth: (width: string) => void;
    setAfterThumbTrackWidth: (width: string) => void;
    setFirstHalfProgressLeft: (left: string) => void;
    setSecondHalfProgressLeft: (left: string) => void;
    setHalfProgressWidth: (progress: string) => void;
    setHoveredObject: (hoveredObject: 'min' | 'max' | 'none') => void;
};
//# sourceMappingURL=useSliderState.d.ts.map