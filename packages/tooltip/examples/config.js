import { showOn, orientation } from '@8x8/oxygen-tooltip';

export const argsConfig = {
  title: 'Lorem ipsum dolor sit amet',
  children: 'Tooltip reference',
  includeWrapper: true,
  showOn: undefined,
  disableInteractive: undefined,
  delay: undefined,
  orientation: undefined,
  enableArrow: undefined,
  offset: undefined,
  renderContainer: undefined,
  renderContainerId: undefined,
  modifiers: undefined,
};

export const argTypesConfig = {
  title: {
    type: {
      required: true,
    },
    description: 'Content that will be placed inside the tooltip',
    table: {
      category: 'props',
      type: {
        summary: 'React.ReactNode',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  children: {
    description: `Attaches open events and positions relatively to what is being provided here.
                  By default \`children\` are wrapped in a \`div\` element. Use the \`includeWrapper\` prop to disable the wrapper.`,
    table: {
      category: 'props',
      type: {
        summary: 'React.ReactNode',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  includeWrapper: {
    description: `Whether to wrap the \`children\` in a \`div\` element, or use \`children\` directly as target.
                  When \`false\` preferably to use a single child.`,
    table: {
      category: 'props',
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: 'true',
      },
    },
  },
  delay: {
    control: {
      type: 'number',
    },
    description:
      'Delay in milliseconds until the tooltip is shown & hidden. Only applies for hover',
    table: {
      category: 'props',
      type: {
        summary: 'number',
      },
      defaultValue: {
        summary: 0,
      },
    },
  },
  orientation: {
    table: {
      category: 'props',
      description: `Direction towards which the \`Tooltip\` will be shown.
                    If there's not enough space to render in the provided direction the \`Tooltip\` will flip`,
      type: {
        summary: Object.values(orientation).join('|'),
        detail: 'Can use exported values from `directions`',
      },
      defaultValue: {
        summary: orientation.top,
      },
    },
    control: {
      type: 'select',
    },
    options: Object.values(orientation),
  },
  showOn: {
    description:
      'Which event shows the `Tooltip`. `hover` also enables `focus`',
    table: {
      category: 'props',
      type: {
        summary: Object.values(showOn).join('|'),
        detail: 'Can use exported values from `showOnTypes`',
      },
      defaultValue: {
        summary: showOn.hover,
      },
    },
    control: {
      type: 'radio',
    },
    options: Object.values(showOn),
  },
  disableInteractive: {
    description: `Disables keeping the Tooltip open while hovering over the floating UI. Note tha this doesn't work together with \`showOn="click"\``,
    table: {
      category: 'props',
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: 'false',
      },
    },
    control: {
      type: 'boolean',
    },
  },
  offset: {
    control: {
      type: 'number',
    },
    description:
      'Offset in pixels from the target element. Current value matches the Arrow dimension',
    table: {
      category: 'props',
      type: {
        summary: 'number',
      },
      defaultValue: {
        summary: 7,
      },
    },
  },
  renderContainer: {
    description: `Floating content render container (used as root for the React Portal).
                  If no value is provided, the default container is \`body\``,
    table: {
      category: 'props',
      type: {
        summary: 'HTMLElement',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  renderContainerId: {
    description:
      'Floating content render container (used as root for the React Portal). String value of an id for a HTML element. If not found in the DOM an element is created and appended at the end of body. See https://floating-ui.com/docs/FloatingPortal#id',
    control: {
      type: 'text',
    },
    table: {
      category: 'props',
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  enableArrow: {
    control: {
      type: 'radio',
    },
    table: {
      category: 'props',
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: true,
        detail:
          'Default value is `true` for `novo` and `novoDark` and `false` for `classic`',
      },
    },
    options: Object.values({
      true: true,
      false: false,
    }),
  },
  modifiers: {
    description: `**Deprecated**. This is no longer supported. It was exposed to allow for different _offset_ values.
                  For _offset_ use the \`offset\` prop instead. If you use and need other modifiers contact the Oxygen team`,
    table: {
      category: 'props',
      type: {
        summary: 'object',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  triggerRef: {
    description: `If this is specified the reference provided will be used both as target for the hover/click events
                  and for the relative positioning of the floating \`Tooltip\`. Use when wrapping the target with the \`Tooltip\`
                  component is problematic. Children will still be rendered, but have no events attached to them`,
    table: {
      category: 'props',
      type: {
        summary: 'HTMLElement',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  customCloseHandlers: {
    description:
      '**Deprecated**. Array containing events that should trigger the hiding of the tooltip',
    table: {
      category: 'props',
      type: {
        summary: 'Array<>',
      },
      defaultValue: {
        summary: '[]',
      },
    },
    testId: {
      description: 'Test id for the tooltip',
      table: {
        category: 'props',
      },
    },
    theme: {
      description:
        'Theme override for a particular component instance. Use the `@8x8/config` package to set the theme globally.',
      table: {
        category: 'props',
      },
    },
  },
};
