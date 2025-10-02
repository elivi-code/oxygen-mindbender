import React from 'react';
import Tooltip from '@8x8/oxygen-tooltip';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const ShowOn = args => (
  <>
    <Doc>
      <h1>
        <code>Tooltip</code> showOn prop
      </h1>
      <p>
        The <code>Tooltip</code> is used to show additional content. By default
        it will show the additional content on hover but you can also show it on
        click
      </p>

      <h2>Default</h2>
      <p>
        The default bahaviour is the same as{' '}
        <code>showOn=&quot;hover&quot;</code>
      </p>
      <pre>
        {`
import Tooltip from '@8x8/oxygen-tooltip';

<Tooltip title="Lorem ipsum dolor sit amet">Tooltip reference</Tooltip>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Tooltip {...args} />
    </ComponentSection>
    <Doc>
      <h2>
        <code>showOn</code> hover
      </h2>
      <pre>
        {`
import Tooltip from '@8x8/oxygen-tooltip';

<Tooltip title="Lorem ipsum dolor sit amet" showOn="hover">Tooltip reference</Tooltip>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Tooltip {...args} showOn="hover" />
    </ComponentSection>
    <Doc>
      <h2>
        <code>showOn</code> click
      </h2>
      <pre>
        {`
import Tooltip from '@8x8/oxygen-tooltip';

<Tooltip title="Lorem ipsum dolor sit amet" showOn="click">Tooltip reference</Tooltip>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Tooltip {...args} showOn="click" />
    </ComponentSection>
  </>
);
ShowOn.storyName = 'Prop showOn';
ShowOn.args = argsConfig;
ShowOn.argTypes = argTypesConfig;
