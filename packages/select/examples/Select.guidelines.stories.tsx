import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Avatar from '@8x8/oxygen-avatar';
import Select from '@8x8/oxygen-select';
import { CalendarIcon } from '@8x8/oxygen-icon';

import {
  ComponentSection,
  ComponentItem,
  Label,
  Headline,
  Section,
  avatarUrl,
} from '@8x8/oxygen-storybook-utils';

const selectOptions = [
  { value: 'One', label: 'Option One' },
  { value: 'Two', label: 'Option Two' },
  {
    value: 'Three',
    label: `Option Three really long to have the content clipped. Lorem ipsum
    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.`,
  },
  { value: 'Four', label: 'Option Four' },
  { value: 'Five', label: 'Option Five' },
  { value: 'Six', label: 'Option Six' },
  { value: 'Seven', label: 'Option Seven' },
  { value: 'Eight', label: 'Option Eight' },
  { value: 'Secret', label: 'Secret Option' },
  { value: 'Disabled', label: 'Disabled Option', isDisabled: true },
];

const contactSelectOptions = [
  {
    value: '0123456789',
    label: 'Karen J. Palmer',
    avatar: {
      src: avatarUrl,
      name: 'Karen J. Palmer',
    },
    label2: 'Job title 1',
    isFixed: true,
  },
  {
    value: '1123456789',
    label: 'Phillip M. McPherson',
    label2: 'Job title 2',
    avatar: {
      src: avatarUrl,
      name: 'Phillip M. McPherson',
    },
  },
  {
    value: '2123456789',
    label: 'Carley A. Parks',
    label2: 'Job title 3',
    avatar: {
      isGroup: true,
    },
  },
  {
    value: '3123456789',
    label: 'Winnifred J. Tucker',
    label2: 'Job title 4',
    avatar: {},
  },
  { value: '4123456789', label: 'Keith P. Schreiber' },
  { value: '5123456789', label: 'Sarah H. Wheat', isFavorite: true },
  { value: '6123456789', label: 'Joan J. Wilkes', isFavorite: true },
];
const contactsFavorites = contactSelectOptions.filter(i => i.isFavorite);

const groupedOptions = [
  {
    label: 'Header',
    options: selectOptions,
  },
  {
    label: 'Header 2',
    options: selectOptions,
  },
];

/* Async options */
const filterOptions = inputValue => {
  return selectOptions.filter(item =>
    item.label.toLowerCase().includes(inputValue.toLowerCase()),
  );
};
const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterOptions(inputValue));
  }, 1000);
};

/* Custom implementation example */
const CustomOptionWrapper = styled.div`
  border-bottom: 1px solid #e0e0e0;
  color: ${({ theme }) => theme.optionTextColor};
  cursor: pointer;
  display: flex;
  font-size: 0.75rem;
  padding: 12px 16px;
  text-align: left;
  &:hover {
    background-color: ${({ theme }) => theme.optionHoveredBackgroundColor};
  }
`;
const CustomOptionAvatar = styled(Avatar).attrs(() => ({
  size: 'small',
}))`
  margin-right: 16px;
`;
const CustomOptionText = styled.div``;
const CustomOptionRow1 = styled.div`
  font-weight: bold;
`;
const filterCustomOptions = inputValue =>
  contactSelectOptions.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase()),
  );
const loadCustomOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterCustomOptions(inputValue));
  }, 1000);
};

const CustomOption = ({ innerProps, data }) => {
  return (
    <CustomOptionWrapper {...innerProps}>
      {data.avatar && <CustomOptionAvatar {...data.avatar} />}
      <CustomOptionText>
        <CustomOptionRow1>{data.label}</CustomOptionRow1>
        <div>{data.label2}</div>
      </CustomOptionText>
    </CustomOptionWrapper>
  );
};

CustomOption.propTypes = {
  innerProps: PropTypes.object,
  data: PropTypes.shape({
    avatar: PropTypes.object,
    label: PropTypes.string,
    label2: PropTypes.string,
  }).isRequired,
};
CustomOption.defaultProps = {
  innerProps: {},
};

