import React from 'react';
import { action } from 'storybook/actions';
import Avatar from '@8x8/oxygen-avatar';
import { HomeIcon, OminchannelIcon } from '@8x8/oxygen-icon';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

const CUSTOM_SIZE = 'custom';
const GoogleLogo =
  'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12"><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><path fill="%23FFC107" d="M10.903 5.02H10.5V5H6v2h2.826A2.999 2.999 0 1 1 6 3c.765 0 1.46.288 1.99.76l1.414-1.414A4.977 4.977 0 0 0 6 1a5 5 0 1 0 4.903 4.02z"/><path fill="%23FF3D00" d="M1.577 3.673l1.642 1.204A2.999 2.999 0 0 1 6 3c.765 0 1.46.288 1.99.76l1.415-1.415A4.977 4.977 0 0 0 6 1a4.997 4.997 0 0 0-4.423 2.673z"/><path fill="%234CAF50" d="M6 11a4.977 4.977 0 0 0 3.352-1.298l-1.547-1.31A2.977 2.977 0 0 1 6 9c-1.3 0-2.405-.83-2.82-1.987L1.548 8.27A4.996 4.996 0 0 0 6 11z"/><path fill="%231976D2" d="M10.903 5.02H10.5V5H6v2h2.826a3.01 3.01 0 0 1-1.022 1.393l1.548 1.309C9.242 9.802 11 8.5 11 6c0-.335-.035-.662-.097-.98z"/></g></g></svg>';

export const AvatarCustomBadge = args => (
  <>
    <Doc>
      <h1>
        <code>Avatar</code> with custom badge
      </h1>
      <p>
        The <code>Avatar</code> component allows using a custom badge instead of
        the <code>UserStatus</code> component.
      </p>
      <p>
        This is used for external contacts (where a presence value doesn&apos;t
        anyway). As an example this is used in Work to <em>tag</em> external
        imported contacts by their source (Google, Outlook etc)
      </p>
      <blockquote>
        ⚠️ <strong>Note</strong> that for these custom badges only the layout
        positioning is provided. Please ensure the dimensions & contrast are
        appropriate. Talk to your designer to provide a good image. The
        dimensions should be 20x20px (including the border)
      </blockquote>
      <pre>{`
import Avatar from '@8x8/oxygen-avatar';

const GoogleLogo =
  'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12"><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><path fill="%23FFC107" d="M10.903 5.02H10.5V5H6v2h2.826A2.999 2.999 0 1 1 6 3c.765 0 1.46.288 1.99.76l1.414-1.414A4.977 4.977 0 0 0 6 1a5 5 0 1 0 4.903 4.02z"/><path fill="%23FF3D00" d="M1.577 3.673l1.642 1.204A2.999 2.999 0 0 1 6 3c.765 0 1.46.288 1.99.76l1.415-1.415A4.977 4.977 0 0 0 6 1a4.997 4.997 0 0 0-4.423 2.673z"/><path fill="%234CAF50" d="M6 11a4.977 4.977 0 0 0 3.352-1.298l-1.547-1.31A2.977 2.977 0 0 1 6 9c-1.3 0-2.405-.83-2.82-1.987L1.548 8.27A4.996 4.996 0 0 0 6 11z"/><path fill="%231976D2" d="M10.903 5.02H10.5V5H6v2h2.826a3.01 3.01 0 0 1-1.022 1.393l1.548 1.309C9.242 9.802 11 8.5 11 6c0-.335-.035-.662-.097-.98z"/></g></g></svg>';

<Avatar
  name="John Doe"
  userStatus={
    <img src={GoogleLogo} width="20" height="20" alt="Google Logo" />
  }
/>
        `}</pre>
    </Doc>
    <ComponentSection>
      <Avatar
        {...args}
        onClick={args.onClick ? action('onClick') : undefined}
        size={args.size === CUSTOM_SIZE ? args.customSize : args.size}
        userStatus={
          <img src={GoogleLogo} width="20" height="20" alt="google logo" />
        }
      />
    </ComponentSection>
    <Doc>
      <h2>An example with an SVG custom badge</h2>
      <p>
        Ensure CSS rules don&apos;t mess with SVG badges (see{' '}
        <a href="https://agile.8x8.com/browse/OX-1108">OX-1108</a>). In this
        example the red color should be preserved on the badge SVG, but the main
        content SVG should still be colored appropriately based on the theme
      </p>
      <pre>{`
import Avatar from '@8x8/oxygen-avatar';
import { OutlookIcon } from '@8x8/oxygen-icon';

<Avatar
  userStatus={<HomeIcon color="red" />}
>
  <OminchannelIcon />
</Avatar>
        `}</pre>
    </Doc>
    <ComponentSection>
      <Avatar
        {...args}
        onClick={args.onClick ? action('onClick') : undefined}
        size={args.size === CUSTOM_SIZE ? args.customSize : args.size}
        userStatus={<HomeIcon color="red" />}
      >
        <OminchannelIcon />
      </Avatar>
    </ComponentSection>
  </>
);

AvatarCustomBadge.args = argsConfig;
AvatarCustomBadge.argTypes = argTypesConfig;
AvatarCustomBadge.storyName = 'Avatar with custom badge';
