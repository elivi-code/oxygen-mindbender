import React from 'react';
import { action } from 'storybook/actions';

import Avatar, { AvatarSize, AvatarStack } from '@8x8/oxygen-avatar';
import { SearchIcon } from '@8x8/oxygen-icon';
import { avatarUserStatus } from '@8x8/oxygen-constants';
import {
  avatarUrl,
  Label,
  Section,
  Headline,
  ComponentSection,
} from '@8x8/oxygen-storybook-utils';

const avatarOnClick = action('onClick');

// Helper constants
const sizes: (AvatarSize | number)[] = [
  '3xsmall',
  '2xsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  '2xlarge',
  '3xlarge',
  60,
];

export default {
  title: 'Components/Avatar',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => (
  <>
    <Section>
      <Headline>Avatar - Types</Headline>
      <ComponentSection>
        <div>
          <Label>Avatar with image</Label>
          <Avatar size="2xlarge" src={avatarUrl} name="John Doe avatar" />
        </div>
        <div>
          <Label>Avatar with initials</Label>
          <Avatar
            size="2xlarge"
            name="John Doe"
            aria-label="Avatar John Doe Avatar with initials"
          />
        </div>
        <div>
          <Label>Avatar with onClick function</Label>
          <Avatar
            size="2xlarge"
            name="John Doe"
            onClick={avatarOnClick}
            aria-label="Avatar John Doe with onClick function"
          />
        </div>
        <div>
          <Label>Avatar with person placeholder</Label>
          <Avatar size="2xlarge" aria-label="Person Avatar" />
        </div>
        <div>
          <Label>Avatar with group placeholder</Label>
          <Avatar size="2xlarge" isGroup aria-label="Group Avatar" />
        </div>
        <div>
          <Label>Avatar with edit overlay</Label>
          <Avatar
            showEditOverlay
            src={avatarUrl}
            size="2xlarge"
            onEdit={action('onEdit')}
            aria-label="Avatar John Doe with edit overlay"
          />
        </div>
        <div>
          <Label>Avatar with user status</Label>
          <Avatar
            userStatus="available"
            src={avatarUrl}
            size="2xlarge"
            aria-label="Avatar John Doe, available"
          />
        </div>
        <div>
          <Label>Avatar with isActive</Label>
          <Avatar
            userStatus="available"
            src={avatarUrl}
            size="2xlarge"
            isActive
          />
        </div>
        <div>
          <Label>Avatar with custom content</Label>
          <Avatar size="2xlarge">
            <SearchIcon size={44} />
          </Avatar>
        </div>
      </ComponentSection>
    </Section>
    <Section>
      <Headline>Avatar Presence Status Border</Headline>
      <ComponentSection>
        {Object.values(avatarUserStatus).map(status => (
          <div key={status}>
            <Label>{status}</Label>
            <Avatar
              src={avatarUrl}
              name={`John Doe Avatar, ${status}`}
              userStatus={status}
              hasStatusBorder
              size="large"
              onClick={avatarOnClick}
            />
          </div>
        ))}
      </ComponentSection>
    </Section>
    <Section>
      <Headline>Avatar Sizes</Headline>
      <ComponentSection>
        {sizes.map(size => (
          <div key={size}>
            <Label>{size}</Label>
            <Avatar src={avatarUrl} size={size} />
          </div>
        ))}
      </ComponentSection>
      <ComponentSection>
        {sizes.map(size => (
          <div key={size}>
            <Label>{size}</Label>
            <Avatar src={avatarUrl} userStatus="away" size={size} />
          </div>
        ))}
      </ComponentSection>
      <ComponentSection>
        {sizes.map(size => (
          <div key={size}>
            <Label>{size}</Label>
            <Avatar name="John Doe" size={size} hasStatusBorder />
          </div>
        ))}
      </ComponentSection>
      <ComponentSection>
        {sizes.map(size => (
          <div key={size}>
            <Label>{size}</Label>
            <Avatar name="John Doe" userStatus="onCall" size={size} />
          </div>
        ))}
      </ComponentSection>
      <ComponentSection>
        {sizes.map(size => (
          <div key={size}>
            <Label>{size}</Label>
            <Avatar size={size} />
          </div>
        ))}
      </ComponentSection>
      <ComponentSection>
        {sizes.map(size => (
          <div key={size}>
            <Label>{size}</Label>
            <Avatar size={size} isGroup />
          </div>
        ))}
      </ComponentSection>
    </Section>
    <Section>
      <Headline>Avatar Stack</Headline>
      <ComponentSection>
        <Label>Default values</Label>
        <AvatarStack>
          <Avatar name="John Doe" />
          <Avatar />
          <Avatar src={avatarUrl} />
          <Avatar name="John Doe" />
          <Avatar name="John Doe" />
          <Avatar name="John Doe" />
          <Avatar name="John Doe" />
          <Avatar name="John Doe" />
        </AvatarStack>
      </ComponentSection>
      <ComponentSection>
        <Label>
          Interactible (has onClick prop which also adds hover and focus states)
        </Label>
        <AvatarStack onClick={() => {}}>
          <Avatar name="John Doe" isGroup />
          <Avatar name="John Doe" />
          <Avatar src={avatarUrl} />
          <Avatar />
          <Avatar name="John Doe" />
        </AvatarStack>
      </ComponentSection>
      <ComponentSection>
        <Label>One</Label>
        <AvatarStack>
          <Avatar name="John Doe" />
        </AvatarStack>
      </ComponentSection>
      <ComponentSection>
        <Label>Two</Label>
        <AvatarStack>
          <Avatar name="John Doe" />
          <Avatar src={avatarUrl} />
        </AvatarStack>
      </ComponentSection>
      <ComponentSection>
        <Label>Three</Label>
        <AvatarStack>
          <Avatar name="John Doe" />
          <Avatar src={avatarUrl} />
          <Avatar />
        </AvatarStack>
      </ComponentSection>
      <ComponentSection>
        <Label>Four</Label>
        <AvatarStack>
          <Avatar name="R B" />
          <Avatar src={avatarUrl} />
          <Avatar />
          <Avatar src={avatarUrl} />
        </AvatarStack>
      </ComponentSection>
      <ComponentSection>
        <Label>Ignore non-avatar children</Label>
        <AvatarStack>
          <Avatar name="John Doe" />
          <Avatar src={avatarUrl} />
          <Avatar />
          <Avatar src={avatarUrl} />
          Other elements are ignored
          <Avatar name="John Doe" />
        </AvatarStack>
      </ComponentSection>
      <ComponentSection>
        <Label>
          Use data struture instead of children — use Avatar props for the data
        </Label>
        <AvatarStack
          onClick={() => {}}
          avatars={[
            { name: 'John Doe' },
            { name: 'John Doe', src: avatarUrl },
            { isGroup: true },
            { name: 'John Doe' },
            { name: 'John Doe' },
            { name: 'John Doe' },
            { name: 'John Doe' },
            { name: 'John Doe' },
            { name: 'John Doe' },
          ]}
        />
      </ComponentSection>
      <ComponentSection>
        <Label>2 digits extra items</Label>
        <AvatarStack
          onClick={() => {}}
          avatars={Array(40).fill({ name: 'John Doe' })}
        />
      </ComponentSection>
      <ComponentSection>
        <Label>Max shown will be 99+ if over 100 extra items are passed</Label>
        <AvatarStack
          onClick={() => {}}
          avatars={Array(105).fill({ name: 'John Doe' })}
        />
      </ComponentSection>
    </Section>
  </>
);

Guidelines.storyName = '01. Guidelines';
