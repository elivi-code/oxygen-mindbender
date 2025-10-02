import React from 'react';
import {
  Logo8x8,
  Action,
  Error,
  NoData,
  NoEvents,
  NoResults,
  Subscribe,
  Target,
} from '@8x8/oxygen-graphics';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

export const Examples = args => (
  <>
    <Doc>
      <h1>New Neo Illustrations</h1>
      <blockquote>
        ⚠️ <strong>Note</strong> all new illustrations mentioned below require{' '}
        <code>OxygenProvider</code>
      </blockquote>
      <pre>{`
import {
  Logo8x8,
  Action,
  Error,
  NoData,
  NoEvents,
  NoResults,
  Subscribe,
  Target,
} from '@8x8/oxygen-graphics';

<Logo8x8 />
<Action />
<Error />
<NoData />
<NoEvents />
<NoResults />
<Subscribe />
<Target />
        `}</pre>

      <h2>
        <code>Logo8x8</code>
      </h2>
      <p>
        Update for Neo from red background to dark / light version (depending on
        active theme)
      </p>
    </Doc>
    <ComponentSection>
      <Logo8x8 {...args} />
    </ComponentSection>
    <Doc>
      <h2>
        <code>Action</code>
      </h2>
    </Doc>
    <ComponentSection>
      <Action {...args} />
    </ComponentSection>
    <Doc>
      <h2>
        <code>Error</code>
      </h2>
    </Doc>
    <ComponentSection>
      <Error {...args} />
    </ComponentSection>
    <Doc>
      <h2>
        <code>NoData</code>
      </h2>
    </Doc>
    <ComponentSection>
      <NoData {...args} />
    </ComponentSection>
    <Doc>
      <h2>
        <code>NoEvents</code>
      </h2>
    </Doc>
    <ComponentSection>
      <NoEvents {...args} />
    </ComponentSection>
    <Doc>
      <h2>
        <code>NoResults</code>
      </h2>
    </Doc>
    <ComponentSection>
      <NoResults {...args} />
    </ComponentSection>
    <Doc>
      <h2>
        <code>Subscribe</code>
      </h2>
    </Doc>
    <ComponentSection>
      <Subscribe {...args} />
    </ComponentSection>
    <Doc>
      <h2>
        <code>Target</code>
      </h2>
    </Doc>
    <ComponentSection>
      <Target {...args} />
    </ComponentSection>
  </>
);
Examples.args = {
  background: undefined,
};
Examples.argTypes = {
  background: {
    control: {
      type: 'color',
    },
    description:
      'The following components support a `background` prop: `Clock`, `Ghostly`, `IncomingCall`, `WorkingDesk`.',
    table: {
      category: 'Props',
      type: {
        summary: '"string"',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
};
Examples.storyName = 'Examples';

export default {
  title: 'Components/Graphics/Examples',
};
