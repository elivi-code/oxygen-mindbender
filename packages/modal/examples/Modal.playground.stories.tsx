import React from 'react';
import Modal, {
  ModalContent,
  ModalHeader,
  ModalFooter,
} from '@8x8/oxygen-modal';
import Button, { buttonVariant } from '@8x8/oxygen-button';
import Label from '@8x8/oxygen-label';
import Typography from '@8x8/oxygen-typography';
import Input from '@8x8/oxygen-input';

import {
  ComponentSection,
  PlaygroundDecorator,
} from '@8x8/oxygen-storybook-utils';
import ZLabel from './ZLabel';

import {
  argsConfig,
  argTypesConfig,
  getModalProps,
  useModalState,
} from './config';

const ModalPlaygroundStory = args => {
  const {
    isOpen,
    onClose,
    onOpen,
    modalProps,
    modalHeaderProps,
    modalFooterProps,
  } = useModalState(args);

  return (
    <>
      {isOpen && (
        <Modal {...modalProps} onClose={onClose}>
          <ModalHeader {...modalHeaderProps} />
          <ModalContent>
            <Typography>
              To change the initial focused element, type the input field `id`
              into initialFocus input on the Modal Knob section on the right
              pane.
              <br />
              <br />
            </Typography>
            <Label value="This is field id: focused-input-01" />
            <Input id="focused-input-01" />
            <Label value="This is field id: focused-input-02" />
            <Input id="focused-input-02" />
          </ModalContent>
          <ModalFooter {...modalFooterProps}>
            <Button>Import is focus</Button>
            <Button onClick={onClose} variant={buttonVariant.secondary}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      )}

      <div>
        <Button onClick={onOpen}>Click to open modal!</Button>
      </div>
    </>
  );
};

export const PlaygroundModal = args => {
  const { testLabelProps } = getModalProps(args);

  return (
    <ComponentSection style={{ flexDirection: 'column' }}>
      <ZLabel {...testLabelProps}>
        Test label with customizable position and z-index (see Theme Knobs)
      </ZLabel>

      <ModalPlaygroundStory {...args} />
    </ComponentSection>
  );
};

PlaygroundModal.storyName = '10. Playground';
PlaygroundModal.args = argsConfig;
PlaygroundModal.argTypes = argTypesConfig;

export default {
  title: 'Components/Modal',
  component: Modal,
  decorators: [PlaygroundDecorator],
};
