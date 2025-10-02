import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Slider from './Slider';

describe('Slider', () => {
  it('uses default prop values when not provided', () => {
    render(<Slider value={5} />);

    const slider = screen.getByRole('slider');

    expect(slider).toHaveAttribute('min', '0');
    expect(slider).toHaveAttribute('max', '10');
    expect(slider).toHaveAttribute('step', '1');
    expect(slider).toHaveAttribute('data-test-id', 'SLIDER-INPUT');
  });

  it('uses custom prop values when provided', () => {
    render(
      <Slider
        value={5}
        minValue={10}
        maxValue={100}
        step={10}
        testId="CUSTOM"
      />,
    );

    const slider = screen.getByRole('slider');

    expect(slider).toHaveAttribute('min', '10');
    expect(slider).toHaveAttribute('max', '100');
    expect(slider).toHaveAttribute('step', '10');
    expect(slider).toHaveAttribute('data-test-id', 'CUSTOM-INPUT');
  });
});