export default {
  title: 'Components/Select',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => (
  <>
    <Section>
      <Headline>Select</Headline>
      <ComponentSection>
        <Label>Select with label and info box</Label>
        <ComponentItem>
          <Select
            options={selectOptions}
            labelValue="Dropdown label"
            infoBoxText="Dropdown info box"
            infoBoxButtonLabel="Dropdown info tooltip"
            isClearable={false}
          />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <Label>Required select with label</Label>
        <ComponentItem>
          <Select
            options={selectOptions}
            labelValue="Dropdown label"
            isRequired
            isClearable={false}
          />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <Label>Select with icon on left</Label>
        <ComponentItem>
          <Select options={selectOptions} iconLeft={CalendarIcon} />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <Label>Select with header</Label>
        <ComponentItem>
          <Select options={groupedOptions} />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <Label>Select with radio</Label>
        <ComponentItem>
          <Select options={selectOptions} hasCheckbox />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <Label>Select with checkbox</Label>
        <ComponentItem>
          <Select options={selectOptions} hasCheckbox isMulti />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <Label>Select with icons on options</Label>
        <ComponentItem>
          <Select options={selectOptions} hasIcons />
        </ComponentItem>
      </ComponentSection>
      <Headline>Multiple options default 1 line</Headline>
      <ComponentSection>
        <Label>
          Select multiple options <i>Large</i>
        </Label>
        <ComponentItem>
          <Select options={selectOptions} isMulti size="large" />
        </ComponentItem>
        <Label>
          Select multiple options <i>Medium</i>
        </Label>
        <ComponentItem>
          <Select options={selectOptions} isMulti />
        </ComponentItem>
        <Label>
          Select multiple options <i>Small</i>
        </Label>
        <ComponentItem>
          <Select options={selectOptions} isMulti size="small" />
        </ComponentItem>
      </ComponentSection>
      <Headline>Multiple options multiline render (3 lines)</Headline>
      <ComponentSection>
        <Label>
          Select multiple options <i>Large</i>
        </Label>
        <ComponentItem>
          <Select
            options={selectOptions}
            isMulti
            size="large"
            iconLeft={CalendarIcon}
            multipleSelectMaxRows={3}
          />
        </ComponentItem>
        <Label>
          Select multiple options <i>Medium</i>
        </Label>
        <ComponentItem>
          <Select
            options={selectOptions}
            isMulti
            iconLeft={CalendarIcon}
            multipleSelectMaxRows={3}
          />
        </ComponentItem>
        <Label>
          Select multiple options <i>Small</i>
        </Label>
        <ComponentItem>
          <Select
            options={selectOptions}
            isMulti
            size="small"
            iconLeft={CalendarIcon}
            multipleSelectMaxRows={3}
          />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <Label>Select multiple options with short display</Label>
        <ComponentItem>
          <Select options={selectOptions} isMulti hasShortMultiDisplay />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <Label>
          Select multiple options with short display without rendering selected
          checkbox `hideSelectedOptions`
        </Label>
        <ComponentItem>
          <Select
            options={selectOptions}
            isMulti
            hideSelectedOptions
            iconLeft={CalendarIcon}
          />
        </ComponentItem>
      </ComponentSection>

      <ComponentSection>
        <Label>Select with no options</Label>
        <ComponentItem>
          <Select />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <Label>Select with error</Label>
        <ComponentItem>
          <Select options={selectOptions} hasError />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <Label>Select disabled</Label>
        <ComponentItem>
          <Select options={selectOptions} isDisabled />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <Label>Select disabled with a value</Label>
        <ComponentItem>
          <Select
            options={selectOptions}
            value={{
              ...selectOptions[3],
            }}
            isDisabled
          />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <Label>Multi select disabled with a value</Label>
        <ComponentItem>
          <Select
            options={selectOptions}
            value={[selectOptions[3]]}
            isMulti
            isDisabled
          />
        </ComponentItem>
      </ComponentSection>
    </Section>
    <Section>
      <Headline>Select Sizes</Headline>
      <ComponentSection>
        <Label>Small size</Label>
        <ComponentItem>
          <Select options={selectOptions} size="small" />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <Label>
          Medium size (<i>default</i>)
        </Label>
        <ComponentItem>
          <Select options={selectOptions} />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <Label>Large size</Label>
        <ComponentItem>
          <Select options={selectOptions} size="large" />
        </ComponentItem>
      </ComponentSection>
    </Section>
    <Section>
      <Headline>Async</Headline>
      <ComponentSection>
        <Label>Async select</Label>
        <ComponentItem>
          <Select loadOptions={loadOptions} isAsync isMulti />
        </ComponentItem>
      </ComponentSection>
    </Section>
    <Section>
      <Headline>Creatable</Headline>
      <ComponentSection>
        <Label>Creatable select (search an option that is not present)</Label>
        <ComponentItem>
          <Select options={selectOptions} isCreatable />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <Label>Creatable select (multi)</Label>
        <ComponentItem>
          <Select options={selectOptions} isCreatable isMulti />
        </ComponentItem>
      </ComponentSection>
    </Section>
    <Section>
      <Headline>Async-creatable</Headline>
      <ComponentSection>
        <Label>Async-creatable select (single)</Label>
        <ComponentItem>
          <Select loadOptions={loadOptions} isAsync isCreatable />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <Label>Async-creatable select (multi)</Label>
        <ComponentItem>
          <Select loadOptions={loadOptions} isAsync isCreatable isMulti />
        </ComponentItem>
      </ComponentSection>
    </Section>
    <Section>
      <Headline>Specific examples</Headline>
      <ComponentSection>
        <Label>Work Contact Selection</Label>
        <ComponentItem>
          <Select
            alwaysDisplayPlaceholder
            hideSelectedOptions
            isMulti
            multipleSelectMaxRows={3}
            options={contactSelectOptions}
            placeholder="Type name, number or email"
            defaultValue={[contactSelectOptions[0]]}
            components={{
              Option: CustomOption,
            }}
            testId="work-contact-selection"
          />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <Label>
          Work Contact Selection Async (check the above example for the full
          list)
        </Label>
        <ComponentItem>
          <Select
            alwaysDisplayPlaceholder
            hideSelectedOptions
            isAsync
            isMulti
            defaultOptions={contactsFavorites}
            multipleSelectMaxRows={3}
            loadOptions={loadCustomOptions}
            placeholder="Type name, number or email"
            defaultValue={[contactSelectOptions[0]]}
            components={{
              Option: CustomOption,
            }}
          />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <Label>Select with loading spinner and loading text</Label>
        <ComponentItem>
          <Select isLoading loadingMessage="Loading Options" />
        </ComponentItem>
      </ComponentSection>
    </Section>
  </>
);

Guidelines.storyName = '01. Guidelines';
