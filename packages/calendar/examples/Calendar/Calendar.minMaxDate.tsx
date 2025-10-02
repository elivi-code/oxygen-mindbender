import React, { useState } from 'react';

import Calendar, { type DateRange } from '@8x8/oxygen-calendar';
import { Doc, ComponentSection, Label } from '@8x8/oxygen-storybook-utils';

export const CalendarMinMaxDate = () => {
  const [range, setRange] = useState<DateRange>();
  const { startDate, endDate } = range || {};

  return (
    <>
      <Doc>
        <h1>
          <code>Calendar</code> disabled dates: min, max, specific dates
        </h1>

        <p>
          Showcasing the calendar component with minDate, maxDate, and
          disabledDates props set.
        </p>

        <ul>
          <li>
            The user should&apos;t be able to select dates before March 14th,
            2024, after June 28th, 2024.
          </li>
          <li>
            Also, June 9th, 2024, and June 26th, 2024 are disabled, unselectable
            with cursor or keyboard.
          </li>
          <li>Default focused date is May 15th, 2024.</li>
          <li>
            Navigation using arrow is only possible in the enabled interval:
            from March to June, 2024
          </li>
          <li>
            Users can only select the month and year which contains the enabled
            date interval: March, April, May and June 2024
          </li>
        </ul>

        <pre>
          {`import Calendar from '@8x8/oxygen-calendar';

const [range, setRange] = useState(undefined);

<Calendar
  displayMode="dateRange"
  minDate={new Date('2024-03-14')}
  maxDate={new Date('2024-06-28')}
  disabledDates={[new Date('2024-06-09'), new Date('2024-06-26')]}
  defaultFocusedDate={new Date('2024-05-15')}
  range={range}
  onRangeChange={setRange}
/>
        `}
        </pre>
      </Doc>

      <ComponentSection>
        <Calendar
          displayMode="dateRange"
          minDate={new Date('2024-03-14')}
          maxDate={new Date('2024-06-28')}
          disabledDates={[new Date('2024-06-09'), new Date('2024-06-26')]}
          defaultFocusedDate={new Date('2024-05-15')}
          range={range}
          onRangeChange={setRange}
        />
      </ComponentSection>

      <ComponentSection>
        <div>
          <Label>Selected date range:</Label>
          <Label aria-live="polite">
            start date:{' '}
            {startDate
              ? new Intl.DateTimeFormat('en-US').format(startDate)
              : '-'}
          </Label>
          <Label aria-live="polite">
            end date:{' '}
            {endDate ? new Intl.DateTimeFormat('en-US').format(endDate) : '-'}
          </Label>
        </div>
      </ComponentSection>
    </>
  );
};

CalendarMinMaxDate.storyName = 'Calendar minDate & maxDate';
