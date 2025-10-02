/// <reference types="react" />
import { staticTooltip } from '@8x8/oxygen-constants';
export type Theme = typeof staticTooltip;
export interface TooltipProps {
    children: React.ReactNode;
    testId?: string;
    renderArrow?: () => React.ReactNode;
    theme?: Partial<Theme>;
    forwardedRef?: React.Ref<HTMLDivElement>;
}
//# sourceMappingURL=types.d.ts.map