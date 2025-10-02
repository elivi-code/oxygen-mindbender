import React, { useState } from 'react';

import {
  PopoverMenu,
  SectionHeader,
  EmptyState,
  ListItem,
} from '@8x8/oxygen-popover';
import Input from '@8x8/oxygen-input';
import Button from '@8x8/oxygen-button';
import Avatar from '@8x8/oxygen-avatar';
import { Spinner } from '@8x8/oxygen-loaders';
import { ArrowDownIcon, SearchIcon } from '@8x8/oxygen-icon';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';

import { popoverMenuArgsConfig, popoverMenuArgTypesConfig } from './config';

const adminNames = [
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

export const PopoverMenuSearchResultsStory = args => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAdmins, setFilteredAdmins] = useState(adminNames);

  const handleSearch = event => {
    const { value } = event.target;

    setSearchTerm(value);
    setFilteredAdmins(
      adminNames.filter(name =>
        name.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  return (
    <>
      <Doc>
        <h1>
          <code>PopoverMenu</code> with search and <code>search results</code>
        </h1>
        <pre>
          {`
import styled from 'styled-components';

import {
  PopoverMenu,
  SectionHeader,
  EmptyState,
  ListItem,
} from '@8x8/oxygen-popover';
import Button from '@8x8/oxygen-button';
import { ArrowDownIcon, SearchIcon } from '@8x8/oxygen-icon';
import Avatar from '@8x8/oxygen-avatar';
import Input from '@8x8/oxygen-input';

const adminNames = [
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
const [filteredAdmins, setFilteredAdmins] = useState(adminNames);

const handleSearch = event => {
  const { value } = event.target;

  setSearchTerm(value);
  setFilteredAdmins(
    adminNames.filter(name =>
      name.toLowerCase().includes(value.toLowerCase()),
    ),
  );
};

...

<PopoverMenu
  header={
    <Input
      iconLeft={SearchIcon}
      placeholder="Search admin"
      value={searchTerm}
      onChange={handleSearch}
    />
  }
  items={
    filteredAdmins.length !== 0
      ? [
          <SectionHeader key="number-of-results">{\`\${filteredAdmins.length} results found\`}</SectionHeader>,
          filteredAdmins.map(renderContact),
        ]
      : [
          <EmptyState
            key="no-results"
            primaryMessage="No results found"
            secondaryMessage="Try a different search term."
            icon={<SearchIcon />}
          />,
          [],
        ]
  }
>
  <Button iconRight={<ArrowDownIcon />}>Select admin</Button>
</PopoverMenu>`}
        </pre>
      </Doc>
      <ComponentSection>
        <PopoverMenu
          {...args}
          header={
            <Input
              iconLeft={SearchIcon}
              placeholder="Search admin"
              value={searchTerm}
              onChange={handleSearch}
            />
          }
          items={
            filteredAdmins.length !== 0
              ? [
                  <SectionHeader key="number-of-results">{`${filteredAdmins.length} results found`}</SectionHeader>,
                  filteredAdmins.map(renderContact),
                ]
              : [
                  <EmptyState
                    key="no-results"
                    primaryMessage="No results found"
                    secondaryMessage="Try a different search term."
                    icon={<SearchIcon />}
                  />,
                  [],
                ]
          }
        >
          <Button iconRight={<ArrowDownIcon />}>Select admin</Button>
        </PopoverMenu>
      </ComponentSection>
      <Doc>
        <h1>
          <code>PopoverMenu</code> with <code> 3 search results</code>
        </h1>
        <pre>
          {`
import { PopoverMenu, SectionHeader } from '@8x8/oxygen-popover';
import Button from '@8x8/oxygen-button';
import Avatar from '@8x8/oxygen-avatar';
import { ArrowDownIcon, SearchIcon } from '@8x8/oxygen-icon';

export const Contact = styled.div\`
  display: flex;
  align-items: center;
  gap: 8px;
\`;

<PopoverMenu
  header={
    <Input
      iconLeft={SearchIcon}
      placeholder="Search admin"
      value={searchTerm}
      onChange={handleSearch}
    />
  }
  items={[
    <SectionHeader key="1">3 results found</SectionHeader>,
    [
      {
        key: 'admin-0',
        children: (
          <ListItem leadingVisuals={<Avatar size="2xsmall" />}>
            Lane Warren
          </ListItem>
        ),
      },
      {
        key: 'admin-1',
        children: (
          <ListItem leadingVisuals={<Avatar size="2xsmall" />}>
            Charlotte Lane
          </ListItem>
        ),
      },
      {
        key: 'admin-2',
        children: (
          <ListItem leadingVisuals={<Avatar size="2xsmall" />}>
            Courtney Henry Lane
          </ListItem>
        ),
      },
    ],
  ]}
>
  <Button iconRight={<ArrowDownIcon />}>Select admin</Button>
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
              placeholder="Search admin"
              value={searchTerm}
              onChange={handleSearch}
            />
          }
          items={[
            <SectionHeader key="1">3 results found</SectionHeader>,
            [
              {
                key: 'admin-0',
                children: (
                  <ListItem leadingVisuals={<Avatar size="2xsmall" />}>
                    Lane Warren
                  </ListItem>
                ),
              },
              {
                key: 'admin-1',
                children: (
                  <ListItem leadingVisuals={<Avatar size="2xsmall" />}>
                    Charlotte Lane
                  </ListItem>
                ),
              },
              {
                key: 'admin-2',
                children: (
                  <ListItem leadingVisuals={<Avatar size="2xsmall" />}>
                    Courtney Henry Lane
                  </ListItem>
                ),
              },
            ],
          ]}
        >
          <Button iconRight={<ArrowDownIcon />}>Select admin</Button>
        </PopoverMenu>
      </ComponentSection>
      <Doc>
        <h1>
          <code>PopoverMenu</code> with <code>no results found</code>
        </h1>
        <pre>
          {`
import { PopoverMenu, EmptyState } from '@8x8/oxygen-popover';
import Button from '@8x8/oxygen-button';
import { ArrowDownIcon } from '@8x8/oxygen-icon';
import Avatar from '@8x8/oxygen-avatar';

<PopoverMenu
  header={
    <Input
      iconLeft={SearchIcon}
      placeholder="Search admin"
      value={searchTerm}
      onChange={handleSearch}
    />
  }
  items={[
    <EmptyState
      key="no-results"
      primaryMessage="No results found"
      secondaryMessage="Try a different search term."
      icon={<SearchIcon />}
    />,
    [],
  ]}
>
  <Button iconRight={<ArrowDownIcon />}>Select admin</Button>
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
              placeholder="Search admin"
              value={searchTerm}
              onChange={handleSearch}
            />
          }
          items={[
            <EmptyState
              key="no-results"
              primaryMessage="No results found"
              secondaryMessage="Try a different search term."
              icon={<SearchIcon />}
            />,
            [],
          ]}
        >
          <Button iconRight={<ArrowDownIcon />}>Select admin</Button>
        </PopoverMenu>
      </ComponentSection>
      <Doc>
        <h1>
          <code>PopoverMenu</code> with <code>loading</code>
        </h1>
        <pre>
          {`
import { PopoverMenu, EmptyState } from '@8x8/oxygen-popover';
import Button from '@8x8/oxygen-button';
import { ArrowDownIcon } from '@8x8/oxygen-icon';
import Avatar from '@8x8/oxygen-avatar';

import { Spinner } from '@8x8/oxygen-loaders';

<PopoverMenu
  header={
    <Input
      iconLeft={SearchIcon}
      placeholder="Search admin"
      value={searchTerm}
      onChange={handleSearch}
    />
  }
  items={[
    <EmptyState
      key="loading-message"
      primaryMessage=""
      secondaryMessage="Please wait..."
      icon={<Spinner />}
    />,
    [],
  ]}
>
  <Button iconRight={<ArrowDownIcon />}>Select admin</Button>
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
              placeholder="Search admin"
              value={searchTerm}
              onChange={handleSearch}
            />
          }
          items={[
            <EmptyState
              key="loading-message"
              primaryMessage=""
              secondaryMessage="Please wait..."
              icon={<Spinner />}
            />,
            [],
          ]}
        >
          <Button iconRight={<ArrowDownIcon />}>Select admin</Button>
        </PopoverMenu>
      </ComponentSection>
    </>
  );
};

PopoverMenuSearchResultsStory.storyName = 'PopoverMenu with Search Results';
PopoverMenuSearchResultsStory.args = popoverMenuArgsConfig;
PopoverMenuSearchResultsStory.argTypes = popoverMenuArgTypesConfig;
PopoverMenuSearchResultsStory.parameters = {
  controls: { sort: 'requiredFirst' },
};
