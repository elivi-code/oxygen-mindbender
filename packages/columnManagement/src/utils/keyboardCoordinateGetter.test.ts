import { SensorContext } from '@dnd-kit/core';
import { keyboardCoordinateGetter } from './keyboardCoordinateGetter';
import { keyboardSortableContext } from '../mocks/keyboardSortableContext';

describe('keyboardCoordinateGetter', () => {
  it('returns the expected coordinates when event code is Down', () => {
    const event = { code: 'ArrowDown', preventDefault: jest.fn() };

    const result = keyboardCoordinateGetter(event as unknown as KeyboardEvent, {
      context: keyboardSortableContext as unknown as SensorContext,
      active: '',
      currentCoordinates: {
        x: 0,
        y: 0,
      },
    });

    expect(result).toEqual({ x: 510.5, y: 259 });
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('returns the expected coordinates when event code is Up', () => {
    const event = { code: 'ArrowUp', preventDefault: jest.fn() };

    keyboardCoordinateGetter(event as unknown as KeyboardEvent, {
      context: keyboardSortableContext as unknown as SensorContext,
      active: '',
      currentCoordinates: {
        x: 0,
        y: 0,
      },
    });

    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('returns the expected coordinates when event code is Left', () => {
    const event = { code: 'ArrowLeft', preventDefault: jest.fn() };

    keyboardCoordinateGetter(event as unknown as KeyboardEvent, {
      context: keyboardSortableContext as unknown as SensorContext,
      active: '',
      currentCoordinates: {
        x: 0,
        y: 0,
      },
    });

    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('returns the expected coordinates when event code is Right', () => {
    const event = { code: 'ArrowRight', preventDefault: jest.fn() };

    keyboardCoordinateGetter(event as unknown as KeyboardEvent, {
      context: keyboardSortableContext as unknown as SensorContext,
      active: '',
      currentCoordinates: {
        x: 0,
        y: 0,
      },
    });

    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('returns undefined when event code is not in directions', () => {
    const event = { code: 'KeyA', preventDefault: jest.fn() };

    const result = keyboardCoordinateGetter(event as unknown as KeyboardEvent, {
      context: keyboardSortableContext as unknown as SensorContext,
      active: '',
      currentCoordinates: {
        x: 0,
        y: 0,
      },
    });

    expect(result).toBeUndefined();
    expect(event.preventDefault).not.toHaveBeenCalled();
  });

  it('returns undefined when active context is undefined', () => {
    const event = { code: 'ArrowDown', preventDefault: jest.fn() };
    const { active, ...context } = keyboardSortableContext;
    const result = keyboardCoordinateGetter(event as unknown as KeyboardEvent, {
      context: {
        active: undefined,
        ...context,
      } as unknown as SensorContext,

      active: '',
      currentCoordinates: {
        x: 0,
        y: 0,
      },
    });

    expect(result).toBeUndefined();
    expect(event.preventDefault).toHaveBeenCalled();
  });
});
