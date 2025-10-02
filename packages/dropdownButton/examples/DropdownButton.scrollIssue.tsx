import React from 'react';
import DropdownButton from '@8x8/oxygen-dropdown-button';
import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const ScrollIssue = args => {
  return (
    <>
      <Doc>
        <h1>Example page to test scroll issue</h1>
        <p>
          Issue with scrollable container which contains css{' '}
          <code>will-change: transform;</code>. See{' '}
          <a href="https://agile.8x8.com/browse/OX-745">OX-745</a>
        </p>
        <p>
          Without the fix (with local rendering) the floating elements position
          is incorrect and it scrolls in the opposite direction of the
          scrollable area scroll. Toggle <code>renderInPortal</code> to see the
          difference.
        </p>
      </Doc>
      <ComponentSection>
        <div
          style={{
            height: '1000px',
            willChange: 'transform',
          }}
        >
          <DropdownButton {...args} />
        </div>
      </ComponentSection>
    </>
  );
};
ScrollIssue.args = {
  renderInPortal: true,
  ...argsConfig,
};
ScrollIssue.argTypes = argTypesConfig;
ScrollIssue.displayName = 'ScrollIssue';
ScrollIssue.storyName = 'Scroll Issue';
