import React from 'react';
import Modal, {
  ModalContent,
  ModalHeader,
  ModalFooter,
} from '@8x8/oxygen-modal';

import Button, { buttonVariant } from '@8x8/oxygen-button';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { argsConfig, argTypesConfig, useModalState } from './config';

export const ModalAccessibility = args => {
  const {
    isOpen,
    onClose,
    onOpen,
    modalProps,
    modalHeaderProps,
    modalFooterProps,
  } = useModalState(args);

  return (
    <Doc>
      <h1>
        <code>Modal</code> accessibility
      </h1>
      <p>
        Example using Modal with some primary + secondary buttons, the following
        attributes <code>aria-labelledby</code> are passed down to the Modal
        Dialog and HeaderTitle. This is done so that when focus is set on the
        modal screen readers read out the value of the <code>title</code>. If a
        <code>title</code> is not set we to set an <code>aria-label</code> for
        the screen readers to read out. Role attribute gets set a default value
        of <code>dialog</code>, and <code>aria-labelledby</code> gets a unique
        id
      </p>
      <p>
        This is done to improve screen reader information about the modal when
        focus is set to the modal initially. If we want to set a custom role set
        it in the `modalProps.role = alertdialog`.
      </p>
      <pre>
        {`import Modal, {
ModalContent,
ModalHeader,
ModalFooter,
MODAL_SIZE,
MODAL_HEADER_ALIGN_TITLE,
MODAL_FOOTER_ALIGN,
} from '@8x8/oxygen-modal';

import Button, { buttonVariant } from '@8x8/oxygen-button';
import Label from '@8x8/oxygen-label';
import Typography from '@8x8/oxygen-typography';
import Input from '@8x8/oxygen-input';

const ModalPlaygroundStory = args => {
  const [isVisible, setIsVisible] = useState(true);
  const onClose = () => {
    action('onClose');
    setIsVisible(false);
  };

  const onOpen = () => {
    action('onOpen');
    setIsVisible(true);
  };

  return (
    <>
      {isVisible && (
        <Modal {...args} onClose={onClose}>
          <ModalHeader
            title={args?.title}
            onClose={args.onCloseFn ? onClose : undefined}>
            {args.modalHeaderChildren}
          </ModalHeader>
          <ModalContent>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Typography>
          </ModalContent>
          <ModalFooter {...args}>
            <Button onClick={onClose} variant={buttonVariant.secondary}>
              Cancel
            </Button>
            <Button>Save</Button>
          </ModalFooter>
        </Modal>
      )}

      <div>
        <Button onClick={onOpen}>Click to open modal!</Button>
      </div>
    </>
  );
};`}
      </pre>
      <ComponentSection>
        {isOpen && (
          <Modal {...modalProps}>
            <ModalHeader {...modalHeaderProps} />
            <ModalContent>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industries standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </ModalContent>
            <ModalFooter {...modalFooterProps}>
              <Button onClick={onClose} variant={buttonVariant.secondary}>
                Cancel
              </Button>
              <Button>Save</Button>
            </ModalFooter>
          </Modal>
        )}

        <div>
          <Button onClick={onOpen}>Open Modal</Button>
        </div>
      </ComponentSection>
    </Doc>
  );
};

ModalAccessibility.storyName = 'Accessibility';
ModalAccessibility.args = argsConfig;
ModalAccessibility.argTypes = argTypesConfig;
