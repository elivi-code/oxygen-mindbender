import React from 'react';
import { Toast } from '@8x8/oxygen-toast';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const ToastSize = args => (
  <>
    <Doc>
      <h1>
        <code>Toast</code> size &amp; vertical space
      </h1>
      <p>
        <code>size</code> refers to the width of the <code>Toast</code>. There
        are 3 sizes: <code>small</code>,<code>medium</code>, and{' '}
        <code>large</code>.
      </p>
      <h2>
        Default <code>size</code> is <code>small</code>
      </h2>
      <pre>
        {`
import { Toast } from '@8x8/oxygen-toast';

<Toast title="Title" description="description" />
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Toast {...args} />
    </ComponentSection>
    <Doc>
      <h2>
        Size <code>small</code>
      </h2>
      <pre>
        {`
import { Toast } from '@8x8/oxygen-toast';

<Toast title="Title" description="description" size="small" />
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Toast {...args} size="small" />
    </ComponentSection>
    <Doc>
      <h2>
        Size <code>medium</code>
      </h2>
      <pre>
        {`
import { Toast } from '@8x8/oxygen-toast';

<Toast title="Title" description="description" size="medium" />
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Toast {...args} size="medium" />
    </ComponentSection>
    <Doc>
      <h2>
        Size <code>large</code>
      </h2>
      <pre>
        {`
import { Toast } from '@8x8/oxygen-toast';

<Toast title="Title" description="description" size="large" />
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Toast {...args} size="large" />
    </ComponentSection>
  </>
);
ToastSize.storyName = 'Toast size';
ToastSize.args = argsConfig;
ToastSize.argTypes = argTypesConfig;
