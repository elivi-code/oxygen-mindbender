import React from 'react';

import { Toast, ToastStack } from '@8x8/oxygen-toast';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { argsConfig, argTypesConfig } from './config';

export const ToastStacking = args => (
  <>
    <Doc>
      <h1>
        <code>Toast</code> stacking
      </h1>
      <p>
        When showing multiple <code>Toast</code> items you can group them with
        the <code>ToastStack</code> component. This component ensure correct
        spacings between individual <code>Toast</code> items.
      </p>
      <p>
        Here is an example without the <code>ToastStack</code> component
      </p>
      <pre>
        {`
import { Toast } from '@8x8/oxygen-toast';

<Toast title="Title" description="description" />
<Toast title="Title" description="description" />
<Toast title="Title" description="description" />
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <div>
        <Toast {...args} />
        <Toast {...args} />
        <Toast {...args} />
      </div>
    </ComponentSection>
    <Doc>
      <p>
        And here is an example with the <code>ToastStack</code> component
      </p>
      <pre>
        {`
import { Toast, ToastStack } from '@8x8/oxygen-toast';

<ToastStack>
  <Toast title="Title" description="description" />
  <Toast title="Title" description="description" />
  <Toast title="Title" description="description" />
</ToastStack>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <ToastStack>
        <Toast {...args} />
        <Toast {...args} />
        <Toast {...args} />
      </ToastStack>
    </ComponentSection>
  </>
);
ToastStacking.storyName = 'Toast stacking';
ToastStacking.args = argsConfig;
ToastStacking.argTypes = argTypesConfig;
