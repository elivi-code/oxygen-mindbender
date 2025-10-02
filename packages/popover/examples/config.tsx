import React from 'react';
import { action } from 'storybook/actions';
import { DropdownButton } from '@8x8/oxygen-button';

import pkg from '../package.json';

const argsConfig = {
  children: <DropdownButton>DropdownButton</DropdownButton>,
  isDisabled: undefined,
  placement: undefined,
  activeProp: undefined,
  disabledProp: undefined,
  maxHeight: undefined,
  portalTargetRef: undefined,
  testId: undefined,
};
const argTypesConfig = {
  children: {
    description:
      'Anchor element. Click and KeyPress target to open the Popover. Used for relative Popover position as well. Should contain 1 root node as events and refs will be attached to it',
    control: false,
    table: {
      category: 'Props',
      type: {
        summary: 'React.ReactElement',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  activeProp: {
    description:
      'Prop name which is passed to the `children` element when the Popover is open (used if your target element requires a different prop)',
    control: {
      type: 'text',
    },
    table: {
      category: 'Props',
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: 'isActive',
      },
    },
  },
  disabledProp: {
    description:
      'Prop name which is passed to the `children` element when the Popover is disabled (used if your target element requires a different prop)',
    control: {
      type: 'text',
    },
    table: {
      category: 'Props',
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: 'isDisabled',
      },
    },
  },
  isDisabled: {
    control: {
      type: 'boolean',
    },
    description:
      'Disabled Popover state. Disables opening, also passes the `disabledProp` to the `children` element',
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
  maxHeight: {
    control: {
      type: 'number',
    },
    description:
      'Custom maxHeight, defaults to 400 (px) — note that this does not include 16px padding, for the default 400px height this yields a total maxHeight of 384px',
    table: {
      category: 'Props',
      type: {
        summary: 'number',
      },
      defaultValue: {
        summary: '400',
      },
    },
  },
  placement: {
    description:
      'Controls Popover render position. See https://floating-ui.com/docs/useFloating#placement . If there is not enough space flip() is used to allow the Popover to be rendered in the opposite direction',
    control: {
      type: 'select',
      options: [
        'top',
        'top-start',
        'top-end',
        'right',
        'right-start',
        'right-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
      ],
    },
    table: {
      category: 'Props',
      type: {
        summary:
          "'top'|'top-start'|'top-end'|'right'|'right-start'|'right-end'|'bottom'|'bottom-start'|'bottom-end'|'left'|'left-start'|'left-end'",
      },
      defaultValue: {
        summary: "'bottom-start'",
      },
    },
  },
  portalTargetRef: {
    description:
      'Use a custom reference where to render the floating UI through a portal',
    control: {
      type: 'text',
    },
    table: {
      category: 'Props',
      type: {
        summary: 'React.RefObject<HTMLElement>',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
};

export const popoverArgsConfig = {
  ...argsConfig,
  isOpen: undefined,
  setIsOpen: undefined,
};
export const popoverArgTypesConfig = {
  ...argTypesConfig,
  isOpen: {
    type: {
      required: true,
    },
    control: false,
    description: 'Controls the Popover state',
    table: {
      category: 'Props',
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  setIsOpen: {
    type: {
      required: true,
    },
    control: false,
    description: 'State update function',
    table: {
      category: 'Props',
      type: {
        summary: '() => boolean',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  floatingContent: {
    description: 'Popover content',
    control: false,
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
        summary: "'POPOVER'",
      },
    },
  },
};

export const popoverMenuArgsConfig = {
  ...argsConfig,
  items: undefined,
  onUpdate: action('onUpdate'),
  onMenuOpenToggle: action('onMenuOpenToggle'),
  onCancel: action('onCancel'),
};
export const popoverMenuArgTypesConfig = {
  ...argTypesConfig,
  items: {
    type: {
      required: true,
    },
    control: 'false',
    description:
      'Array of items to be rendered as ListItems. You provide the props for these items.',
    table: {
      category: 'Props',
      type: {
        summary: 'ListItemProps[]',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  onUpdate: {
    type: {
      required: true,
    },
    control: false,
    description:
      'Callback function invoken when the user has made a selection. You receive the selected item back (same format as provided) and the index as the second argument',
    table: {
      category: 'Props',
      type: {
        summary: '(item: ListItemProps, index: number) => void',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  onMenuOpenToggle: {
    type: {
      required: false,
    },
    control: false,
    description:
      'Callback function invoked when the menu open state is changed. You receive one argument with the new open state (boolean)',
    table: {
      category: 'Props',
      type: {
        summary: '(newOpenState: boolean) => void',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  onCancel: {
    type: {
      required: false,
    },
    control: false,
    description:
      'Callback function invoked when the user closes the menu without choosing an option',
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
        summary: "'POPOVER_MENU'",
      },
    },
  },
};
