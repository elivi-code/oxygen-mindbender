import React from 'react';
import type { BadgeProps } from '../../../types';
interface MenuBadgeProps extends BadgeProps {
    /** whether the badge is for sub menu */
    isSubMenuItem?: boolean;
}
declare function MenuBadge({ hasBadge, badgeChildren, isSubMenuItem }: MenuBadgeProps): React.JSX.Element | null;
export { MenuBadge };
//# sourceMappingURL=Badge.d.ts.map