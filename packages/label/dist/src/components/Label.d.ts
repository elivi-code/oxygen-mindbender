import React from 'react';
import { ActionTarget } from '../constants/targets';
import { ActionProps } from './Action';
import { LabelTheme, showOn } from '../types';
interface Props {
    theme?: LabelTheme;
    testId?: string;
    value?: React.ReactNode;
    action?: ActionProps['action'];
    actionLabel?: string;
    actionTarget?: ActionTarget;
    htmlFor?: string;
    infoBoxText?: React.ReactNode;
    infoBoxShowOn?: keyof typeof showOn;
    infoBoxButtonLabel?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    shouldWrapText?: boolean;
    showTooltipOnOverflow?: boolean;
    otherActionProps?: Record<string, unknown>;
}
export type LabelProps = Props & React.PropsWithChildren & {
    theme: LabelTheme;
};
declare const _default: React.ForwardRefExoticComponent<Props & {
    children?: React.ReactNode;
} & {
    theme: import("@8x8/oxygen-constants/dist/src/decisions/label.const").LabelTheme;
} & React.RefAttributes<unknown>> & {
    componentType: string;
} & React.ForwardRefExoticComponent<Omit<Props & {
    children?: React.ReactNode;
} & {
    theme: import("@8x8/oxygen-constants/dist/src/decisions/label.const").LabelTheme;
} & React.RefAttributes<unknown>, "ref"> & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=Label.d.ts.map