import React from 'react';
import Tooltip from '@8x8/oxygen-tooltip';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

const RichContentComponent = () => (
  <div>
    <p>
      Some paragraph of text. Let&apos;s make it longer to wrap around & add{' '}
      <a href="https://oxygen.8x8.com">a link</a>
    </p>
    <ul>
      <li>A</li>
      <li>short</li>
      <li>list</li>
    </ul>
    <p>And a second paragraph with some more text</p>
  </div>
);

export const RichContent = args => (
  <>
    <Doc>
      <h1>
        <code>Tooltip</code> rich content
      </h1>
      <p>
        You can use rich content as part of the <code>Tooltip</code> content. By
        default the <code>Tooltip</code> allows interaction with its content
        (selection for copy/paste, clicking on links)
      </p>

      <p>
        Here is an example with complex content that contains different HTML
        entities. This works with both <code>showOn=&quot;hover&quot;</code>
        and <code>showOn=&quot;click&quot;</code>
      </p>
      <p>
        Additionally the Tooltip will show a scrollbar if the content
        doesn&apos;t fit.
      </p>
      <pre>
        {`
import Tooltip from '@8x8/oxygen-tooltip';

const RichContentComponent = () => (
  <div>
    <p>
      Some paragraph of text. Let&apos;s make it longer to wrap around & add{' '}
      <a href="https://oxygen.8x8.com">a link</a>
    </p>
    <ul>
      <li>A</li>
      <li>short</li>
      <li>list</li>
    </ul>
    <p>And a second paragraph with some more text</p>
  </div>
);

<Tooltip title={<RichContentComponent />}>Tooltip reference</Tooltip>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Tooltip {...args} title={<RichContentComponent />} />
    </ComponentSection>
  </>
);
RichContent.storyName = 'Rich content';
RichContent.args = argsConfig;
RichContent.argTypes = argTypesConfig;
