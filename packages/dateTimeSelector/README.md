# 8x8 Oxygen - Date Time Selector

## Installation

```sh
$ yarn add @8x8/oxygen-date-time-selector
```

```sh
$ npm install @8x8/oxygen-date-time-selector
```

## Usage

```js
import DateTimeSelector from '@8x8/oxygen-date-time-selector';
```

```js
<DateTimeSelector
  closeOnDateChange={false}
  placeholder="Default title for input"
  finishButtonLabel="Custom button"
  isDisabled={false}
  onDateChange={onDateChange}
  size="large"
  titleFormatter={formatTitle}
  value={initialValue}
/>
```

## Available styled components

- DropdownContainer
- DropdownFooter
- PopperContainer

## Props

|        Name         | Type                                         | Default                            | Description                                                                                                                                                                                                                               |
| :-----------------: | -------------------------------------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  closeOnDateChange  | bool                                         | true                               | specifies is the modal should close on date change                                                                                                                                                                                        |
|    hasError         | bool                                         | false                              | Tell when the input box has error                                                                                                                                                                                                         |                                                                                                                                                                                                         |
|    placeholder      | string                                       | 'Date Range'                       | The placeholder string value of the input box                                                                                                                                                                                                        |
|  finishButtonLabel  | string                                       | 'Finish'                           | custom label for the finish button                                                                                                                                                                                                        |
|      inputIcon      | oneOfType([node, func])                      | undefined                                 | Replaces the default input icon and receives object with `isDisabled`, `color` and `reversed` props if it is a function; If the value is null, no icon will be displayed on the right side of the input box                                                                                                          |
|    iconLeft         | oneOfType([node, func])                                           | null                               | Add icon on the left side of the input                                                                                                                                                                                                    |
|     isClearable     | bool                                         | false                              | specifies if the input can be cleared
|     isDisabled      | bool                                         | false                              | specifies if the input is disabled
|     isLoading       | bool                                         | false                              | specifies if the loader should be displayed
|    loadingMessage   | string                                       | 'Loading...'                       | specifies the loading message
|      onBlur         | function                                     | noop                               | callback function to be executed when blurring the input                                                                                                                                                                                         |
|    onDateChange     | function                                     | noop                               | callback function to be executed on date change                                                                                                                                                                                           |
|      onFocus        | function                                     | noop                               | callback function to be executed when focusing on the input                                                                                                                                                                                         |
|  otherCalendarProps | object                                       | {}                                 | object with properties to be passed to the calendar component. See [Calendar documentation](/?path=/story/calendar--03-documentation)                                                                                                     |
|      id             | string                                       | undefined                          | Define id attribute for input element                                                                                                                                                                                                     |
|        size         | oneOf(['large', 'small'])                    | 'large'                            | The size of the input box                                                                                                                                                                                                                 |
|       testId        | string                                       | 'DATE_TIME_SELECTOR'               | Test ID DOM attribute value                                                                                                                                                                                                               |
|        theme        | object                                       |                                    | Theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants                                                                                                               |
| titleFormatPattern  | string                                       | 'MM/dd/yyyy'                       | format pattern used by date-fns for formatting the input title if no custom title formatter exists. See [date-fns format](https://date-fns.org/v2.28.0/docs/format)                                                                       |
|   titleFormatter    | function                                     |                                    | custom title formatter which overrides the default formatting method from date-fns                                                                                                                                                        |
|        value        | object                                       |                                    | initial value                                                                                                                                                                                                                             |

## Theme

### Classic
```json
{
  "fontSize": "15px",
  "lineHeight": "24px",
  "fontFamily": "'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  "borderColor": "#D1DBE8",
  "borderColorOpen": "#0376DA",
  "borderColorError": "#E12D2D",
  "borderSize": "1px",
  "borderRadius": 0,
  "width": "330px",
  "heightSmall": "32px",
  "heightLarge": "40px",
  "backgroundColor": "#FFF",
  "backgroundColorDisabled": "#F0F3F7",
  "color": "#1C2025",
  "colorDisabled": "#A4B8D1",
  "placeholderColor": "#A4B8D1",
  "paddingVerticalSmall": "3px",
  "paddingVerticalLarge": "7px",
  "paddingHorizontal": "12px",
  "iconColor": "#5E6D7A",
  "iconMinSize": "24px",
  "transitionTiming": "150ms",
  "iconMargin": "8px",
  "containerZIndex": 2500,
  "containerBorderSize": "1px",
  "containerBorderColor": "#D1DBE8",
  "containerShadowBlurRadius": "4px",
  "containerShadowColor": "#D1DBE8",
  "containerPadding": "24px",
  "containerBackgroundColor": "#FFF",
  "containerAnimationDuration": "150ms",
  "footerPadding": "16px",
  "footerBorderSize": "1px",
  "footerBorderColor": "#D1DBE8",
  "clearIconColor": "#A4B8D1",
  "clearIconHoverColor": "#5E6D7A",
  "isClassic": true
}
```

### Novo
```json
{
  "isClassic": false,
  "fontFamily": "Inter, sans-serif",
  "fontSize": "14px",
  "lineHeight": "20px",
  "fontWeight": 400,
  "letterSpacing": "-0.006em",
  "borderColor": "#F1F1F1",
  "borderColorOpen": "#246FE5",
  "borderColorError": "#CB2233",
  "borderSize": "2px",
  "borderRadius": "6px",
  "width": "330px",
  "heightSmall": "32px",
  "heightLarge": "40px",
  "backgroundColor": "#F1F1F1",
  "color": "#292929",
  "colorDisabled": "#C2C2C2",
  "placeholderColor": "#666666",
  "paddingVerticalSmall": "2px",
  "paddingVerticalLarge": "6px",
  "paddingHorizontal": "12px",
  "iconColor": "#292929",
  "iconMinSize": "24px",
  "transitionTiming": "150ms",
  "iconMargin": "8px",
  "containerZIndex": 2500,
  "containerBorderSize": "1px",
  "containerBorderColor": "#E0E0E0",
  "containerBorderRadius": "6px",
  "containerShadowColor": "rgba(41,41,41,0.25)",
  "containerPadding": "24px",
  "containerBackgroundColor": "#FFFFFF",
  "footerPadding": "16px",
  "footerBorderSize": "1px",
  "footerBorderColor": "#E0E0E0",
  "clearIconColor": "#292929",
  "clearIconHoverColor": "#0056E0"
}
```

### Novo Dark
```json
{
  "isClassic": false,
  "fontFamily": "Inter, sans-serif",
  "fontSize": "14px",
  "lineHeight": "20px",
  "fontWeight": 400,
  "letterSpacing": "-0.006em",
  "borderColor": "#2F2E32",
  "borderColorOpen": "#246FE5",
  "borderColorError": "#D83848",
  "borderSize": "2px",
  "borderRadius": "6px",
  "width": "330px",
  "heightSmall": "32px",
  "heightLarge": "40px",
  "backgroundColor": "#2F2E32",
  "color": "#FFFFFF",
  "colorDisabled": "#666666",
  "placeholderColor": "#C2C2C2",
  "paddingVerticalSmall": "2px",
  "paddingVerticalLarge": "6px",
  "paddingHorizontal": "12px",
  "iconColor": "#FFFFFF",
  "iconMinSize": "24px",
  "transitionTiming": "150ms",
  "iconMargin": "8px",
  "containerZIndex": 2500,
  "containerBorderSize": "1px",
  "containerBorderColor": "#666666",
  "containerBorderRadius": "6px",
  "containerShadowColor": "rgba(41,41,41,0.25)",
  "containerPadding": "24px",
  "containerBackgroundColor": "#171719",
  "footerPadding": "16px",
  "footerBorderSize": "1px",
  "footerBorderColor": "#666666",
  "clearIconColor": "#FFFFFF",
  "clearIconHoverColor": "#246FE5"
}
```
