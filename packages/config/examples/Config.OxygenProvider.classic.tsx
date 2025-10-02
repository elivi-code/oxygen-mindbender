import React from 'react';
import { OxygenProvider } from '@8x8/oxygen-config';
import { classicTheme } from '@8x8/oxygen-constants';
import Avatar from '@8x8/oxygen-avatar';
import Button from '@8x8/oxygen-button';
import DropdownButton from '@8x8/oxygen-dropdown-button';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const ConfigOxygenProviderClassic = () => (
  <>
    <Doc>
      <h1>
        <code>OxygenProvider Classic theme</code>
      </h1>
      <p>
        For legacy apps, the Classic theme can still be enabled through
        OxygenProvider
      </p>
      <pre>{`
import { OxygenProvider } from '@8x8/oxygen-config';
import { classicTheme } from '@8x8/oxygen-constants';

<OxygenProvider globalComponentsOverride={classicTheme}>
  <p>Classic theme</p>
  <Avatar />
  <Button>Click me</Button>
  <DropdownButton buttonText="Example Button" />
</OxygenProvider>
        `}</pre>
    </Doc>
    <ComponentSection
      style={{ display: 'flex', gap: '20px', justifyContent: 'space-around' }}
    >
      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <OxygenProvider>
          <p>Default theme</p>
          <Avatar />
          <Button>Click me</Button>
          <DropdownButton buttonText="Example Button" />
        </OxygenProvider>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <OxygenProvider globalComponentsOverride={classicTheme}>
          <p>Classic theme</p>
          <Avatar />
          <Button>Click me</Button>
          <DropdownButton buttonText="Example Button" />
        </OxygenProvider>
      </div>
    </ComponentSection>
  </>
);
ConfigOxygenProviderClassic.args = argsConfig;
ConfigOxygenProviderClassic.argTypes = argTypesConfig;
ConfigOxygenProviderClassic.storyName = 'OxygenProvider Classic theme';
