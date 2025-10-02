import React from 'react';
import { render, screen } from '@testing-library/react';

import { VirtualMenuList } from './VirtualMenuList';

const props = {
  maxHeight: 100,
  getValue: jest.fn().mockReturnValue(['2-2']),
  theme: {
    lineHeight: '1.5rem',
    optionPaddingVertical: '8px',
  },
};

describe('VirtualMenuList', () => {
  it('should use the height as 1.5rem + 16px', () => {
    const { container } = render(
      <VirtualMenuList {...props}>
        <div value={{ value: '1' }}>1</div>
        <div label="2">
          <div value={{ value: '2-1' }}>2-1</div>
          <div value={{ value: '2-2' }}>2-2</div>
        </div>
        <div value={{ value: '3' }}>3</div>
      </VirtualMenuList>,
    );

    // conatainer height is based on maxHeight prop
    expect(container.firstChild).toHaveStyle(`height: ${props.maxHeight}px`);

    // useFontSize returns 16px as mocked
    // 16 + 8 * 2 = 32
    expect(screen.getByText('1').parentElement).toHaveStyle('height: 32px');

    // 5 rows (2 independent + 1 group heading + 2 group children). 32 * 5 = 160
    expect(container.firstChild.firstChild).toHaveStyle('height: 160px');
  });
});
