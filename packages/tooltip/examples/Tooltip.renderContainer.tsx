import React from 'react';
import Tooltip from '@8x8/oxygen-tooltip';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const RenderContainer = args => {
  const [renderContainer, setRenderContainer] = React.useState();
  const saveRefToState = ref => setRenderContainer(ref);

  return (
    <>
      <Doc>
        <h1>
          All <code>Tooltip</code>s are rendered through a portal
        </h1>

        <p>
          The <code>Tooltip</code> component will render the floating UI through
          a React portal inside of a <code>div#oxygen-tooltip-root</code>{' '}
          injected in the DOM under <code>document.body</code>
        </p>
        <p>All tooltips share the same root</p>
        <p>
          If you want to use a custom node instead you can provide one through
          the <code>renderContainer</code> prop. (For example if you need to
          render a particular Tooltip inside of another DOM node and not at the
          end of the document). When this is used a UUID is generated as id.
        </p>
        <p>
          For best results use a react reference, ensure to rerender the{' '}
          <code>Tooltip</code> once the reference is established. In the example
          below this is achieved by saving the ref in local state
        </p>
        <p>
          You can pass in a reference to a DOM node directly (but this
          doesn&apos;t seem to work reliably in react apps). You need to ensure
          the <code>Tooltip</code> is rendered <em>after</em> the node exists in
          the DOM
        </p>
        <pre>
          {`
import Tooltip from '@8x8/oxygen-tooltip';

const [renderContainer, setRenderContainer] = React.useState();
const saveRefToState = ref => setRenderContainer(ref);

<Tooltip
  title="Lorem ipsum dolor sit amet"
  renderContainer={renderContainer}
>
  Tooltip reference
</Tooltip>

<div ref={saveRefToState}>
  The Tooltip is injected here in the DOM, still rendered relative the the Tooltip's children
</div>

<Tooltip title="Lorem ipsum dolor sit amet">
  Tooltip reference
</Tooltip>

<div>This tooltip is rendered in the default portal location (under 'oxygen-tooltip-root')</div>
        `}
        </pre>
      </Doc>
      <ComponentSection>
        <Tooltip {...args} renderContainer={renderContainer} />
        <div ref={saveRefToState}>
          The Tooltip is injected here in the DOM, still rendered relative the
          the Tooltip&apos;s children
        </div>
      </ComponentSection>
      <ComponentSection>
        <Tooltip {...args} />
        <div>
          This tooltip is rendered in the default portal location (under
          &apos;oxygen-tooltip-root&apos;)
        </div>
      </ComponentSection>
      <Doc>
        <h2>
          <code>renderContainerId</code> prop
        </h2>

        <p>
          Alternatively you can provide an <code>id</code>. If this does not
          exist in the document it will be created and added at the end of body.
          See https://floating-ui.com/docs/FloatingPortal#id
        </p>
        <pre>
          {`
import Tooltip from '@8x8/oxygen-tooltip';

<Tooltip
  title="Lorem ipsum dolor sit amet"
  renderContainerId="tooltip-render-container-2"
/>

<div id="tooltip-render-container-2">
  The Tooltip is injected here in the DOM, still rendered relative the the Tooltip's children
</div>
        `}
        </pre>
      </Doc>
      <ComponentSection>
        <Tooltip {...args} renderContainerId="tooltip-render-container-2" />
        <div id="tooltip-render-container-2">
          The Tooltip is injected here in the DOM, still rendered relative the
          the Tooltip&apos;s children
        </div>
      </ComponentSection>
    </>
  );
};
RenderContainer.storyName = 'Prop renderContainer & renderContainerId';
RenderContainer.args = argsConfig;
RenderContainer.argTypes = argTypesConfig;
