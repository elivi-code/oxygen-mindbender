import React from 'react';
import { AIBadge } from '@8x8/oxygen-badge';

import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import { aiBadgeArgsConfig, aiBadgeArgTypesConfig } from './config';

export const AIBadgeExample = args => (
  <>
    <Doc>
      <h1>
        <code>AIBadge</code>
      </h1>
      <p>
        The <code>AIBadge</code> component displays a fixed AI indicator with a
        star icon and &quot;AI&quot; text. It uses theme colors that
        automatically adapt to light and dark themes.
      </p>

      <pre>
        {`
import { AIBadge } from '@8x8/oxygen-badge';

<AIBadge />
        `}
      </pre>
    </Doc>

    <ComponentSection>
      <AIBadge {...args} />
    </ComponentSection>
  </>
);

AIBadgeExample.storyName = 'AIBadge';
AIBadgeExample.args = aiBadgeArgsConfig;
AIBadgeExample.argTypes = aiBadgeArgTypesConfig;

export default {
  title: 'Components/Badge/Examples',
};
