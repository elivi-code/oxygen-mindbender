import React, { useState } from 'react';

import {
  EmptyState,
  ListItem,
  PopoverMenu,
  SectionHeader,
} from '@8x8/oxygen-popover';
import Button from '@8x8/oxygen-button';
import { ArrowDownIcon, SearchIcon } from '@8x8/oxygen-icon';
import Avatar from '@8x8/oxygen-avatar';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import Input from '@8x8/oxygen-input';
import { popoverMenuArgsConfig, popoverMenuArgTypesConfig } from './config';

const initialContacts = [
  'Alan Parker',
  'Joe Dunham',
  'Maria Marques',
  'Antonio Montana',
  'Tony Soprano',
  'Sarah Condes',
  'Peter Parker',
  'Miles Morales',
  'Joe Oswald',
  'Gwen Cai',
];

const renderContact = name => ({
  key: `admin-${name}`,
  children: (
    <ListItem leadingVisuals={<Avatar size="2xsmall" />}>{name}</ListItem>
  ),
});

export const PopoverMenuWithHeaderStory = args => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(initialContacts);

  const handleSearch = event => {
    const { value } = event.target;

    setSearchTerm(value);

    const filterContacts = contacts =>
      contacts.filter(name => name.toLowerCase().includes(value.toLowerCase()));

    setFilteredContacts(filterContacts(filteredContacts));
  };

  return (
    <>
      <Doc>
        <h1>
          <code>PopoverMenu</code> with <code>Header</code>
        </h1>
        <pre>
          {`
import {
  EmptyState,
  ListItem,
  PopoverMenu,
  SectionHeader,
} from '@8x8/oxygen-popover';
import Button from '@8x8/oxygen-button';
import { ArrowDownIcon, SearchIcon } from '@8x8/oxygen-icon';
import Avatar from '@8x8/oxygen-avatar';
import Input from '@8x8/oxygen-input';

const initialContacts = [
  'Alan Parker',
  'Joe Dunham',
  'Maria Marques',
  'Antonio Montana',
  'Tony Soprano',
  'Sarah Condes',
  'Peter Parker',
  'Miles Morales',
  'Joe Oswald',
  'Gwen Cai',
];

const renderContact = name => ({
  key: \`admin-\${name}\`,
  children: (
    <ListItem leadingVisuals={<Avatar size="2xsmall" />}>{name}</ListItem>
  ),
});

...

const [searchTerm, setSearchTerm] = useState('');
const [filteredContacts, setFilteredContacts] = useState(initialContacts);

const handleSearch = event => {
  const { value } = event.target;

  setSearchTerm(value);

  const filterContacts = contacts =>
    contacts.filter(name => name.toLowerCase().includes(value.toLowerCase()));

  setFilteredContacts(filterContacts(filteredContacts));
}

...

<PopoverMenu
  header={
    <>
      <Input
        iconLeft={SearchIcon}
        placeholder="Search contacts"
        value={searchTerm}
        onChange={handleSearch}
      />
      <EmptyState
        primaryMessage="No contacts selected to engage."
        secondaryMessage="Start by searching your contacts or select one below."
      />
    </>
  }
  items={[
    <SectionHeader isBold key="1">
      Oldest Account Contacts
    </SectionHeader>,
    filteredContacts.map(renderContact),
  ]}
>
  <Button iconRight={<ArrowDownIcon />}>Select contact</Button>
</PopoverMenu>
          `}
        </pre>
      </Doc>
      <ComponentSection>
        <PopoverMenu
          {...args}
          header={
            <>
              <Input
                iconLeft={SearchIcon}
                placeholder="Search contacts"
                value={searchTerm}
                onChange={handleSearch}
              />
              <EmptyState
                primaryMessage="No contacts selected to engage."
                secondaryMessage="Start by searching your contacts or select one below."
              />
            </>
          }
          items={[
            <SectionHeader isBold key="1">
              Oldest Account Contacts
            </SectionHeader>,
            filteredContacts.map(renderContact),
          ]}
        >
          <Button iconRight={<ArrowDownIcon />}>Select contact</Button>
        </PopoverMenu>
      </ComponentSection>
    </>
  );
};

PopoverMenuWithHeaderStory.storyName = 'PopoverMenu with Header';
PopoverMenuWithHeaderStory.args = popoverMenuArgsConfig;
PopoverMenuWithHeaderStory.argTypes = popoverMenuArgTypesConfig;
PopoverMenuWithHeaderStory.parameters = {
  controls: { sort: 'requiredFirst' },
};
