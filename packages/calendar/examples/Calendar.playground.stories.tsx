import React, { useState } from 'react';
import addDays from 'date-fns/addDays';
import addYears from 'date-fns/addYears';
import format from 'date-fns/format';
import Calendar, { DateRange } from '@8x8/oxygen-calendar';
import { StoryFn, Meta } from '@storybook/react';

import {
  ComponentSection,
  Label,
  PlaygroundDecorator,
  localeSelect,
} from '@8x8/oxygen-storybook-utils';

export const PlaygroundCalendar: StoryFn<typeof Calendar> = args => {
  const [range, setRange] = useState<DateRange>();
  const [date, setDate] = useState<Date>();
  const { startDate, endDate } = range || {};

  return (
    <>
      <ComponentSection>
        <Calendar
          {...args}
          range={range}
          onRangeChange={setRange}
          date={date}
          onDateChange={setDate}
        />
      </ComponentSection>
      <ComponentSection>
        {args.displayMode === 'dateRange' && (
          <div>
            <Label>Selected date range:</Label>
            <Label aria-live="polite">
              start date: {startDate ? format(startDate, 'MM/dd/yyyy') : '-'}
            </Label>
            <Label aria-live="polite">
              end date: {endDate ? format(endDate, 'MM/dd/yyyy') : '-'}
            </Label>
          </div>
        )}
        {args.displayMode === 'date' && (
          <Label aria-live="polite">
            Selected date: {date ? format(date, 'MM/dd/yyyy') : '-'}
          </Label>
        )}
      </ComponentSection>
    </>
  );
};
PlaygroundCalendar.args = {
  displayMode: 'dateRange',
  showMonthArrow: true,
  showMonthYearPickers: true,
  months: 2,
  dateOptions: {
    weekStartsOn: 0,
    customEvenMonths: false,
  },
  disabledDates: [addDays(new Date(), -35), addDays(new Date(), -30)],
  enabledDates: [addDays(new Date(), -34), addDays(new Date(), -29)],
  minDate: addYears(new Date(), -2),
  maxDate: addYears(new Date(), 3),
  showPreview: true,
  dayNumberFormat: 'd',
  weekDayDisplayFormat: 'EE',
  monthDisplayFormat: 'MMMM yyyy',
  focusedMonthFormat: 'MMMM',
  focusedYearFormat: 'yyyy',
  locale: undefined,
  testId: 'CALENDAR',
  prevMonthLabel: 'Previous month',
  nextMonthLabel: 'Next month',
};
PlaygroundCalendar.argTypes = {
  displayMode: {
    control: {
      type: 'select',
      options: ['dateRange', 'date'],
    },
  },
  locale: localeSelect,
};
PlaygroundCalendar.storyName = '10. Playground';

type ComponentMetaCalendar = Meta<typeof Calendar>;

export default {
  title: 'Components/Calendar',
  component: Calendar,
  decorators: [PlaygroundDecorator],
} as ComponentMetaCalendar;
