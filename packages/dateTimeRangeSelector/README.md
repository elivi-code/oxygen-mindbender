# 8x8 Oxygen - Date Time Range Selector

## Instalation

```sh
$ yarn add @8x8/oxygen-date-time-range-selector
```

```sh
$ npm install @8x8/oxygen-date-time-range-selector
```

## Usage

#### Full component - Dropdown + Range Picker

```js
import DateTimeRangeSelector, {
  predefinedRanges,
  Styled,
  DateTimeRangeSelectorPredefinedList,
} from '@8x8/oxygen-date-time-range-selector';
```

```js
<DateTimeRangeSelector
  predefinedRanges={predefinedRanges}
  predefinedRange={predefinedRange}
  dateTimeRange={dateTimeRange}
  size="large"
  placeholder="Date Range Time Selector"
  clearButtonLabel="Clear"
  finishButtonLabel="Ok"
  dateFormat="MM/dd/yyyy"
  timeFormat="hh:mm a"
  isDisabled={false}
  onRangeChange={onRangeChange}
  onOpen={onOpen}
  onClose={onClose}
/>
```

#### Range Picker only

```js
import {
  DateTimeRangePicker,
  predefinedRanges,
} from '@8x8/oxygen-date-time-range-selector';
```

```js
<DateTimeRangePicker
  endTimeErrorMessage={'Invalid Range'}
  startTimeLabel={'From'}
  endTimeLabel={'To'}
  customPredefinedRangeLabel={'Custom Range'}
  predefinedRanges={predefinedRanges}
  toLabel={'To'}
  fromLabel={'From'}
  dateFormat="MM/dd/yyyy"
  timeFormat="hh:mm a"
  onRangeChange={onRangeChange}
/>
```

### Predefined ranges

```js
// default predefinedRanges
// using date-fns to generate startDate and endDate
// to change the displayed text, clone and modify the `displayName` for each item in the list
const predefinedRanges = [
  {
    id: 'TODAY',
    displayName: 'Today',
    dateTimeRange: () => {
      const today = {
        startDate: startOfToday(),
        endDate: endOfToday(),
      };

      return today;
    },
  },
  {
    id: 'LAST_HOUR',
    displayName: 'Last Hour',
    dateTimeRange: () => {
      const now = new Date();
      const lastHour = {
        startDate: subHours(now, 1),
        endDate: now,
      };

      return lastHour;
    },
  },
  {
    id: 'YESTERDAY',
    displayName: 'Yesterday',
    dateTimeRange: () => {
      const yesterday = {
        startDate: startOfYesterday(),
        endDate: endOfYesterday(),
      };

      return yesterday;
    },
  },
  {
    id: 'LAST_X_DAYS',
    displayName: 'Last X Days',
    selectedDisplayName: ['Last', 'Days'],
    dateTimeRange: x => {
      const now = new Date();
      const lastXDays = {
        startDate: startOfDay(subDays(now, x || 1)),
        endDate: endOfToday(),
      };

      return lastXDays;
    },
    hasArgument: true,
  },
  {
    id: 'THIS_WEEK',
    displayName: 'This Week',
    dateTimeRange: () => {
      const now = new Date();
      const thisWeek = {
        startDate: startOfWeek(now, { weekStartsOn: 1 }), // Monday = 1
        endDate: endOfToday(),
      };

      return thisWeek;
    },
  },
  {
    id: 'THIS_MONTH',
    displayName: 'This Month',
    dateTimeRange: () => {
      const now = new Date();
      const thisMonth = {
        startDate: startOfMonth(now),
        endDate: endOfToday(),
      };

      return thisMonth;
    },
  },
  {
    id: 'LAST_MONTH',
    displayName: 'Last Month',
    dateTimeRange: () => {
      const now = new Date();
      const lastMonth = {
        startDate: subMonths(startOfMonth(now), 1),
        endDate: endOfMonth(subMonths(now, 1)),
      };

      return lastMonth;
    },
  },
  {
    id: 'LAST_X_MONTHS',
    displayName: 'Last X Months',
    selectedDisplayName: ['Last', 'Months'],
    dateTimeRange: x => {
      const now = new Date();
      const lastXMonths = {
        startDate: startOfDay(subMonths(now, x || 1)),
        endDate: endOfToday(),
      };

      return lastXMonths;
    },
    hasArgument: true,
  },
  {
    id: 'THIS_YEAR',
    displayName: 'This Year',
    dateTimeRange: () => {
      const now = new Date();
      const thisYear = {
        startDate: startOfYear(now),
        endDate: endOfToday(),
      };

      return thisYear;
    },
  },
  {
    id: 'LAST_YEAR',
    displayName: 'Last Year',
    dateTimeRange: () => {
      const now = new Date();
      const lastYear = {
        startDate: subYears(startOfYear(now), 1),
        endDate: endOfYear(subYears(now, 1)),
      };

      return lastYear;
    },
  },
];
```

