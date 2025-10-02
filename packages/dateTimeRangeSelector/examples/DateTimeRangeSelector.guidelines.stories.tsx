import React from 'react';

import addDays from 'date-fns/addDays';

import themes from '@8x8/oxygen-theme';

import DateTimeRangeSelector, {
  DateTimeRangePicker,
  predefinedRanges,
} from '@8x8/oxygen-date-time-range-selector';
import {
  ComponentSection,
  ComponentItem,
  Headline,
  Label,
  Section,
} from '@8x8/oxygen-storybook-utils';
import { SearchIcon } from '@8x8/oxygen-icon';
import DropdownButton from '@8x8/oxygen-dropdown-button';

import Button from '@8x8/oxygen-button';
import styled from 'styled-components';

const { novo } = themes;

export default {
  title: 'Components/DateTimeRangeSelector',
  parameters: {
    chromatic: { disable: false },
  },
};

const ClearButton = styled(Button)`
  background-color: unset;
  color: #0056e0;
  padding: 0;
  cursor: pointer;
  min-height: unset;

  &:hover,
  &:active {
    background-color: unset;
  }
`;

const sampleTheme = {
  ...novo,
  dropdownMaxHeight: 600,
  dropdownMaxWidth: 1000,
};

export const Guidelines = () => (
  <Section>
    <Headline>Date Time Range Selector</Headline>
    <ComponentSection>
      <ComponentItem>
        <Label>With custom labels</Label>
        <DateTimeRangeSelector
          placeholder="Custom Placeholder"
          clearButtonLabel="Clear Button"
          finishButtonLabel="Finish Button"
        />
      </ComponentItem>
      <ComponentItem>
        <Label>With `Today` predefined range selected</Label>
        <DateTimeRangeSelector predefinedRange={{ id: 'TODAY' }} />
      </ComponentItem>
      <ComponentItem>
        <Label>With already set range and custom range display</Label>
        <DateTimeRangeSelector
          dateTimeRange={{
            startDate: new Date('1989-06-26T09:24:00'),
            endDate: addDays(new Date('1989-06-26T09:24:00').getTime(), 3),
          }}
        />
      </ComponentItem>
    </ComponentSection>
    <ComponentSection>
      <ComponentItem>
        <Label>With left icon and right icon</Label>
        <DateTimeRangeSelector
          iconLeft={SearchIcon}
          placeholder="Custom Placeholder"
          clearButtonLabel="Clear Button"
          finishButtonLabel="Finish Button"
        />
      </ComponentItem>
      <ComponentItem>
        <Label>With left icon and no right icon</Label>
        <DateTimeRangeSelector
          iconLeft={SearchIcon}
          inputIcon={null}
          placeholder="Custom Placeholder"
          clearButtonLabel="Clear Button"
          finishButtonLabel="Finish Button"
        />
      </ComponentItem>
      <ComponentItem>
        <Label>Default</Label>
        <DateTimeRangeSelector />
      </ComponentItem>
      <ComponentItem>
        <Label>Small</Label>
        <DateTimeRangeSelector size="small" />
      </ComponentItem>
      <ComponentItem>
        <Label>Disabled</Label>
        <DateTimeRangeSelector isDisabled />
      </ComponentItem>
    </ComponentSection>
    <ComponentSection>
      <ComponentItem>
        <Label>Date Picker inside custom DropdownButton</Label>
        <DropdownButton
          theme={sampleTheme}
          shouldCloseOnInsideClick={false}
          buttonText="Custom Dropdown"
        >
          <DateTimeRangePicker
            theme={sampleTheme}
            endTimeErrorMessage="Invalid Range"
            predefinedRanges={predefinedRanges}
            predefinedRange={undefined}
            dateTimeRange={undefined}
            startTimeLabel="Start Time"
            endTimeLabel="End Time"
            fromLabel="From"
            toLabel="To"
            customPredefinedRangeLabel="Custom"
            dateFormat="MM/dd/yyyy"
            timeFormat="hh:mm a"
            onRangeChange={() => {}}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0 10px 0 10px',
            }}
          >
            <ClearButton>Clear</ClearButton>
            <Button>Save</Button>
          </div>
        </DropdownButton>
      </ComponentItem>
    </ComponentSection>
  </Section>
);

Guidelines.storyName = '01. Guidelines';
