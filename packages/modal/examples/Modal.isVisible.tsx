import React from 'react';

import Button from '@8x8/oxygen-button';
import Modal, { ModalHeader, ModalContent } from '@8x8/oxygen-modal';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { argsConfig, argTypesConfig, useModalState } from './config';

export const ModalIsVisible = args => {
  const { isOpen, onOpen, modalProps, modalHeaderProps } = useModalState(args);

  return (
    <Doc>
      <h1>
        <code>Modal</code> <code>isVisible</code>prop
      </h1>
      <p>
        This is a prop that should be avoided. Render the modal conditionally
        instead. Testcase page for https://agile.8x8.com/browse/OX-1126
      </p>
      <ComponentSection>
        <Modal {...modalProps} isVisible={isOpen}>
          <ModalHeader {...modalHeaderProps} />
          <ModalContent>should not throw when closing</ModalContent>
        </Modal>
        <div>
          <Button onClick={onOpen}>Open Modal</Button>
        </div>
      </ComponentSection>
    </Doc>
  );
};

ModalIsVisible.storyName = 'isVisible';
ModalIsVisible.args = argsConfig;
ModalIsVisible.argTypes = argTypesConfig;
