import React from 'react';
import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import Link, { type LinkProps } from '@8x8/oxygen-link';
import { Container } from './Container';
import { argsConfig, argTypesConfig } from '../config';

export const StandaloneLink = (
  args: LinkProps & { onClickEnabled: boolean },
) => {
  if (!args.onClickEnabled) {
    delete args.onClick;
  } else {
    delete args.href;
  }

  return (
    <>
      <Doc>
        <h1>Standalone Link</h1>
        <p>
          A standalone link that can include an icon and be customized with size
          and chat context styling. All props can be adjusted in the Controls
          panel below.
        </p>
        <h2>Usage</h2>
        <h3>Import</h3>
        <pre>{`import Link from '@8x8/oxygen-link';`}</pre>
        <h3>Basic Usage</h3>
        <pre>
          {`
  // Standalone Link (default small size, no icon)
  <Link href="https://example.com" standalone>Click me</Link>
  
  // Standalone Link with icon
  <Link href="https://example.com" standalone icon={<SearchIcon />}>Click me</Link>
  
  // Explicit Small Standalone Link
  <Link href="https://example.com" standalone size="small">Click me</Link>
  
  // Large Standalone Link
  <Link href="https://example.com" standalone size="large">Click me</Link>
  
  // Link in chat context
  <Link href="https://example.com" standalone isChat>Click me</Link>`}
        </pre>
        <h3>Playground</h3>
      </Doc>
      <ComponentSection>
        <Container isChat={args.isChat}>
          <Link {...args} />
        </Container>
      </ComponentSection>
    </>
  );
};

StandaloneLink.storyName = 'Standalone Link';
StandaloneLink.args = {
  ...argsConfig,
  children: 'Standalone Link',
  standalone: true,
};

StandaloneLink.argTypes = {
  ...argTypesConfig,
};
