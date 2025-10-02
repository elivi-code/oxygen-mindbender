# 8x8 Oxygen - Calendar

## Installation

```sh
$ yarn add @8x8/oxygen-calendar
```

```sh
$ npm install @8x8/oxygen-calendar
```

## Usage

```js
import Calendar, { Month, Day, Styled } from '@8x8/oxygen-calendar';
```

```js
<Calendar
  range={range}
  onRangeChange={this.onRangeChange}
  date={date}
  onDateChange={this.onDateChange}
  months={2}
  showMonthYearPickers
  minDate={addYears(new Date(), -1)}
  maxDate={addYears(new Date(), 1)}
  displayMode="dateRange"
/>
```

```js
<Month month={new Date()} dateOptions={{ weekStartsOn: 1 }} />
```

```js
<Month
  month={addMonths(Date.now(), 1)}
  showMonthName
  showWeekDays={false}
  displayMode="dateRange"
  range={range2}
  preview={preview4}
  minDate={addDays(new Date(), -18)}
/>
```

```js
<Day
  day={addDays(new Date(), -4)}
  range={range}
  preview={preview}
  displayMode="dateRange"
  isToday
/>
```

```js
<Day day={addDays(new Date(), 4)} preview={preview} isToday />
```

### l10n

```js
import deLocale from 'date-fns/locale/de';

<Calendar
  range={range}
  onRangeChange={this.onRangeChange}
  date={date}
  onDateChange={this.onDateChange}
  locale={deLocale}
/>

<Month
  month={addMonths(Date.now(), 1)}
  showMonthName
  displayMode="dateRange"
  range={range2}
  preview={preview4}
  locale={deLocale}
/>

<Day day={addDays(new Date(), 4)} preview={preview} locale={deLocale} />
```

## Available styled components

- DayCell
- SelectionRange
- PreviewRange
- DayNumber
- TodayLine
- MonthGrid
- MonthName
- WeekDays
- WeekDay
- CalendarWrapper
- MonthWrapper
- MonthSeparator
- MonthYearPickers
- MonthYearPicker
- CalendarMonthNavigation

## Props

### Calendar

