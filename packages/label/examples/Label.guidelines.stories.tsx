import React from 'react';

import { action } from 'storybook/actions';

import Input from '@8x8/oxygen-input';
import Label from '@8x8/oxygen-label';

import {
  Label as ComponentLabel,
  Section,
  Headline,
  ComponentItem,
  ComponentSection,
} from '@8x8/oxygen-storybook-utils';

export default {
  title: 'Components/Label',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => (
  <>
    <Section>
      <Headline>Label - Guidelines</Headline>
      <ComponentSection>
        <ComponentItem width="33%">
          <ComponentLabel>Default</ComponentLabel>
          <Label htmlFor="test-input-1" value="Label text" />
          <Input id="test-input-1" />
        </ComponentItem>
        <ComponentItem width="33%">
          <ComponentLabel>Required</ComponentLabel>
          <Label value="Label text" isRequired htmlFor="test-input-2" />
          <Input id="test-input-2" isRequired />
        </ComponentItem>
        <ComponentItem width="33%">
          <ComponentLabel>Disabled</ComponentLabel>
          <Label value="Label text" isDisabled htmlFor="test-input-3" />
          <Input id="test-input-3" />
        </ComponentItem>
      </ComponentSection>
    </Section>
    <Section>
      <Headline>Label - Extra elements</Headline>
      <ComponentSection>
        <ComponentItem width="33%">
          <ComponentLabel>With action</ComponentLabel>
          <Label
            value="Label text"
            actionLabel="External link"
            htmlFor="test-input-4"
            action="https://www.8x8.com/"
            actionTarget="_blank"
          />
          <Input id="test-input-4" />
        </ComponentItem>
        <ComponentItem width="33%">
          <ComponentLabel>With action</ComponentLabel>
          <Label
            value="Label text"
            actionLabel="Action"
            htmlFor="test-input-4"
            action={action('You have just clicked a link')}
          />
          <Input id="test-input-4" />
        </ComponentItem>
        <ComponentItem width="33%">
          <ComponentLabel>With disabled action</ComponentLabel>
          <Label
            value="Label text"
            otherActionProps={{
              isDisabled: true,
            }}
            actionLabel="Disabled action"
            action="https://www.8x8.com/"
            htmlFor="test-input-5"
          />
          <Input id="test-input-5" />
        </ComponentItem>
        <ComponentItem width="50%">
          <ComponentLabel>With info</ComponentLabel>
          <Label
            value="Label text"
            infoBoxText="Additional information"
            infoBoxButtonLabel="Additional Information Button"
            htmlFor="test-input-6"
          />
          <Input id="test-input-6" />
        </ComponentItem>
        <ComponentItem width="50%">
          <ComponentLabel>With info triggered by click</ComponentLabel>
          <Label
            value="Label text"
            infoBoxText="Additional information"
            infoBoxButtonLabel="Additional Information Button"
            htmlFor="test-input-6"
            infoBoxShowOn="click"
          />
          <Input id="test-input-6" />
        </ComponentItem>
      </ComponentSection>
    </Section>
  </>
);

Guidelines.storyName = '01. Guidelines';
