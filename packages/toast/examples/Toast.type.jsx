import React from 'react';
import { Toast } from '@8x8/oxygen-toast';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const ToastType = args => (
  <>
    <Doc>
      <h1>
        <code>Toast</code> type
      </h1>
      <p>
        There are 4 types of <code>Toast</code>&apos;s: <code>success</code>,{' '}
        <code>error</code>,<code>warning</code> and <code>info</code>.
      </p>
      <h2>
        Default type is <code>success</code>
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
        Type <code>success</code>
      </h2>
      <pre>
        {`
import { Toast }  from '@8x8/oxygen-toast';

<Toast title="Title" description="description" type="success" />
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Toast {...args} type="success" />
    </ComponentSection>
    <Doc>
      <h2>
        Type <code>error</code>
      </h2>
      <pre>
        {`
import { Toast } from '@8x8/oxygen-toast';

<Toast title="Title" description="description" type="error" />
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Toast {...args} type="error" />
    </ComponentSection>
    <Doc>
      <h2>
        Type <code>warning</code>
      </h2>
      <pre>
        {`
import { Toast } from '@8x8/oxygen-toast';

<Toast title="Title" description="description" type="warning" />
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Toast {...args} type="warning" />
    </ComponentSection>
    <Doc>
      <h2>
        Type <code>loading</code>
      </h2>
      <pre>
        {`
import { Toast } from '@8x8/oxygen-toast';

<Toast title="Title" description="description" type="loading" />
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Toast {...args} type="loading" />
    </ComponentSection>
    <Doc>
      <h2>
        Type <code>info</code>
      </h2>
      <pre>
        {`
import { Toast } from '@8x8/oxygen-toast';

<Toast title="Title" description="description" type="info" />
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Toast {...args} type="info" />
    </ComponentSection>
  </>
);
ToastType.storyName = 'Toast type';
ToastType.args = argsConfig;
ToastType.argTypes = argTypesConfig;
