import React from 'react';

import { PopoverMenu } from '@8x8/oxygen-popover';
import Button, { IconButton } from '@8x8/oxygen-button';
import { DotsVerticalIcon } from '@8x8/oxygen-icon';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import Modal, {
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@8x8/oxygen-modal';
import { popoverMenuArgsConfig, popoverMenuArgTypesConfig } from './config';

export const PopoverMenuStory = args => {
  const [isOpen, setIsOpen] = React.useState(false);

  const items = [
    {
      key: '1',
      children: 'List Label 1',
      onClick: () => {
        // Call the onOpen function to open the modal
        setIsOpen(true);
      },
    },
    {
      key: '2',
      children: 'List Label 2',
    },
    {
      key: '3',
      children: 'List Label 3',
    },
  ];

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Doc>
        <h1>
          <code>PopoverMenu</code>
        </h1>
        <p>
          The <code>PopoverMenu</code> component is in a way a specific (&
          opinionanted) implementation of the <code>Popover</code>. It is made
          specifically for list items. If you need a more generic approach you
          should use the <code>Popover</code> component instead.
        </p>
        <pre>
          {`
import { PopoverMenu } from '@8x8/oxygen-popover';
import { DropdownButton } from '@8x8/oxygen-button';

<Popover
  items={[
    {
      key: '1',
      children: 'List Label 1',
    },
    {
      key: '2',
      children: 'List Label 2',
    },
    {
      key: '3',
      children: 'List Label 3',
    },
  ]}
>
  <DropdownButton>Dropdown Button</DropdownButton>
</Popover>

<Popover
  items={[
    {
      key: '1',
      children: 'List Label 1',
    },
    {
      key: '2',
      children: 'List Label 2',
    },
    {
      key: '3',
      children: 'List Label 3',
    },
  ]}
>
  <IconButton aria-label="Open menu">
    <DotsVerticalIcon />
  </IconButton>
</Popover>
        `}
        </pre>
      </Doc>
      <ComponentSection>
        <PopoverMenu {...args} items={items}>
          <IconButton aria-label="Open menu">
            <DotsVerticalIcon />
          </IconButton>
        </PopoverMenu>
        {isOpen && (
          <Modal shouldCloseOnEsc shouldUseFocusTrap onClose={handleClose}>
            <ModalHeader title="Modal Title" />
            <ModalContent>Modal Content</ModalContent>
            <ModalFooter>
              <Button onClick={() => setIsOpen(false)}>Close</Button>
            </ModalFooter>
          </Modal>
        )}
      </ComponentSection>
    </>
  );
};
PopoverMenuStory.storyName = 'PopoverMenu';
PopoverMenuStory.args = popoverMenuArgsConfig;
PopoverMenuStory.argTypes = popoverMenuArgTypesConfig;
PopoverMenuStory.parameters = { controls: { sort: 'requiredFirst' } };
