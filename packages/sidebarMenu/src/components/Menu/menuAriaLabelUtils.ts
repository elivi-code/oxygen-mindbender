interface GetMenuAriaLabelParams {
  /** the label of the parent menu item */
  menuItemLabel: string;
  /** custom aria-label override for the badge */
  badgeAriaLabel?: string;
  /** whether the badge is present */
  hasBadge?: boolean;
}

/**
 * Get aria-label for a menu item button.
 * Returns the menu item label, with badge information appended when a badge is present.
 *
 * @param params - Parameters for generating the aria-label
 * @returns The aria-label string for the menu button
 */
export function getMenuAriaLabel({
  menuItemLabel,
  badgeAriaLabel,
  hasBadge,
}: GetMenuAriaLabelParams): string {
  if (!hasBadge) {
    return menuItemLabel;
  }

  // append badge information to the menu item label
  return badgeAriaLabel
    ? `${menuItemLabel}, ${badgeAriaLabel}`
    : `${menuItemLabel}, requires attention`;
}
