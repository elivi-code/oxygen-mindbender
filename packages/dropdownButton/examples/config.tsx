import React from 'react';
import { action } from 'storybook/actions';
import { directions } from '@8x8/oxygen-dropdown-button';
import List, { ListItem } from '@8x8/oxygen-list';
import { iconSelectWithFalse } from '@8x8/oxygen-storybook-utils';

export const argsConfig = {
  children: (
    <List>
      <ListItem onClick={action('item 1')}>Item 1</ListItem>
      <ListItem isDisabled onClick={action('item 2')}>
        Item 2 - is disabled
      </ListItem>
      <ListItem onClick={action('item 3')}>
        Item 3 - has a extremely long name
      </ListItem>
      <ListItem onClick={action('item 4')}>Item 4 - is in group</ListItem>
      <ListItem title="Title" onClick={action('item 5')}>
        Item 5 - is in group, has title
      </ListItem>
      <ListItem onClick={action('item 6')}>Item 6</ListItem>
      <ListItem onClick={action('item 7')}>Item 7</ListItem>
    </List>
  ),
  buttonText: 'Example Button',
  idealDirection: undefined,
  shouldCloseOnInsideClick: undefined,
  isDefaultOpen: undefined,
  isDisabled: undefined,
  invertIconPosition: undefined,
  indicatorIcon: undefined,
  onOpen: action('onOpen'),
  onClose: action('onClosed'),
};
export const argTypesConfig = {
  children: {
    type: {
      required: true,
    },
    description:
      'Items rendered inside the floating part of the dropdown when open',
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
  buttonText: {
    type: {
      required: true,
    },
    description: 'Text rendered inside the button',
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
  idealDirection: {
    description:
      'The direction of the floating element (relative to the button)',
    control: {
      type: 'select',
    },
    options: Object.values(directions),
    table: {
      category: 'Props',
      type: {
        summary:
          "'top' | 'right' | 'bottom' | 'left' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end'",
      },
      defaultValue: {
        summary: "'bottom'",
      },
    },
  },
  shouldCloseOnInsideClick: {
    description:
      'Controls whether the dropdown will close when the floating part receives click events',
    control: {
      type: 'boolean',
    },
    table: {
      category: 'Props',
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: 'true',
      },
    },
  },
  isDefaultOpen: {
    description: 'DropdownButton open by default',
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
    description: 'Disables the DropdownButton',
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
  invertIconPosition: {
    description: 'Controls the icon position: before/after the text',
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
  indicatorIcon: {
    description:
      'Receives custom Icon component - on `false` value it will not render any icon',
    ...iconSelectWithFalse,
    table: {
      category: 'Props',
      type: {
        summary: 'React.ComponentType | false',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  onOpen: {
    description: 'Callback after dropdown open action',
    table: {
      category: 'Props',
      type: {
        summary: '() => void',
      },
      defaultValue: {
        summary: '() => {}',
      },
    },
  },
  onClose: {
    description: 'Callback after dropdown close action ',
    table: {
      category: 'Props',
      type: {
        summary: '() => void',
      },
      defaultValue: {
        summary: '() => {}',
      },
    },
  },
};
