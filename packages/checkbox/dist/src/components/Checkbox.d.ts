import React from 'react';
import { InputValue, SwitchBaseProps } from '@8x8/oxygen-switch-base';
import { CheckboxTheme } from '../types';
export interface CheckboxProps<T extends InputValue = string> extends SwitchBaseProps<T> {
    theme?: Partial<CheckboxTheme>;
    isIndeterminate?: boolean;
    showLabelTooltipOnOverflow?: boolean;
}
declare const Checkbox: <T extends string | number | readonly string[] | undefined>(props: CheckboxProps<T>) => React.JSX.Element;
export { Checkbox };
declare const _default: (<T extends string | number | readonly string[] | undefined>(props: CheckboxProps<T>) => React.JSX.Element) & React.ForwardRefExoticComponent<CheckboxProps<string | number | readonly string[] | undefined> & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=Checkbox.d.ts.map