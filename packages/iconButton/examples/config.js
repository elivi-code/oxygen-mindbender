import { action } from 'storybook/actions';

import { iconSelectRendered } from '@8x8/oxygen-storybook-utils';

export const argsConfig = {
  isActive: undefined,
  isDisabled: undefined,
  isInverted: undefined,
  'aria-label': 'Button Icon',
  onClick: action('onClick'),
  testId: undefined,
};

export const argTypesConfig = {
  children: {
    type: {
      required: false,
    },
    defaultValue: undefined,
    description:
      'The icon to be wrapped. It can be *any* component, but we advice to use this for `Icon` components.',
    table: {
      category: 'Props',
      type: {
        summary: 'React.ReactNode',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
    ...iconSelectRendered,
  },
  isActive: {
    control: {
      type: 'boolean',
    },
    type: {
      required: false,
    },
    defaultValue: false,
    description: `Controls the \`active\` state of the component. Applies same styles as the CSS :active rules`,
    table: {
      category: 'Props',
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: 'false',
      },
    },
  },
  isDisabled: {
    control: {
      type: 'boolean',
    },
    type: {
      required: false,
    },
    defaultValue: false,
    description: `Controls the \`disabled\` state of the component. While disabled it not receive interaction styles for \`focus\` and \`hover\` and it will not respons to click events`,
    table: {
      category: 'Props',
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: 'false',
      },
    },
  },
  isInverted: {
    control: {
      type: 'boolean',
    },
    type: {
      required: false,
    },
    defaultValue: false,
    description: `Use against inverted backgrounds, such as Toast (Notification)`,
    table: {
      category: 'Props',
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: 'false',
      },
    },
  },
  testId: {
    type: {
      name: 'string',
      required: false,
    },
    defaultValue: undefined,
    description: `Used for testing purposes. It will be applied as a \`data-test-id\` attribute to the component`,
    table: {
      category: 'Props',
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: 'iconButton',
      },
    },
  },
  onClick: {
    table: {
      disable: true,
    },
  },
};
