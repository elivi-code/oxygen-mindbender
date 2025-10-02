import React, { PureComponent } from 'react';
import { getTestAttributes } from '@8x8/oxygen-config';
import ValueText from '../styled/ValueText';
import Asterisk from '../styled/Asterisk';
export default class Value extends PureComponent {
    constructor() {
        super(...arguments);
        this.renderContent = () => {
            const { value, showTooltipOnOverflow, isRequired } = this.props;
            if (showTooltipOnOverflow && typeof value === 'string') {
                return (React.createElement("span", { title: value },
                    value,
                    isRequired && React.createElement(Asterisk, { "aria-hidden": "true" }, "*")));
            }
            return (React.createElement(React.Fragment, null,
                value,
                isRequired && React.createElement(Asterisk, { "aria-hidden": "true" }, "*")));
        };
    }
    render() {
        const { htmlFor, isDisabled, shouldWrapText, testId } = this.props;
        return (React.createElement(ValueText, { ...getTestAttributes(`${testId}_VALUE`), htmlFor: htmlFor, isDisabled: isDisabled, shouldWrapText: shouldWrapText }, this.renderContent()));
    }
}
Value.defaultProps = {
    testId: 'LABEL',
    value: '',
    isRequired: false,
    isDisabled: false,
    shouldWrapText: false,
    showTooltipOnOverflow: true,
};
