import { action } from 'storybook/actions';
import type { Args, ArgTypes } from '@storybook/csf';

export const argsConfig: Args = {
  children:
    'Hello. Uh oh! Something very specific went wrong. Please contact your supervisor or admin.',
  actionText: undefined,
  actionCallback: action('actionCallback'),
  testId: undefined,
};

export const argTypesConfig: ArgTypes = {
  children: {
    name: 'children',
    control: {
      type: 'text',
    },
    type: {
      name: 'string',
      required: true,
    },
    defaultValue: undefined,
    description: 'Text content',
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
  actionText: {
    name: 'actionText',
    control: {
      type: 'text',
    },
    defaultValue: undefined,
    description:
      'Text for the optional action button. If specified it expects the `actionCallback` to be provided as well.',
    type: 'string',
    table: {
      category: 'Props',
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  actionCallback: {
    control: {
      type: 'function',
    },
    defaultValue: undefined,
    description:
      'Callback for the optional action button. If specified it expects the `actionText` to be provided as well.',
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
    control: {
      type: 'text',
    },
    defaultValue: 'alertBanner',
    description: 'Test ID for the component',
    type: {
      name: 'string',
    },
    table: {
      category: 'Props',
      type: {
        summary: 'string',
      },
      defaultValue: {
        // eslint-disable-next-line quotes
        summary: "'alertBanner'",
      },
    },
  },
};
