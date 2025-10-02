# 8x8 Oxygen - Slider

## Installation

```sh
$ yarn add @8x8/oxygen-slider
```

```sh
$ npm install @8x8/oxygen-slider
```

## Usage

```js
import Slider from '@8x8/oxygen-slider';
```

```js
<Slider
  isDisabled={false}
  isTrackDraggable={false}
  minValue={0}
  maxValue={100}
  step={1}
  value={value}
  ariaLabel="slider-inputs-name"
  onChange={onValueChange}
  onDragStart={onSliderDragStartAction}
  onDragEnd={onSliderDragEndAction}
/>
```

```js
// for normal slider
value = 10;
```

```js
// for range slider
value = {
  min: 10,
  max: 30,
};
```

## Props

| Name                 | Type                                       | Default     | Description                                                                                                                                                                                                                                              |
| -------------------- | ------------------------------------------ | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`              | `number  \| { min: number; max: number; }` | `undefined` | Current value. The type is based on `isMultiple`                                                                                                                                                                                                         |
| `isMultiple?`        | `boolean`                                  | `undefined` | Tells if the slider have one or two thumbs                                                                                                                                                                                                               |
| `minValue?`          | `number`                                   | `0`         | Minimum slider value                                                                                                                                                                                                                                     |
| `maxValue?`          | `number`                                   | `10`        | Maximum slider value                                                                                                                                                                                                                                     |
| `step?`              | `number`                                   | `1`         | Increment/decrement value                                                                                                                                                                                                                                |
| `isTrackDraggable?`  | `boolean`                                  | `undefined` | Enable track dragging within the slider, only enabled when `isMultiple`                                                                                                                                                                                  |
| `isDisabled?`        | `boolean`                                  | `undefined` | Disable slider                                                                                                                                                                                                                                           |
| `ariaLabel?`         | `string`                                   | `undefined` | Attribute for identifying the slider <br />For normal slider, one input will be created, with this name and slider value. <br />For range slider, two input will be created, with name [name] Minimum and [name] Maximum with the values of range slider |
| `onChange?`          | `func`                                     | noop        | Callback for when the slider values change                                                                                                                                                                                                               |
| `onDragStart?`       | `func`                                     | noop        | Callback executed when the drag action starts                                                                                                                                                                                                            |
| `onDragEnd?`         | `func`                                     | noop        | Callback executed on drag action ends                                                                                                                                                                                                                    |
| `expandKnobAreaBy?`  | `string`                                   | `""`        | _Deprecated_ Expand the Knob clickable area by received value                                                                                                                                                                                            |
| `expandTrackAreaBy?` | `string`                                   | `"24px"`    | Expand the Track clickable area by received value                                                                                                                                                                                                        |
| `theme?`             | `object`                                   |             | Theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants                                                                                                                              |
