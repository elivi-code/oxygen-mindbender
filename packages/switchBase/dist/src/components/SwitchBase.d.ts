import React from 'react';
import { DefaultTheme } from 'styled-components';
import { SwitchBaseCommonProps } from './SwitchBaseCommonProps';
import { InputValue } from '../types';
export interface SwitchBaseProps<T extends InputValue> extends SwitchBaseCommonProps<T> {
    inputProps?: Record<string, unknown>;
    labelProps?: Record<string, unknown>;
    showLabelTooltipOnOverflow?: boolean;
    label?: React.ReactNode;
    infoBoxText?: React.ReactNode;
    infoBoxButtonLabel?: string;
    htmlFor?: string;
    theme?: Partial<DefaultTheme>;
    onChange?: (value?: T) => void;
    isToggleButton?: boolean;
}
interface SwitchBaseState {
    id: string;
    isFocused: boolean;
}
declare class SwitchBase<T extends InputValue> extends React.Component<SwitchBaseProps<T>, SwitchBaseState> {
    static defaultProps: {
        theme: {};
        testId: string;
        value: string;
        isChecked: boolean;
        isDisabled: boolean;
        isToggleButton: boolean;
        showLabelTooltipOnOverflow: boolean;
        inputProps: {};
        labelProps: {};
    };
    state: SwitchBaseState;
    /**
     * On change handler
     */
    handleOnChange: (event: React.SyntheticEvent) => void;
    handleOnKeyPress: (event: React.KeyboardEvent) => void;
    render(): React.JSX.Element;
}
export default SwitchBase;
//# sourceMappingURL=SwitchBase.d.ts.map