import { action } from 'storybook/actions';

export const componentName = 'Toast';

const actions = [
  { title: 'Action 1', callback: action('1'), id: 1 },
  { title: 'Action 2', callback: action('2'), id: 2 },
];
const actions3 = [...actions, { title: 'Beer?', callback: action('3'), id: 3 }];
const actions5 = [
  ...actions3,
  { title: 'Stop', callback: action('4'), id: 4 },
  { title: 'Too much', callback: action('5'), id: 5 },
];

export const argsConfig = {
  title: 'Title',
  closeButtonLabel: 'Close',
  description: 'Description',
  children: undefined,
  actions: [],
  type: undefined,
  size: undefined,
  hideCloseControl: undefined,
  onCloseControlClick: action('onCloseControlClick'),
};

export const argTypesConfig = {
  title: {
    control: {
      type: 'text',
    },
    description:
      'Notification title. Should be used for main notification text.',
    table: {
      category: 'Props',
      type: {
        summary: `React.ReactNode`,
      },
      defaultValue: {
        summary: `undefined`,
      },
    },
  },
  closeButtonLabel: {
    control: {
      type: 'text',
    },
    description:
      'Accessible label for the close button. Defaults to "Close" if not provided.',
    table: {
      category: 'Props',
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: `'Close'`,
      },
    },
  },
  description: {
    control: {
      type: 'text',
    },
    description:
      'Notifcation description. Use for additional description (if needed) besides the title.',
    table: {
      category: 'Props',
      type: {
        summary: `React.ReactNode`,
      },
      defaultValue: {
        summary: `undefined`,
      },
    },
  },
  children: {
    control: {
      type: 'text',
    },
    description: `_DEPRECATED_: Old implementaion of notification. When used takes precedence over title + description (this is to preserve older notifications). Please migrate over to \`title\` and \`description\`.`,
    table: {
      category: 'Props',
      type: {
        summary: `React.ReactNode`,
      },
      defaultValue: {
        summary: `undefined`,
      },
    },
  },
  actions: {
    control: {
      type: 'select',
    },
    description: 'Array containing action with respective callbacks.',
    options: {
      None: [],
      '2 Actions': actions,
      '3 Actions': actions3,
      '5 Actions': actions5,
    },
    table: {
      category: 'Props',
      type: {
        summary: `interface ActionType`,
      },
      defaultValue: {
        summary: `[]`,
      },
    },
  },
  type: {
    control: {
      type: 'select',
      options: ['success', 'error', 'warning', 'info'],
    },
    description: 'Notification type.',
    table: {
      category: 'Props',
      type: {
        summary: `'success' | 'warning' | 'error' | 'info'`,
      },
      defaultValue: {
        summary: `'success'`,
      },
    },
  },
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
    description: 'Notification size.',
    table: {
      category: 'Props',
      type: {
        summary: `'small' | 'medium' | 'large'`,
      },
      defaultValue: {
        summary: `'small'`,
      },
    },
  },
  hideCloseControl: {
    control: {
      type: 'boolean',
    },
    table: {
      category: 'Props',
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: 'false',
      },
    },
    description: 'Hides the close button.',
  },
  onCloseControlClick: {
    control: {
      type: 'function',
    },
    description: 'Custom callback called when the notification is closed.',
    table: {
      category: 'Props',
      type: {
        summary: '() => void',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
};
