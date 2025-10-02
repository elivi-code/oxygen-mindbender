import React, { useState } from 'react';

import { SearchIcon } from '@8x8/oxygen-icon';

import DateTimeSelector from '@8x8/oxygen-date-time-selector';
import {
  ComponentSection,
  ComponentItem,
  Headline,
  Label,
  Section,
} from '@8x8/oxygen-storybook-utils';

function DateTimeSelectorGuidelines() {
  const [value, setValue] = useState(Date.now());

  return (
    <Section>
      <Headline>Date Time Selector</Headline>
      <ComponentSection>
        <ComponentItem width="auto">
          <Label>Default</Label>
          <DateTimeSelector />
        </ComponentItem>
        <ComponentItem width="auto">
          <Label>Small</Label>
          <DateTimeSelector size="small" />
        </ComponentItem>
        <ComponentItem width="auto">
          <Label>Without close on date change</Label>
          <DateTimeSelector closeOnDateChange={false} />
        </ComponentItem>
        <ComponentItem width="auto">
          <Label>Disabled</Label>
          <DateTimeSelector isDisabled />
        </ComponentItem>
        <ComponentItem width="auto">
          <Label>With left icon and right icon</Label>
          <DateTimeSelector
            iconLeft={SearchIcon}
            placeholder="Custom Placeholder"
            clearButtonLabel="Clear Button"
            finishButtonLabel="Finish Button"
          />
        </ComponentItem>
        <ComponentItem width="auto">
          <Label>With left icon and no right icon</Label>
          <DateTimeSelector
            iconLeft={SearchIcon}
            inputIcon={null}
            placeholder="Custom Placeholder"
            clearButtonLabel="Clear Button"
            finishButtonLabel="Finish Button"
          />
        </ComponentItem>
        <ComponentItem width="auto">
          <Label>With clear button</Label>
          <DateTimeSelector isClearable onDateChange={setValue} value={value} />
        </ComponentItem>
        <ComponentItem width="auto">
          <Label>With loading state</Label>
          <DateTimeSelector
            isClearable
            isLoading
            loadingMessage="Loading message..."
          />
        </ComponentItem>
      </ComponentSection>
    </Section>
  );
}

export default {
  title: 'Components/DateTimeSelector',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => <DateTimeSelectorGuidelines />;

Guidelines.storyName = '01. Guidelines';
