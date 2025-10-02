import { waitFor } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { DragEndEvent, DragOverEvent } from '@dnd-kit/core';

import { useOxygen } from '@8x8/oxygen-config';
import themes from '@8x8/oxygen-theme';
import {
  MOCK_AVAILABLE_ACTIVE_EVENTS,
  MOCK_CURRENT_ACTIVE_EVENTS,
  MOCK_CURRENT_AVAILABLE_ACTIVE_EVENTS,
  MOCK_COLLISION,
  MOCK_COLLISION_LOCKED,
  MOCK_COLLISION_CONTAINER,
  MOCK_ACTIVE_CURRENT_OVER_AVAILABLE,
} from '../mocks/hooks/useDragHandler';
import { MOCK_COLUMNS } from '../mocks/ColumnManagement';
import { useDragHandler } from './useDragHandler';

jest.mock('@8x8/oxygen-config');
const mockUseOxygen = useOxygen as jest.MockedFunction<typeof useOxygen>;

const mockTelemetryCallback = jest.fn();

mockUseOxygen.mockImplementation(() => ({
  telemetryCallback: mockTelemetryCallback,
  themeName: 'light',
  theme: themes.light,
}));

describe('useDragHandler', () => {
  it('returns handleDragStart and updates the active state', async () => {
    const { result } = renderHook(() =>
      useDragHandler(MOCK_COLUMNS, jest.fn()),
    );

    const { handleDragStart } = result.current;

    act(() => {
      handleDragStart(MOCK_CURRENT_ACTIVE_EVENTS);
    });

    await waitFor(() => expect(result.current.activeId).toStrictEqual('2'));
  });

  it('returns handleDragCancel and updates the active state', async () => {
    const { result } = renderHook(() =>
      useDragHandler(MOCK_COLUMNS, jest.fn()),
    );

    const { handleDragCancel } = result.current;

    // Mock an event for testing callbacks
    await act(async () => {
      handleDragCancel();
    });

    await waitFor(() =>
      expect(result.current.activeId).toStrictEqual(undefined),
    );
  });

  it('returns handleDragOver and callback is not called because is over available columns', async () => {
    const mockSetItems = jest.fn(updatedItems => {
      return updatedItems;
    });
    const { result } = renderHook(() =>
      useDragHandler(MOCK_COLUMNS, mockSetItems),
    );

    const { handleDragOver } = result.current;

    await act(async () => {
      handleDragOver(MOCK_AVAILABLE_ACTIVE_EVENTS);
    });

    await waitFor(() => expect(mockSetItems).not.toBeCalled());
  });

  it('returns handleDragOver and callback is called', async () => {
    const mockSetItems = jest.fn(updatedItems => {
      return updatedItems;
    });
    const { result } = renderHook(() =>
      useDragHandler(MOCK_COLUMNS, mockSetItems),
    );

    const { handleDragOver } = result.current;

    await act(async () => {
      handleDragOver(MOCK_CURRENT_AVAILABLE_ACTIVE_EVENTS);
    });

    await waitFor(() => expect(mockSetItems).toBeCalled());
  });

  it('returns undefined if over not defined on handleDragOver ', async () => {
    const mockSetItems = jest.fn(updatedItems => {
      return updatedItems;
    });
    const { result } = renderHook(() =>
      useDragHandler(MOCK_COLUMNS, mockSetItems),
    );

    const { handleDragOver } = result.current;

    const dragOver = handleDragOver({
      active: {
        id: '12',
        data: {
          current: {
            sortable: {
              containerId: 'availableColumns',
              index: 1,
              items: ['11', '12', '13', '15'],
            },
          },
        },
        rect: {
          current: {
            initial: null,
            translated: null,
          },
        },
      },
      over: null,
    } as unknown as DragOverEvent);

    expect(mockSetItems).not.toBeCalled();
    expect(dragOver).toBeUndefined();
  });

  it('returns undefined if dragged from currentItems and dropped in availableItems on handleDragOver ', async () => {
    const mockSetItems = jest.fn(updatedItems => {
      return updatedItems;
    });
    const { result } = renderHook(() =>
      useDragHandler(MOCK_COLUMNS, mockSetItems),
    );

    const { handleDragOver } = result.current;

    const dragOver = handleDragOver({
      active: {
        id: '5',
        data: {
          current: {
            sortable: {
              containerId: 'currentColumns',
              index: 4,
              items: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            },
          },
        },
        rect: {
          current: {
            initial: null,
            translated: null,
          },
        },
      },
      over: {
        id: '15',
        rect: {
          width: 380,
          height: 44,
          top: 320.515625,
          bottom: 364.515625,
          right: 809,
          left: 429,
        },
        data: {
          current: {
            sortable: {
              containerId: 'availableColumns',
              index: 3,
              items: ['11', '12', '13', '15'],
            },
          },
        },
        disabled: false,
      },
    } as unknown as DragOverEvent);

    expect(mockSetItems).not.toBeCalled();
    expect(dragOver).toBeUndefined();
  });

  it('returns undefined if over not defined on handleDragEnd', async () => {
    const mockSetItems = jest.fn(updatedItems => {
      return updatedItems;
    });
    const { result } = renderHook(() =>
      useDragHandler(MOCK_COLUMNS, mockSetItems),
    );

    const { handleDragEnd } = result.current;

    const dragEnd = handleDragEnd({
      active: {
        id: '12',
        data: {
          current: {
            sortable: {
              containerId: 'availableColumns',
              index: 1,
              items: ['11', '12', '13', '15'],
            },
          },
        },
        rect: {
          current: {
            initial: null,
            translated: null,
          },
        },
      },
      over: null,
    } as unknown as DragEndEvent);

    expect(mockSetItems).not.toBeCalled();
    expect(dragEnd).toBeUndefined();
  });

  it('returns undefined if container not defined on handleDragEnd', async () => {
    const mockSetItems = jest.fn(updatedItems => {
      return updatedItems;
    });
    const { result } = renderHook(() =>
      useDragHandler(MOCK_COLUMNS, mockSetItems),
    );

    const { handleDragEnd } = result.current;

    const dragEnd = handleDragEnd({
      active: {
        id: '112',
        data: {
          current: {
            sortable: {
              containerId: 'availableColumns',
              index: 1,
              items: ['11', '12', '13', '15'],
            },
          },
        },
        rect: {
          current: {
            initial: null,
            translated: null,
          },
        },
      },
      over: {
        id: '112',
        data: {
          current: {
            sortable: {
              containerId: 'availableColumns',
              index: 1,
              items: ['11', '12', '13', '15'],
            },
          },
        },
        rect: {
          current: {
            initial: null,
            translated: null,
          },
        },
      },
    } as unknown as DragEndEvent);

    expect(mockSetItems).not.toBeCalled();
    expect(dragEnd).toBeUndefined();
  });

  it('returns undefined if active === over on handleDragEnd', async () => {
    const mockSetItems = jest.fn(updatedItems => {
      return updatedItems;
    });

    const { result } = renderHook(() =>
      useDragHandler(MOCK_COLUMNS, mockSetItems, { uiArea: 'test' }),
    );

    const { handleDragEnd } = result.current;

    const dragEnd = handleDragEnd({
      active: {
        id: '15',
        data: {
          current: {
            sortable: {
              containerId: 'currentColumns',
              index: 3,
              items: ['1', '2', '3', '15', '4', '5', '6', '7', '8', '9', '10'],
            },
          },
        },
        rect: {
          current: {
            initial: null,
            translated: null,
          },
        },
      },
      over: {
        id: '15',
        rect: {
          width: 365,
          height: 44,
          top: 320.515625,
          bottom: 364.515625,
          right: 390,
          left: 25,
        },
        data: {
          current: {
            sortable: {
              containerId: 'currentColumns',
              index: 3,
              items: ['1', '2', '3', '15', '4', '5', '6', '7', '8', '9', '10'],
            },
          },
        },
        disabled: false,
      },
    } as unknown as DragEndEvent);

    expect(mockSetItems).not.toBeCalled();
    expect(dragEnd).toBeUndefined();
  });

  it('returns handleDragEnd and callback is called', async () => {
    const mockSetItems = jest.fn(updatedItems => {
      return updatedItems;
    });
    const { result } = renderHook(() =>
      useDragHandler(MOCK_COLUMNS, mockSetItems, { uiArea: 'test' }),
    );

    const { handleDragEnd } = result.current;

    await act(async () => {
      handleDragEnd(MOCK_ACTIVE_CURRENT_OVER_AVAILABLE);
    });

    await waitFor(() => expect(mockSetItems).toBeCalled());
    await waitFor(() => expect(mockTelemetryCallback).toBeCalled());
  });

  it('returns collisionDetectionStrategy with pointerWithin and callback is called', async () => {
    const mockSetItems = jest.fn(updatedItems => {
      return updatedItems;
    });
    const { result } = renderHook(() =>
      useDragHandler(MOCK_COLUMNS, mockSetItems),
    );

    const { collisionDetectionStrategy } = result.current;

    const collision = collisionDetectionStrategy({
      active: MOCK_COLLISION.active,
      collisionRect: MOCK_COLLISION.collisionRect,
      droppableRects: MOCK_COLLISION.droppableRects,
      droppableContainers: MOCK_COLLISION.droppableContainers,
      pointerCoordinates: MOCK_COLLISION.pointerCoordinates,
    });

    await waitFor(() => expect(collision).toEqual([{ id: '3' }]));
  });

  it('returns collisionDetectionStrategy with rectIntersection and callback is called', async () => {
    const mockSetItems = jest.fn(updatedItems => {
      return updatedItems;
    });
    const { result } = renderHook(() =>
      useDragHandler(MOCK_COLUMNS, mockSetItems),
    );

    const { collisionDetectionStrategy } = result.current;

    const collision = collisionDetectionStrategy({
      active: MOCK_COLLISION.active,
      collisionRect: MOCK_COLLISION.collisionRect,
      droppableRects: MOCK_COLLISION.droppableRects,
      droppableContainers: MOCK_COLLISION.droppableContainers,
      pointerCoordinates: null,
    });

    await waitFor(() => expect(collision).toEqual([{ id: '2' }]));
  });

  it('returns collisionDetectionStrategy with overId null', async () => {
    const mockSetItems = jest.fn(updatedItems => {
      return updatedItems;
    });
    const { result } = renderHook(() =>
      useDragHandler(MOCK_COLUMNS, mockSetItems),
    );

    const { collisionDetectionStrategy } = result.current;

    const collision = collisionDetectionStrategy(MOCK_COLLISION_LOCKED);

    await waitFor(() => expect(collision).toEqual([]));
  });

  it('returns collisionDetectionStrategy with overId as a container', async () => {
    const mockSetItems = jest.fn(updatedItems => {
      return updatedItems;
    });
    const { result } = renderHook(() =>
      useDragHandler(MOCK_COLUMNS, mockSetItems),
    );

    const { collisionDetectionStrategy } = result.current;

    const collision = collisionDetectionStrategy(MOCK_COLLISION_CONTAINER);

    await waitFor(() => expect(collision).toEqual([{ id: undefined }]));
  });
});
