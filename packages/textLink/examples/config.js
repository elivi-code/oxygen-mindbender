export const argsConfig = {
  children: 'Text link',
  href: undefined,
  as: undefined,
  color: undefined,
  size: undefined,
  underline: undefined,
};

export const argTypesConfig = {
  children: {
    type: {
      required: true,
    },
    defaultValue: undefined,
    description: 'Inner text of the component. This is the only required prop.',
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
  href: {
    description:
      'Inner node. We advise to use text, and not use complex (block-level) components',
    table: {
      category: 'Props',
    },
  },
  as: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
    },
    defaultValue: undefined,
    description: `Use \`Button\` instead. This controls the HTML element that will be rendered. Used only \`as="button"\``,
    table: {
      category: 'Props',
      type: {
        summary: '"a" | "button"',
      },
      defaultValue: {
        summary: '"a"',
      },
    },
  },
  color: {
    control: {
      type: 'select',
    },
    description:
      'Whether to use its owned defined color (`primary`) or whether to `inherit` it',
    table: {
      category: 'Props',
      type: {
        summary: 'primary | inherit',
      },
      defaultValue: {
        summary: 'primary',
      },
    },
    options: Object.values(['primary', 'inherit']),
  },
  size: {
    control: {
      type: 'select',
    },
    options: Object.values(['default', 'inherit']),
    description:
      'Whether to use its owned defined size (`default`) or whether to `inherit` it',
    table: {
      category: 'Props',
      type: {
        summary: 'default | inherit',
      },
      defaultValue: {
        summary: 'default',
      },
    },
  },
  underline: {
    control: {
      type: 'select',
    },
    description:
      'Which underline rules to use. The values are self-explanatory.',
    options: Object.values(['always', 'hover', 'inherit', 'never']),
    table: {
      category: 'Props',
      type: {
        summary: 'always | hover | inherit | never',
      },
      defaultValue: {
        summary: 'never',
      },
    },
  },
  onClick: {
    table: {
      disable: true,
    },
  },
};
