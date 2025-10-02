import React from 'react';
import { action } from 'storybook/actions';
import TextLink from '@8x8/oxygen-text-link';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const OnClick = args => (
  <>
    <Doc>
      <h1>
        <code>TextLink</code> onClick usage
      </h1>
      <p>
        To use this as a <em>button</em> (action control instead of navigation),
        you can set the <code>onClick</code> attribute instead of using{' '}
        <code>href</code>.
      </p>
      <p>
        This has been used together with the <code>as</code> prop to render a{' '}
        <code>button</code> element. We recommend to use the actual Oxygen{' '}
        <code>Button</code> component instead.
      </p>
      <blockquote>
        ⚠️ <strong>Note</strong> the <code>onClick</code> event will not fire if
        the element has <code>isDisabled</code>
      </blockquote>
      <pre>
        {`
import TextLink from '@8x8/oxygen-text-link';

<TextLink onClick={action('onClick')}>Text Link</TextLink>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <TextLink {...args} />
    </ComponentSection>
    <Doc>
      <p>
        If both <code>href</code> and <code>onClick</code> props are set, the{' '}
        <code>onClick</code> takes precedences and <code>href</code> is ignored.
      </p>
      <pre>
        {`
import TextLink from '@8x8/oxygen-text-link';

<TextLink onClick={action('onClick')} href="https://example.com">Text Link</TextLink>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <TextLink {...args} href="https://example.com" />
    </ComponentSection>
  </>
);
OnClick.storyName = 'Custom onClick usage';
OnClick.args = {
  ...argsConfig,
  onClick: action('onClick'),
  href: undefined,
};
OnClick.argTypes = argTypesConfig;
