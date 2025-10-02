export const argsConfig = {
  size: undefined,
  customSize: undefined,
  testId: undefined,
};

export const argTypesConfig = {
  size: {
    control: {
      type: 'select',
      options: [
        'label01',
        'body01',
        'body02',
        'bulletList01',
        'heading01',
        'heading02',
        'xlarge',
        'large',
        'medium',
        'small',
        'xsmall',
      ],
    },
    description:
      'Uses a) typography tokens which use the line-height property from the token (easy to match text height in your loader) or b) Avatar sizes or c) any custom string which is passed directly to the height/width properties.',
    table: {
      category: 'Props',
      type: {
        summary:
          "'label01' | 'body01' | 'body02' | 'bulletList01' | 'heading01' | 'heading02' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall'",
      },
      defaultValue: {
        summary: "'body01'",
      },
    },
  },
  customSize: {
    control: {
      type: 'text',
    },
    description:
      'This storybook control overrides the above set `size` property with the value passed in here.',
    table: {
      category: 'Props',
      type: {
        summary: 'string',
      },
    },
  },
  testId: {
    control: {
      type: 'text',
    },
    defaultValue: "'SKELETON_BLOCK' | 'SKELETON_CIRCLE'",
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
        summary: "'SKELETON_BLOCK' | 'SKELETON_CIRCLE'",
      },
    },
  },
};
