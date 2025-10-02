import React, { useState } from 'react';
import { action } from 'storybook/actions';
import Button from '@8x8/oxygen-button';
import DropdownButton from '@8x8/oxygen-dropdown-button';

import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

const stableOnClose = action('stable onClosed');

export const DropdownButtonOnCloseIssue = args => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Doc>
        <h1>
          OX-1412 <code>DropdownButton</code> onOpen/onClose firing on rerenders
        </h1>
        <p>
          Test case. Clicking on the button will increment a counter in the
          parent component which will trigger a rerender of the DropdownButton
          component.
        </p>
      </Doc>
      <ComponentSection>
        <Button onClick={() => setCounter(count => count + 1)}>
          Increase Counter
        </Button>
      </ComponentSection>
      <ComponentSection>
        <p>DropdownButton with stable onClose</p>
        <DropdownButton
          {...args}
          buttonText={counter}
          onClose={stableOnClose}
        />
      </ComponentSection>
      <ComponentSection>
        <p>DropdownButton with unstable onClose</p>
        <DropdownButton
          {...args}
          buttonText={counter}
          onClose={action('unstable onClosed')}
        />
      </ComponentSection>
    </>
  );
};

DropdownButtonOnCloseIssue.storyName = 'onClose firing on rerender OX-1412';
DropdownButtonOnCloseIssue.args = argsConfig;
DropdownButtonOnCloseIssue.argTypes = argTypesConfig;
