import styled from 'styled-components';
import getBackgroundColor from '../utils/getBackgroundColor';
const getKnobTranslation = ({ theme, isChecked, isIndeterminate, }) => {
    const { knobMargin, knobSize, width } = theme;
    const isCheckedTranslation = `calc(${width} - ${knobSize} - 2 * ${knobMargin})`;
    const isIndeterminateTranslation = `calc(${width} / 2 - ${knobSize} / 2 - ${knobMargin})`;
    if (isChecked) {
        return `transform: translate(${isCheckedTranslation})`;
    }
    if (isIndeterminate) {
        return `transform: translate(${isIndeterminateTranslation})`;
    }
    return null;
};
const ToggleButtonIcon = styled.span `
  display: flex;
  background: ${({ theme, isChecked, isDisabled, isIndeterminate }) => getBackgroundColor({
    theme,
    isChecked,
    isDisabled,
    isIndeterminate,
})};
  max-width: ${({ theme }) => theme.width};
  min-width: ${({ theme }) => theme.width};
  height: ${({ theme }) => theme.height};
  border-radius: ${({ theme }) => `calc(${theme.height} / 2)`};
  align-items: center;
  margin-right: ${({ theme, hasLabel }) => hasLabel && theme.margin};
  opacity: ${({ isDisabled, theme }) => theme.iconSet !== 'novo' && isDisabled ? '0.5' : '1'};
  &::after {
    content: '';
    width: ${({ theme }) => theme.knobSize};
    height: ${({ theme }) => theme.knobSize};
    background: ${({ theme, isDisabled }) => isDisabled ? theme.knobColorDisabled : theme.knobColor};
    visibility: visible;
    border-radius: 100%;
    margin-left: ${({ theme }) => theme.knobMargin};
    cursor: inherit;
    transition: all 150ms ease;
    ${({ theme, isChecked, isIndeterminate }) => getKnobTranslation({ theme, isChecked, isIndeterminate })}
  }
`;
export default ToggleButtonIcon;
