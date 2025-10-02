import styled from 'styled-components';
import { ArrowDownIcon } from '@8x8/oxygen-icon';
const getIndicatorColor = (props) => {
    const { isDisabled, theme } = props;
    if (isDisabled) {
        return theme.indicatorColorDisabled;
    }
    return theme.indicatorColor;
};
export const DropdownIcon = styled(ArrowDownIcon).attrs(props => ({
    color: getIndicatorColor(props),
})) `
  ${({ left, theme }) => left
    ? `margin-right: ${theme.indicatorLeftMargin};`
    : `margin-left: ${theme.indicatorLeftMargin};`};
`;
export const DropdownIndicator = styled.span `
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 8px solid ${getIndicatorColor};
  ${({ left, theme }) => left
    ? `margin: 0 calc(5px + ${theme.indicatorLeftMargin}) 0 5px;`
    : `margin: 0 5px 0 calc(5px + ${theme.indicatorLeftMargin});`};
  transform: scale(${({ theme }) => theme.indicatorScale});
`;
export default DropdownIndicator;
