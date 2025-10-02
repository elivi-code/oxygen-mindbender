import { SliderProps } from '../types';
export declare const SliderContainer: import("styled-components").StyledComponent<"div", any, Pick<SliderProps, "isDisabled">, never>;
export declare const TrackAfterMax: import("styled-components").StyledComponent<"div", any, Pick<SliderProps, "theme" | "isDisabled"> & {
    width: string;
    expandTrackAreaBy: string;
    isHovered?: boolean;
}, never>;
export declare const TrackBeforeMin: import("styled-components").StyledComponent<"div", any, Pick<SliderProps, "theme" | "isDisabled"> & {
    width: string;
    isMultiple?: boolean;
    isActive?: boolean;
    isFocused?: boolean;
    expandTrackAreaBy: string;
    isHovered?: boolean;
}, never>;
export declare const HalfProgress: import("styled-components").StyledComponent<"div", any, {
    left: string;
    width: string;
    isDisabled: boolean;
    isActive: boolean;
    isFocused: boolean;
    expandTrackAreaBy: string;
    isHovered?: boolean;
}, never>;
export declare const InputForDraggableRange: import("styled-components").StyledComponent<"input", any, {
    left: string;
    width: string;
    expandTrackAreaBy: string;
}, never>;
export declare const SliderInput: import("styled-components").StyledComponent<"input", any, {
    type: "range";
    role: "slider";
} & Pick<SliderProps, "theme" | "isMultiple" | "isDisabled" | "expandTrackAreaBy"> & {
    isActive?: boolean;
    isHovered?: boolean;
    isFocused?: boolean;
}, "type" | "role">;
//# sourceMappingURL=Slider.d.ts.map