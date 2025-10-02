import defaultExport from '.';
import { badgeSize, badgePosition, badgeType, BadgeProps } from './types';

jest.mock('./components/Badge', () => 'Badge');

describe('Badge component module', () => {
  it('should have Badge component as default export', () => {
    expect(defaultExport).toBe('Badge');
  });
});
