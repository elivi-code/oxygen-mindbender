import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Slider from './Slider';

import { MultipleSliderProps } from '../types';

const setSliderValue = jest.fn();

const mockedProps: MultipleSliderProps = {
  isDisabled: false,
  value: { min: 20, max: 50 },
  minValue: 0,
  maxValue: 100,
  step: 1,
  onChange: setSliderValue,
  isMultiple: true,
  isTrackDraggable: false,
  ariaLabel: 'slider',
  onDragStart: () => {},
  onDragEnd: () => {},
};

describe('Multivalue range type slider', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render correctly', () => {
    const { asFragment } = render(<Slider {...mockedProps} />);
    const sliders = screen.getAllByRole('slider') as HTMLInputElement[];

    expect(sliders).toHaveLength(2);
    expect(sliders[0]).toHaveValue('20');
    expect(sliders[1]).toHaveValue('50');

    expect(asFragment()).toMatchSnapshot();
  });

  it('should handle the focus events correctly on main inputs', async () => {
    const user = userEvent.setup();

    render(<Slider {...mockedProps} isTrackDraggable />);
    const sliders = screen.getAllByRole('slider') as HTMLInputElement[];

    await user.tab();
    expect(sliders[0]).toHaveFocus();
    await user.tab();
    expect(sliders[0]).not.toHaveFocus();
    expect(sliders[1]).toHaveFocus();
    await user.tab();
    expect(sliders[1]).not.toHaveFocus();
    expect(sliders[2]).toHaveFocus();
    await user.tab();
    expect(sliders[2]).not.toHaveFocus();
  });

  it('should not exceed the min limit', async () => {
    render(<Slider {...mockedProps} />);
    const sliders = screen.getAllByRole('slider') as HTMLInputElement[];

    fireEvent.change(sliders[0], {
      target: { value: '-1' },
    });

    expect(setSliderValue).toHaveBeenCalledWith({ min: 0, max: 50 });
  });

  it('should not exceed the max limit', async () => {
    render(<Slider {...mockedProps} />);
    const sliders = screen.getAllByRole('slider') as HTMLInputElement[];

    fireEvent.change(sliders[1], {
      target: { value: '101' },
    });

    expect(setSliderValue).toHaveBeenCalledWith({ min: 20, max: 100 });
  });

  it('should not overlap the values', async () => {
    render(<Slider {...mockedProps} />);
    const sliders = screen.getAllByRole('slider') as HTMLInputElement[];

    fireEvent.change(sliders[0], {
      target: { value: '60' },
    });

    expect(setSliderValue).not.toHaveBeenCalled();
  });

  it('should change both values when the draggable range changes its value', async () => {
    render(<Slider {...mockedProps} isTrackDraggable />);
    const sliders = screen.getAllByRole('slider') as HTMLInputElement[];

    fireEvent.mouseDown(sliders[2]);
    fireEvent.change(sliders[2], {
      target: { value: '25' },
    });
    fireEvent.mouseUp(sliders[2]);

    expect(setSliderValue).toHaveBeenCalledWith({ min: 10, max: 40 });
  });

  it('should change the draggable range value when the user changes min value', async () => {
    render(<Slider {...mockedProps} isTrackDraggable />);
    const sliders = screen.getAllByRole('slider') as HTMLInputElement[];

    fireEvent.change(sliders[0], {
      target: { value: '30' },
    });

    expect(sliders[2].value).toBe('40');
  });

  it('should change the draggable range value when the user changes max value', async () => {
    render(<Slider {...mockedProps} isTrackDraggable />);
    const sliders = screen.getAllByRole('slider') as HTMLInputElement[];

    fireEvent.change(sliders[1], {
      target: { value: '40' },
    });

    expect(sliders[2].value).toBe('30');
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
    const sliders = screen.getAllByRole('slider') as HTMLInputElement[];

    fireEvent.mouseDown(sliders[0]);
    fireEvent.mouseUp(sliders[0]);

    fireEvent.mouseDown(sliders[1]);
    fireEvent.mouseUp(sliders[1]);
    expect(spyOnDragStart).toHaveBeenCalledTimes(2);
    expect(spyOnDragEnd).toHaveBeenCalledTimes(2);
  });

  describe('Hover effects', () => {
    it('should render the correct elements when hovering the track before min', () => {
      render(<Slider {...mockedProps} />);
      const trackBeforeMin = screen.getByTestId('SLIDER-TRACK-BEFORE-MIN');
      const sliderContainerChildren =
        screen.getByTestId('SLIDER-CONTAINER').children;

      fireEvent.mouseEnter(trackBeforeMin);
      expect(sliderContainerChildren[0].getAttribute('data-test-id')).toBe(
        'SLIDER-MAX-INPUT',
      );
      expect(sliderContainerChildren[1].getAttribute('data-test-id')).toBe(
        'SLIDER-TRACK-BEFORE-MIN',
      );
      expect(sliderContainerChildren[2].getAttribute('data-test-id')).toBe(
        'SLIDER-FIRST-HALF-PROGRESS',
      );
      expect(sliderContainerChildren[3].getAttribute('data-test-id')).toBe(
        'SLIDER-MIN-INPUT',
      );
      expect(sliderContainerChildren[4].getAttribute('data-test-id')).toBe(
        'SLIDER-SECOND-HALF-PROGRESS',
      );
      expect(sliderContainerChildren[5].getAttribute('data-test-id')).toBe(
        'SLIDER-TRACK-AFTER-MAX',
      );
    });
    it('should render the correct elements when hovering first half progress bar', () => {
      render(<Slider {...mockedProps} />);
      const firstHalfProgress = screen.getByTestId(
        'SLIDER-FIRST-HALF-PROGRESS',
      );
      const sliderContainerChildren =
        screen.getByTestId('SLIDER-CONTAINER').children;

      fireEvent.mouseEnter(firstHalfProgress);
      expect(sliderContainerChildren[0].getAttribute('data-test-id')).toBe(
        'SLIDER-MAX-INPUT',
      );
      expect(sliderContainerChildren[1].getAttribute('data-test-id')).toBe(
        'SLIDER-TRACK-BEFORE-MIN',
      );
      expect(sliderContainerChildren[2].getAttribute('data-test-id')).toBe(
        'SLIDER-FIRST-HALF-PROGRESS',
      );
      expect(sliderContainerChildren[3].getAttribute('data-test-id')).toBe(
        'SLIDER-MIN-INPUT',
      );
      expect(sliderContainerChildren[4].getAttribute('data-test-id')).toBe(
        'SLIDER-SECOND-HALF-PROGRESS',
      );
      expect(sliderContainerChildren[5].getAttribute('data-test-id')).toBe(
        'SLIDER-TRACK-AFTER-MAX',
      );
    });
    it('should render the correct elements when hovering second half progress bar', () => {
      render(<Slider {...mockedProps} />);

      const secondHalfProgress = screen.getByTestId(
        'SLIDER-SECOND-HALF-PROGRESS',
      );
      const sliderContainerChildren =
        screen.getByTestId('SLIDER-CONTAINER').children;

      fireEvent.mouseEnter(secondHalfProgress);
      expect(sliderContainerChildren[0].getAttribute('data-test-id')).toBe(
        'SLIDER-MIN-INPUT',
      );
      expect(sliderContainerChildren[1].getAttribute('data-test-id')).toBe(
        'SLIDER-SECOND-HALF-PROGRESS',
      );
      expect(sliderContainerChildren[2].getAttribute('data-test-id')).toBe(
        'SLIDER-TRACK-AFTER-MAX',
      );
      expect(sliderContainerChildren[3].getAttribute('data-test-id')).toBe(
        'SLIDER-MAX-INPUT',
      );
      expect(sliderContainerChildren[4].getAttribute('data-test-id')).toBe(
        'SLIDER-TRACK-BEFORE-MIN',
      );
      expect(sliderContainerChildren[5].getAttribute('data-test-id')).toBe(
        'SLIDER-FIRST-HALF-PROGRESS',
      );
    });
    it('should render the correct elements when hovering the track after max', () => {
      render(<Slider {...mockedProps} />);
      const trackAfterMax = screen.getByTestId('SLIDER-TRACK-AFTER-MAX');
      const sliderContainerChildren =
        screen.getByTestId('SLIDER-CONTAINER').children;

      fireEvent.mouseEnter(trackAfterMax);
      expect(sliderContainerChildren[0].getAttribute('data-test-id')).toBe(
        'SLIDER-MIN-INPUT',
      );
      expect(sliderContainerChildren[1].getAttribute('data-test-id')).toBe(
        'SLIDER-SECOND-HALF-PROGRESS',
      );
      expect(sliderContainerChildren[2].getAttribute('data-test-id')).toBe(
        'SLIDER-TRACK-AFTER-MAX',
      );
      expect(sliderContainerChildren[3].getAttribute('data-test-id')).toBe(
        'SLIDER-MAX-INPUT',
      );
      expect(sliderContainerChildren[4].getAttribute('data-test-id')).toBe(
        'SLIDER-TRACK-BEFORE-MIN',
      );
      expect(sliderContainerChildren[5].getAttribute('data-test-id')).toBe(
        'SLIDER-FIRST-HALF-PROGRESS',
      );
    });
    it('should render the correct elements when unhover the min input', () => {
      render(<Slider {...mockedProps} />);
      const trackBeforeMin = screen.getByTestId('SLIDER-TRACK-BEFORE-MIN');
      const minInput = screen.getByTestId('SLIDER-MIN-INPUT');
      const sliderContainerChildren =
        screen.getByTestId('SLIDER-CONTAINER').children;

      fireEvent.mouseEnter(trackBeforeMin);
      fireEvent.mouseLeave(minInput);
      expect(sliderContainerChildren[0].getAttribute('data-test-id')).toBe(
        'SLIDER-MIN-INPUT',
      );
      expect(sliderContainerChildren[1].getAttribute('data-test-id')).toBe(
        'SLIDER-MAX-INPUT',
      );
      expect(sliderContainerChildren[2].getAttribute('data-test-id')).toBe(
        'SLIDER-FIRST-HALF-PROGRESS',
      );
      expect(sliderContainerChildren[3].getAttribute('data-test-id')).toBe(
        'SLIDER-SECOND-HALF-PROGRESS',
      );
      expect(sliderContainerChildren[4].getAttribute('data-test-id')).toBe(
        'SLIDER-TRACK-BEFORE-MIN',
      );
      expect(sliderContainerChildren[5].getAttribute('data-test-id')).toBe(
        'SLIDER-TRACK-AFTER-MAX',
      );
    });
    it('should render the correct elements when unhover the max input', () => {
      render(<Slider {...mockedProps} />);
      const maxInput = screen.getByTestId('SLIDER-MAX-INPUT');
      const sliderContainerChildren =
        screen.getByTestId('SLIDER-CONTAINER').children;

      fireEvent.mouseLeave(maxInput);
      expect(sliderContainerChildren[0].getAttribute('data-test-id')).toBe(
        'SLIDER-MIN-INPUT',
      );
      expect(sliderContainerChildren[1].getAttribute('data-test-id')).toBe(
        'SLIDER-MAX-INPUT',
      );
      expect(sliderContainerChildren[2].getAttribute('data-test-id')).toBe(
        'SLIDER-FIRST-HALF-PROGRESS',
      );
      expect(sliderContainerChildren[3].getAttribute('data-test-id')).toBe(
        'SLIDER-SECOND-HALF-PROGRESS',
      );
      expect(sliderContainerChildren[4].getAttribute('data-test-id')).toBe(
        'SLIDER-TRACK-BEFORE-MIN',
      );
      expect(sliderContainerChildren[5].getAttribute('data-test-id')).toBe(
        'SLIDER-TRACK-AFTER-MAX',
      );
    });
    it('should handle hover event on min thumb when the draggable track is draggable', () => {
      render(<Slider {...mockedProps} isTrackDraggable />);
      const trackBeforeMin = screen.getByTestId('SLIDER-TRACK-BEFORE-MIN');
      const sliderContainerChildren =
        screen.getByTestId('SLIDER-CONTAINER').children;

      fireEvent.mouseEnter(trackBeforeMin);
      expect(sliderContainerChildren[0].getAttribute('data-test-id')).toBe(
        'SLIDER-MAX-INPUT',
      );
      expect(sliderContainerChildren[1].getAttribute('data-test-id')).toBe(
        'SLIDER-TRACK-BEFORE-MIN',
      );
      expect(sliderContainerChildren[2].getAttribute('data-test-id')).toBe(
        'SLIDER-MIN-INPUT',
      );
      expect(sliderContainerChildren[3].getAttribute('data-test-id')).toBe(
        'SLIDER-FIRST-HALF-PROGRESS',
      );
      expect(sliderContainerChildren[4].getAttribute('data-test-id')).toBe(
        'SLIDER-SECOND-HALF-PROGRESS',
      );
      expect(sliderContainerChildren[5].getAttribute('data-test-id')).toBe(
        'SLIDER-TRACK-AFTER-MAX',
      );
    });
    it('should handle hover event on max thumb when the draggable track is draggable', () => {
      render(<Slider {...mockedProps} isTrackDraggable />);
      const trackAfterMax = screen.getByTestId('SLIDER-TRACK-AFTER-MAX');
      const sliderContainerChildren =
        screen.getByTestId('SLIDER-CONTAINER').children;

      fireEvent.mouseEnter(trackAfterMax);
      expect(sliderContainerChildren[0].getAttribute('data-test-id')).toBe(
        'SLIDER-MIN-INPUT',
      );
      expect(sliderContainerChildren[1].getAttribute('data-test-id')).toBe(
        'SLIDER-TRACK-AFTER-MAX',
      );
      expect(sliderContainerChildren[2].getAttribute('data-test-id')).toBe(
        'SLIDER-MAX-INPUT',
      );
      expect(sliderContainerChildren[3].getAttribute('data-test-id')).toBe(
        'SLIDER-FIRST-HALF-PROGRESS',
      );
      expect(sliderContainerChildren[4].getAttribute('data-test-id')).toBe(
        'SLIDER-SECOND-HALF-PROGRESS',
      );
      expect(sliderContainerChildren[5].getAttribute('data-test-id')).toBe(
        'SLIDER-TRACK-BEFORE-MIN',
      );
    });

    it('should update internal state when the value is not provided from outside', async () => {
      render(<Slider {...mockedProps} value={undefined} />);
      const minInput = screen.getByTestId(
        'SLIDER-MIN-INPUT',
      ) as HTMLInputElement;
      const maxInput = screen.getByTestId(
        'SLIDER-MAX-INPUT',
      ) as HTMLInputElement;

      expect(minInput).toHaveValue('50');
      expect(maxInput).toHaveValue('50');
    });
    it('should update internal state when the value is changed from outside', async () => {
      const { rerender } = render(
        <Slider {...mockedProps} value={{ min: 20, max: 50 }} />,
      );

      let minInput = screen.getByTestId('SLIDER-MIN-INPUT') as HTMLInputElement;
      let maxInput = screen.getByTestId('SLIDER-MAX-INPUT') as HTMLInputElement;

      expect(minInput).toHaveValue('20');
      expect(maxInput).toHaveValue('50');

      rerender(<Slider {...mockedProps} value={{ min: 30, max: 70 }} />);

      minInput = screen.getByTestId('SLIDER-MIN-INPUT') as HTMLInputElement;
      maxInput = screen.getByTestId('SLIDER-MAX-INPUT') as HTMLInputElement;

      expect(minInput).toHaveValue('30');
      expect(maxInput).toHaveValue('70');
    });
  });
});