### l10n

```js
import deLocale from 'date-fns/locale/de';

<DateTimeRangeSelector
  predefinedRange={predefinedRange}
  dateTimeRange={dateTimeRange}
  placeholder="Zeitauswahl für Datumsbereich"
  clearButtonLabel="Löschen"
  finishButtonLabel="Ja"
  dateFormat="dd.MM.yyyy"
  timeFormat="hh:mm"
  onRangeChange={onRangeChange}
  locale={deLocale}
/>;
```

## Available styled components

- DropdownContainer,
- Content,
- Footer,
- CalendarWrapper,
- CalendarContainer,
- DateTimeInputs,
- DateInput,
- TimeInput,
- EndTimeError,
- DateTimeInputContainer,
- InputContainer,
- InputIcon,
- PredefinedList,
- PredefinedListItem,
- PredefinedListInputWrapper,

## Custom Close Handlers

| Name      | Type   | Example | Description                                                       |
| --------- | ------ | ------- | ----------------------------------------------------------------- |
| target    | node   | window  | The element that is going to receive the event listener           |
| eventName | string | 'click' | The name of the event                                             |
| capture   | bool   | false   | Specify weather to use capture or bubbling to propagate the event |

### Example

```js
const customCloseHandlers = [
  {
    target: document.body,
    eventName: 'ps-scroll-x',
    capture: true,
  },
];
```

## Predefined Range

| Name                | Type   | Example                        | Description                                                                                                                           |
| ------------------- | ------ | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| id\*                | string | 'YESTERDAY'                    | id used to represent the predefined range                                                                                             |
| displayName\*       | string | 'Yesterday'                    | The name that will be displayed in the list of predefined ranges                                                                      |
| selectedDisplayName | array  | ['Last', 'Days']               | Array containing two strings. In the case of a predefined range with an argument, the strings will be on either side of the input box |
| dateTimeRange\*     | func   | () => ({ startDate, endDate }) | Function that may receive an argument and has to return an object representing the date range                                         |
| hasArgument         | bool   |                                | Tell if the predefined range has an argument                                                                                          |

## Props

### DateTimeRangeSelector

