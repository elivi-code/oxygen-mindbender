export const badgeArgsConfig = {
  children: undefined,
  type: undefined,
  size: undefined,
  position: undefined,
  isInner: undefined,
  testId: undefined,
};

export const badgeArgTypesConfig = {
  children: {
    description: 'Rendered element inside the badge',
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
  type: {
    control: {
      type: 'select',
      options: ['primary', 'secondary'],
    },
    description: 'Define Badge type',
    table: {
      category: 'Props',
      type: {
        summary: '"primary" | "secondary"',
      },
      defaultValue: {
        summary: '"primary"',
      },
    },
  },
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'big'],
    },
    description: 'Define Badge size',
    table: {
      category: 'Props',
      type: {
        summary: '"small" | "medium" | "big"',
      },
      defaultValue: {
        summary: '"medium"',
      },
    },
  },
  position: {
    control: {
      type: 'select',
      options: ['top-start', 'top-end', 'bottom-start', 'bottom-end'],
    },
    description: 'Define Badge position',
    table: {
      category: 'Props',
      type: {
        summary: '"top-start" | "top-end" | "bottom-start" | "bottom-end"',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  isInner: {
    control: {
      type: 'boolean',
    },
    description: 'Tell if badge should render inside wrapper',
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
    description: 'Test ID DOM attribute value',
    table: {
      category: 'Props',
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: '"BADGE"',
      },
    },
  },
};

export const aiBadgeArgsConfig = {
  children: 'AI',
  testId: undefined,
};

export const aiBadgeArgTypesConfig = {
  children: {
    control: {
      type: 'text',
    },
    description: 'Content to display next to the star icon',
    table: {
      category: 'Props',
      type: {
        summary: 'React.ReactNode',
      },
      defaultValue: {
        summary: '"AI"',
      },
    },
  },
  testId: {
    control: {
      type: 'text',
    },
    description: 'Test ID DOM attribute value',
    table: {
      category: 'Props',
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: '"AI_BADGE"',
      },
    },
  },
};
