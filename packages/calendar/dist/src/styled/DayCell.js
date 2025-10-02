import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
function getTodayLineColor({ isPassive, isSelected, isEdge, theme, }) {
    if (isPassive) {
        return theme.dayPassiveColor;
    }
    if (theme.isClassic) {
        return isSelected ? theme.todaySelectedLineColor : theme.todayLineColor;
    }
    return isSelected && isEdge
        ? theme.todaySelectedLineColor
        : theme.todayLineColor;
}
function getDayNumberColor({ isDisabled, isPassive, isSelected, isEdge, theme, }) {
    if (isDisabled) {
        return theme.dayDisabledColor;
    }
    if (isPassive) {
        return theme.dayPassiveColor;
    }
    if (theme.isClassic) {
        return isSelected ? theme.daySelectedColor : theme.dayColor;
    }
    if (isSelected) {
        return isEdge ? theme.daySelectedEdgeColor : theme.daySelectedColor;
    }
    return theme.dayColor;
}
function getSelectionRadius({ isStartEdge, isEndEdge }) {
    let radius = '';
    if (isStartEdge) {
        radius += `
      border-top-left-radius: 50%;
      border-bottom-left-radius: 50%;
      left: 4px;
    `;
    }
    if (isEndEdge) {
        radius += `
      border-top-right-radius: 50%;
      border-bottom-right-radius: 50%;
      right: 4px;
    `;
    }
    return radius;
}
function getPreviewBorderStyle({ theme, isStartEdge, isEndEdge, }) {
    let borderStyle = '';
    if (isStartEdge) {
        borderStyle += `
      border-top-left-radius: 50%;
      border-bottom-left-radius: 50%;
      left: ${theme.isClassic ? '2px' : '4px'};
    `;
    }
    else {
        borderStyle += `
      border-left: none;
    `;
    }
    if (isEndEdge) {
        borderStyle += `
      border-top-right-radius: 50%;
      border-bottom-right-radius: 50%;
      right: ${theme.isClassic ? '2px' : '4px'};
    `;
    }
    else {
        borderStyle += `
      border-right: none;
    `;
    }
    return borderStyle;
}
const DayCell = styled.div `
  position: relative;
  display: inline-block;

  cursor: pointer;
  outline: none;

  box-sizing: border-box;

  font-size: ${({ theme }) => theme.isClassic ? theme.dayFontSize : theme.numbersTypography?.fontSize};
  line-height: ${({ theme }) => theme.isClassic ? theme.lineHeight : theme.numbersTypography?.lineHeight};
  font-weight: ${({ theme }) => theme.isClassic ? undefined : theme.numbersTypography?.fontWeight};
  font-family: ${({ theme }) => theme.isClassic ? theme.fontFamily : theme.numbersTypography?.fontFamily};
  letter-spacing: ${({ theme }) => theme.isClassic ? undefined : theme.numbersTypography?.letterSpacing};

  color: ${getDayNumberColor};
  background: ${({ theme }) => theme.dayBackground};
  width: ${({ theme }) => theme.daySize};
  height: ${({ theme }) => theme.daySize};
`;
const getBaseRangeStyle = ({ isVisible }) => css `
  position: absolute;

  top: 4px;
  right: 0;
  bottom: 4px;
  left: 0;
  display: ${isVisible ? 'block' : 'none'};
`;
const SelectionRange = styled.span `
  ${getBaseRangeStyle};
  ${getSelectionRadius}

  background: ${({ isDisabled, theme }) => isDisabled
    ? theme.daySelectedDisabledBackground
    : theme.daySelectedBackground};
`;
const SelectionRangeEdge = styled.span `
  ${getBaseRangeStyle};
  right: 4px;
  left: 4px;

  border-radius: 50%;

  background: ${({ isDisabled, theme }) => isDisabled
    ? theme.daySelectedDisabledBackground
    : theme.daySelectedEdgeBackground};
`;
const PreviewRange = styled.span `
  position: absolute;
  background: ${({ theme }) => theme.dayPreviewBackground};
  border-width: ${({ theme }) => theme.dayPreviewBorderWidth};
  border-style: ${({ theme }) => theme.dayPreviewBorderStyle};
  border-color: ${({ theme }) => theme.dayPreviewBorderColor};
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  top: ${({ theme }) => (theme.isClassic ? '2px' : '4px')};
  right: 0;
  bottom: ${({ theme }) => (theme.isClassic ? '2px' : '4px')};
  left: 0;
  ${getPreviewBorderStyle};
`;
const DayNumber = styled.div `
  position: relative;
  margin-top: ${({ theme, isToday }) => isToday && theme.todayLineHeight};

  ${({ theme, isToday }) => !theme.isClassic &&
    isToday &&
    css `
      font-size: ${theme.todayTypography?.fontSize};
      line-height: ${theme.todayTypography?.lineHeight};
      font-weight: ${theme.todayTypography?.fontWeight};
      font-family: ${theme.todayTypography?.fontFamily};
      letter-spacing: ${theme.todayTypography?.letterSpacing};
    `}
`;
const TodayLine = styled.span `
  position: relative;

  width: ${({ theme }) => theme.todayLineWidth};
  height: ${({ theme }) => theme.todayLineHeight};
  border-radius: ${({ theme }) => theme.lineBorderRadius};
  background: ${getTodayLineColor};
`;
TodayLine.propTypes = {
    isSelected: PropTypes.bool,
    isPassive: PropTypes.bool,
    isEdge: PropTypes.bool,
};
const NumberContainer = styled.div `
  position: absolute;
  top: ${({ theme }) => (theme.isClassic ? '2px' : '4px')};
  left: ${({ theme }) => (theme.isClassic ? '2px' : '4px')};
  bottom: ${({ theme }) => (theme.isClassic ? '2px' : '4px')};
  right: ${({ theme }) => (theme.isClassic ? '2px' : '4px')};
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${DayCell}:hover, ${DayCell}:focus-visible && {
    color: ${({ theme }) => (theme.isClassic ? undefined : theme.dayColor)};

    background: ${({ theme }) => theme.dayPreviewBackground};
    border-width: ${({ theme }) => theme.dayPreviewBorderWidth};
    border-style: ${({ theme }) => theme.dayPreviewBorderStyle};
    border-color: ${({ theme }) => theme.dayPreviewBorderColor};
    border-radius: 50%;
  }
`;
export { DayCell, SelectionRange, SelectionRangeEdge, PreviewRange, DayNumber, TodayLine, NumberContainer, };
