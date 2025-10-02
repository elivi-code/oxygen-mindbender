import React from 'react';
import Avatar from '@8x8/oxygen-avatar';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { argsConfig, argTypesConfig } from './config';

const CUSTOM_SIZE = 'custom';

export const AvatarFlexContainer = args => (
  <>
    <Doc>
      <h1>
        <code>Avatar</code> has a flex parent container test scenario
      </h1>
      <p>
        Test scenario when other flex siblings might try to shrink the{' '}
        <code>Avatar</code> component.
      </p>
      <p>
        Default size is 48px but we only allow is 20px as per the flex container
        and other siblings. <code>min-width</code> & <code>min-height</code>{' '}
        solves these issues.
      </p>
      <pre>{`
import Avatar from '@8x8/oxygen-avatar';

<div style={{ display: 'flex', width: '100px' }}>
  <Avatar />
  <div style={{ width: '80px' }}>flex-child-2</div>
</div>

<div style={{ display: 'flex', flexDirection: 'column', height: '100px' }}>
  <Avatar />
  <div style={{ height: '80px' }}>flex-child-2</div>
</div>
        `}</pre>
    </Doc>
    <ComponentSection>
      <div style={{ display: 'flex', width: '100px' }}>
        <Avatar
          {...args}
          size={args.size === CUSTOM_SIZE ? args.customSize : args.size}
        />
        <div style={{ width: '80px' }}>flex-child-2</div>
      </div>

      <div
        style={{ display: 'flex', flexDirection: 'column', height: '100px' }}
      >
        <Avatar
          {...args}
          size={args.size === CUSTOM_SIZE ? args.customSize : args.size}
        />
        <div style={{ height: '80px' }}>flex-child-2</div>
      </div>
    </ComponentSection>
  </>
);
AvatarFlexContainer.args = argsConfig;
AvatarFlexContainer.argTypes = argTypesConfig;
AvatarFlexContainer.storyName = 'Avatar in flex container';
