import theme from '@8x8/oxygen-theme';
import { getColor } from './getColor';

describe('getColor utility', () => {
  test('returns default color for standard link', () => {
    const color = getColor({ theme: theme.light });

    expect(color).toBe(theme.light.action01);
  });

  test('returns action07 color for chat link', () => {
    const color = getColor({ isChat: true, theme: theme.light });

    expect(color).toBe(theme.light.action07);
  });

  test('returns hover color for hover state', () => {
    const color = getColor({ isHovered: true, theme: theme.light });

    expect(color).toBe(theme.light.hover01);
  });

  test('returns hover color for focus state', () => {
    const color = getColor({ isFocused: true, theme: theme.light });

    expect(color).toBe(theme.light.hover01);
  });

  test('returns active07 for active state', () => {
    const color = getColor({ isActive: true, theme: theme.light });

    expect(color).toBe(theme.light.active07);
  });

  test('maintains action07 for chat link in hover/focus states', () => {
    const color = getColor({
      isChat: true,
      isHovered: true,
      theme: theme.light,
    });

    expect(color).toBe(theme.light.action07);
  });
});
