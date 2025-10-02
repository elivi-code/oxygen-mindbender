import React, { useRef, useState } from 'react';

import { Popover } from '@8x8/oxygen-popover';
import Button, { DropdownButton } from '@8x8/oxygen-button';
import Modal, {
  ModalHeader,
  ModalContent,
  ModalFooter,
} from '@8x8/oxygen-modal';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { popoverArgsConfig, popoverArgTypesConfig } from './config';

export const PopoverModal = args => {
  const portalRef = useRef(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Doc>
        <h1>
          <code>Popover</code> rendered in a <code>Modal</code>
        </h1>
        <p>
          Example to ensure <code>Popover</code> renders correctly if there are
          multiple menu items, you need to manage a ref (through which you have
          access to a <code>Modal</code> node where you can safely render the
          floating container).
        </p>
        <ol>
          <li>create a local ref</li>
          <li>
            pass it to the <code>Modal</code> <code>portalRef</code> prop (this
            will attach the ref to the <code>Modal</code>&apos;s internal node)
          </li>
          <li>
            pass the same ref to the <code>Popover</code>
            <code>portalTargetRef</code> prop (this will instruct the
            <code>Popover</code> component to render the floating container
            inside of the node specified under the ref)
          </li>
        </ol>
        <pre>
          {`
import { Popover } from '@8x8/oxygen-popover';
import { DropdownButton } from '@8x8/oxygen-button';

const portalRef = useRef(null);
const [modalOpen, setModalOpen] = useState<boolean>(false);
const [isOpen, setIsOpen] = useState<boolean>(false);

<Button onClick={() => setModalOpen(true)}>Open Modal</Button>
{modalOpen && (
  <Modal portalRef={portalRef}>
    <ModalHeader title="Title" />
    <ModalContent>
      <Popover
        portalTargetRef={portalRef}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        floatingContent={
          <div
            style={{
              height: '200px',
              background: 'white',
              padding: '10px',
            }}
          >
            I am very tall
          </div>
        }
      >
        <DropdownButton>I am rendered in a modal</DropdownButton>
      </Popover>
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
            <ModalHeader title="Popover in Modal" />
            <ModalContent>
              <Popover
                {...args}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                floatingContent={
                  <div
                    style={{
                      height: '200px',
                      background: 'white',
                      padding: '10px',
                    }}
                  >
                    I am very tall
                    <br />
                    <input type="text" placeholder="Test focus 1" />
                    <br />
                    <input type="text" placeholder="Test focus 2" />
                  </div>
                }
                portalTargetRef={portalRef}
              >
                <DropdownButton>I am rendered in a modal</DropdownButton>
              </Popover>
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
PopoverModal.storyName = 'Popover rendered in a Modal';
PopoverModal.args = popoverArgsConfig;
PopoverModal.argTypes = popoverArgTypesConfig;
PopoverModal.parameters = { controls: { sort: 'requiredFirst' } };
