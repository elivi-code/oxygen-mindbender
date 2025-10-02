import React, { useState } from 'react';

import Calendar, { type DateRange } from '@8x8/oxygen-calendar';
import { Doc, ComponentSection, Label } from '@8x8/oxygen-storybook-utils';

export const CalendarWeekStart = () => {
  const [range, setRange] = useState<DateRange>();
  const { startDate, endDate } = range || {};

  return (
    <>
      <Doc>
        <h1>
          <code>Calendar</code> configure week start via{' '}
          <code>weekStartsOn</code>
        </h1>

        <p>
          These are dateOptions from <code>date-fns</code>.
        </p>
        <p>
          <code>weekStartsOn</code> is a number from 0 to 6, where 0 is Sunday
          and 6 is Saturday.
        </p>

        <pre>
          {`import Calendar from '@8x8/oxygen-calendar';

const [range, setRange] = useState(undefined);

<Calendar
  displayMode="dateRange"
  range={range}
  onRangeChange={setRange}
  dateOptions={{ weekStartsOn: 1 }}
/>
        `}
        </pre>
      </Doc>

      <ComponentSection>
        <Calendar
          displayMode="dateRange"
          range={range}
          onRangeChange={setRange}
          dateOptions={{ weekStartsOn: 1 }}
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

CalendarWeekStart.storyName = 'Calendar weekStart';
