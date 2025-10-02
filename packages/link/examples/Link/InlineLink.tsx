import React from 'react';
import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import Link, { type LinkProps } from '@8x8/oxygen-link';
import { Container } from './Container';
import { argsConfig, argTypesConfig } from '../config';

export const InlineLink = (args: LinkProps & { onClickEnabled: boolean }) => {
  if (!args.onClickEnabled) {
    delete args.onClick;
  } else {
    delete args.href;
  }

  return (
    <>
      <Doc>
        <h1>Inline Link</h1>
        <p>
          A basic inline link designed to be used within text content and chat
          context. Props can be adjusted in the Controls panel below.
        </p>
        <h2>Usage</h2>
        <h3>Import</h3>
        <pre>{`import Link from '@8x8/oxygen-link';`}</pre>
        <h3>Basic Usage</h3>
        <pre>
          {`// Regular paragraph text
<p>
  Visit our <Link href="https://example.com">documentation</Link> to learn more about our services.
</p>

// Large heading context
<h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>
  Welcome to our <Link href="https://example.com/platform">platform</Link>
</h1>

// Small text context
<p style={{ fontSize: '12px' }}>
  By continuing, you agree to our <Link href="https://example.com/terms">Terms of Service</Link> 
  and <Link href="https://example.com/privacy">Privacy Policy</Link>.
</p>

// Custom font style
<div style={{ fontFamily: 'monospace', fontSize: '14px' }}>
  Access your <Link href="https://example.com/account">account settings</Link> to manage preferences.
</div>

// Chat message context
<div className="chat-message" style={{ fontStyle: 'italic' }}>
  Check the <Link href="https://example.com/faq" isChat>FAQ section</Link> for common questions.
</div>

// Bold context
<p style={{ fontWeight: 'bold' }}>
  Important: Review the <Link href="https://example.com/guidelines">guidelines</Link> before proceeding.
</p>`}
        </pre>
        <h3>Playground</h3>
      </Doc>
      <ComponentSection>
        <Container isChat={args.isChat}>
          {/* Regular text */}
          <p>
            Visit our <Link {...args} /> to learn more about our services.
          </p>

          {/* Large heading */}
          <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>
            Welcome to our <Link {...args} />
          </h1>

          {/* Small text */}
          <p style={{ fontSize: '12px' }}>
            By continuing, you agree to our <Link {...args} />
          </p>

          {/* Custom font */}
          <div style={{ fontFamily: 'monospace', fontSize: '14px' }}>
            Access your <Link {...args} /> to manage preferences
          </div>

          {/* Chat context */}
          <div style={{ fontStyle: 'italic' }}>
            Check the <Link {...args} /> for common questions
          </div>

          {/* Bold context */}
          <p style={{ fontWeight: 'bold' }}>
            Important: Review the <Link {...args} /> before proceeding
          </p>
        </Container>
      </ComponentSection>
    </>
  );
};

InlineLink.storyName = 'Inline Link';
InlineLink.args = {
  ...argsConfig,
  children: 'Inline Link',
};

InlineLink.argTypes = {
  ...argTypesConfig,
};
