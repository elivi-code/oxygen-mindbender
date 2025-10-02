import React from 'react';
import Tooltip from '@8x8/oxygen-tooltip';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const DisableInteractive = args => (
  <>
    <Doc>
      <h1>
        <code>Tooltip</code> disableInteractive prop
      </h1>
      <p>
        By default the <code>Tooltip</code> will remain open as long as you
        hover over the reference or the opened floating tooltip. With{' '}
        <code>disableInteractive</code> you can disable keeping the Tooltip open
        while hovering over the floating UI. The Tooltip will only remain open
        while you hover over the reference
      </p>

      <p>
        Use this option when you need the <code>Tooltip</code> to behave more
        like a native <code>title</code>
      </p>

      <h2>Default</h2>
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
        <code>disableInteractive</code>
      </h2>
      <pre>
        {`
import Tooltip from '@8x8/oxygen-tooltip';

<Tooltip title="Lorem ipsum dolor sit amet" disableInteractive>Tooltip reference</Tooltip>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Tooltip {...args} disableInteractive />
    </ComponentSection>
    <Doc>
      <h2>
        <code>disableInteractive</code> doesn&apos;t work with{' '}
        <code>showOn=&quot;click&quot;</code>
      </h2>
      <blockquote>
        ⚠️ <strong>Note</strong> that when <code>showOn=&quot;click&quot;</code>{' '}
        is set <code>disableInteractive</code> doesn&apos;t do anything
      </blockquote>
      <p>
        This is becuase <code>disableInteractive</code> changes the{' '}
        <code>hover</code> behaviour which isn&apos;t used when the{' '}
        <code>Tooltip</code> is toggled via click events
      </p>
      <pre>
        {`
import Tooltip from '@8x8/oxygen-tooltip';

<Tooltip title="Lorem ipsum dolor sit amet" disableInteractive showOn="click">Tooltip reference</Tooltip>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Tooltip {...args} disableInteractive showOn="click" />
    </ComponentSection>
  </>
);
DisableInteractive.storyName = 'Prop disableInteractive';
DisableInteractive.args = argsConfig;
DisableInteractive.argTypes = argTypesConfig;
