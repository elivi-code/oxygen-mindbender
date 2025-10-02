import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { HeaderCell } from './HeaderCell';
import { renderWithTheme } from '../__tests__/renderWithTheme';

describe('<HeaderCell>', () => {
  it('renders text prop as children and title', () => {
    render(<HeaderCell text="text" />);

    expect(screen.getByText('text')).toBeInTheDocument();
    expect(screen.getByText('text')).toHaveAttribute('title', 'text');
  });

  it('renders title instead of text if provided', () => {
    render(<HeaderCell text="text" title="title" />);

    expect(screen.getByText('text')).toHaveAttribute('title', 'title');
  });

  it('passes other props to the DOM', () => {
    render(<HeaderCell text="text" data-test="test" />);

    expect(screen.getByText('text')).toHaveAttribute('data-test', 'test');
  });

  it('wraps text when wrapText is present', () => {
    const { rerender } = renderWithTheme(<HeaderCell text="text" />);

    expect(screen.getByText('text')).not.toHaveStyle({
      textWrap: 'balance',
      textAlign: 'center',
    });

    rerender(<HeaderCell text="text" wrapText />);

    expect(screen.getByText('text')).toHaveStyle(`
      text-align: center;
      white-space: normal; /* allow wrapping */
      word-break: break-word; /* break long words */
      max-height: calc(3 * 1rem); /* height for exactly 3 lines (assuming 1.4em line-height) */
      overflow-y: auto; /* make it scrollable if content exceeds 3 lines */
    `);
  });
});
