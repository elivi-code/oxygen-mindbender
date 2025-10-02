import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Slider from './Slider';

import { SingleSliderProps } from '../types';

const setSliderValue = jest.fn();

const mockedProps: SingleSliderProps = {
  isDisabled: false,
  value: 10,
  minValue: 0,
  maxValue: 100,
  step: 1,
  ariaLabel: 'slider',
  onChange: setSliderValue,
  isMultiple: false,
  onDragStart: () => {},
  onDragEnd: () => {},
};

describe('Singlevalue range type slider', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render correctly', () => {
    const { asFragment } = render(<Slider {...mockedProps} />);
    const slider = screen.getByRole('slider');

    expect(slider).toHaveValue('10');

    expect(asFragment()).toMatchSnapshot();
  });

  describe('Focus events', () => {
    it('should handle the focus events correctly', async () => {
      const user = userEvent.setup();

      render(<Slider {...mockedProps} />);
      const slider = screen.getByRole('slider');

      await user.tab();
      expect(slider).toHaveFocus();
      await user.tab();
      expect(slider).not.toHaveFocus();
    });
  });

  it('should not exceed the limits', async () => {
    render(<Slider {...mockedProps} />);
    const slider = screen.getByRole('slider') as HTMLInputElement;

    fireEvent.change(slider, {
      target: { value: '-1' },
    });

    expect(setSliderValue).toHaveBeenCalledWith(0);

    fireEvent.change(slider, {
      target: { value: '101' },
    });

    expect(setSliderValue).toHaveBeenCalledWith(100);
  });
  it('should handle the mouse down/up events correctly', async () => {
    const spyOnDragStart = jest.fn();
    const spyOnDragEnd = jest.fn();

    render(
      <Slider
        {...mockedProps}
        onDragStart={spyOnDragStart}
        onDragEnd={spyOnDragEnd}
      />,
    );
    const slider = screen.getByRole('slider') as HTMLInputElement;

    fireEvent.mouseDown(slider);
    expect(spyOnDragStart).toHaveBeenCalledTimes(1);
    fireEvent.mouseUp(slider);
    expect(spyOnDragEnd).toHaveBeenCalledTimes(1);
  });

  it('should update internal state when the value is changed from outside', async () => {
    const { rerender } = render(<Slider {...mockedProps} value={30} />);

    let input = screen.getByTestId('SLIDER-INPUT') as HTMLInputElement;

    expect(input).toHaveValue('30');

    rerender(<Slider {...mockedProps} value={80} />);

    input = screen.getByTestId('SLIDER-INPUT') as HTMLInputElement;

    expect(input).toHaveValue('80');
  });
});
