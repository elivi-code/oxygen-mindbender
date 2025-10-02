import React from 'react';
import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import Link, { type LinkProps } from '@8x8/oxygen-link';
import README from '../README.md?raw';
import CHANGELOG from '../CHANGELOG.md?raw';
import { argsConfig, argTypesConfig } from './config';
import { Container } from './Link/Container';

const example = `
----
## Example
\`\`\`javascript
import Link from '@8x8/oxygen-link';

// Inline Link (default)
<Link href="https://example.com">Inline Link</Link>

// Standalone Link
<Link href="https://example.com" standalone>Standalone Link</Link>

// Standalone Link with icon
<Link href="https://example.com" standalone icon={<SearchIcon />}>Standalone Link with Icon</Link>
\`\`\`
`;

export const LinkDocumentation = (
  args: React.JSX.IntrinsicAttributes &
    LinkProps &
    React.RefAttributes<HTMLAnchorElement>,
) => (
  <>
    <Doc markdown>{README}</Doc>
    <Doc markdown>{example}</Doc>
    <ComponentSection>
      <Container isChat={args.isChat}>
        <div style={{ display: 'grid', gap: '16px' }}>
          <Link {...args} />
        </div>
      </Container>
    </ComponentSection>
    <Doc markdown>{CHANGELOG}</Doc>
  </>
);
LinkDocumentation.storyName = 'Documentation';
LinkDocumentation.args = argsConfig;
LinkDocumentation.argTypes = argTypesConfig;

export default {
  title: 'Components/Link',
};
