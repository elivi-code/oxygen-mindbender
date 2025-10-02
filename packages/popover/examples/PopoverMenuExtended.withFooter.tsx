import React, { useState } from 'react';

import { ListItem, PopoverMenu, SectionHeader } from '@8x8/oxygen-popover';
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
  key: `contact-${name}`,
  children: (
    <ListItem leadingVisuals={<Avatar size="2xsmall" />}>{name}</ListItem>
  ),
});

const FooterActions = () => (
  <div
    style={{
      padding: '8px 12px',
      borderTop: '1px solid #e0e0e0',
    }}
  >
    <Button size="small" style={{ width: '100%' }}>
      Add New Contact
    </Button>
  </div>
);

export const PopoverMenuWithFooterStory = args => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(initialContacts);

  const handleSearch = event => {
    const { value } = event.target;

    setSearchTerm(value);

    const filterContacts = contacts =>
      contacts.filter(name => name.toLowerCase().includes(value.toLowerCase()));

    setFilteredContacts(filterContacts(initialContacts));
  };

  return (
    <>
      <Doc>
        <h1>
          <code>PopoverMenu</code> with <code>Header</code> and{' '}
          <code>Footer</code>
        </h1>
        <p>
          This example demonstrates the proper order of content in a
          PopoverMenu:
          <br />
          1. Header content (search input)
          <br />
          2. Menu content (section header + menu items)
          <br />
          3. Footer content (action buttons)
        </p>
        <p>
          <strong>⚠️ Warning:</strong> The footer styling in this example is
          custom and not part of the official design system. No dedicated footer
          component exists yet for PopoverMenu.
        </p>
        <pre>
          {`
import {
  ListItem,
  PopoverMenu,
  SectionHeader,
} from '@8x8/oxygen-popover';
import Button from '@8x8/oxygen-button';
import { ArrowDownIcon, SearchIcon } from '@8x8/oxygen-icon';
import Avatar from '@8x8/oxygen-avatar';
import Input from '@8x8/oxygen-input';

const FooterActions = () => (
  <div style={{ padding: '8px 12px', borderTop: '1px solid #e0e0e0' }}>
    <Button size="small" style={{ width: '100%' }}>
      Add New Contact
    </Button>
  </div>
);

<PopoverMenu
  header={
    <Input
      iconLeft={SearchIcon}
      placeholder="Search contacts"
      value={searchTerm}
      onChange={handleSearch}
    />
  }
  footer={<FooterActions />}
  items={[
    <SectionHeader isBold key="header">
      Available Contacts
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
            <Input
              iconLeft={SearchIcon}
              placeholder="Search contacts"
              value={searchTerm}
              onChange={handleSearch}
            />
          }
          footer={<FooterActions />}
          items={[
            <SectionHeader isBold key="header">
              Available Contacts
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

PopoverMenuWithFooterStory.storyName = 'PopoverMenu with Footer';
PopoverMenuWithFooterStory.args = popoverMenuArgsConfig;
PopoverMenuWithFooterStory.argTypes = popoverMenuArgTypesConfig;
PopoverMenuWithFooterStory.parameters = {
  controls: { sort: 'requiredFirst' },
};
