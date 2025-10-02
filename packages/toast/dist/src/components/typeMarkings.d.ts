import React from 'react';
import type { Theme, ToastType } from '../types';
type TypeIconProps = {
    theme: Theme;
    type: ToastType;
    iconTitle?: string;
};
declare const TypeIcon: React.FunctionComponent<TypeIconProps>;
declare const TypeIndicator: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    type: ToastType;
}, never>;
export { TypeIcon, TypeIndicator };
//# sourceMappingURL=typeMarkings.d.ts.map