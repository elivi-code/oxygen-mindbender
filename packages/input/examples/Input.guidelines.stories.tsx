import React from 'react';

import Input from '@8x8/oxygen-input';
import { CloseLargeIcon, SearchIcon } from '@8x8/oxygen-icon';

import {
  Label,
  Section,
  Headline,
  ComponentItem,
  ComponentSection,
} from '@8x8/oxygen-storybook-utils';

export default {
  title: 'Components/Input',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => (
  <>
    <Section>
      <Headline>Input Sizes</Headline>
      <ComponentSection>
        <Label>Default width</Label>
        <ComponentItem>
          <Label>Small size</Label>
          <Input
            placeholder="Placeholder text"
            size="small"
            fullWidth={false}
          />
        </ComponentItem>
        <ComponentItem>
          <Label>
            Medium size (<i>default</i>)
          </Label>
          <Input placeholder="Placeholder text" fullWidth={false} />
        </ComponentItem>
        <ComponentItem>
          <Label>Large size</Label>
          <Input
            placeholder="Placeholder text"
            size="large"
            fullWidth={false}
          />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <ComponentItem>
          <Label>Full width</Label>
          <Input placeholder="Placeholder text" fullWidth />
        </ComponentItem>
      </ComponentSection>
    </Section>

    <Section>
      <Headline>Input - States</Headline>
      <ComponentSection>
        <ComponentItem width="50%">
          <Label>Default</Label>
          <Input placeholder="Placeholder text" />
        </ComponentItem>
        <ComponentItem width="50%">
          <Label>Focused</Label>
          <Input placeholder="Placeholder text" autoFocus />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <ComponentItem width="50%">
          <Label>Controlled</Label>
          <Input placeholder="Placeholder text" value="Default value" />
        </ComponentItem>
        <ComponentItem width="50%">
          <Label>With error</Label>
          <Input placeholder="With error" hasError />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <ComponentItem width="50%">
          <Label>Fixed</Label>
          <Input placeholder="With error" value="Example value" fixed />
        </ComponentItem>
        <ComponentItem width="50%">
          <Label>Read only</Label>
          <Input value="Example read only value" isReadOnly />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <ComponentItem>
          <Label>Read only with error</Label>
          <Input
            placeholder="Read only with error"
            value="Read only with error"
            isReadOnly
            hasError
          />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <ComponentItem width="50%">
          <Label>Disabled</Label>
          <Input placeholder="Placeholder text" isDisabled />
        </ComponentItem>
        <ComponentItem width="50%">
          <Label>Disabled with value</Label>
          <Input value="Text content" isDisabled />
        </ComponentItem>
      </ComponentSection>
    </Section>

    <Section>
      <Headline>Input - Prefix / Suffix</Headline>
      <ComponentSection>
        <ComponentItem width="50%">
          <Label>
            Prefix (<i>default prefix width</i>)
          </Label>
          <Input placeholder="Placeholder text" prefix="￡" />
        </ComponentItem>
        <ComponentItem width="50%">
          <Label>
            Suffix (<i>default suffix width</i>)
          </Label>
          <Input placeholder="Placeholder text" suffix="gb" value={5000} />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <ComponentItem width="50%">
          <Label>Prefix autoWidth</Label>
          <Input placeholder="Placeholder text" prefix="￡" autoPrefixWidth />
        </ComponentItem>
        <ComponentItem width="50%">
          <Label>Suffix autoWidth</Label>
          <Input
            placeholder="Placeholder text"
            suffix="gb"
            autoSuffixWidth
            value={5000}
          />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <ComponentItem width="50%">
          <Label>Prefix with error</Label>
          <Input placeholder="Placeholder text" prefix="￡" hasError />
        </ComponentItem>
        <ComponentItem width="50%">
          <Label>Suffix with error</Label>
          <Input
            placeholder="Placeholder text"
            suffix="gb"
            value={5000}
            hasError
          />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <ComponentItem width="50%">
          <Label>Icon left</Label>
          <Input placeholder="Placeholder text" iconLeft={SearchIcon} />
        </ComponentItem>
        <ComponentItem width="50%">
          <Label>Icon right</Label>
          <Input placeholder="Placeholder text" iconRight={CloseLargeIcon} />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <ComponentItem width="50%">
          <Label>Prefix Read only</Label>
          <Input value="Example read only value" isReadOnly prefix="£" />
        </ComponentItem>
        <ComponentItem width="50%">
          <Label>Suffix Read only</Label>
          <Input value="Example read only value" isReadOnly suffix="gb" />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <ComponentItem width="50%">
          <Label>Prefix Read only with error</Label>
          <Input
            placeholder="Placeholder text"
            prefix="￡"
            isReadOnly
            hasError
          />
        </ComponentItem>
        <ComponentItem width="50%">
          <Label>Suffix Read only with error</Label>
          <Input
            placeholder="Placeholder text"
            suffix="gb"
            isReadOnly
            value={5000}
            hasError
          />
        </ComponentItem>
      </ComponentSection>
    </Section>
  </>
);
Guidelines.storyName = '01. Guidelines';
