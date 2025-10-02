/**
 * Get aria-label for a menu item button.
 * Returns the menu item label, with badge information appended when a badge is present.
 *
 * @param params - Parameters for generating the aria-label
 * @returns The aria-label string for the menu button
 */
export function getMenuAriaLabel({ menuItemLabel, badgeAriaLabel, hasBadge, }) {
    if (!hasBadge) {
        return menuItemLabel;
    }
    // append badge information to the menu item label
    return badgeAriaLabel
        ? `${menuItemLabel}, ${badgeAriaLabel}`
        : `${menuItemLabel}, requires attention`;
}
