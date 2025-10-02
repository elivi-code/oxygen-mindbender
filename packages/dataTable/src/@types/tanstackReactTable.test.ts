import dummyColumnMeta from './tanstackReactTable';

describe('tanstackReactTable', () => {
  it('test dummyColumnMeta not to coverage decrease average coverage', () => {
    expect(dummyColumnMeta).toMatchObject({
      pinned: true,
      flexible: true,
      type: 'large',
    });
  });
});
