import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { dateTimeRangeSelector as theme } from '@8x8/oxygen-constants';

import DateTimeRangePicker from './DateTimeRangePicker';
import CUSTOM_RANGE_ID from '../utils/constants';

jest.useFakeTimers().setSystemTime(new Date('2024-09-02'));

const defaultProps = {
  endTimeErrorMessage: 'Error Message',
  startTimeLabel: 'Start',
  endTimeLabel: 'End',
  fromLabel: 'From',
  toLabel: 'To',
  customPredefinedRangeLabel: 'Custom',
  predefinedRanges: [],
  onRangeChange: () => {},
  dateFormat: 'MM/dd/yyyy',
  timeFormat: 'hh:mm a',
};

const snapshotDateTimeRange = {
  startDate: new Date('12 february 98 UTC'),
  endDate: new Date('13 february 98 UTC'),
};

describe('Date Time Range Picker', () => {
  it('should render correctly', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <DateTimeRangePicker
          theme={theme}
          {...defaultProps}
          dateTimeRange={snapshotDateTimeRange}
          predefinedRange={{ id: CUSTOM_RANGE_ID }}
        />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('forwards showMonthYearPickers prop to Calendar', () => {
    const { rerender } = render(
      <ThemeProvider theme={theme}>
        <DateTimeRangePicker
          theme={theme}
          {...defaultProps}
          otherCalendarProps={{
            showMonthYearPickers: true,
          }}
        />
      </ThemeProvider>,
    );

    const monthTestId =
      'DATE_TIME_RANGE_SELECTOR_DROPDOWN_CALENDAR_MONTH_PICKER_DROPDOWN_BUTTON';
    const yearTestId =
      'DATE_TIME_RANGE_SELECTOR_DROPDOWN_CALENDAR_YEAR_PICKER_DROPDOWN_BUTTON';
    const updateMonthDropdown = screen.getByTestId(monthTestId);

    expect(updateMonthDropdown).toBeInTheDocument();
    expect(updateMonthDropdown).toHaveTextContent('September');

    const updateYearDropdown = screen.getByTestId(yearTestId);

    expect(updateYearDropdown).toBeInTheDocument();
    expect(updateYearDropdown).toHaveTextContent('2024');

    // they should not be rendered wihout being specified
    rerender(
      <ThemeProvider theme={theme}>
        <DateTimeRangePicker theme={theme} {...defaultProps} />
      </ThemeProvider>,
    );

    expect(screen.queryByTestId(monthTestId)).not.toBeInTheDocument();
    expect(screen.queryByTestId(yearTestId)).not.toBeInTheDocument();
  });
});
