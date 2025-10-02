import React from 'react';
import { icon } from '@8x8/oxygen-constants';
export interface IconProps extends React.HTMLAttributes<SVGElement> {
    active?: boolean;
    children?: React.ReactNode;
    color?: string;
    disabled?: boolean;
    forwardedRef?: React.RefObject<SVGSVGElement>;
    invertColors?: boolean;
    link?: boolean;
    selected?: boolean;
    size?: number;
    theme?: Partial<typeof icon>;
    title?: string;
}
declare const _default: React.FunctionComponent<IconProps> & React.ForwardRefExoticComponent<IconProps & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=Icon.d.ts.map