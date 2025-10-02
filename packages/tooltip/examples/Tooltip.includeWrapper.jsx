import React from 'react';
import Button from '@8x8/oxygen-button';
import Tooltip from '@8x8/oxygen-tooltip';
import { AudiowaveIcon } from '@8x8/oxygen-icon';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const IncludeWrapper = args => (
  <>
    <Doc>
      <h1>
        <code>Tooltip</code> includeWrapper prop
      </h1>
      <p>
        By default the <code>Tooltip</code> will add a wrapper element (
        <code>div</code>) around its children (trigger reference) and will
        attach event listeners to this wrapper
      </p>

      <h2>Example with default wrapper</h2>
      <p>
        This is the default value, you don&apos;t need to supply the{' '}
        <code>includeWrapper</code> prop
      </p>
      <pre>
        {`
import Tooltip from '@8x8/oxygen-tooltip';

<Tooltip title="Lorem ipsum dolor sit amet">
  Tooltip reference
</Tooltip>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Tooltip {...args} />
    </ComponentSection>
    <Doc>
      <h2>
        <code>Tooltip</code> without any wrapper
      </h2>
      <p>
        You can disable this by passing{' '}
        <code>includeWrapper=&#123;false&#125;</code>
      </p>
      <pre>
        {`
import Tooltip from '@8x8/oxygen-tooltip';

<Tooltip title="Lorem ipsum dolor sit amet" includeWrapper={false}>
  <Button>No extra DOM nodes</Button>
</Tooltip>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Tooltip {...args} includeWrapper={false}>
        <Button>No extra DOM nodes</Button>
      </Tooltip>
    </ComponentSection>
    <Doc>
      <h3>
        Another example (and test) for rendering an SVG without any wrappers
      </h3>
      <pre>
        {`
import Tooltip from '@8x8/oxygen-tooltip';
import { AudiowaveIcon } from '@8x8/oxygen-icon';

<Tooltip
  title="Lorem ipsum dolor sit amet"
  includeWrapper={false}
>
  <AudiowaveIcon />
</Tooltip>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Tooltip {...args} includeWrapper={false}>
        <AudiowaveIcon />
      </Tooltip>
    </ComponentSection>
    <Doc>
      <h3>No wrapper & multiple children as direct children</h3>
      <p>
        Should not be used like this, but should not throw. Only the first child
        will act as target.
      </p>
      <pre>
        {`
import Tooltip from '@8x8/oxygen-tooltip';

<Tooltip
  title="Lorem ipsum dolor sit amet"
  includeWrapper={false}
>
  <div>Child 1</div>
  <div>Child 2</div>
</Tooltip>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Tooltip {...args} includeWrapper={false}>
        <div>Child 1</div>
        <div>Child 2</div>
      </Tooltip>
    </ComponentSection>
    <Doc>
      <p>
        If you don&apos;t use a wrapper (
        <code>includeWrapper=&#123;false&#125;</code>), and have direct text
        children, the tooltip will not work
      </p>
      <blockquote>
        ⚠️ <strong>Note</strong> this will not work if you only provide text as
        children as there is no node to attach events to. You{' '}
        <strong>have</strong> to provide a component.
      </blockquote>
      <pre>
        {`
import Tooltip from '@8x8/oxygen-tooltip';

<Tooltip
  title="Lorem ipsum dolor sit amet"
  includeWrapper={false}
>
  Tooltip reference
</Tooltip>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Tooltip {...args} includeWrapper={false} />
    </ComponentSection>
    <Doc>
      <p>
        Wrap the text in any Element to have it work (or enable{' '}
        <code>includeWrapper</code>)
      </p>
      <pre>
        {`
import Tooltip from '@8x8/oxygen-tooltip';

<Tooltip
  title="Lorem ipsum dolor sit amet"
  includeWrapper={false}
>
  <div>Text in a div</div>
</Tooltip>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Tooltip {...args} includeWrapper={false}>
        <div>Text in a div</div>
      </Tooltip>
    </ComponentSection>
  </>
);
IncludeWrapper.storyName = 'Prop includeWrapper';
IncludeWrapper.args = argsConfig;
IncludeWrapper.argTypes = argTypesConfig;
