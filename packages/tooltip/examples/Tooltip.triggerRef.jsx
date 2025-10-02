import React from 'react';
import Button from '@8x8/oxygen-button';
import Tooltip from '@8x8/oxygen-tooltip';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const TriggerRef = args => {
  const [externalTrigger, setExternalTrigger] = React.useState();
  const saveRefToState = ref => setExternalTrigger(ref);

  return (
    <>
      <Doc>
        <h1>
          <code>Tooltip</code> with a trigger other than children
        </h1>
        <p>
          Instead of using the <code>children</code> as a trigger reference you
          can provide a different element to act as trigger. This can be helpful
          when you don&apos;t want to wrap the trigger in a <code>Tooltip</code>
        </p>
        <p>
          This example uses a custom <code>triggerRef</code> (custom target).
          The Tooltip does not have children, instead it references another
          element as target. If it has children they will be rendered, but
          ignored as a target. In this example the wrapper is also disabled via{' '}
          <code>includeWrapper={false}</code> so nothing is actually rendered
          where the Tooltip is defined
        </p>
        <pre>
          {`
import Tooltip from '@8x8/oxygen-tooltip';

const Component = () => {
  const [externalTrigger, setExternalTrigger] = React.useState();
  const saveRefToState = ref => setExternalTrigger(ref);
  return (
    <Tooltip triggerRef={externalTrigger} includeWrapper={false} />
    <Button ref={saveRefToState}>triggerRef</Button>
  )
};
        `}
        </pre>
      </Doc>
      <ComponentSection>
        <Tooltip {...args} triggerRef={externalTrigger} includeWrapper={false}>
          {undefined}
        </Tooltip>
        <Button ref={saveRefToState}>triggerRef</Button>
      </ComponentSection>
    </>
  );
};
TriggerRef.storyName = 'Prop triggerRef';
TriggerRef.args = argsConfig;
TriggerRef.argTypes = argTypesConfig;
