import React from 'react';
import { ToggleButtonTheme } from '../types';
export interface ToggleButtonGroupProps {
    isHorizontal?: boolean;
    theme?: Partial<ToggleButtonTheme>;
}
type InternalToggleButtonGroupProps = ToggleButtonGroupProps & {
    theme: ToggleButtonTheme;
};
declare const ToggleButtonGroup: React.FC<React.PropsWithChildren<InternalToggleButtonGroupProps>>;
export { ToggleButtonGroup };
declare const _default: React.FC<React.PropsWithChildren<InternalToggleButtonGroupProps>> & React.ForwardRefExoticComponent<ToggleButtonGroupProps & {
    theme: import("@8x8/oxygen-constants/dist/src/decisions/toggleButton.const").ToggleButtonTheme;
} & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=ToggleButtonGroup.d.ts.map