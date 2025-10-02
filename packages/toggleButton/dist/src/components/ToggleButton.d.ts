import React from 'react';
import { InputValue } from '@8x8/oxygen-switch-base';
import { ToggleButtonTheme } from '../types';
export interface ToggleButtonProps<T extends InputValue = string> {
    theme?: Partial<ToggleButtonTheme>;
    testId?: string;
    id?: string;
    label?: React.ReactNode;
    value?: T;
    name?: string;
    infoBoxText?: React.ReactNode;
    infoBoxButtonLabel?: string;
    isChecked?: boolean;
    isIndeterminate?: boolean;
    isDisabled?: boolean;
    showLabelTooltipOnOverflow?: boolean;
    onBlur?: () => void;
    onChange?: (value?: T) => void;
    onFocus?: () => void;
}
declare const ToggleButton: <T extends string | number | readonly string[] | undefined>(props: ToggleButtonProps<T>) => React.JSX.Element;
export { ToggleButton };
declare const _default: React.ForwardRefExoticComponent<ToggleButtonProps<string | number | readonly string[] | undefined> & React.RefAttributes<unknown>> & {
    componentType: string;
} & React.ForwardRefExoticComponent<Omit<ToggleButtonProps<string | number | readonly string[] | undefined> & React.RefAttributes<unknown>, "ref"> & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=ToggleButton.d.ts.map