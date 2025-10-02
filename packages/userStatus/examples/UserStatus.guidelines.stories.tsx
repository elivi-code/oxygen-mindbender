import React from 'react';

import UserStatus from '@8x8/oxygen-user-status';

import {
  Label,
  Section,
  Headline,
  ComponentSection,
} from '@8x8/oxygen-storybook-utils';

export default {
  title: 'Components/UserStatus',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => (
  <>
    <Section>
      <Headline>User Status - Guidelines</Headline>
      <ComponentSection>
        <div>
          <Label>Status: available</Label>
          <UserStatus aria-label="available" role="img" />
        </div>
        <div>
          <Label>Status: away</Label>
          <UserStatus status="away" aria-label="away" role="img" />
        </div>
        <div>
          <Label>Status: busy</Label>
          <UserStatus status="busy" />
        </div>
        <div>
          <Label>Status: wrapUp</Label>
          <UserStatus status="wrapUp" />
        </div>
        <div>
          <Label>Status: doNotDisturb</Label>
          <UserStatus status="doNotDisturb" />
        </div>
      </ComponentSection>
      <ComponentSection>
        <div>
          <Label>Status: onBreak</Label>
          <UserStatus status="onBreak" />
        </div>
        <div>
          <Label>Status: onCall</Label>
          <UserStatus status="onCall" />
        </div>
        <div>
          <Label>Status: onDirectCall</Label>
          <UserStatus status="onDirectCall" />
        </div>
        <div>
          <Label>Status: offline</Label>
          <UserStatus status="offline" />
        </div>
        <div>
          <Label>Status: workingOffline</Label>
          <UserStatus status="workingOffline" />
        </div>
      </ComponentSection>
    </Section>
    <Section>
      <Headline>User Status - Size small</Headline>
      <ComponentSection>
        <div>
          <Label>Status: available</Label>
          <UserStatus size="small" />
        </div>
        <div>
          <Label>Status: away</Label>
          <UserStatus size="small" status="away" />
        </div>
        <div>
          <Label>Status: busy</Label>
          <UserStatus size="small" status="busy" />
        </div>
        <div>
          <Label>Status: wrapUp</Label>
          <UserStatus size="small" status="wrapUp" />
        </div>
        <div>
          <Label>Status: doNotDisturb</Label>
          <UserStatus size="small" status="doNotDisturb" />
        </div>
      </ComponentSection>
      <ComponentSection>
        <div>
          <Label>Status: onBreak</Label>
          <UserStatus size="small" status="onBreak" />
        </div>
        <div>
          <Label>Status: onCall</Label>
          <UserStatus size="small" status="onCall" />
        </div>
        <div>
          <Label>Status: onDirectCall</Label>
          <UserStatus size="small" status="onDirectCall" />
        </div>
        <div>
          <Label>Status: offline</Label>
          <UserStatus size="small" status="offline" />
        </div>
        <div>
          <Label>Status: workingOffline</Label>
          <UserStatus size="small" status="workingOffline" />
        </div>
      </ComponentSection>
    </Section>
  </>
);

Guidelines.storyName = '01. Guidelines';