| Name                 | Type                                            | Default                                        | Description                                                                                                                                                                                                                                                                                                           |
| -------------------- | ----------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| testId               | string                                          | 'CALENDAR'                                     | Test ID DOM attribute value                                                                                                                                                                                                                                                                                           |
| showMonthArrow       | bool                                            | true                                           | Show the next and previous month selector arrows                                                                                                                                                                                                                                                                      |
| showMonthYearPickers | bool                                            | true                                           | Show the month and year selector dropdown                                                                                                                                                                                                                                                                             |
| months               | number                                          | 2                                              | The number of visible month grids                                                                                                                                                                                                                                                                                     |
| dateOptions          | object                                          | `{ weekStartsOn: 0, customEvenMonths: false }` | Date options based on date-fns, for example: `{ weekStartsOn: 1 }` plus custom option regarding even month rows between multiple `Months`: `{ customEvenMonths: true }`                                                                                                                                               |
| defaultFocusedDate   | object                                          | undefined                                      | Default date to which the calendar will render. If there is a date or date range set, the calendar will be rendered to the selected date/start date of the range. If there is no selection then the calendar will render the date received on defaultFocusedDate prop or the current date if the prop is not received |
| disabledDates        | array                                           | []                                             | An array with the disabled dates (Date objects). Also, this overrides the enabledDates prop                                                                                                                                                                                                                           |
| enabledDates         | array                                           | []                                             | An array containing the only dates which will be enabled (Date objects)                                                                                                                                                                                                                                               |
| minDate              | object                                          | `addYears(new Date(), -100)`                   | The minimum date to show and select in Calendar                                                                                                                                                                                                                                                                       |
| maxDate              | object                                          | `addYears(new Date(), 20)`                     | The maximum date to show and select in Calendar                                                                                                                                                                                                                                                                       |
| displayMode          | oneOf(['date', 'dateRange'])                    | 'date'                                         | The date selection/preview and display mode                                                                                                                                                                                                                                                                           |
| showPreview          | bool                                            | true                                           | Show the preview and the range preview (for 'dateRange' display mode)                                                                                                                                                                                                                                                 |
| dayNumberFormat      | string                                          | 'd'                                            | The formatting option for the day numbers in Month grid. The complete list of values can be found: https://date-fns.org/v2.28.0/docs/format                                                                                                                                                                           |
| weekDayDisplayFormat | string                                          | 'EE'                                           | The way how the week days are formatted. The complete list of values can be found: https://date-fns.org/v2.28.0/docs/format                                                                                                                                                                                           |
| monthDisplayFormat   | string                                          | 'MMMM yyyy'                                    | The way how the month names are formatted. The complete list of values can be found: https://date-fns.org/v2.28.0/docs/format                                                                                                                                                                                         |
| focusedMonthFormat   | string                                          | 'MMMM'                                         | The format of the month name in Month selector dropdown. The complete list of values can be found: https://date-fns.org/v2.28.0/docs/format                                                                                                                                                                           |
| focusedYearFormat    | string                                          | 'yyyy'                                         | The format of the year in Year selector dropdown. The complete list of values can be found: https://date-fns.org/v2.28.0/docs/format                                                                                                                                                                                  |
| locale               | object                                          | undefined                                      | Defines the locale options and strings (e.g. day or month names) used to format date values. Works with locale definitions from date-fns: https://date-fns.org/v2.28.0/docs/I18n <br /> `en` is the built-in, default language, doesn't require any setup.                                                            |
| range                | shape({ startDate: object\*, endDate: object }) |                                                | The selected date range (only for 'dateRange' display mode)                                                                                                                                                                                                                                                           |
| onRangeChange        | func                                            | undefined                                      | Callback function called when the user changes the selected date range (only for 'dateRange' display mode)                                                                                                                                                                                                            |
| date                 | object                                          |                                                | The selected date (only for 'date' display mode)                                                                                                                                                                                                                                                                      |
| onDateChange         | func                                            | undefined                                      | Callback function called when the user changes the selected date (only for 'date' display mode)                                                                                                                                                                                                                       |
| onPreviewChange      | func                                            | undefined                                      | Callback function executed after the preview range changes                                                                                                                                                                                                                                                            |
| theme                | object                                          |                                                | Theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants                                                                                                                                                                                           |

### Month

| Name                 | Type                                            | Default               | Description                                                                                                                                                                                                                                               |
| -------------------- | ----------------------------------------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| month\*              | object                                          |                       | The month to show (represented by a Date object)                                                                                                                                                                                                          |
| testId               | string                                          | 'CALENDAR_MONTH'      | Test ID DOM attribute value                                                                                                                                                                                                                               |
| dateOptions          | object                                          | `{ weekStartsOn: 0 }` | Date options based on date-fns, for example: `{ weekStartsOn: 1 }`                                                                                                                                                                                        |
| disabledDates        | array                                           | []                    | An array with the disabled dates (Date objects)                                                                                                                                                                                                           |
| minDate              | object                                          |                       | The minimum date to show and select in Month                                                                                                                                                                                                              |
| maxDate              | object                                          |                       | The maximum date to show and select in Month                                                                                                                                                                                                              |
| displayMode          | oneOf(['date', 'dateRange'])                    | 'date'                | The date selection/preview and display mode                                                                                                                                                                                                               |
| showPreview          | bool                                            | true                  | Show the preview and the range preview (for 'dateRange' display mode)                                                                                                                                                                                     |
| preview              | shape({ startDate: object, endDate: object })   |                       | The preview range/interval to display                                                                                                                                                                                                                     |
| range                | shape({ startDate: object\*, endDate: object }) |                       | The selected date range (only for 'dateRange' display mode)                                                                                                                                                                                               |
| date                 | object                                          |                       | The selected date (only for 'date' display mode)                                                                                                                                                                                                          |
| dayNumberFormat      | string                                          | 'd'                   | The formatting option for the day numbers in Month grid. The complete list of values can be found: https://date-fns.org/v2.28.0/docs/format                                                                                                               |
| showWeekDays         | bool                                            | true                  | Show the weekday (ex. Mon, Tue, Wed...) in the top of the Month grid                                                                                                                                                                                      |
| weekDayDisplayFormat | string                                          | 'EE'                  | The way how the week days are formatted. The complete list of values can be found: https://date-fns.org/v2.28.0/docs/format                                                                                                                               |
| showMonthName        | bool                                            | false                 | Show the month name (ex. February 2018) in the of the Month Grid                                                                                                                                                                                          |
| monthDisplayFormat   | string                                          | 'MMMM yyyy'           | The way how the month names are formatted. The complete list of values can be found: https://date-fns.org/v2.28.0/docs/format                                                                                                                             |
| locale               | object                                          | undefined             | Defines the locale options and strings (e.g. day or month names) used to format date values. Works with locale definitions from date-fns: https://date-fns.org/v2.28.0/docs/I18n <br /> `en` is the built-in, default language, doesn't require any setup |
| onDayClick           | func                                            | undefined             | Callback function executed when a Day is clicked in the Month grid. Function called with the Date object of the clicked Day                                                                                                                               |
| onPreviewChange      | func                                            | undefined             | Callback function executed when the preview range should be changed (on mouse and keyboard focus events). Function called with the hovered/focused day, or with `undefined` if no day is hovered/focused.                                                 |
| theme                | object                                          |                       | Theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants                                                                                                                               |

