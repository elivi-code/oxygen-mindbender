import React from 'react';
import { render, screen } from '@testing-library/react';
import DateTimeRangeSelector from './DateTimeRangeSelector';

jest.useFakeTimers().setSystemTime(new Date('2024-09-30'));

describe('DateTimeRangeSelector new tests', () => {
  it('only applies state updates on clicking apply', () => {
    const onRangeChange = jest.fn();

    render(<DateTimeRangeSelector onRangeChange={onRangeChange} />);

    // Open DateTimeRangeSelector
    screen.getByTestId('DATE_TIME_RANGE_SELECTOR_INPUT').click();

    // Select date 1 (2024-10-03)
    screen
      .getByTestId(
        'DATE_TIME_RANGE_SELECTOR_DROPDOWN_CALENDAR_1_MONTH_9_2024_DAY_3',
      )
      .click();

    // Select date 2 (2024-10-04)
    screen
      .getByTestId(
        'DATE_TIME_RANGE_SELECTOR_DROPDOWN_CALENDAR_1_MONTH_9_2024_DAY_4',
      )
      .click();

    // Verify that date has not been applied
    expect(onRangeChange).toHaveBeenCalledTimes(0);

    // Click on Apply
    screen
      .getByTestId('DATE_TIME_RANGE_SELECTOR_DROPDOWN_FINISH_BUTTON')
      .click();

    // Verify that date was applied
    expect(onRangeChange).toHaveBeenCalledTimes(1);
    expect(onRangeChange).toHaveBeenCalledWith({
      dateTime: {
        startDate: new Date('2024-10-03T00:00:00.000Z'),
        endDate: new Date('2024-10-04T23:59:00.000Z'),
      },
    });
  });
});
