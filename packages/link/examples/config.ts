import { action } from 'storybook/actions';
import { iconSelectRendered } from '@8x8/oxygen-storybook-utils/customSelectControls';

export const argsConfig = {
  children: 'Click me',
  href: 'https://example.com',
  standalone: undefined,
  size: undefined,
  icon: 'none',
  onClick: action('clicked'),
  onClickEnabled: false,
  isChat: undefined,
};
export const argTypesConfig = {
  children: {
    description: 'Link content',
    table: {
      category: 'Props',
      type: {
        summary: 'React.ReactNode',
      },
    },
  },
  href: {
    description: 'URL the link points to',
    table: {
      category: 'Props',
      type: {
        summary: 'string',
      },
    },
  },
  standalone: {
    control: 'boolean',
    description: 'Whether the link is standalone or inline',
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
  size: {
    control: {
      type: 'select',
      options: ['small', 'large'],
    },
    description: 'Size of the link (only applies to standalone links)',
    table: {
      category: 'Props',
      defaultValue: { summary: 'small' },
      type: {
        summary: '"small" | "large"',
      },
    },
  },
  icon: {
    ...iconSelectRendered,
    description: 'Select an icon to display (only applies to standalone links)',
    options: ['none', ...iconSelectRendered.options],
    mapping: {
      none: undefined,
      ...iconSelectRendered.mapping,
    },
    table: {
      category: 'Props',
      type: {
        summary: 'React.ReactNode',
      },
      defaultValue: {
        summary: 'none',
      },
    },
  },
  isChat: {
    control: 'boolean',
    description: 'Whether the link is in a chat context',
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
  onClickEnabled: {
    control: 'boolean',
    description:
      'Usage for when no href is provided and the action is handled via js onClick event',
  },
  onClick: {
    table: {
      disable: true,
    },
  },
};
