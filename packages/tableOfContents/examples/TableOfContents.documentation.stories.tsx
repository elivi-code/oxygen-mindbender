import React from 'react';
import { StoryFn } from '@storybook/react';

import { Doc } from '@8x8/oxygen-storybook-utils';

import README from '../README.md?raw';
import CHANGELOG from '../CHANGELOG.md?raw';

const exampleTableOfContents = `
## Example \`Table of Contents\`
\`\`\`javascript
import { Item, TableOfContents } from '@8x8/oxygen-table-of-contents';

<TableOfContents>
  <Item onClick={() => console.log('clicked first')} isActive={false}>
    First item on TOC
  </Item>
</TableOfContents>
\`\`\`
`;

interface Props {}

export const TableOfContentsDocs: StoryFn<Props> = () => {
  return (
    <>
      <Doc markdown>{README}</Doc>
      <br />
      <Doc markdown>{exampleTableOfContents}</Doc>
      <br />
      <Doc markdown>{CHANGELOG}</Doc>
    </>
  );
};
TableOfContentsDocs.storyName = 'Documentation';

export default {
  title: 'Components/TableOfContents [alpha]',
};
