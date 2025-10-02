import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { OxygenProvider } from '@8x8/oxygen-config';
import Link from '.';

describe('Link', () => {
  test('exports a renderable Link component', () => {
    render(
      <OxygenProvider>
        <Link href="https://example.com">Link</Link>
      </OxygenProvider>,
    );
    const element = screen.getByText(/Link/i);

    expect(element).toBeInTheDocument();
  });
});
