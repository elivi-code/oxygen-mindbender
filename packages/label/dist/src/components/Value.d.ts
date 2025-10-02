import React, { PureComponent } from 'react';
interface ValueProps {
    testId?: string;
    htmlFor?: string;
    value?: React.ReactNode;
    isRequired?: boolean;
    isDisabled?: boolean;
    shouldWrapText?: boolean;
    showTooltipOnOverflow?: boolean;
}
export default class Value extends PureComponent<ValueProps> {
    static defaultProps: {
        testId: string;
        value: string;
        isRequired: boolean;
        isDisabled: boolean;
        shouldWrapText: boolean;
        showTooltipOnOverflow: boolean;
    };
    renderContent: () => React.JSX.Element;
    render(): React.JSX.Element;
}
export {};
//# sourceMappingURL=Value.d.ts.map