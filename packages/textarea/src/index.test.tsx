import defaultExport from '.';

jest.mock('./components/Textarea', () => 'Textarea');

describe('<Textarea>', () => {
  it('should have Textarea component as default export', () => {
    expect(defaultExport).toBe('Textarea');
  });
});
