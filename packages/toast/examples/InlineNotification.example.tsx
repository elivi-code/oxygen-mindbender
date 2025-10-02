import React from 'react';
import { InlineNotification } from '@8x8/oxygen-toast';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const InlineNotificationExample = args => (
  <>
    <Doc>
      <h1>
        <code>InlineNotification</code> example
      </h1>
      <p>
        This component is identical to the <code>Toast</code> component, but it
        has the theme inverted.
      </p>
      <h2>Try to change the theme to see the difference</h2>
      <pre>
        {`
import { InlineNotification } from '@8x8/oxygen-toast';

<InlineNotification title="Title" description="description" />
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <InlineNotification {...args} />
    </ComponentSection>
  </>
);
InlineNotificationExample.storyName = 'InlineNotification example';
InlineNotificationExample.args = argsConfig;
InlineNotificationExample.argTypes = argTypesConfig;