| Name                       | Type                                         | Default                            | Description                                                                                                                                                                                                                                               |
| -------------------------- | -------------------------------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| otherCalendarProps         | object                                       | {}                                 | object with properties to be passed to the calendar component. See [Calendar documentation](/?path=/story/calendar--03-documentation)                                                                                                                     |
| customCloseHandlers        | array                                        | []                                 | Array containing events that should trigger the hiding of the date time range                                                                                                                                                                             |
| hasError                   | bool                                         | false                              | Tell when the input box has error                                                                                                                                                                                                                         |
| hidePredefinedRanges       | bool                                         | false                              | Specifies if the predefined ranges component should be displayed                                                                                                                                                                                          |
| hideTime                   | bool                                         | false                              | Specifies if the top time selector component should be displayed                                                                                                                                                                                          |
| predefinedRanges           | array                                        | defaultPredefinedRanges            | Array of predefined range objects. Predefined ranges are shown in the left side list. They can represent a fixed range (ex. yesterday, last month) or can have an argument to calculate a relative range (ex. last x days, last x months)                 |
| predefinedRange            | object                                       | { id: 'CUSTOM', value: undefined } | The currently selected predefined range represented by 'id' and 'value' if it has an argument, otherwise value should be undefined                                                                                                                        |
| dateTimeRange              | shape({ startDate:object\* endDate:object }) |                                    | The selected date range.                                                                                                                                                                                                                                  |
| size                       | oneOf(['large', 'small'])                    | 'large'                            | The size of the input box                                                                                                                                                                                                                                 |
| clearButtonLabel           | string                                       | 'Clear'                            | The value of the clear button                                                                                                                                                                                                                             |
| finishButtonLabel          | string                                       | 'Finish'                           | The value of the finish button                                                                                                                                                                                                                            |
| fromLabel                  | string                                       | 'From'                             | The value of the "From" input label                                                                                                                                                                                                                       |
| startTimeLabel             | string                                       | 'Start Time'                       | The value of the "Start Time" time selector label                                                                                                                                                                                                         |
| toLabel                    | string                                       | 'To'                               | The value of the "To" input label                                                                                                                                                                                                                         |
| endTimeLabel               | string                                       | 'End Time'                         | The value of the "End Time" time selector label                                                                                                                                                                                                           |
| customPredefinedRangeLabel | string                                       | 'Custom'                           | The value of the "Custom" predefined list label                                                                                                                                                                                                           |
| endTimeErrorMessage        | string                                       | 'Cannot be before start time       | The value of the error message that appears when end time is before start time                                                                                                                                                                            |
| placeholder                | string                                       | 'Date Range'                       | The default value of the input box                                                                                                                                                                                                                        |
| id                         | string                                       | undefined                          | Define id attribute for input element                                                                                                                                                                                                                     |
| testId                     | string                                       | 'DATE_TIME_RANGE_SELECTOR'         | Test ID DOM attribute value                                                                                                                                                                                                                               |
| dateFormat                 | string                                       | 'MM/dd/yyyy'                       | The way that dates are formatted. The complete list of values can be found: https://date-fns.org/v2.28.0/docs/format                                                                                                                                      |
| timeFormat                 | string                                       | 'hh:mm a'                          | The way that times are formatted. The complete list of values can be found: https://date-fns.org/v2.28.0/docs/format                                                                                                                                      |
| inputIcon                  | oneOfType([node, func])                      | undefined                          | Replaces the default input icon and receives object with `isDisabled`, `color` and `reversed` props if it is a function; If the value is null, no icon will be displayed on the right side of the input box                                               |
| iconLeft                   | oneOfType([node, func])                      | null                               | Add icon on the left side of the input                                                                                                                                                                                                                    |
| isDisabled                 | bool                                         | false                              | Tell when input box is disabled                                                                                                                                                                                                                           |
| locale                     | object                                       | undefined                          | Defines the locale options and strings (e.g. day or month names) used to format date values. Works with locale definitions from date-fns: https://date-fns.org/v2.28.0/docs/I18n <br /> `en` is the built-in, default language, doesn't require any setup |
| onRangeChange              | func                                         | noop                               | Callback executed when either the finish button or clear button is pressed                                                                                                                                                                                |
| onOpen                     | func                                         | noop                               | Callback executed after the dropdown with date and time range selector becomes visible                                                                                                                                                                    |
| onClose                    | func                                         | noop                               | Callback executed after the dropdown with date and time range selector becomes hidden                                                                                                                                                                     |
| theme                      | object                                       |                                    | Theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants                                                                                                                               |
| inputRenderer              | func                                         | undefined                          | Function for rendering a custom input                                                                                                                                                                                                                     |
| headerRenderer             | func                                         | undefined                          | Function for rendering a custom calendar header                                                                                                                                                                                                           |

### DateTimeRangeSelectorPredefinedList

| Name            | Type     | Default                                             | Description                                                                                                                        |
| --------------- | -------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| theme           | object\* |                                                     | Theme object for DateTimeRangeSelector, mandatory to send since it's an internal component                                         |
| ranges          | array\*  |                                                     | Available predefined ranges. See above docs about `predefinedRanges` array                                                         |
| selectedRange   | object\* |                                                     | The selected (active) range. Should contain the `id` of the range, and the value, if applies (for example for "Last X Days" range) |
| onRangeSelect   | func     | noop                                                | Callback function for range selection and value change (for "Last X ..." range types)                                              |
| testId          | string   | 'DATE_TIME_RANGE_SELECTOR_DROPDOWN_PREDEFINED_LIST' | Test ID DOM attribute value                                                                                                        |
| hideCustomRange | bool     | false                                               | Render without 'Custom' range                                                                                                      |

