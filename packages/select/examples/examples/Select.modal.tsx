import React, { useState } from 'react';
import Select from '@8x8/oxygen-select';
import Button from '@8x8/oxygen-button';
import Modal, {
  ModalHeader,
  ModalContent,
  ModalFooter,
} from '@8x8/oxygen-modal';

import {
  Doc,
  ComponentSection,
  PlaygroundDecorator,
} from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from '../config';

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

export const SelectModal = args => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  return (
    <>
      <Doc>
        <h1>
          <code>Select</code> in a <code>Modal</code>
        </h1>
        <p>
          Example to ensure <code>Select</code> renders correctly in a{' '}
          <code>Modal</code>.
        </p>
        <p>
          <code>react-select</code> allows to render the menu through a portal
          by providing an HTMLElement on the <code>menuPortalTarget</code> prop.
          It does not accept a ref directly, so we have to use a callback style
          ref and store the element in state
        </p>
        <pre>
          {`
import Select from '@8x8/oxygen-select';
import Button from '@8x8/oxygen-button';
import Modal, {
  ModalHeader,
  ModalContent,
  ModalFooter,
} from '@8x8/oxygen-modal';

const [modalOpen, setModalOpen] = useState<boolean>(false);
const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

<Button onClick={() => setModalOpen(true)}>Open Modal</Button>
{modalOpen && (
  <Modal portalRef={el => setPortalTarget(el)}>
    <ModalHeader title="Select in Modal" />
    <ModalContent>
      <Select
        options={[
          { value: 'One', label: 'Option One' },
          { value: 'Two', label: 'Option Two' },
          ...
          { value: 'Eight', label: 'Option Eight' },
        ]}
        menuPortalTarget={portalTarget}
      />
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
          <Modal portalRef={el => setPortalTarget(el)}>
            <ModalHeader title="Select in Modal" />
            <ModalContent>
              <Select
                {...args}
                options={selectOptions}
                menuPortalTarget={portalTarget}
              />
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
SelectModal.args = argsConfig;
SelectModal.argTypes = argTypesConfig;
SelectModal.storyName = 'Select in Modal';

export default {
  title: 'Components/Select',
  component: Select,
  decorators: [PlaygroundDecorator],
};
