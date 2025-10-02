import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, waitFor, screen, within } from '@testing-library/react';
import deLocale from 'date-fns/locale/de';
import Calendar from './Calendar';
import { CalendarProps } from './CalendarProps';
import { DateRange } from '../types';
import '@testing-library/jest-dom';

describe('Calendar', () => {
  const user = userEvent.setup();

  const setup = ({ ...args }: Partial<CalendarProps>) => (
    <Calendar
      displayMode="dateRange"
      showMonthArrow
      showMonthYearPickers
      months={1}
      locale={deLocale}
      dateOptions={{
        weekStartsOn: 0,
        customEvenMonths: false,
      }}
      {...args}
    />
  );

  it('should not contain buttons without "type=button" attribute', async () => {
    const calendarDate = new Date('2024-02-05');
    const testId = 'test-calendar';

    render(
      setup({
        defaultFocusedDate: calendarDate,
        testId,
      }),
    );
    const buttons = screen.getAllByRole('button');

    buttons.forEach(button => {
      expect(button).toHaveAttribute('type', 'button');
    });
  });

  describe('Keyboard navigation', () => {
    it('should navigate using arrow keys', async () => {
      let calendarDate = new Date('2024-01-05');
      const testId = 'test-calendar';
      const month = calendarDate.getMonth();
      let calendarRange;
      const onRangeChange = (selectedRange: DateRange) => {
        calendarRange = selectedRange;
      };
      const onDateChange = (selectedDate: Date) => {
        calendarDate = selectedDate;
      };

      render(
        setup({
          date: calendarDate,
          range: calendarRange,
          testId,
          onRangeChange,
          onDateChange,
        }),
      );

      await screen.getByTestId(`${testId}_0_MONTH_0_2024_DAY_1`).focus();
      await user.keyboard('{ArrowRight}');
      await waitFor(() => {
        expect(
          screen.getByTestId(
            `${testId}_0_MONTH_${month}_${calendarDate.getFullYear()}_DAY_2`,
          ),
        ).toHaveFocus();
      });
      await user.keyboard('{ArrowDown}');
      await waitFor(() => {
        expect(
          screen.getByTestId(
            `${testId}_0_MONTH_${month}_${calendarDate.getFullYear()}_DAY_9`,
          ),
        ).toHaveFocus();
      });
      await user.keyboard('{ArrowLeft}');
      await waitFor(() => {
        expect(
          screen.getByTestId(
            `${testId}_0_MONTH_${month}_${calendarDate.getFullYear()}_DAY_8`,
          ),
        ).toHaveFocus();
      });
      await user.keyboard('{ArrowUp}');
      await waitFor(() => {
        expect(
          screen.getByTestId(
            `${testId}_0_MONTH_${month}_${calendarDate.getFullYear()}_DAY_1`,
          ),
        ).toHaveFocus();
      });
    });

    it('should select a range using keyboard navigation', async () => {
      let calendarDate = new Date('2024-01-05');
      const testId = 'test-calendar';
      let calendarRange: DateRange | undefined;
      const onRangeChange = (selectedRange: DateRange) => {
        calendarRange = selectedRange;
      };
      const onDateChange = (selectedDate: Date) => {
        calendarDate = selectedDate;
      };
      const { rerender } = render(
        setup({
          date: calendarDate,
          range: calendarRange,
          testId,
          onRangeChange,
          onDateChange,
        }),
      );

      await screen.getByTestId(`${testId}_0_MONTH_0_2024_DAY_1`).focus();
      await user.keyboard('{Enter}');

      expect(calendarRange?.startDate).toEqual(new Date('2024-01-01'));

      rerender(
        setup({
          date: calendarDate,
          range: calendarRange,
          testId,
          onRangeChange,
          onDateChange,
        }),
      );
      await screen.getByTestId(`${testId}_0_MONTH_0_2024_DAY_8`).focus();
      await user.keyboard('{Enter}');

      expect(calendarRange?.endDate).toEqual(new Date('2024-01-08'));
    });

    it('should not navigate to next month if arrows and month pickers are hidden', async () => {
      let calendarDate = new Date('2024-01-31');
      let calendarRange;
      const testId = 'test-calendar';
      const onRangeChange = (selectedRange: DateRange) => {
        calendarRange = selectedRange;
      };
      const onDateChange = (selectedDate: Date) => {
        calendarDate = selectedDate;
      };

      render(
        setup({
          date: calendarDate,
          range: calendarRange,
          testId,
          onRangeChange,
          onDateChange,
          showMonthArrow: false,
          showMonthYearPickers: false,
        }),
      );
      await screen.getByTestId(`${testId}_0_MONTH_0_2024_DAY_31`).focus();
      await user.keyboard('{ArrowRight}');

      expect(
        screen.getByTestId(`${testId}_0_MONTH_0_2024_DAY_31`),
      ).toHaveFocus();
    });

    it('should not navigate to previous month if the previous month is completely disabled by minDate', async () => {
      const calendarDate = new Date('1989-06-26');
      let calendarRange;
      const testId = 'test-calendar';
      const onRangeChange = (selectedRange: DateRange) => {
        calendarRange = selectedRange;
      };

      render(
        setup({
          defaultFocusedDate: calendarDate,
          minDate: new Date('1989-06-03'),
          testId,
          range: calendarRange,
          onRangeChange,
        }),
      );

      // focus the first day of June 1989 (month numbers are 0 based)
      await screen.getByTestId(`${testId}_0_MONTH_5_1989_DAY_1`).focus();
      await user.keyboard('{ArrowLeft}');

      expect(
        screen.getByTestId(`${testId}_0_MONTH_5_1989_DAY_1`),
      ).toHaveFocus();
    });

    it('should not navigate to next month if the next month is completely disabled by maxDate', async () => {
      const calendarDate = new Date('1989-06-26');
      let calendarRange;
      const testId = 'test-calendar';
      const onRangeChange = (selectedRange: DateRange) => {
        calendarRange = selectedRange;
      };

      render(
        setup({
          defaultFocusedDate: calendarDate,
          maxDate: new Date('1989-06-28'),
          testId,
          range: calendarRange,
          onRangeChange,
        }),
      );

      // focus the last day of June 1989 (month numbers are 0 based)
      await screen.getByTestId(`${testId}_0_MONTH_5_1989_DAY_30`).focus();
      await user.keyboard('{ArrowRight}');

      expect(
        screen.getByTestId(`${testId}_0_MONTH_5_1989_DAY_30`),
      ).toHaveFocus();
    });
  });

  describe('Date Range selection', () => {
    it('should select a range using mouse', async () => {
      const calendarDate = new Date('2024-02-05');
      const testId = 'test-calendar';

      let calendarRange: DateRange | undefined;
      const changeRangeMock = jest.fn();
      const onRangeChange = (selectedRange: DateRange) => {
        changeRangeMock(selectedRange);

        calendarRange = selectedRange;
      };

      const { rerender } = render(
        setup({
          defaultFocusedDate: calendarDate,
          range: calendarRange,
          testId,
          onRangeChange,
        }),
      );

      expect(changeRangeMock).toHaveBeenCalledTimes(0);

      await user.click(screen.getByTestId(`${testId}_0_MONTH_1_2024_DAY_2`));
      expect(changeRangeMock).toHaveBeenCalledWith({
        startDate: new Date('2024-02-02'),
        endDate: undefined,
      });

      expect(calendarRange?.startDate).toEqual(new Date('2024-02-02'));

      rerender(
        setup({
          defaultFocusedDate: calendarDate,
          range: calendarRange,
          testId,
          onRangeChange,
        }),
      );

      await user.click(screen.getByTestId(`${testId}_0_MONTH_1_2024_DAY_8`));
      expect(changeRangeMock).toHaveBeenCalledWith({
        startDate: new Date('2024-02-02'),
        endDate: new Date('2024-02-08'),
      });
    });

    it('should not select after the maxDate the date range', async () => {
      const calendarDate = new Date('2024-02-05');
      const testId = 'test-calendar';

      let calendarRange;
      const changeRangeMock = jest.fn();
      const onRangeChange = (selectedRange: DateRange) => {
        changeRangeMock(selectedRange);

        calendarRange = selectedRange;
      };

      render(
        setup({
          defaultFocusedDate: calendarDate,
          range: calendarRange,
          maxDate: new Date('2024-02-08'),
          testId,
          onRangeChange,
        }),
      );

      expect(changeRangeMock).toHaveBeenCalledTimes(0);
      // Try to select 11th of February 2024 (which is after the maxDate - 8th of February 2024)
      await user.click(screen.getByTestId(`${testId}_0_MONTH_1_2024_DAY_11`));

      expect(changeRangeMock).toHaveBeenCalledTimes(0);
    });
  });

  describe('On a day clicked', () => {
    it('should call onDateChange if displayMode="date"', async () => {
      const calendarDate = new Date('2024-02-05');
      const testId = 'test-calendar';
      const onDateChange = jest.fn();

      render(
        setup({
          displayMode: 'date',
          defaultFocusedDate: calendarDate,
          testId,
          onDateChange,
        }),
      );
      await user.click(screen.getByTestId(`${testId}_0_MONTH_1_2024_DAY_2`));

      expect(onDateChange).toHaveBeenCalledWith(new Date('2024-02-02'));
    });

    it('should call onRangeChange if displayMode="dateRange" and props.range missing', async () => {
      const calendarDate = new Date('2024-02-05');
      const testId = 'test-calendar';
      const onRangeChange = jest.fn();

      render(
        setup({
          displayMode: 'dateRange',
          defaultFocusedDate: calendarDate,
          testId,
          onRangeChange,
        }),
      );
      await user.click(screen.getByTestId(`${testId}_0_MONTH_1_2024_DAY_2`));

      expect(onRangeChange).toHaveBeenCalledWith({
        startDate: new Date('2024-02-02'),
        endDate: undefined,
      });
    });

    it('should call onRangeChange if displayMode="dateRange" and props.range.startDate missing', async () => {
      const calendarDate = new Date('2024-02-05');
      const testId = 'test-calendar';
      const onRangeChange = jest.fn();

      render(
        setup({
          displayMode: 'dateRange',
          defaultFocusedDate: calendarDate,
          range: {
            startDate: undefined as unknown as Date,
            endDate: undefined,
          },
          testId,
          onRangeChange,
        }),
      );
      await user.click(screen.getByTestId(`${testId}_0_MONTH_1_2024_DAY_2`));

      expect(onRangeChange).toHaveBeenCalledWith({
        startDate: new Date('2024-02-02'),
        endDate: undefined,
      });
    });
  });

  describe('custom render options', () => {
    it('renders correctly with weekStartsOn=1', () => {
      const { rerender } = render(<Calendar />);

      const headers = within(
        screen.getByTestId('CALENDAR_0_WEEK_DAYS'),
      ).getAllByRole('columnheader');

      // first item is Sunday
      expect(headers[0].textContent).toContain('Sun');

      rerender(<Calendar dateOptions={{ weekStartsOn: 1 }} />);

      const headersCustom = within(
        screen.getByTestId('CALENDAR_0_WEEK_DAYS'),
      ).getAllByRole('columnheader');

      // first item is Monday
      expect(headersCustom[0].textContent).toContain('Mon');
    });
  });
});