### Day

| Name            | Type                                            | Default       | Description                                                                                                                                                                                                                                               |
| --------------- | ----------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| day\*           | object                                          |               | The day to show (represented by a Date object)                                                                                                                                                                                                            |
| testId          | string                                          | 'CALENDAR_DAY | Test ID DOM attribute value                                                                                                                                                                                                                               |
| displayMode     | oneOf(['date', 'dateRange'])                    | 'date'        | The date selection/preview and display mode                                                                                                                                                                                                               |
| preview         | shape({ startDate: object, endDate: object })   |               | The preview range/interval to display                                                                                                                                                                                                                     |
| range           | shape({ startDate: object\*, endDate: object }) |               | The selected date range (only for 'dateRange' display mode)                                                                                                                                                                                               |
| date            | object                                          |               | The selected date (only for 'date' display mode)                                                                                                                                                                                                          |
| isPassive       | bool                                            | false         | Is passive: used to visualize days from the next/previous month to complete the current month grid                                                                                                                                                        |
| isDisabled      | bool                                            | false         | Is disabled                                                                                                                                                                                                                                               |
| isToday         | bool                                            | false         | Is today                                                                                                                                                                                                                                                  |
| isWeekend       | bool                                            | false         | Is weekend                                                                                                                                                                                                                                                |
| isStartOfWeek   | bool                                            | false         | Is start of month                                                                                                                                                                                                                                         |
| isEndOfWeek     | bool                                            | false         | Is end of week                                                                                                                                                                                                                                            |
| isStartOfMonth  | bool                                            | false         | Is start of month                                                                                                                                                                                                                                         |
| isEndOfMonth    | bool                                            | false         | Is end of month                                                                                                                                                                                                                                           |
| dayNumberFormat | string                                          | 'd'           | The formatting option for the day numbers. The complete list of values can be found: https://date-fns.org/v2.28.0/docs/format                                                                                                                             |
| locale          | object                                          | undefined     | Defines the locale options and strings (e.g. day or month names) used to format date values. Works with locale definitions from date-fns: https://date-fns.org/v2.28.0/docs/I18n <br /> `en` is the built-in, default language, doesn't require any setup |
| onClick         | func                                            | undefined     | Callback function executed when a day is clicked or a focused date is submitted using Enter or Space key                                                                                                                                                  |
| onPreviewChange | func                                            | undefined     | Callback function executed when the preview range should be changed (on mouse and keyboard focus events). Function called with the hovered/focused day, or with `undefined` if no day is hovered/focused.                                                 |
| theme           | object                                          |               | Theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants                                                                                                                               |

> Props marked with \* are required
