# 8x8 Oxygen - Radio

## Installation

```sh
$ yarn add @8x8/oxygen-radio
```

```sh
$ npm install @8x8/oxygen-radio
```

## Usage

```js
import Radio, { RadioGroup } from '@8x8/oxygen-radio';
```

```js
<Radio
  name="value0name"
  value="value0"
  label="Example Label"
  isChecked
/>
```

### RadioGroup using `fieldset` and `legend`
It is recommended to use native HTML elements fieldset and legend as it is a more robust solution.
```js
<RadioGroup value="value1">
  // RadioGroup is a fieldset HTML element
  // add a legend here in order to name the Radio group
  // which aids people using Assistive Technology
  // by announcing the group name on Radio focus
  <legend>Checkbox group title</legend>
  <Radio label="Example label 0" value="value0" name="value0name" />
  <Radio label="Example label 1" value="value1" name="value1name" />
  // As the component is not handling long words(strings without spaces) overflow, these should be sent as a custom
  component and then handled correspondingly
  <Radio label={<span>Looooooooooooooooooooooooooong label</span>} value="value2" name="valu2name" />
</RadioGroup>
```

### RadioGroup using heading, and aria-labelledby
If you do NOT or cannot use the above `fieldset` and `legend` pattern you can set the
RadioGroup as=div and use the role=radiogroup and aria-labelledby pattern
```js
<h3 id="radio-group-title">Checkbox group title</h3>
<RadioGroup as="div" role="radiogroup" aria-labelledby="radio-group-title" value="value1">
  <Radio label="Example label 0" value="value0" name="value0name" />
  <Radio label="Example label 1" value="value1" name="value1name" />
  // As the component is not handling long words(strings without spaces) overflow, these should be sent as a custom
  component and then handled correspondingly
  <Radio label={<span>Looooooooooooooooooooooooooong label</span>} value="value2" name="valu2name" />
</RadioGroup>
```

## Props

### Radio

| Name        | Type                                                                                                                       | Default   | Description                                                            |
| ----------- | -------------------------------------------------------------------------------------------------------------------------- | --------- | ---------------------------------------------------------------------- |
| theme       | object                                                                                                                     |           | Radio theme                                                            |
| testId      | string                                                                                                                     | 'RADIO'   | Radio test id                                                          |
| label       | node                                                                                                                       | ''        | Specifies the label content for the radio input                        |
| value       | <pre>oneOfType([<br /> number,<br /> string,<br /> bool,<br /> shape({<br /> id: string.isRequired,<br /> })<br />])</pre> | ''        | Radio input value (used to match with the selected value of the group) |
| name        | string                                                                                                                     | undefined | Specifies the name prop for the radio input                            |
| infoBoxText | node                                                                                                                       | undefined | Shows info icon and renders text inside Tooltip                        |
| infoBoxButtonLabel               | string                                                      | undefined         | Adds accessible aria-label to info button
| isChecked   | bool                                                                                                                       | false     | Specifies if the input is checked                                      |
| isDisabled  | bool                                                                                                                       | false     | Disabled state of the radio input                                      |
| onChange    | func                                                                                                                       | noop      | Callback for the radio input                                           |

### RadioGroup

| Name         | Type                                                                                                                        | Default | Description                                                           |
| ------------ | --------------------------------------------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------- |
| children     | oneOfType([array, node])                                                                                                    | null    | Radio inputs to be rendered                                           |
| isHorizontal | bool                                                                                                                        | false   | Specifies if the group should be displayed horizontally or vertically |
| name         | string                                                                                                                      | ''      | Name prop to be passed to the radio inputs                            |
| onChange     | func                                                                                                                        | noop    | Callback function to be passed to the radio inputs                    |
| theme        | object                                                                                                                      |         | Radio group theme                                                     |
| value        | <pre>oneOfType([<br /> number,<br /> string,<br /> bool,<br /> shape({<br /> id: string.isRequired,<br /> }),<br />])</pre> | ''      | Specifies the selected value from the radio group                     |

## Theme

To use the new Novo theme. To use it you'll need to import it and apply it via
config or directly via the `theme` props.

```js
import { set } from '@8x8/oxygen-config';
import { radioNovo, radioNovoDark, radioGroupNovo, radioGroupNovoDark } from '@8x8/oxygen-constants';

// Novo theme
set({
  radio: radioNovo,
  radioGroup: radioGroupNovo,
});

// Novo Dark theme
set({
  radio: radioNovoDark,
  radioGroup: radioGroupNovoDark,
});
```

### Classic

Radio

```json
{
  "borderSize": "1px",
  "borderStyle": "solid",
  "iconDotSize": "8px",
  "iconSelectedColor": "#0376DA",
  "iconSet": "classic",
  "iconSize": "16px",
  "iconSpacing": "8px",
  "iconUnselectedColor": "#A4B8D1",
  "labelColor": "#1C2025",
  "labelDisabledColor": "#1C2025"
}
```

RadioGroup

```json
{ "verticalGroupMargin": "8px", "horizontalGroupMargin": "16px" }
```

### Novo

Radio

```json
{
  "iconDisabledColor": "#C2C2C2",
  "iconSelectedColor": "#0056E0",
  "iconSet": "novo",
  "iconSize": 24,
  "iconSpacing": "12px",
  "iconUnselectedColor": "#A3A3A3",
  "labelColor": "#292929",
  "labelDisabledColor": "#C2C2C2"
}
```

RadioGroup

```json
{ "verticalGroupMargin": "8px", "horizontalGroupMargin": "24px" }
```

### Novo Dark

Radio

```json
{
  "iconDisabledColor": "#666666",
  "iconSelectedColor": "#246FE5",
  "iconSet": "novo",
  "iconSize": 24,
  "iconSpacing": "12px",
  "iconUnselectedColor": "#858585",
  "labelColor": "#FFFFFF",
  "labelDisabledColor": "#666666"
}
```

RadioGroup

```json
{ "verticalGroupMargin": "8px", "horizontalGroupMargin": "24px" }
```
