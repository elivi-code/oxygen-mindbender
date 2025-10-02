import React, { useRef } from 'react';
import { action } from 'storybook/actions';
import Avatar from '@8x8/oxygen-avatar';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

const CUSTOM_SIZE = 'custom';

export const AvatarRef = args => {
  const myRef = useRef<HTMLImageElement>(null);

  const setFocus = () => {
    if (myRef.current) {
      myRef.current.focus();
    }
  };

  return (
    <>
      <Doc>
        <h1>
          <code>Avatar</code> ref forwarding
        </h1>
        <p>
          For Work to allow <code>Avatar</code> to be focusable programatically
          while the component is not part of the Tabbing list
        </p>
        <pre>{`
  import Avatar from '@8x8/oxygen-avatar';

  const myRef = useRef(null);

  <Avatar
    tabIndex={-1}
    ref={myRef}
  >
  </Avatar>
          `}</pre>
      </Doc>
      <ComponentSection>
        <Avatar
          {...args}
          onClick={args.onClick ? action('onClick') : undefined}
          size={args.size === CUSTOM_SIZE ? args.customSize : args.size}
          tabIndex={-1}
          ref={myRef}
        />
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div onClick={() => setFocus()} onKeyUp={() => setFocus()}>
          click to focus on the Avatar
        </div>
      </ComponentSection>
    </>
  );
};

AvatarRef.args = argsConfig;
AvatarRef.argTypes = argTypesConfig;
AvatarRef.storyName = 'Avatar ref forwarding';
