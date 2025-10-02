import React from 'react';
import styled from 'styled-components';
import Badge, { badgeSize, badgePosition, badgeType } from '@8x8/oxygen-badge';

import { PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';

const BadgeExampleWrapper = styled.div`
  position: relative;
  width: 2.125rem;
  height: 2.125rem;
  margin: 0 auto;
  border-radius: 4px;
  border: 1px solid #a4b8d1;
`;

export const PlaygroundBadge = args => (
  <BadgeExampleWrapper>
    <Badge {...args} />
  </BadgeExampleWrapper>
);
PlaygroundBadge.args = {
  type: badgeType.primary,
  size: badgeSize.medium,
  position: badgePosition['top-start'],
  isInner: false,
  children: '1',
};
PlaygroundBadge.argTypes = {
  type: {
    control: 'select',
    options: Object.values(badgeType),
  },
  size: {
    control: 'select',
    options: Object.values(badgeSize),
  },
  position: {
    control: 'select',
    options: Object.values(badgePosition),
  },
};
PlaygroundBadge.storyName = '10. Playground';

export default {
  title: 'Components/Badge',
  component: Badge,
  decorators: [PlaygroundDecorator],
};
