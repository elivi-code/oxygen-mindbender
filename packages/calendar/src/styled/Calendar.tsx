import styled from 'styled-components';

const CalendarWrapper = styled.div`
  box-sizing: border-box;
  background: ${({ theme }) => theme.calendarBackground};
  display: inline-flex;
  flex-direction: column;
  user-select: none;
  position: relative;

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize};
  line-height: ${({ theme }) => theme.lineHeight};

  padding: ${({ theme }) => theme.calendarHorizontalPadding} 0;
`;

const MonthWrapper = styled.div<{ enableMaxWidth?: boolean }>`
  display: flex;
  ${({ enableMaxWidth }) =>
    enableMaxWidth &&
    `
    overflow: auto;
    max-width: 100vw;`}
`;

const MonthSeparator = styled.div`
  width: ${({ theme }) => theme.monthSeparatorLineWidth};
  background: ${({ theme }) => theme.monthSeparatorLineColor};
  margin: 0 ${({ theme }) => theme.monthSeparatorLineMargin};

  &:last-child {
    display: none;
  }
`;

const MonthYearPickers = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.calendarMonthYearPickerBottomMargin};
`;

const MonthYearPicker = styled.div`
  margin: 0 ${({ theme }) => theme.calendarMonthYearPickerVerticalPadding};
`;

const CalendarMonthNavigation = styled.button<{
  isLeft?: boolean;
  showMonthYearPickers: boolean;
}>`
  position: absolute;
  background: none;
  border: none;
  top: ${({ theme, showMonthYearPickers }) => {
    if (showMonthYearPickers) {
      return '16px';
    }

    return theme.isClassic ? '10px' : '6px';
  }};
  ${({ isLeft }) => (isLeft ? 'left: 6px' : 'right: 6px')};
`;

export {
  CalendarWrapper,
  MonthWrapper,
  MonthSeparator,
  MonthYearPickers,
  MonthYearPicker,
  CalendarMonthNavigation,
};
