import styled, { css } from 'styled-components';
const MonthGrid = styled.div `
  width: ${({ theme }) => 7 * parseFloat(theme.daySize)}rem;
  display: flex;
  flex-wrap: wrap;
  align-self: flex-start;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize};
  line-height: ${({ theme }) => theme.lineHeight};
`;
const MonthName = styled.div `
  color: ${({ theme }) => theme.monthColor};
  font-size: ${({ theme }) => theme.isClassic
    ? theme.monthNameFontSize
    : theme.monthYearTypography?.fontSize};
  line-height: ${({ theme }) => theme.isClassic
    ? theme.monthNameLineHeight
    : theme.monthYearTypography?.lineHeight};
  font-weight: ${({ theme }) => theme.isClassic
    ? theme.monthNameFontWeight
    : theme.monthYearTypography?.fontWeight};
  font-family: ${({ theme }) => theme.isClassic ? undefined : theme.monthYearTypography?.fontFamily};
  letter-spacing: ${({ theme }) => theme.isClassic ? undefined : theme.monthYearTypography?.letterSpacing};
  display: flex;
  flex: 1 1 ${({ theme }) => 7 * parseFloat(theme.daySize)}rem;
  justify-content: center;
`;
const WeekDays = styled.div `
  display: flex;
  margin-bottom: ${({ theme }) => theme.weekDaysMarginBottom};
  border-bottom-width: ${({ theme }) => theme.weekDaysBorderWidth};
  border-bottom-style: ${({ theme }) => theme.weekDaysBorderStyle};
  border-bottom-color: ${({ theme }) => theme.weekDaysBorderColor};

  ${({ theme }) => !theme.isClassic &&
    css `
      font-size: ${theme.weekdaysTypography?.fontSize};
      line-height: ${theme.weekdaysTypography?.lineHeight};
      font-weight: ${theme.weekdaysTypography?.fontWeight};
      font-family: ${theme.weekdaysTypography?.fontFamily};
      letter-spacing: ${theme.weekdaysTypography?.letterSpacing};
    `}
`;
const WeekDay = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.daySize};
  height: ${({ theme }) => theme.daySize};
  color: ${({ theme }) => theme.weekDayColor};
`;
export { MonthGrid, MonthName, WeekDays, WeekDay };
