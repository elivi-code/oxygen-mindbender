import Tag from './components/Tag';

import defaultExport, { variants } from '.';

describe('Tag', () => {
  it('should default export the tag component', () => {
    expect(defaultExport).toBe(Tag);
  });
  it('should export all variants', () => {
    expect(variants).toEqual({
      blue: 'blue',
      dark: 'dark',
      light: 'light',
      yellow: 'yellow',
      red: 'red',
    });
  });
});
