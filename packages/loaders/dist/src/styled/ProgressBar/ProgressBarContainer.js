import styled from 'styled-components';
import { progressBarSize } from '../../types';
const getContainerWidth = ({ theme, size, fullWidth }) => {
    if (fullWidth) {
        return '100%';
    }
    if (typeof size === 'number') {
        return `${size}px`;
    }
    if (size === progressBarSize.small) {
        return theme.widthProgressBarSmall;
    }
    if (size === progressBarSize.large) {
        return theme.widthProgressBarLarge;
    }
    if (size === progressBarSize.default) {
        return theme.widthProgressBarDefault;
    }
    return size;
};
const ProgressBarContainer = styled.div `
  display: inline-block;
  max-width: ${getContainerWidth};
  min-width: ${({ theme }) => theme.widthProgressBarSmall};
  width: ${({ theme }) => theme.widthProgressBarLarge};
`;
export default ProgressBarContainer;
