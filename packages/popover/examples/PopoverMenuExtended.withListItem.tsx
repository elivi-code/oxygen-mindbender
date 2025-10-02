import React from 'react';

import { PopoverMenu, SectionHeader, ListItem } from '@8x8/oxygen-popover';
import Button from '@8x8/oxygen-button';
import Avatar from '@8x8/oxygen-avatar';
import { ArrowDownIcon } from '@8x8/oxygen-icon';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';

import { popoverMenuArgsConfig, popoverMenuArgTypesConfig } from './config';

const employeeNames = [
  { name: 'Alan Parker', role: 'Developer' },
  { name: 'Joe Dunham', role: 'Manager' },
  { name: 'Maria Marques', role: 'Designer' },
  { name: 'Antonio Montana', role: 'QA Engineer' },
  { name: 'Tony Soprano', role: 'Product Owner' },
  { name: 'Sarah Condes', role: 'Scrum Master' },
  { name: 'Peter Parker', role: 'HR Specialist' },
  { name: 'Miles Morales', role: 'Marketing Coordinator' },
  { name: 'Joe Oswald', role: 'Sales Representative' },
  { name: 'Gwen Cai', role: 'Support Engineer' },
];

const renderEmployee = ({ name, role }) => ({
  key: `employee-${name}`,
  children: (
    <ListItem leadingVisuals={<Avatar size="2xsmall" />} secondaryText={role}>
      {name}
    </ListItem>
  ),
});

const employeeNames2 = [
  {
    name: 'Alan Parker',
    role: 'Developer with a very long name here that has a lot of info in the secondary text',
  },
  {
    name: 'Joe Dunham With A long name to see what happens when we have a lot of text',
    role: 'Manager with a very long name here that has a lot of info in the secondary tex',
    isActive: true,
  },
  { name: 'Maria Marques' }, // no secondary text
  { name: '', role: 'QA Engineer' }, // empty name and secondary text
  {
    name: 'SarahCondesListLabelAReallyLongLabelToTestMaxWidthAndTextWrappingForAContinuousWordInsidePopoverMenuListItem',
    role: 'ScrumMasterListLabelAReallyLongLabelToTestMaxWidthAndTextWrappingForAContinuousWordInsidePopoverMenuListItem',
  },
  {
    name: 'PeterParkerListLabelAReallyLongLabelToTestMaxWidthAndTextWrappingForAContinuousWordInsidePopoverMenuListItemWithIsActiveTrue',
    role: 'HR Specialist',
    isActive: true,
  },
  { name: 'Miles Morales', role: 'Marketing Coordinator' },
  { name: 'Joe Oswald', role: 'Sales Representative' },
  { name: 'Gwen Cai', role: 'Support Engineer' },
];

const renderEmployee2 = ({
  name,
  role,
  isActive,
}: {
  name: string;
  role?: string;
  isActive?: boolean;
}) => ({
  key: `employee2-${name}`,
  children: (
    <ListItem leadingVisuals={<Avatar size="2xsmall" />} secondaryText={role}>
      {name}
    </ListItem>
  ),
  isActive,
});

