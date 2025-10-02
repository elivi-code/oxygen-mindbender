/// <reference types="react" />
import { slider } from '@8x8/oxygen-constants';
export type SliderTheme = typeof slider;
export interface RangeType {
    min: number;
    max: number;
}
export type ValueType = number | RangeType;
export interface Coordinates {
    x: number;
    y: number;
}
export interface SliderState {
    focused: boolean;
    active: boolean;
    beforeThumbTrackWidth: string;
    afterThumbTrackWidth: string;
    firstHalfProgressLeft: string;
    secondHalfProgressLeft: string;
    halfProgressWidth: string;
    hoveredObject?: 'min' | 'max' | 'none';
}
export interface MultipleSliderState extends SliderState {
    hoveredMin?: boolean;
    hoveredMax?: boolean;
    minHalfProgress: number;
    maxHalfProgress: number;
}
export type CoordinatesType = {
    [key: string]: Coordinates;
};
interface BaseSliderProps extends Omit<React.ComponentPropsWithRef<'input'>, 'value' | 'onChange' | 'type' | 'role'> {
    /**
     * Theme object
     */
    theme?: SliderTheme;
    /**
     * Minimum slider value
     */
    minValue?: number;
    /**
     * Maximum slider value
     */
    maxValue?: number;
    /**
     * Increment/decrement value
     */
    step?: number;
    /**
     * Disable slider
     */
    isDisabled?: boolean;
    /**
     * Attribute used to identify the slider
     */
    ariaLabel?: string;
    /**
     * Callback executed when the drag action starts
     */
    onDragStart?: () => void;
    /**
     * Callback executed when the drag action ends
     */
    onDragEnd?: () => void;
    /**
     * Parameter used to extend the slider clickable area
     */
    expandTrackAreaBy?: string;
    /**
     * @deprecated
     * Parameter used to extend the knob clickable area
     */
    expandKnobAreaBy?: string;
    /**
     * Parameter used for testing purposes
     */
    testId?: string;
}
export interface MultipleSliderProps extends BaseSliderProps {
    /**
     * Tells if the slider have one or two thumbs
     */
    isMultiple?: true;
    /**
     * Current value
     */
    value: RangeType;
    /**
     * Callback for when the slider values change
     */
    onChange?: (props: RangeType) => void;
    /**
     * Enable track dragging within the slider
     */
    isTrackDraggable?: boolean;
}
export interface SingleSliderProps extends BaseSliderProps {
    /**
     * Tells if the slider have one or two thumbs
     */
    isMultiple?: false;
    /**
     * Current value
     */
    value: number;
    /**
     * Callback for when the slider values change
     */
    onChange?: (props: number) => void;
}
export type SliderProps = MultipleSliderProps | SingleSliderProps;
export {};
//# sourceMappingURL=types.d.ts.map