/* eslint-disable */
import React from 'react';

interface SliderProps {
  /**
   * Expand the Knob clickable area by received value
   */
  expandKnobAreaBy?: string;
  /**
   * Expand the Track clickable area by received value
   */
  expandTrackAreaBy?: string;
  /**
   * Theme object
   */
  theme?: object;
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
   * Current value
   */
  value: number | { min: number; max: number };
  /**
   * Enable track dragging within the slider
   */
  isTrackDraggable?: boolean;
  /**
   * Disable slider
   */
  isDisabled?: boolean;
  /**
   * Name for the hidden inputs.
   * For normal slider, one input will be created, with this name and slider value.
   * For range slider, two input will be created, with name [name]Min and [name]Max with the values of range slider
   */
  name?: string;
  /**
   * Callback for when the slider values change
   */
  onChange?(): void;
  /**
   * Callback executed when the drag action starts
   */
  onDragStart?(): void;
  /**
   * Callback executed on drag action ends
   */
  onDragEnd?(): void;
}

declare class Slider extends React.Component<SliderProps, any> {}

export default Slider;
