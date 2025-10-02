import { PopoverMenu, Popover, SectionHeader, Divider, EmptyState } from '.';

describe('exports', () => {
  it('exposes components (that can be rendered)', () => {
    expect(PopoverMenu).toBeDefined();
    expect(Popover).toBeDefined();
    expect(SectionHeader).toBeDefined();
    expect(Divider).toBeDefined();
    expect(EmptyState).toBeDefined();
  });
});
