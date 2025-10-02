import { action } from 'storybook/actions';
import { iconSelectRendered } from '@8x8/oxygen-storybook-utils';

export const argsConfig = {
  children: 'Click me',
  iconLeft: undefined,
  iconRight: undefined,
  size: undefined,
  variant: undefined,
  isActive: undefined,
  isDisabled: undefined,
  isCircular: undefined,
  isDestructive: undefined,
  testId: undefined,
  onClick: action('onClick'),
  onKeyPress: action('onKeyPress'),
};
export const argTypesConfig = {
  children: {
    type: {
      required: true,
    },
    description: 'Button content',
    table: {
      category: 'Props',
      type: {
        summary: 'React.ReactNode',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
    description: `Button size. Use \`'large'\` for touch targets`,
    table: {
      category: 'Props',
      type: {
        summary: '"small" | "medium" | "large"',
      },
      defaultValue: {
        summary: '"medium"',
      },
    },
  },
  variant: {
    control: {
      type: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'tertiaryReversed',
        'text',
        'success',
        'destructive',
      ],
    },
    description: `Use \`'primary'\` and \`'secondary'\` to denote a form default action vs secondary actions. Use \`'destructive'\` for actions with important side-effects (maybe use additional confirmations for these actions as well). \`'success'\`, \`'destructive'\`, and \`'tertiary'\` are also used together with \`isCircular\` for call (phone) actions. Use \`'tertiaryReversed'\` against inverted backgrounds (ex: in-call ui)`,
    table: {
      category: 'Props',
      type: {
        summary:
          '"primary" | "secondary" | "tertiary" | "tertiaryReversed" | "text" | "success" | "destructive"',
      },
      defaultValue: {
        summary: '"primary"',
      },
    },
  },
  iconLeft: {
    ...iconSelectRendered,
    description: 'Adds an icon on the left side of the Button',
    table: {
      category: 'Props',
      type: {
        summary: 'React.ReactNode',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  iconRight: {
    ...iconSelectRendered,
    description: 'Adds an icon on the right side of the Button',
    table: {
      category: 'Props',
      type: {
        summary: 'React.ReactNode',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  isActive: {
    control: {
      type: 'boolean',
    },
    description: 'Active button state',
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
    description: 'Disabled button state',
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
  isCircular: {
    control: {
      type: 'boolean',
    },
    description: `Makes the button circular. Use with one \`Icon\` as child`,
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
  isDestructive: {
    control: {
      type: 'boolean',
    },
    description: `Makes the button destructive.`,
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
    control: {
      type: 'text',
    },
    description: `Used for testing purposes. It will be applied as a \`data-test-id\` attribute to the component`,
    table: {
      category: 'Props',
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: 'BUTTON',
      },
    },
  },
  onClick: {
    table: {
      disable: true,
    },
  },
  onKeyPress: {
    table: {
      disable: true,
    },
  },
};

export const buttonGroupArgsConfig = {
  align: undefined,
  spacing: undefined,
  testId: undefined,
};

export const buttonGroupArgTypesConfig = {
  align: {
    control: {
      type: 'select',
      options: ['left', 'center', 'right'],
    },
    table: {
      category: 'Props',
    },
  },
  spacing: {
    control: {
      type: 'select',
      options: ['small', 'large'],
    },
    table: {
      category: 'Props',
    },
  },
  testId: {
    control: {
      type: 'text',
    },
    table: {
      category: 'Props',
    },
  },
};

export const dropdownButtonArgsConfig = {
  children: 'Dropdown Button',
  size: undefined,
  isActive: undefined,
  isDisabled: undefined,
  fullWidth: undefined,
  testId: undefined,
  onClick: action('onClick'),
  onKeyPress: action('onKeyPress'),
};

export const dropdownButtonArgTypesConfig = {
  children: {
    description: 'Content. We recommend using text',
    table: {
      category: 'Props',
      type: {
        summary: 'React.ReactNode',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  size: {
    description:
      'Controls typography values (and implicitly height) and icon size',
    control: {
      type: 'select',
      options: ['large', 'medium', 'small'],
    },
    table: {
      category: 'Props',
      type: {
        summary: "'large' | 'medium' | 'small'",
      },
      defaultValue: {
        summary: "'medium'",
      },
    },
  },
  isActive: {
    description:
      'Whether the item is active (denotes that something like the `Popover` is open)',
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
  },
  isDisabled: {
    description: 'Whether the item is disabled',
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
  },
  fullWidth: {
    description:
      'Has width: 100%. You can control the width through the parent component',
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
  },
  testId: {
    description: 'TestId value',
    control: {
      type: 'text',
    },
    table: {
      category: 'Props',
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: "'DROPDOWN_BUTTON'",
      },
    },
  },
  onClick: {
    table: {
      disable: true,
    },
  },
  onKeyPress: {
    table: {
      disable: true,
    },
  },
};

export const iconButtonArgsConfig = {
  isActive: undefined,
  isDisabled: undefined,
  isInverted: undefined,
  size: undefined,
  'aria-label': 'Button Icon',
  onClick: action('onClick'),
  testId: undefined,
};

export const iconButtonArgTypesConfig = {
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
  size: {
    control: {
      type: 'select',
      options: [
        'default',
        'small2XIconXs',
        'smallXIconS',
        'smallIconM',
        'smallIconS',
        'smallIconXs',
        'mediumIconL',
        'mediumIconM',
        'mediumIconS',
        'largeIconL',
        'largeIconM',
      ],
    },
    description: `Icon Button size`,
    table: {
      category: 'Props',
      type: {
        summary:
          '"small2XIconXs" | "smallXIconS" | "default" | "smallIconM" | "smallIconS" | "smallIconXs" | "mediumIconL" | "mediumIconM" | "mediumIconS" | "largeIconL" | "largeIconM"',
      },
      defaultValue: {
        summary: '"default"',
      },
    },
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
