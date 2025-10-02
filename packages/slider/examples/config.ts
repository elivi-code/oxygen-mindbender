import { action } from 'storybook/actions';

export const argsConfig = {
  isDisabled: undefined,
  minValue: undefined,
  maxValue: undefined,
  step: undefined,
  expandKnobAreaBy: undefined,
  expandTrackAreaBy: undefined,
  onChange: action('onChange'),
  onDragStart: action('onDragStart'),
  onDragEnd: action('onDragEnd'),
  ariaLabel: undefined,
};
export const argTypesConfig = {
  minValue: {
    control: {
      type: 'number',
    },
    description: 'Minimum slider value',
    table: {
      category: 'Props',
      type: {
        summary: 'number',
      },
      defaultValue: {
        summary: '0',
      },
    },
  },
  maxValue: {
    control: {
      type: 'number',
    },
    description: 'Maximum slider value',
    table: {
      category: 'Props',
      type: {
        summary: 'number',
      },
      defaultValue: {
        summary: '10',
      },
    },
  },
  step: {
    control: {
      type: 'number',
    },
    description: 'Increment/decrement value',
    table: {
      category: 'Props',
      type: {
        summary: 'number',
      },
      defaultValue: {
        summary: '1',
      },
    },
  },
  isDisabled: {
    control: {
      type: 'boolean',
    },
    description: 'Disable slider ',
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
  expandKnobAreaBy: {
    control: {
      type: 'text',
    },
    description:
      '_Deprecated_ Expand the Knob clickable area by received value',
    table: {
      category: 'Props',
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: '""',
      },
    },
  },
  expandTrackAreaBy: {
    control: {
      type: 'text',
    },
    description: 'Expand the Track clickable area by received value',
    table: {
      category: 'Props',
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: '"24px"',
      },
    },
  },
  ariaLabel: {
    control: {
      type: 'text',
    },
    description:
      'Attribute for identifying the slider <br />For normal slider, one input will be created, with this name and slider value. <br />For range slider, two input will be created, with name [name] Minimum and [name] Maximum with the values of range slider',
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
  onChange: {
    table: {
      disable: true,
    },
  },
  onDragStart: {
    table: {
      disable: true,
    },
  },
  onDragEnd: {
    table: {
      disable: true,
    },
  },
  isMultiple: {
    control: { type: null },
    description: 'Tells if the slider have one or two thumbs',
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
};
