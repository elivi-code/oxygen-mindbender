import React from 'react';
import Badge, { AIBadge } from '@8x8/oxygen-badge';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import README from '../README.md?raw';
import CHANGELOG from '../CHANGELOG.md?raw';

import {
  badgeArgsConfig,
  badgeArgTypesConfig,
  aiBadgeArgsConfig,
  aiBadgeArgTypesConfig,
} from './config';

const badgeExample = `
----
## Examples

### Badge
\`\`\`javascript
import Badge from '@8x8/oxygen-badge';

<Badge>2</Badge>
\`\`\`
`;

const aiBadgeExample = `
### AIBadge
\`\`\`javascript
import { AIBadge } from '@8x8/oxygen-badge';

<AIBadge />
\`\`\`
`;

export const BadgeDocumentation = args => (
  <>
    <Doc markdown>{README}</Doc>
    <Doc markdown>{badgeExample}</Doc>
    <ComponentSection>
      <Badge {...args}>2</Badge>
    </ComponentSection>
    <Doc markdown>{aiBadgeExample}</Doc>
    <ComponentSection>
      <AIBadge testId={args.aiBadgeTestId}>{args.aiBadgeChildren}</AIBadge>
    </ComponentSection>
    <Doc markdown>{CHANGELOG}</Doc>
  </>
);
BadgeDocumentation.storyName = 'Documentation';
BadgeDocumentation.args = {
  ...badgeArgsConfig,
  aiBadgeChildren: aiBadgeArgsConfig.children,
  aiBadgeTestId: aiBadgeArgsConfig.testId,
};
BadgeDocumentation.argTypes = {
  ...badgeArgTypesConfig,
  aiBadgeChildren: {
    ...aiBadgeArgTypesConfig.children,
    name: 'AIBadge children',
  },
  aiBadgeTestId: {
    ...aiBadgeArgTypesConfig.testId,
    name: 'AIBadge testId',
  },
};

export default {
  title: 'Components/Badge',
};
