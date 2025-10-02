# 8x8 Oxygen - Time Selector

## Installation

```sh
$ yarn add @8x8/oxygen-time-selector
```

```sh
$ npm install @8x8/oxygen-time-selector
```

## Usage

```js
import TimeSelector from '@8x8/oxygen-time-selector';
```

```js
<TimeSelector value={timeValue} onChange={onTimeSelectorChange} placeholder="Select time"/>
```

## Available styled components

- PopperContainer
- DropdownContainer
- ListItem

## Props

| Name              | Type                                                    | Default         | Description                                                                                                                                                                                                                                                           |
|-------------------|---------------------------------------------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| hasError          | bool                                                    | false           | Tell when the Time Selector has error                                                                                                                                                                                                                                 |
| isDisabled        | bool                                                    | false           | Disable the component                                                                                                                                                                                                                                                 |
| isLeftIconVisible | bool                                                    | false           | Tell if the icon on the left side of time input is visible                                                                                                                                                                                                            |
| timeDisplayFormat | string                                                  | 'h:mm a'        | Formatter string to display the time in Input and Dropdown list. Uses `date-fns` library for formatting, the formatter strings can be composed using date-fns config. <a href="https://date-fns.org/v2.28.0/docs/format" target="_blank">date-fns formatting docs</a> |
| size              | oneOf(['small', 'default'])                             | 'default'       | Define Input size                                                                                                                                                                                                                                                     |
| iconLeft          | oneOfType([func, node])                                 | ClockIcon       | The icon to show on the left of the input (visibility conditioned by `isLeftIconVisible` flag)                                                                                                                                                                        |
| placeholder       | string                                                  | ''              | Render placeholder text inside input                                                                                                                                                                                                                                  |
| value             | shape({hours: number, minutes: number, seconds: number} | undefined       | Value/initial value of the time selector                                                                                                                                                                                                                              |
| id                | string                                                  | undefined       | Define id attribute for input element                                                                                                                                                                                                                                 |
| testId            | string                                                  | 'TIME_SELECTOR' | Test ID DOM attribute value                                                                                                                                                                                                                                           |
| onChange          | func                                                    | noop            | Callback on time selector value change                                                                                                                                                                                                                                |
| onOpen            | func                                                    | noop            | Callback function executed after the time selector dropdown opens                                                                                                                                                                                                     |
| onClose           | func                                                    | noop            | Callback function executed after the time selector dropdown closes                                                                                                                                                                                                    |
| theme             | object                                                  |                 | Theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants                                                                                                                                           |

## Theme

### Classic

```json
{
  "input": {},
  "dropdownAnimationDuration": "150ms",
  "dropdownZIndex": 3000,
  "dropdownBorderSize": "1px",
  "dropdownBorderColor": "#D1DBE8",
  "dropdownBorderRadius": 0,
  "dropdownShadowBlurRadius": "4px",
  "dropdownShadowColor": "rgba(209,219,232,0.6)",
  "dropdownShadow": undefined,
  "dropdownFontSize": "15px",
  "dropdownLineHeight": "24px",
  "dropdownFontFamily": "'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  "dropdownWidth": "140px",
  "dropdownMaxHeight": "160px",
  "dropdownPadding": "0x",
  "listItemPadding": "4px 8px",
  "listItemBackground": "#FFF",
  "listItemBackgroundHover": "#F0F3F7",
  "listItemBackgroundSelected": "#DAEBFA",
  "listItemColor": "#2A3A4B"
}
```

### Novo

```json
{
  "input": {},
  "dropdownAnimationDuration": "150ms",
  "dropdownZIndex": 3000,
  "dropdownBorderSize": "1px",
  "dropdownBorderColor": "#E0E0E0",
  "dropdownBorderRadius": "6px",
  "dropdownShadowBlurRadius": undefined,
  "dropdownShadowColor": undefined,
  "dropdownShadow": "0px 1px 2px rgba(41,41,41,0.25)",
  "dropdownFontSize": "16px",
  "dropdownLineHeight": "22px",
  "dropdownFontFamily": "Inter, sans-serif",
  "dropdownWidth": "160px",
  "dropdownMaxHeight": "160px",
  "dropdownPadding": "8px 0x",
  "listItemPadding": "9px 15px",
  "listItemBackground": "#FFFFFF",
  "listItemBackgroundHover": "#F1F1F1",
  "listItemBackgroundSelected": "#F1F1F1",
  "listItemColor": "#292929"
}
```

### NovoDark

```json
{
  "input": {},
  "dropdownAnimationDuration": "150ms",
  "dropdownZIndex": 3000,
  "dropdownBorderSize": "1px",
  "dropdownBorderColor": "#666666",
  "dropdownBorderRadius": "6px",
  "dropdownShadowBlurRadius": undefined,
  "dropdownShadowColor": undefined,
  "dropdownShadow": "0px 1px 2px rgba(255,255,255,0.25)",
  "dropdownFontSize": "16px",
  "dropdownLineHeight": "22px",
  "dropdownFontFamily": "Inter, sans-serif",
  "dropdownWidth": "160px",
  "dropdownMaxHeight": "160px",
  "dropdownPadding": "8px 0x",
  "listItemPadding": "9px 15px",
  "listItemBackground": "#171719",
  "listItemBackgroundHover": "#2F2E32",
  "listItemBackgroundSelected": "#2F2E32",
  "listItemColor": "#FFFFFF"
}
```
