import React from 'react';

import Label from '@8x8/oxygen-label';
import Textarea from '@8x8/oxygen-textarea';

import {
  Section,
  Headline,
  ComponentSection,
  ComponentItem,
} from '@8x8/oxygen-storybook-utils';

export default {
  title: 'Components/Textarea',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => (
  <Section>
    <Headline>Textarea - Guidelines</Headline>
    <ComponentSection>
      <ComponentItem width="50%">
        <Label htmlFor="default" value="Default" />
        <Textarea id="default" placeholder="Placeholder text" />
      </ComponentItem>
      <ComponentItem width="50%">
        <Label htmlFor="focused" value="Focused" />
        <Textarea id="focused" placeholder="Placeholder text" autoFocus />
      </ComponentItem>
    </ComponentSection>
    <ComponentSection>
      <ComponentItem width="50%">
        <Label htmlFor="controlled" value="Controlled" />
        <Textarea
          id="controlled"
          placeholder="Placeholder text"
          value="Default value"
        />
      </ComponentItem>
      <ComponentItem width="50%">
        <Label htmlFor="with-error" value="With error" />
        <Textarea id="with-error" placeholder="With error" hasError />
      </ComponentItem>
    </ComponentSection>
    <ComponentSection>
      <ComponentItem width="50%">
        <Label htmlFor="read-only" value="Read only" />
        <Textarea
          id="read-only"
          placeholder="Read only"
          value="Read only"
          isReadOnly
        />
      </ComponentItem>
      <ComponentItem width="50%">
        <Label htmlFor="read-only-with-error" value="Read only with error" />
        <Textarea
          id="read-only-with-error"
          placeholder="Read only with error"
          value="Read only with error"
          isReadOnly
          hasError
        />
      </ComponentItem>
    </ComponentSection>
    <ComponentSection>
      <ComponentItem width="50%">
        <Label htmlFor="disabled" value="Disabled" />
        <Textarea id="disabled" placeholder="Placeholder text" isDisabled />
      </ComponentItem>
      <ComponentItem width="50%">
        <Label htmlFor="disabled-with-value" value="Disabled with value" />
        <Textarea id="disabled-with-value" value="Text content" isDisabled />
      </ComponentItem>
    </ComponentSection>
  </Section>
);

Guidelines.storyName = '01. Guidelines';
