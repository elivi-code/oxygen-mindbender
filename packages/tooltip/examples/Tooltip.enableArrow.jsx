import React from 'react';
import Tooltip from '@8x8/oxygen-tooltip';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const EnableArrow = args => (
  <>
    <Doc>
      <h1>
        <code>Tooltip</code> enableArrow
      </h1>
      <p>
        By default the <code>Tooltip</code> will render with an arrow. The
        Classic theme does not render an by default. The arrow can be disabled
        with <code>enableArrow={false}</code>
      </p>
      <p>
        Here&apos;s the basic rendering (switch the theme to see it in effect)
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
      <p>You can override the default behaviour to force the arrow.</p>
      <blockquote>
        ⚠️ <strong>Note</strong> that the Classic theme does not provide proper
        rules for an arrow, it should not be enabled for it
      </blockquote>
      <pre>
        {`
import Tooltip from '@8x8/oxygen-tooltip';

<Tooltip title="Lorem ipsum dolor sit amet" enableArrow>
  Tooltip reference
</Tooltip>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Tooltip {...args} enableArrow />
    </ComponentSection>
    <Doc>
      <p>Or you can disable the arrow (this is also not really recommended)</p>
      <pre>
        {`
import Tooltip from '@8x8/oxygen-tooltip';

<Tooltip title="Lorem ipsum dolor sit amet" enableArrow={false}>
  Tooltip reference
</Tooltip>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Tooltip {...args} enableArrow={false} />
    </ComponentSection>
  </>
);
EnableArrow.storyName = 'Prop enableArrow';
EnableArrow.args = argsConfig;
EnableArrow.argTypes = argTypesConfig;
