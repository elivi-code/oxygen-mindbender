import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withTheme, withDeprecation } from '@8x8/oxygen-config';
import THEME_NAME from '../constants/themeName';
import Icon from './Icon';
import Value from './Value';
import Action from './Action';
import LabelWrapper from '../styled/LabelWrapper';
import LabelIconWrapper from '../styled/LabelIconWrapper';
const Label = props => {
    const propsWithDefault = {
        testId: 'LABEL',
        value: '',
        action: '',
        actionLabel: '',
        infoBoxShowOn: 'hover',
        isDisabled: false,
        isRequired: false,
        shouldWrapText: false,
        showTooltipOnOverflow: true,
        ...props,
    };
    const { theme, testId, children, value, action, actionLabel, actionTarget, htmlFor, infoBoxText, infoBoxShowOn, infoBoxButtonLabel, isRequired, isDisabled, shouldWrapText, showTooltipOnOverflow, otherActionProps, ...rest } = propsWithDefault;
    const showAction = action && actionLabel;
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(LabelWrapper, { ...rest },
            React.createElement(LabelIconWrapper, null,
                value && (React.createElement(Value, { testId: testId, value: value, htmlFor: htmlFor, isRequired: isRequired, isDisabled: isDisabled, shouldWrapText: shouldWrapText, showTooltipOnOverflow: showTooltipOnOverflow })),
                infoBoxText && (React.createElement(Icon, { infoBoxText: infoBoxText, infoBoxShowOn: infoBoxShowOn, infoBoxButtonLabel: infoBoxButtonLabel, theme: theme, testId: testId }))),
            showAction && (React.createElement(Action, { action: action, actionTarget: actionTarget, testId: testId, shouldWrapText: shouldWrapText, ...otherActionProps }, actionLabel)),
            children)));
};
export default withTheme(withDeprecation(Label, `Label deprecated props: "infoBoxContainer"`), THEME_NAME);
