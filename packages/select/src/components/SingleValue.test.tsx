import React from 'react';
import { render } from '@testing-library/react';
import { components } from 'react-select';
import { useHasOverflow } from '@8x8/oxygen-utils';

import SingleValue from './SingleValue';

jest.mock('react-select', () => ({
  components: {
    SingleValue: jest.fn().mockImplementation(() => <div />),
  },
}));

jest.mock('@8x8/oxygen-utils', () => ({
  useHasOverflow: jest.fn().mockReturnValue(false),
}));

describe('SingleValue', () => {
  beforeEach(() => {
    components.SingleValue.mockClear();
    useHasOverflow.mockClear();
  });
  it('renders a react-select SingleValue component', () => {
    expect(components.SingleValue).not.toHaveBeenCalled();
    render(<SingleValue />);
    expect(components.SingleValue).toHaveBeenCalled();
  });
  it('passes a ref', () => {
    render(<SingleValue />);
    expect(components.SingleValue).toHaveBeenCalledWith(
      expect.objectContaining({
        innerProps: { ref: { current: null } },
      }),
      {},
    );
  });
  it('passes a title when overflow is detected', () => {
    useHasOverflow.mockReturnValue(true);
    render(<SingleValue>text</SingleValue>);
    expect(components.SingleValue).toHaveBeenCalledWith(
      expect.objectContaining({
        innerProps: expect.objectContaining({ title: 'text' }),
      }),
      {},
    );
  });
  it('only allows title when the value is text to prevent [Object object]', () => {
    useHasOverflow.mockReturnValue(true);
    render(
      <SingleValue>
        <div>text</div>
      </SingleValue>,
    );
    expect(components.SingleValue).toHaveBeenCalledWith(
      expect.objectContaining({
        innerProps: expect.not.objectContaining({ title: 'text' }),
      }),
      {},
    );
  });
});