> Props marked with \* are required

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
  "width": "380px",
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
  "containerBackgroundColor": "#FFF",
  "containerAnimationDuration": "150ms",
  "footerPadding": "16px",
  "footerBorderSize": "1px",
  "footerBorderColor": "#D1DBE8",
  "clearIconColor": "#A4B8D1",
  "clearIconHoverColor": "#5E6D7A",
  "isClassic": true,
  "calendarHorizontalMargin": "24px",
  "calendarBottomMargin": "40px",
  "dateTimeInputsPadding": "12px",
  "dateTimeInputsMarginBottom": "12px",
  "dateTimeInputsBorderSize": "1px",
  "dateTimeInputsBorderColor": "#D1DBE8",
  "dateInputMarginRight": "12px",
  "timeInputMarginRight": "12px",
  "timeInputContainerMarginLeft": "16px",
  "endTimeErrorColor": "#E12D2D",
  "endTimeErrorLineHeight": "18px",
  "endTimeErrorFontSize": "13px",
  "listBackgroundColor": "#F0F3F7",
  "listBorderRightColor": "#D1DBE8",
  "listBorderRightSize": "1px",
  "listWidth": "140px",
  "listItemFontSize": "13px",
  "listItemLineHeight": "18px",
  "listItemPaddingVertical": "8px",
  "listItemPaddingHorizontal": "10px",
  "listItemColor": "#1C2025",
  "listItemSelectedColor": "#0376DA",
  "listItemSelectedWidth": "4px",
  "listInputMarginTop": "-7px",
  "listInputMarginBottom": "-6px",
  "listInputMarginLeft": "4px",
  "listInputMarginRight": "3px",
  "listInputHorizontalSpacing": "4px",
  "listInputMinWidth": 0,
  "listInputWidth": "28px",
  "listInputVerticalSpacing": 0
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
  "width": "380px",
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
  "containerBackgroundColor": "#FFFFFF",
  "footerPadding": "16px",
  "footerBorderSize": "1px",
  "footerBorderColor": "#E0E0E0",
  "clearIconColor": "#292929",
  "clearIconHoverColor": "#0056E0",
  "calendarHorizontalMargin": "24px",
  "calendarBottomMargin": "40px",
  "dateTimeInputsPadding": "12px",
  "dateTimeInputsMarginBottom": "12px",
  "dateTimeInputsBorderSize": "1px",
  "dateInputMarginRight": "12px",
  "timeInputMarginRight": "12px",
  "timeInputContainerMarginLeft": "16px",
  "endTimeErrorFontSize": "12px",
  "dateTimeInputsBorderColor": "#E0E0E0",
  "endTimeErrorColor": "#CB2233",
  "listBorderRightSize": "1px",
  "listWidth": "140px",
  "listItemFontSize": "12px",
  "listItemPaddingVertical": "8px",
  "listItemPaddingHorizontal": "10px",
  "listItemSelectedWidth": "4px",
  "listInputMarginTop": "-7px",
  "listInputMarginBottom": "-6px",
  "listInputMarginLeft": "4px",
  "listInputMarginRight": "3px",
  "listInputHorizontalSpacing": "4px",
  "listInputMinWidth": 0,
  "listInputWidth": "28px",
  "listInputVerticalSpacing": 0,
  "listBackgroundColor": "#F1F1F1",
  "listBorderRightColor": "#E0E0E0",
  "listItemColor": "#292929",
  "listItemSelectedColor": "#246FE5"
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
  "width": "380px",
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
  "containerBackgroundColor": "#171719",
  "footerPadding": "16px",
  "footerBorderSize": "1px",
  "footerBorderColor": "#666666",
  "clearIconColor": "#FFFFFF",
  "clearIconHoverColor": "#246FE5",
  "calendarHorizontalMargin": "24px",
  "calendarBottomMargin": "40px",
  "dateTimeInputsPadding": "12px",
  "dateTimeInputsMarginBottom": "12px",
  "dateTimeInputsBorderSize": "1px",
  "dateInputMarginRight": "12px",
  "timeInputMarginRight": "12px",
  "timeInputContainerMarginLeft": "16px",
  "endTimeErrorFontSize": "12px",
  "dateTimeInputsBorderColor": "#666666",
  "endTimeErrorColor": "#D83848",
  "listBorderRightSize": "1px",
  "listWidth": "140px",
  "listItemFontSize": "12px",
  "listItemPaddingVertical": "8px",
  "listItemPaddingHorizontal": "10px",
  "listItemSelectedWidth": "4px",
  "listInputMarginTop": "-7px",
  "listInputMarginBottom": "-6px",
  "listInputMarginLeft": "4px",
  "listInputMarginRight": "3px",
  "listInputHorizontalSpacing": "4px",
  "listInputMinWidth": 0,
  "listInputWidth": "28px",
  "listInputVerticalSpacing": 0,
  "listBackgroundColor": "#2F2E32",
  "listBorderRightColor": "#666666",
  "listItemColor": "#FFFFFF",
  "listItemSelectedColor": "#246FE5"
}
```
