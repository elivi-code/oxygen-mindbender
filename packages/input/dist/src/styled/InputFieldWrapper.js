import styled from 'styled-components';
import getBorderColor from './utils/getBorderColor';
import getInputBorderRadius from './utils/getInputBorderRadius';
import getInputBorderWidth from './utils/getInputBorderWidth';
const getPadding = ({ theme, fixed, iconLeft, iconRight, withPrefix, withSuffix, isReadOnly, }) => {
    if (fixed ||
        (iconLeft && iconRight) ||
        (theme.prefixSuffixInsideInput && withPrefix && withSuffix)) {
        return '0';
    }
    if (iconLeft || (theme.prefixSuffixInsideInput && withPrefix)) {
        return `0 ${theme.horizontalSpacing} 0 0`;
    }
    if (iconRight || (theme.prefixSuffixInsideInput && withSuffix)) {
        return `0 0 0 ${theme.horizontalSpacing}`;
    }
    if (isReadOnly) {
        return `${theme.horizontalSpacingReadOnly}`;
    }
    return `0 ${theme.horizontalSpacing}`;
};
const InputFieldWrapper = styled.div `
  display: flex;
  flex: 1;
  border-width: ${({ theme, withPrefix, withSuffix, focused, isReadOnly }) => getInputBorderWidth({
    theme,
    withSuffix,
    withPrefix,
    focused,
    isReadOnly,
})};
  border-style: ${({ theme }) => theme.borderStyle};
  border-color: ${getBorderColor};
  border-radius: ${({ theme, withSuffix, withPrefix }) => getInputBorderRadius({
    theme,
    withSuffix,
    withPrefix,
})};
  box-sizing: border-box;
  margin: ${({ theme, isReadOnly }) => isReadOnly ? `0 0 0 -${theme.borderWidth}` : 0};
  padding: ${getPadding};
  transition: border-color ${({ theme }) => theme.borderTransitionTiming}
    ease-in-out;
  cursor: ${({ isDisabled }) => isDisabled && 'not-allowed'};
`;
InputFieldWrapper.displayName = 'InputFieldWrapper';
export default InputFieldWrapper;
