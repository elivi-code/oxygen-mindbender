import React from 'react';
import { withTheme, getTestAttributes } from '@8x8/oxygen-config';
import * as Styled from '../styled';
const ClearIndicator = (props) => {
    const { theme, isFocused = false, selectProps, getStyles, innerProps: { ref, ...restInnerProps }, } = props;
    const { testId, clearIconAriaLabel } = selectProps;
    const { clearIconColor, clearIconFocusedColor, iconSet } = theme;
    const { isClearable } = selectProps;
    const Icon = iconSet === 'novo' ? Styled.CloseNovoIcon : Styled.CloseIcon;
    const iconProps = {
        isFocused,
        color: isFocused ? clearIconFocusedColor : clearIconColor,
        'aria-hidden': true,
        ...(iconSet === 'novo' && { size: 22 }),
        ...getTestAttributes(`${testId}_CLEAR_INDICATOR`),
    };
    return (React.createElement("div", { ...restInnerProps, ref: ref, style: getStyles('clearIndicator', props), "aria-hidden": "false", role: isClearable ? 'button' : undefined, "aria-label": clearIconAriaLabel ? `${clearIconAriaLabel}` : undefined },
        React.createElement(Icon, { ...iconProps })));
};
export { ClearIndicator };
export default withTheme(ClearIndicator, 'select');
