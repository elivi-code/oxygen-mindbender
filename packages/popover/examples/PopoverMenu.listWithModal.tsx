import React, { useState, useRef } from 'react';

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

export const PopoverMenuListWithModal = args => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedButtonRef, setFocusedButtonRef] =
    useState<React.RefObject<HTMLElement> | null>(null);

  const firstButtonRef = useRef<HTMLElement>(null);
  const secondButtonRef = useRef<HTMLElement>(null);

  const handleOpen = buttonRef => {
    setFocusedButtonRef(buttonRef);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);

    if (focusedButtonRef?.current) {
      // Use setTimeout to ensure this happens after the modal is fully closed
      setTimeout(() => {
        focusedButtonRef.current?.focus();
      }, 0);
    }
  };

  const items = [
    {
      key: '1',
      children: 'Focus source button',
    },
    {
      key: '2',
      children: 'Focus specific element',
    },
  ];

  // Handle item selection from the PopoverMenu
  const handleItemSelect = (obj: { key: string; children: string }) => {
    const { key } = obj;

    // Determine which button to focus based on the selected item
    if (key === '1') {
      handleOpen(firstButtonRef);
    } else if (key === '2') {
      handleOpen(secondButtonRef);
    }
  };

  return (
    <>
      <Doc>
        <h1>
          <code>PopoverMenu list with modal </code>
        </h1>
        <p>
          Example that will refocus the source or specific button on modal
          close.
        </p>
        <pre>
          {`
import { PopoverMenu } from '@8x8/oxygen-popover';
import { DropdownButton } from '@8x8/oxygen-button';

<Popover
  items={[
    {
      key: '1',
      children: 'Focus source button',
    },
    {
      key: '2',
      children: 'Focus specific element',
    },
  ]}
>
  <DropdownButton>Dropdown Button</DropdownButton>
</Popover>
        `}
        </pre>
      </Doc>
      <ComponentSection>
        <PopoverMenu
          {...args}
          items={items}
          ref={firstButtonRef}
          onUpdate={handleItemSelect}
        >
          <IconButton aria-label="Open menu">
            <DotsVerticalIcon />
          </IconButton>
        </PopoverMenu>
        <Button ref={secondButtonRef}>Focus Me!</Button>

        {isOpen && (
          <Modal
            shouldCloseOnEsc
            shouldUseFocusTrap
            onClose={handleClose}
            focusAfterCloseItemRef={focusedButtonRef ?? undefined}
          >
            <ModalHeader title="Modal Title" />
            <ModalContent>Modal Content</ModalContent>
            <ModalFooter>
              <Button onClick={handleClose}>Close</Button>
            </ModalFooter>
          </Modal>
        )}
      </ComponentSection>
    </>
  );
};
PopoverMenuListWithModal.storyName = 'PopoverMenu list with modal';
PopoverMenuListWithModal.args = popoverMenuArgsConfig;
PopoverMenuListWithModal.argTypes = popoverMenuArgTypesConfig;
PopoverMenuListWithModal.parameters = { controls: { sort: 'requiredFirst' } };
