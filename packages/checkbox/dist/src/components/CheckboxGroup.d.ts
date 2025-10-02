import React, { PropsWithChildren } from 'react';
import { CheckboxGroupTheme } from '../types';
export interface CheckboxGroupProps {
    theme?: Partial<CheckboxGroupTheme>;
    isHorizontal?: boolean;
}
declare const CheckboxGroup: React.FC<PropsWithChildren<CheckboxGroupProps>>;
export { CheckboxGroup };
declare const _default: React.FC<React.PropsWithChildren<CheckboxGroupProps>> & React.ForwardRefExoticComponent<CheckboxGroupProps & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=CheckboxGroup.d.ts.map