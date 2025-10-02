import { DragEndEvent, DragOverEvent } from '@dnd-kit/core';

export const MOCK_CURRENT_ACTIVE_EVENTS = {
  active: {
    id: '2',
    data: {
      current: {
        sortable: {
          containerId: 'currentColumns',
          index: 4,
          items: ['1', '3', '4', '5', '2', '6', '7', '8', '9', '10'],
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
    id: '5',
    rect: {
      width: 380,
      height: 44,
      top: 493.65625,
      bottom: 537.65625,
      right: 405,
      left: 25,
    },
    data: {
      current: {
        sortable: {
          containerId: 'currentColumns',
          index: 3,
          items: ['1', '3', '4', '5', '2', '6', '7', '8', '9', '10'],
        },
      },
    },
    disabled: false,
  },
} as unknown as DragEndEvent;

export const MOCK_AVAILABLE_ACTIVE_EVENTS = {
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
  over: {
    id: '13',
    rect: {
      width: 380,
      height: 44,
      top: 493.65625,
      bottom: 537.65625,
      right: 405,
      left: 25,
    },
    data: {
      current: {
        sortable: {
          containerId: 'availableColumns',
          index: 1,
          items: ['11', '12', '13', '15'],
        },
      },
    },
    disabled: false,
  },
} as unknown as DragOverEvent;

export const MOCK_CURRENT_AVAILABLE_ACTIVE_EVENTS = {
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
  over: {
    id: '2',
    rect: {
      width: 380,
      height: 44,
      top: 493.65625,
      bottom: 537.65625,
      right: 405,
      left: 25,
    },
    data: {
      current: {
        sortable: {
          containerId: 'currentColumns',
          index: 2,
          items: ['1', '12', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        },
      },
    },
    disabled: false,
  },
} as unknown as DragOverEvent;

export const MOCK_COLLISION = {
  active: {
    id: '3',
    data: {
      current: {
        sortable: {
          containerId: 'currentColumns',
          index: 1,
          items: ['1', '3', '2', '4', '5', '6', '7', '8', '9', '10'],
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
  pointerCoordinates: {
    x: 682.05,
    y: 230.33,
  },
  collisionRect: {
    top: 171,
    left: 510.5,
    width: 296,
    height: 46,
    bottom: 217,
    right: 806.5,
  },
  droppableContainers: [
    {
      id: '2',
      key: 'Droppable-2',
      disabled: true,
      node: {
        current: null,
      },
      rect: {
        current: {
          width: 296,
          height: 44,
          top: 215,
          bottom: 259,
          right: 806.5,
          left: 510.5,
        },
      },
      data: {
        current: {
          sortable: {
            containerId: 'currentColumns',
            index: 0,
            items: ['1', '3', '2', '4', '5', '6', '7', '8', '9', '10'],
          },
        },
      },
    },
    {
      id: '3',
      key: 'Droppable-2',
      disabled: true,
      node: {
        current: null,
      },
      rect: {
        current: {
          width: 296,
          height: 44,
          top: 171,
          bottom: 215,
          right: 806.5,
          left: 510.5,
        },
      },
      data: {
        current: {
          sortable: {
            containerId: 'currentColumns',
            index: 0,
            items: ['1', '3', '2', '4', '5', '6', '7', '8', '9', '10'],
          },
        },
      },
    },
    {
      id: '4',
      key: 'Droppable-2',
      disabled: true,
      node: {
        current: null,
      },
      rect: {
        current: {
          width: 296,
          height: 44,
          top: 259,
          bottom: 303,
          right: 806.5,
          left: 510.5,
        },
      },
      data: {
        current: {
          sortable: {
            containerId: 'currentColumns',
            index: 0,
            items: ['1', '3', '2', '4', '5', '6', '7', '8', '9', '10'],
          },
        },
      },
    },
  ],
  droppableRects: new Map([
    [
      '2',
      {
        width: 296,
        height: 44,
        top: 171,
        bottom: 215,
        right: 806.5,
        left: 510.5,
      },
    ],
    [
      '3',
      {
        width: 296,
        height: 44,
        top: 215,
        bottom: 259,
        right: 806.5,
        left: 510.5,
      },
    ],
    [
      '4',
      {
        width: 296,
        height: 44,
        top: 259,
        bottom: 303,
        right: 806.5,
        left: 510.5,
      },
    ],
    [
      '5',
      {
        width: 296,
        height: 44,
        top: 303,
        bottom: 347,
        right: 806.5,
        left: 510.5,
      },
    ],
    [
      '6',
      {
        width: 296,
        height: 44,
        top: 347,
        bottom: 391,
        right: 806.5,
        left: 510.5,
      },
    ],
    [
      '7',
      {
        width: 296,
        height: 44,
        top: 391,
        bottom: 435,
        right: 806.5,
        left: 510.5,
      },
    ],
    [
      '8',
      {
        width: 296,
        height: 44,
        top: 435,
        bottom: 479,
        right: 806.5,
        left: 510.5,
      },
    ],
    [
      '9',
      {
        width: 296,
        height: 44,
        top: 479,
        bottom: 523,
        right: 806.5,
        left: 510.5,
      },
    ],
    [
      '10',
      {
        width: 296,
        height: 44,
        top: 523,
        bottom: 567,
        right: 806.5,
        left: 510.5,
      },
    ],
    [
      'currentColumns',
      {
        width: 296,
        height: 478,
        top: 90,
        bottom: 568,
        right: 805.5,
        left: 509.5,
      },
    ],
    [
      '11',
      {
        width: 296,
        height: 44,
        top: 127,
        bottom: 171,
        right: 1126.5,
        left: 830.5,
      },
    ],
    [
      '12',
      {
        width: 296,
        height: 44,
        top: 171,
        bottom: 215,
        right: 1126.5,
        left: 830.5,
      },
    ],
    [
      '13',
      {
        width: 296,
        height: 44,
        top: 215,
        bottom: 259,
        right: 1126.5,
        left: 830.5,
      },
    ],
    [
      '15',
      {
        width: 296,
        height: 44,
        top: 259,
        bottom: 303,
        right: 1126.5,
        left: 830.5,
      },
    ],
    [
      'availableColumns',
      {
        width: 296,
        height: 478,
        top: 90,
        bottom: 568,
        right: 1125.5,
        left: 829.5,
      },
    ],
  ]),
};

export const MOCK_COLLISION_LOCKED = {
  active: {
    id: '5',
    data: {
      current: {
        sortable: {
          containerId: 'availableColumns',
          index: 0,
          items: [
            '5',
            '6',
            '11',
            '7',
            '12',
            '2',
            '4',
            '13',
            '8',
            '10',
            '15',
            '9',
            '3',
          ],
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
  pointerCoordinates: {
    x: 401.34893798828125,
    y: 230.30224609375,
  },
  collisionRect: {
    top: 207.61764526367188,
    left: 256.19378662109375,
    width: 365,
    height: 46,
    bottom: 253.61764526367188,
    right: 621.1937866210938,
  },
  droppableContainers: [
    {
      id: '2',
      key: 'Droppable-2',
      disabled: true,
      node: {
        current: null,
      },
      rect: {
        current: {
          width: 296,
          height: 44,
          top: 215,
          bottom: 259,
          right: 806.5,
          left: 510.5,
        },
      },
      data: {
        current: {
          sortable: {
            containerId: 'currentColumns',
            index: 0,
            items: ['1', '3', '2', '4', '5', '6', '7', '8', '9', '10'],
          },
        },
      },
    },
    {
      id: '3',
      key: 'Droppable-2',
      disabled: true,
      node: {
        current: null,
      },
      rect: {
        current: {
          width: 296,
          height: 44,
          top: 171,
          bottom: 215,
          right: 806.5,
          left: 510.5,
        },
      },
      data: {
        current: {
          sortable: {
            containerId: 'currentColumns',
            index: 0,
            items: ['1', '3', '2', '4', '5', '6', '7', '8', '9', '10'],
          },
        },
      },
    },
    {
      id: '4',
      key: 'Droppable-2',
      disabled: true,
      node: {
        current: null,
      },
      rect: {
        current: {
          width: 296,
          height: 44,
          top: 259,
          bottom: 303,
          right: 806.5,
          left: 510.5,
        },
      },
      data: {
        current: {
          sortable: {
            containerId: 'currentColumns',
            index: 0,
            items: ['1', '3', '2', '4', '5', '6', '7', '8', '9', '10'],
          },
        },
      },
    },
  ],
  droppableRects: new Map([
    [
      '2',
      {
        width: 296,
        height: 44,
        top: 171,
        bottom: 215,
        right: 806.5,
        left: 510.5,
      },
    ],
    [
      '3',
      {
        width: 296,
        height: 44,
        top: 215,
        bottom: 259,
        right: 806.5,
        left: 510.5,
      },
    ],
    [
      '4',
      {
        width: 296,
        height: 44,
        top: 259,
        bottom: 303,
        right: 806.5,
        left: 510.5,
      },
    ],
    [
      '5',
      {
        width: 296,
        height: 44,
        top: 303,
        bottom: 347,
        right: 806.5,
        left: 510.5,
      },
    ],
    [
      '6',
      {
        width: 296,
        height: 44,
        top: 347,
        bottom: 391,
        right: 806.5,
        left: 510.5,
      },
    ],
    [
      '7',
      {
        width: 296,
        height: 44,
        top: 391,
        bottom: 435,
        right: 806.5,
        left: 510.5,
      },
    ],
    [
      '8',
      {
        width: 296,
        height: 44,
        top: 435,
        bottom: 479,
        right: 806.5,
        left: 510.5,
      },
    ],
    [
      '9',
      {
        width: 296,
        height: 44,
        top: 479,
        bottom: 523,
        right: 806.5,
        left: 510.5,
      },
    ],
    [
      '10',
      {
        width: 296,
        height: 44,
        top: 523,
        bottom: 567,
        right: 806.5,
        left: 510.5,
      },
    ],
    [
      'currentColumns',
      {
        width: 296,
        height: 478,
        top: 90,
        bottom: 568,
        right: 805.5,
        left: 509.5,
      },
    ],
    [
      '11',
      {
        width: 296,
        height: 44,
        top: 127,
        bottom: 171,
        right: 1126.5,
        left: 830.5,
      },
    ],
    [
      '12',
      {
        width: 296,
        height: 44,
        top: 171,
        bottom: 215,
        right: 1126.5,
        left: 830.5,
      },
    ],
    [
      '13',
      {
        width: 296,
        height: 44,
        top: 215,
        bottom: 259,
        right: 1126.5,
        left: 830.5,
      },
    ],
    [
      '15',
      {
        width: 296,
        height: 44,
        top: 259,
        bottom: 303,
        right: 1126.5,
        left: 830.5,
      },
    ],
    [
      'availableColumns',
      {
        width: 296,
        height: 478,
        top: 90,
        bottom: 568,
        right: 1125.5,
        left: 829.5,
      },
    ],
  ]),
};

export const MOCK_COLLISION_CONTAINER = {
  active: {
    id: '6',
    data: {
      current: {
        sortable: {
          containerId: 'availableColumns',
          index: 1,
          items: [
            '5',
            '6',
            '11',
            '7',
            '12',
            '2',
            '4',
            '13',
            '8',
            '10',
            '15',
            '9',
            '3',
          ],
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
  pointerCoordinates: {
    x: 805.4683,
    y: 216.7663,
  },
  collisionRect: {
    top: 203.467,
    left: 728.797,
    width: 289,
    height: 46,
    bottom: 249.467,
    right: 1017.79,
  },
  droppableContainers: [
    {
      id: 'currentColumns',
      key: 'Droppable-2',
      disabled: true,
      node: {
        current: null,
      },
      rect: {
        current: {
          width: 304,
          height: 478,
          top: 110,
          bottom: 588,
          right: 813.5,
          left: 509.5,
        },
      },
      data: {
        current: {
          children: [
            {
              id: '1',
              name: 'Queues',
              isLocked: true,
            },
            {
              id: '6',
              name: 'Agents',
            },
          ],
          type: 'container',
          sortable: {
            containerId: 'Sortable-2',
            index: 0,
            items: ['currentColumns', 'availableColumns'],
          },
        },
      },
    },
    {
      id: 'currentColumns',
      key: 'Droppable-2',
      disabled: true,
      node: {
        current: null,
      },
      rect: {
        current: {
          width: 304,
          height: 478,
          top: 110,
          bottom: 588,
          right: 813.5,
          left: 509.5,
        },
      },
      data: {
        current: {
          children: [
            {
              id: '2',
              name: 'Queues',
              isLocked: true,
            },
            {
              id: '6',
              name: 'Agents',
            },
          ],
          type: 'container',
          sortable: {
            containerId: 'Sortable-2',
            index: 0,
            items: ['currentColumns', 'availableColumns'],
          },
        },
      },
    },
  ],
  droppableRects: new Map([
    [
      'currentColumns',
      {
        width: 304,
        height: 478,
        top: 110,
        bottom: 588,
        right: 813.5,
        left: 509.5,
      },
    ],
    [
      '3',
      {
        width: 296,
        height: 44,
        top: 215,
        bottom: 259,
        right: 806.5,
        left: 510.5,
      },
    ],
    [
      '4',
      {
        width: 296,
        height: 44,
        top: 259,
        bottom: 303,
        right: 806.5,
        left: 510.5,
      },
    ],
    [
      '5',
      {
        width: 296,
        height: 44,
        top: 303,
        bottom: 347,
        right: 806.5,
        left: 510.5,
      },
    ],
    [
      '6',
      {
        width: 296,
        height: 44,
        top: 347,
        bottom: 391,
        right: 806.5,
        left: 510.5,
      },
    ],
    [
      '7',
      {
        width: 296,
        height: 44,
        top: 391,
        bottom: 435,
        right: 806.5,
        left: 510.5,
      },
    ],
    [
      '8',
      {
        width: 296,
        height: 44,
        top: 435,
        bottom: 479,
        right: 806.5,
        left: 510.5,
      },
    ],
    [
      '9',
      {
        width: 296,
        height: 44,
        top: 479,
        bottom: 523,
        right: 806.5,
        left: 510.5,
      },
    ],
    [
      '10',
      {
        width: 296,
        height: 44,
        top: 523,
        bottom: 567,
        right: 806.5,
        left: 510.5,
      },
    ],
    [
      'currentColumns',
      {
        width: 296,
        height: 478,
        top: 90,
        bottom: 568,
        right: 805.5,
        left: 509.5,
      },
    ],
    [
      '11',
      {
        width: 296,
        height: 44,
        top: 127,
        bottom: 171,
        right: 1126.5,
        left: 830.5,
      },
    ],
    [
      '12',
      {
        width: 296,
        height: 44,
        top: 171,
        bottom: 215,
        right: 1126.5,
        left: 830.5,
      },
    ],
    [
      '13',
      {
        width: 296,
        height: 44,
        top: 215,
        bottom: 259,
        right: 1126.5,
        left: 830.5,
      },
    ],
    [
      '15',
      {
        width: 296,
        height: 44,
        top: 259,
        bottom: 303,
        right: 1126.5,
        left: 830.5,
      },
    ],
    [
      'availableColumns',
      {
        width: 296,
        height: 478,
        top: 90,
        bottom: 568,
        right: 1125.5,
        left: 829.5,
      },
    ],
  ]),
};

export const MOCK_ACTIVE_CURRENT_OVER_AVAILABLE = {
  active: {
    id: '2',
    data: {
      current: {
        sortable: {
          containerId: 'currentColumns',
          index: 1,
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
    id: '12',
    rect: {
      width: 296.5,
      height: 44,
      top: 185,
      bottom: 229,
      right: 1127.5,
      left: 831,
    },
    data: {
      current: {
        sortable: {
          containerId: 'availableColumns',
          index: 1,
          items: ['11', '12', '2', '13', '15'],
        },
      },
    },
    disabled: false,
  },
} as unknown as DragOverEvent;
