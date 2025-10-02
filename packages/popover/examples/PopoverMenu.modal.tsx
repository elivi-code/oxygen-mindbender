import React, { useRef, useState } from 'react';

import { PopoverMenu } from '@8x8/oxygen-popover';
import Button, { DropdownButton } from '@8x8/oxygen-button';
import Modal, {
  ModalHeader,
  ModalContent,
  ModalFooter,
} from '@8x8/oxygen-modal';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { popoverMenuArgsConfig, popoverMenuArgTypesConfig } from './config';

const items = [
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
];

export const PopoverMenuModal = args => {
  const portalRef = useRef(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <Doc>
        <h1>
          <code>PopoverMenu</code> rendered in a <code>Modal</code>
        </h1>
        <p>
          Example to ensure <code>PopoverMenu</code> renders correctly if there
          are multiple menu items, you need to manage a ref (through which you
          have access to a <code>Modal</code> node where you can safely render
          the floating container).
        </p>
        <ol>
          <li>create a local ref</li>
          <li>
            pass it to the <code>Modal</code> <code>portalRef</code> prop (this
            will attach the ref to the <code>Modal</code>&apos;s internal node)
          </li>
          <li>
            pass the same ref to the <code>PopoverMenu</code>
            <code>portalTargetRef</code> prop (this will instruct the
            <code>PopoverMenu</code> component to render the floating container
            inside of the node specified under the ref)
          </li>
        </ol>
        <pre>
          {`
import { PopoverMenu } from '@8x8/oxygen-popover';
import { DropdownButton } from '@8x8/oxygen-button';

const portalRef = useRef(null);
const [modalOpen, setModalOpen] = useState<boolean>(false);

<Button onClick={() => setModalOpen(true)}>Open Modal</Button>
{modalOpen && (
  <Modal portalRef={portalRef}>
    <ModalHeader title="Title" />
    <ModalContent>
      <PopoverMenu
        portalTargetRef={portalRef}
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
        ]}>
        <DropdownButton>I am rendered in a modal</DropdownButton>
      </PopoverMenu>
    </ModalContent>
    <ModalFooter>
      <Button onClick={() => setModalOpen(false)}>Close</Button>
    </ModalFooter>
  </Modal>
)}

        `}
        </pre>
      </Doc>
      <ComponentSection>
        <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
        {modalOpen && (
          <Modal portalRef={portalRef}>
            <ModalHeader title="PopoverMenu in Modal" />
            <ModalContent>
              <PopoverMenu {...args} items={items} portalTargetRef={portalRef}>
                <DropdownButton>I am rendered in a modal</DropdownButton>
              </PopoverMenu>
            </ModalContent>
            <ModalFooter>
              <Button onClick={() => setModalOpen(false)}>Close</Button>
            </ModalFooter>
          </Modal>
        )}
      </ComponentSection>
    </>
  );
};
PopoverMenuModal.storyName = 'PopoverMenu rendered in a Modal';
PopoverMenuModal.args = popoverMenuArgsConfig;
PopoverMenuModal.argTypes = popoverMenuArgTypesConfig;
PopoverMenuModal.parameters = { controls: { sort: 'requiredFirst' } };
