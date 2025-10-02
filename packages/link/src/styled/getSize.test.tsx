import theme from '@8x8/oxygen-theme';
import { getSize } from './getSize';

describe('getSize utility', () => {
  test('returns small size when explicitly set', () => {
    const styles = getSize({ size: 'small', theme: theme.light });

    expect(styles).toEqual({ ...theme.light.bodyBold01 });
  });

  test('returns large size when set', () => {
    const styles = getSize({ size: 'large', theme: theme.light });

    expect(styles).toEqual({ ...theme.light.bodyBold02 });
  });

  test('returns small size for invalid size value', () => {
    // @ts-expect-error Testing invalid size
    const styles = getSize({ size: 'invalid', theme: theme.light });

    expect(styles).toEqual({ ...theme.light.bodyBold01 });
  });
});