export const PopoverMenuWithListItemStory = args => {
  return (
    <>
      <Doc>
        <h1>
          <code>PopoverMenu</code> with <code>ListItem</code>
        </h1>
        <pre>
          {`
import React from 'react';

import { PopoverMenu, SectionHeader, ListItem } from '@8x8/oxygen-popover';
import Button from '@8x8/oxygen-button';
import Avatar from '@8x8/oxygen-avatar';
import { ArrowDownIcon } from '@8x8/oxygen-icon';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';

import { popoverMenuArgsConfig, popoverMenuArgTypesConfig } from './config';

const employeeNames = [
  { name: 'Alan Parker', role: 'Developer' },
  { name: 'Joe Dunham', role: 'Manager' },
  { name: 'Maria Marques', role: 'Designer' },
  { name: 'Antonio Montana', role: 'QA Engineer' },
  { name: 'Tony Soprano', role: 'Product Owner' },
  { name: 'Sarah Condes', role: 'Scrum Master' },
  { name: 'Peter Parker', role: 'HR Specialist' },
  { name: 'Miles Morales', role: 'Marketing Coordinator' },
  { name: 'Joe Oswald', role: 'Sales Representative' },
  { name: 'Gwen Cai', role: 'Support Engineer' },
];

const renderEmployee = ({ name, role }) => ({
  key: \`employee-\${name}\`,
  children: (
    <ListItem leadingVisuals={<Avatar size="2xsmall" />} secondaryText={role}>
      {name}
    </ListItem>
  ),
});

...

<PopoverMenu
  {...args}
  items={[
    <SectionHeader key="number-of-employees">{\`\${employeeNames.length} employees in the department\`}</SectionHeader>,
    employeeNames.map(renderEmployee),
  ]}
>
  <Button iconRight={<ArrowDownIcon />}>Select employee</Button>
</PopoverMenu>
`}
        </pre>
      </Doc>
      <ComponentSection>
        <PopoverMenu
          {...args}
          items={[
            <SectionHeader key="number-of-employees">{`${employeeNames.length} employees in the department`}</SectionHeader>,
            employeeNames.map(renderEmployee),
          ]}
        >
          <Button iconRight={<ArrowDownIcon />}>Select employee</Button>
        </PopoverMenu>
      </ComponentSection>
      <Doc>
        <h1>
          <code>PopoverMenu</code> with <code>ListItem</code> with extremes
        </h1>
        <pre>
          {`
import React from 'react';

import { PopoverMenu, SectionHeader, ListItem } from '@8x8/oxygen-popover';
import Button from '@8x8/oxygen-button';
import Avatar from '@8x8/oxygen-avatar';
import { ArrowDownIcon } from '@8x8/oxygen-icon';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';

import { popoverMenuArgsConfig, popoverMenuArgTypesConfig } from './config';

const employeeNames2 = [
  {
    name: 'Alan Parker',
    role: 'Developer with a very long name here that has a lot of info in the secondary text',
  },
  {
    name: 'Joe Dunham With A long name to see what happens when we have a lot of text',
    role: 'Manager with a very long name here that has a lot of info in the secondary tex',
    isActive: true,
  },
  { name: 'Maria Marques' }, // no secondary text
  { name: '', role: 'QA Engineer' }, // empty name and secondary text
  {
    name: 'SarahCondesListLabelAReallyLongLabelToTestMaxWidthAndTextWrappingForAContinuousWordInsidePopoverMenuListItem',
    role: 'ScrumMasterListLabelAReallyLongLabelToTestMaxWidthAndTextWrappingForAContinuousWordInsidePopoverMenuListItem',
  },
  {
    name: 'PeterParkerListLabelAReallyLongLabelToTestMaxWidthAndTextWrappingForAContinuousWordInsidePopoverMenuListItemWithIsActiveTrue',
    role: 'HR Specialist',
    isActive: true,
  },
  { name: 'Miles Morales', role: 'Marketing Coordinator' },
  { name: 'Joe Oswald', role: 'Sales Representative' },
  { name: 'Gwen Cai', role: 'Support Engineer' },
];

const renderEmployee2 = ({
  name,
  role,
  isActive,
}: {
  name: string;
  role?: string;
  isActive?: boolean;
}) => ({
  key: \`employee2-\${name}\`,
  children: (
    <ListItem leadingVisuals={<Avatar size="2xsmall" />} secondaryText={role}>
      {name}
    </ListItem>
  ),
  isActive,
});

...

<PopoverMenu
  {...args}
  items={[
    <SectionHeader key="number-of-employees2">{\`\${employeeNames2.length} employees in the department\`}</SectionHeader>,
    employeeNames2.map(renderEmployee2),
  ]}
>
  <Button iconRight={<ArrowDownIcon />}>Select employee</Button>
</PopoverMenu>
`}
        </pre>
      </Doc>
      <ComponentSection>
        <PopoverMenu
          {...args}
          items={[
            <SectionHeader key="number-of-employees2">{`${employeeNames2.length} employees in the department`}</SectionHeader>,
            employeeNames2.map(renderEmployee2),
          ]}
        >
          <Button iconRight={<ArrowDownIcon />}>Select employee</Button>
        </PopoverMenu>
      </ComponentSection>
    </>
  );
};

PopoverMenuWithListItemStory.storyName = 'PopoverMenu with ListItem';
PopoverMenuWithListItemStory.args = popoverMenuArgsConfig;
PopoverMenuWithListItemStory.argTypes = popoverMenuArgTypesConfig;
PopoverMenuWithListItemStory.parameters = {
  controls: { sort: 'requiredFirst' },
};
