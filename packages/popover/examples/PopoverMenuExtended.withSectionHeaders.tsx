import React, { useState } from 'react';
import {
  Divider,
  ListItem,
  PopoverMenu,
  SectionHeader,
} from '@8x8/oxygen-popover';
import Button from '@8x8/oxygen-button';
import { ArrowDownIcon, PauseIcon, SearchIcon } from '@8x8/oxygen-icon';
import Avatar from '@8x8/oxygen-avatar';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';

import Input from '@8x8/oxygen-input';
import styled from 'styled-components';
import { popoverMenuArgsConfig, popoverMenuArgTypesConfig } from './config';

const initialEngagedContacts = [
  'Sarah Condes',
  'Peter Parker',
  'Miles Morales',
  'Joe Oswald',
  'Gwen Cai',
];
const initialOldestContacts = [
  'Alan Parker',
  'Joe Dunham',
  'Maria Marques',
  'Antonio Montana',
  'Tony Soprano',
];

const renderContact = name => ({
  key: `admin-${name}`,
  children: (
    <ListItem leadingVisuals={<Avatar size="2xsmall" />}>{name}</ListItem>
  ),
});

const Logout = styled.div`
  color: ${({ theme }) => theme.action03};
`;

export const PopoverMenuWithSectionHeadersStory = args => {
  const [searchTerm, setSearchTerm] = useState('');
  const [engagedContacts, setEngagedContacts] = useState(
    initialEngagedContacts,
  );
  const [oldestContacts, setOldestContacts] = useState(initialOldestContacts);

  const handleSearch = event => {
    const { value } = event.target;

    setSearchTerm(value);

    const filterContacts = contacts =>
      contacts.filter(name => name.toLowerCase().includes(value.toLowerCase()));

    setEngagedContacts(filterContacts(initialEngagedContacts));
    setOldestContacts(filterContacts(initialOldestContacts));
  };

  return (
    <>
      <Doc>
        <h1>
          <code>PopoverMenu</code> with <code>Section headers/bold</code> ={'>'}{' '}
          Sales Workspace example
        </h1>
        <pre>
          {`
import {
  Divider,
  ListItem,
  PopoverMenu,
  SectionHeader,
} from '@8x8/oxygen-popover';
import Button from '@8x8/oxygen-button';
import { ArrowDownIcon } from '@8x8/oxygen-icon';
import Avatar from '@8x8/oxygen-avatar';
import styled from 'styled-components';

import Input from '@8x8/oxygen-input';
import { SearchIcon } from '@8x8/oxygen-icon';

const initialEngagedContacts = [
  'Sarah Condes',
  'Peter Parker',
  'Miles Morales',
  'Joe Oswald',
  'Gwen Cai',
];

const initialOldestContacts = [
  'Alan Parker',
  'Joe Dunham',
  'Maria Marques',
  'Antonio Montana',
  'Tony Soprano',
];

const renderContact = name => ({
  key: \`admin-\${name}\`,
  children: (
    <ListItem leadingVisuals={<Avatar size="2xsmall" />}>{name}</ListItem>
  ),
});

<PopoverMenu
  header={
    <Input
      iconLeft={SearchIcon}
      placeholder="Search contacts"
      value={searchTerm}
      onChange={handleSearch}
    />
  }
  items={[
    <SectionHeader isBold key="1">
      Engaged Contacts
    </SectionHeader>,
    engagedContacts.map(renderContact),
    <SectionHeader isBold key="2">
      Oldest Account Contacts
    </SectionHeader>,
    oldestContacts.map(renderContact),
  ]}
>
  <Button iconRight={<ArrowDownIcon />}>Select Contact</Button>
</PopoverMenu>`}
        </pre>
      </Doc>
      <ComponentSection>
        <PopoverMenu
          {...args}
          header={
            <Input
              iconLeft={SearchIcon}
              placeholder="Search contacts"
              value={searchTerm}
              onChange={handleSearch}
            />
          }
          items={[
            <SectionHeader isBold key="1">
              Engaged Contacts
            </SectionHeader>,
            engagedContacts.map(renderContact),
            <SectionHeader isBold key="2">
              Oldest Account Contacts
            </SectionHeader>,
            oldestContacts.map(renderContact),
          ]}
        >
          <Button iconRight={<ArrowDownIcon />}>Select Contact</Button>
        </PopoverMenu>
      </ComponentSection>
      <Doc>
        <h1>
          <code>PopoverMenu</code> with <code>Section headers/bold</code>
        </h1>
        <pre>
          {`
import { PopoverMenu, SectionHeader, Divider } from '@8x8/oxygen-popover';
import Button from '@8x8/oxygen-button';
import { ArrowDownIcon } from '@8x8/oxygen-icon';
import { PauseIcon } from '@8x8/oxygen-icon';
import Avatar from '@8x8/oxygen-avatar';
import styled from 'styled-components';

const Logout = styled.div\`
  color: \${({ theme }) => theme.action03};
\`;

<PopoverMenu
  items={[
    <SectionHeader isBold key="header 1">
      Break
    </SectionHeader>,
    [
      {
        key: '1',
        children: 'Coffee break',
      },
      {
        key: '2',
        children: 'Lunch',
      },
      {
        key: '3',
        children: 'Quick break',
      },
    ],
    <Divider key="divider" />,
    <SectionHeader isBold key="header 2">
      Work offline
    </SectionHeader>,
    [
      {
        key: '4',
        children: 'Coffee break',
      },
      {
        key: '5',
        children: 'Lunch',
      },
      {
        key: '6',
        children: 'Quick break',
      },
    ],
    <Divider key="divider 2" />,
    [
      {
        key: '7',
        children: <Logout>Log out</Logout>,
      },
    ],
  ]}
>
  <Button
    variant="secondary"
    iconLeft={<PauseIcon />}
    iconRight={<ArrowDownIcon />}
  >
    Pause
  </Button>
</PopoverMenu>`}
        </pre>
      </Doc>
      <ComponentSection>
        <PopoverMenu
          {...args}
          items={[
            <SectionHeader isBold key="header 1">
              Break
            </SectionHeader>,
            [
              {
                key: '1',
                children: 'Coffee break',
              },
              {
                key: '2',
                children: 'Lunch',
              },
              {
                key: '3',
                children: 'Quick break',
              },
            ],
            <Divider key="divider" />,
            <SectionHeader isBold key="header 2">
              Work offline
            </SectionHeader>,
            [
              {
                key: '4',
                children: 'Coffee break',
              },
              {
                key: '5',
                children: 'Lunch',
              },
              {
                key: '6',
                children: 'Quick break',
              },
            ],
            <Divider key="divider 2" />,
            [
              {
                key: '7',
                children: <Logout>Log out</Logout>,
              },
            ],
          ]}
        >
          <Button
            variant="secondary"
            iconLeft={<PauseIcon />}
            iconRight={<ArrowDownIcon />}
          >
            Pause
          </Button>
        </PopoverMenu>
      </ComponentSection>
    </>
  );
};

PopoverMenuWithSectionHeadersStory.storyName =
  'PopoverMenu with Section headers/bold';
PopoverMenuWithSectionHeadersStory.args = popoverMenuArgsConfig;
PopoverMenuWithSectionHeadersStory.argTypes = popoverMenuArgTypesConfig;
PopoverMenuWithSectionHeadersStory.parameters = {
  controls: { sort: 'requiredFirst' },
};
