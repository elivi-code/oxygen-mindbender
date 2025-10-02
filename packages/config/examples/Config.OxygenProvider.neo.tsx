import React from 'react';
import LinkTo from '@storybook/addon-links/react';

import { Doc } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const ConfigOxygenProviderNeo = () => (
  <Doc>
    <h1>
      <code>OxygenProvider Neo theme (8x8 Rebrand)</code>
    </h1>
    <p>
      We are aiming to fully transition all 8x8 apps to the new theme codenamed
      &quot;Neo&quot;.
    </p>
    <p>
      Therefore to allow a quick and seamless transition this UI update will
      replace the existing &quot;light&quot; and &quot;dark&quot; themes
    </p>
    <blockquote>
      ⚠️ <strong>Note</strong> we expect minimal disruption to your app. Any
      projects using <code>OxygenProvider</code> and using the provided{' '}
      <code>theme</code> object should expect <strong>no</strong> to{' '}
      <em>minimal</em> adjustments
    </blockquote>
    <h2>First phase</h2>
    <p>
      Enabling &quot;Neo&quot; is opt-in, we want gradual adoption among
      products (even if it&apos;s against an accelerated timeline)
    </p>
    <p>
      To enable &quot;Neo&quot; use the <code>enableNeo</code> prop on{' '}
      <code>OxygenProvider</code>. If you don&apos;t use{' '}
      <code>OxygenProvider</code> yet you <em>must</em> adopt it to use the new
      theme. Please follow the direction from the{' '}
      <LinkTo kind="components-config-examples--config-oxygen-provider">
        base OxygenProvider page
      </LinkTo>{' '}
      for instructions. It should be quick and painless (major 8x8 products
      managed the transition easily). Reach out on the &quot;8x8 - Oxygen
      TECHNICAL&quot; room for any questions
    </p>
    <pre>{`
import { OxygenProvider } from '@8x8/oxygen-config';

<OxygenProvider enableNeo>
  <App>
    I am receiving an updated theme object for the 8x8 rebrand
  </App>
</OxygenProvider>
        `}</pre>
    <blockquote>
      ⚠️ <strong>Note</strong> with <code>enableNeo</code> you no longer have
      access to the &quot;Classic&quot; theme. Both{' '}
      <code>themeName=&quot;light&quot;</code> and{' '}
      <code>themeName=&quot;classic&quot;</code> will render the same. They will
      render the regular <code>light</code> theme with the <code>neo</code>{' '}
      tokens
    </blockquote>
    <h2>Testing in Storybook</h2>
    <p>
      You can enable Neo in Storybook via the new &quot;Neo 8x8 Rebrand&quot;
      button in the top toolbar.
    </p>
    <h2>Second Phase</h2>
    <p>
      Once adopted in a future Oxygen version <code>enableNeo</code> will become
      the default. Everyone will start using the updated tokens and the new look
      and fell will completely replace the current <code>light</code> and{' '}
      <code>dark</code> themes. There is no timeline set for this yet, but
      it&apos;s likely going to be in 2025. When this happens your project will
      move forward whether you are ready or not.
    </p>
    <h2>Neo themes as JSON (Mobile)</h2>
    <p>
      For mobile (and maybe other external use-cases) we provide an update light
      & dark version of the theme as JSON:
      <ul>
        <li>
          <a href="neoLight.json">neoLight.json</a>
        </li>
        <li>
          <a href="neoDark.json.">neoDark.json</a>
        </li>
      </ul>
    </p>
  </Doc>
);
ConfigOxygenProviderNeo.args = argsConfig;
ConfigOxygenProviderNeo.argTypes = argTypesConfig;
ConfigOxygenProviderNeo.storyName = 'OxygenProvider Neo theme (8x8 Rebrand)';
