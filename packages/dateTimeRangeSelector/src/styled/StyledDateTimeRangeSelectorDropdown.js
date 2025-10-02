import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  overflow: auto;
`;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: min-content;
`;

const DateTimeInputs = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${({ theme }) => theme.dateTimeInputsPadding};
  margin-bottom: ${({ theme }) => theme.dateTimeInputsMarginBottom};
  border-bottom: ${({ theme }) =>
    `${theme.dateTimeInputsBorderSize} solid
    ${theme.dateTimeInputsBorderColor}`};
  box-sizing: border-box;
  justify-content: flex-start;
`;

const DateTimeInputContainer = styled.div`
  display: flex;
  margin-left: ${({ theme }) => theme.timeInputContainerMarginLeft};
  flex: 1;
`;

const DateInput = styled.div`
  margin-right: ${({ theme }) => theme.dateInputMarginRight};
  box-sizing: border-box;
`;

const TimeInput = styled.div`
  margin-right: ${({ theme }) => theme.timeInputMarginRight};
  box-sizing: border-box;
`;

const EndTimeError = styled.div`
  overflow: hidden;
  display: flex;
  max-width: 75px;
  align-items: flex-end;
  color: ${({ theme }) => theme.endTimeErrorColor};
  line-height: ${({ theme }) => theme.endTimeErrorLineHeight};
  font-size: ${({ theme }) => theme.endTimeErrorFontSize};
`;

const CalendarWrapper = styled.div`
  margin: ${({ theme }) => `0 ${theme.calendarHorizontalMargin}`};
`;

const TimeSelectorPortalNode = styled.div`
  z-index: 1;
`;

export {
  Content,
  CalendarWrapper,
  CalendarContainer,
  DateTimeInputs,
  DateInput,
  TimeInput,
  EndTimeError,
  DateTimeInputContainer,
  TimeSelectorPortalNode,
};
