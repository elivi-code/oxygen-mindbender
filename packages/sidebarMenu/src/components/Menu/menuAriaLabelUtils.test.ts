import { getMenuAriaLabel } from './menuAriaLabelUtils';

describe('getMenuAriaLabel', () => {
  const defaultParams = {
    menuItemLabel: 'Test Menu Item',
  };

  describe('when badge is not present', () => {
    it('should return the menu item label when hasBadge is false', () => {
      const result = getMenuAriaLabel({
        ...defaultParams,
        hasBadge: false,
      });

      expect(result).toBe('Test Menu Item');
    });

    it('should return the menu item label when hasBadge is undefined', () => {
      const result = getMenuAriaLabel({
        ...defaultParams,
      });

      expect(result).toBe('Test Menu Item');
    });
  });

  describe('when badge is present', () => {
    describe('aria-label generation', () => {
      it('should generate default aria-label', () => {
        const result = getMenuAriaLabel({
          ...defaultParams,
          hasBadge: true,
        });

        expect(result).toBe('Test Menu Item, requires attention');
      });

      it('should use custom aria-label when provided', () => {
        const result = getMenuAriaLabel({
          ...defaultParams,
          hasBadge: true,
          badgeAriaLabel: 'custom label',
        });

        expect(result).toBe('Test Menu Item, custom label');
      });

      it('should combine menu item label with custom aria-label', () => {
        const result = getMenuAriaLabel({
          menuItemLabel: 'Settings',
          hasBadge: true,
          badgeAriaLabel: '3 new notifications',
        });

        expect(result).toBe('Settings, 3 new notifications');
      });
    });

    describe('combined scenarios', () => {
      it('should handle custom aria-label', () => {
        const result = getMenuAriaLabel({
          menuItemLabel: 'Messages',
          hasBadge: true,
          badgeAriaLabel: '5 unread messages',
        });

        expect(result).toBe('Messages, 5 unread messages');
      });
    });
  });
});
