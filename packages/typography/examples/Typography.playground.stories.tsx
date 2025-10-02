import React from 'react';
import { typography } from '@8x8/oxygen-constants';
import Typography, { sizes, weights } from '@8x8/oxygen-typography';

import { PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';

const inputText = 'Playground';

export const PlaygroundTypography = args => (
  <div style={{ width: '100%' }}>
    <Typography {...args} />
  </div>
);
PlaygroundTypography.args = {
  size: 'default',
  weight: 'default',
  color: typography.typographyColor,
  align: '',
  display: '',
  isParagraph: false,
  shouldWrap: true,
  children: inputText,
};
PlaygroundTypography.argTypes = {
  size: {
    control: {
      type: 'select',
    },
    options: Object.keys(sizes),
  },
  weight: {
    control: {
      type: 'select',
    },
    options: Object.keys(weights),
  },
  color: {
    control: {
      type: 'color',
    },
  },
};
PlaygroundTypography.storyName = '10. Playground';

export default {
  title: 'Components/Typography',
  component: Typography,
  decorators: [PlaygroundDecorator],
};
