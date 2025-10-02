import React from 'react';
import addDays from 'date-fns/addDays';
import addMonths from 'date-fns/addMonths';
import addYears from 'date-fns/addYears';
import startOfMonth from 'date-fns/startOfMonth';

import Calendar, {
  Day,
  Month,
  DateRange,
  CalendarProps,
} from '@8x8/oxygen-calendar';
import {
  ComponentSection,
  Headline,
  Label,
  Section,
} from '@8x8/oxygen-storybook-utils';

const CalendarStory: React.FC<Partial<CalendarProps>> = props => {
  const [range, setRange] = React.useState<DateRange>();
  const [date, setDate] = React.useState<Date>();

  return (
    <Calendar
      range={range}
      onRangeChange={pRange => setRange(pRange)}
      date={date}
      onDateChange={pDate => setDate(pDate)}
      months={2}
      showMonthYearPickers
      minDate={addYears(new Date(), -1)}
      maxDate={addYears(new Date(), 1)}
      displayMode="dateRange"
      {...props}
    />
  );
};

export default {
  title: 'Components/Calendar',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => {
  // Day
  const range = {
    startDate: addDays(new Date(), -2),
    endDate: new Date(),
  };

  const preview = {
    startDate: addDays(new Date(), 1),
    endDate: addDays(new Date(), 3),
  };

  const preview2 = {
    startDate: addDays(new Date(), 5),
    endDate: addDays(new Date(), 5),
  };

  const preview3 = {
    startDate: addDays(new Date(), 6),
    endDate: addDays(new Date(), 6),
  };

  const range2Month = startOfMonth(addMonths(new Date(), 1));
  // Month
  const range2 = {
    startDate: addDays(range2Month, 2),
    endDate: addDays(range2Month, 10),
  };
  const preview4 = {
    startDate: addDays(range2Month, 19),
    endDate: addDays(range2Month, 27),
  };

  return (
    <>
      <Section>
        <Headline>Day - States</Headline>
        <ComponentSection style={{ flexDirection: 'column' }}>
          <div>
            <Day
              day={addDays(new Date(), -4)}
              range={range}
              preview={preview}
              displayMode="dateRange"
            />
            <Day
              day={addDays(new Date(), -3)}
              range={range}
              preview={preview}
              displayMode="dateRange"
              isToday
            />
            <Day
              day={addDays(new Date(), -2)}
              range={range}
              preview={preview}
              displayMode="dateRange"
            />
            <Day
              day={addDays(new Date(), -1)}
              range={range}
              preview={preview}
              displayMode="dateRange"
            />
            <Day
              day={new Date()}
              range={range}
              preview={preview}
              displayMode="dateRange"
              isToday
            />
            <Day
              day={addDays(new Date(), 1)}
              range={range}
              preview={preview}
              displayMode="dateRange"
            />
            <Day
              day={addDays(new Date(), 2)}
              preview={preview}
              displayMode="dateRange"
            />
            <Day
              day={addDays(new Date(), 3)}
              preview={preview}
              displayMode="dateRange"
            />
            <Day day={addDays(new Date(), 4)} preview={preview} />
            <Day day={addDays(new Date(), 5)} preview={preview2} isToday />
            <Day
              day={addDays(new Date(), 6)}
              date={addDays(new Date(), 6)}
              preview={preview3}
              isToday
            />
          </div>
          <div>
            <Label>{addDays(new Date(), -4).getDate()} - Regular day</Label>
            <Label>{addDays(new Date(), -3).getDate()} - Today</Label>
            <Label>
              {addDays(new Date(), -2).getDate()} - Start of the selected range
            </Label>
            <Label>
              {addDays(new Date(), -1).getDate()} - Middle of the selected range
            </Label>
            <Label>
              {new Date().getDate()} - Today + End of the selected range
            </Label>
            <Label>
              {addDays(new Date(), 1).getDate()} - Start of the preview range
            </Label>
            <Label>
              {addDays(new Date(), 2).getDate()} - Middle of the preview range
            </Label>
            <Label>
              {addDays(new Date(), 3).getDate()} - End of the preview range
            </Label>
            <Label>{addDays(new Date(), 4).getDate()} - Regular Day</Label>
            <Label>
              {addDays(new Date(), 5).getDate()} - Today + single preview/hover
              day
            </Label>
            <Label>
              {addDays(new Date(), 6).getDate()} - Today + single selected day +
              single preview day
            </Label>
          </div>
        </ComponentSection>
      </Section>

      <Section>
        <Headline>Month - States</Headline>
        <ComponentSection style={{ flexDirection: 'column' }}>
          <div>
            <Label>
              Current month with no range and preview set + week starts with
              Monday
            </Label>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '24px',
            }}
          >
            <Month month={new Date()} dateOptions={{ weekStartsOn: 1 }} />
          </div>

          <div>
            <Label>
              Current month + show month name + week starts with Sunday
              (default)
            </Label>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '24px',
            }}
          >
            <Month month={new Date()} showMonthName />
          </div>

          <div>
            <Label>
              Next month + hide week days + selected range + preview range
            </Label>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Month
              month={addMonths(Date.now(), 1)}
              showMonthName
              showWeekDays={false}
              displayMode="dateRange"
              range={range2}
              preview={preview4}
            />
          </div>
        </ComponentSection>
      </Section>

      <Section>
        <Headline>Calendar - States + dateOption.customEvenMonths</Headline>
        <ComponentSection>
          <CalendarStory
            dateOptions={{
              customEvenMonths: true,
            }}
          />
        </ComponentSection>
      </Section>
      <Section>
        <Headline>Calendar - States</Headline>
        <ComponentSection>
          <CalendarStory />
        </ComponentSection>
      </Section>
    </>
  );
};

Guidelines.storyName = '01. Guidelines';
