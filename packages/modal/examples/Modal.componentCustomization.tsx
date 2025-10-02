import React from 'react';
import styled from 'styled-components';

import Button from '@8x8/oxygen-button';
import Modal, {
  ModalHeader,
  ModalContent,
  ModalFooter,
  Styled,
} from '@8x8/oxygen-modal';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { argsConfig, argTypesConfig, useModalState } from './config';

const {
  FooterContainer,
  HeaderContainer,
  HeaderSubtitle,
  HeaderTitle,
  HeaderTitleWrapper,
  HeaderCloseIcon,
} = Styled;

const CustomWrapper = styled.div`
  ${FooterContainer} {
    border: 1px solid red;
  }
  ${HeaderContainer} {
    border: 1px solid blue;
  }
  ${HeaderSubtitle} {
    border: 1px solid cyan;
  }
  ${HeaderTitle} {
    border: 1px solid green;
  }
  ${HeaderTitleWrapper} {
    border: 1px solid brown;
  }
  ${HeaderCloseIcon} {
    border: 1px solid magenta;
  }
`;

export const ModalComponentCustomization = args => {
  const {
    isOpen,
    onOpen,
    onClose,
    modalProps,
    modalHeaderProps,
    modalFooterProps,
  } = useModalState(args);

  return (
    <>
      <Doc>
        <h1>
          <code>Modal</code> component customization
        </h1>
        <p>
          Low level UI components under Modal can be customized. This is not
          recommended, but can be done if needed
        </p>
        <p>These are the exposed components.</p>
        <ul>
          <li>
            <em>(deprecated)</em> <code>Container</code> — can&apos;t be
            customized
          </li>
          <li>
            <em>(deprecated)</em> <code>Content</code> — can&apos;t be
            customized
          </li>
          <li>
            <code>FooterContainer</code>
          </li>
          <li>
            <code>HeaderCloseIcon</code>
          </li>
          <li>
            <code>HeaderContainer</code>
          </li>
          <li>
            <code>HeaderTitle</code>
          </li>
          <li>
            <code>HeaderTitleWrapper</code>
          </li>
          <li>
            <code>HeaderSubtitle</code>
          </li>
        </ul>
        <pre>
          {`
import Modal, {
  ModalHeader,
  ModalContent,
  ModalFooter,
  Styled,
} from '@8x8/oxygen-modal';

const {
  FooterContainer,
  HeaderContainer,
  HeaderSubtitle,
  HeaderTitle,
  HeaderTitleWrapper,
  HeaderCloseIcon,
} = Styled;

const CustomWrapper = styled.div\`
  \${FooterContainer} {
    border: 1px solid red;
  }
  \${HeaderContainer} {
    border: 1px solid blue;
  }
  \${HeaderSubtitle} {
    border: 1px solid cyan;
  }
  \${HeaderTitle} {
    border: 1px solid green;
  }
  \${HeaderTitleWrapper} {
    border: 1px solid brown;
  }
  \${HeaderCloseIcon} {
    border: 1px solid magenta;
  }
\`;

// in a react component
const [isOpen, setIsOpen] = useState(false);

const onClose = () => {
  setIsOpen(false);
};

const onOpen = () => {
  setIsOpen(true);
};

<Button onClick={onOpen}>Open Modal</Button>
{isOpen && (
  <Modal>
    <CustomWrapper>
      <ModalHeader title="Modal Title">
        Subtitle
      </ModalHeader>
      <ModalContent>
        <p>Content</p>
      </ModalContent>
      <ModalFooter>
        <Button onClick={onClose}>Close</Button>
      </ModalFooter>
    </CustomWrapper>
  </Modal>
);
        `}
        </pre>
      </Doc>
      <ComponentSection>
        <Button onClick={onOpen}>Open Modal</Button>
        {isOpen && (
          <Modal {...modalProps}>
            <CustomWrapper>
              <ModalHeader {...modalHeaderProps} />
              <ModalContent>
                <p>Content</p>
              </ModalContent>
              <ModalFooter {...modalFooterProps}>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </CustomWrapper>
          </Modal>
        )}
      </ComponentSection>
    </>
  );
};
ModalComponentCustomization.storyName = 'Modal component customization';
ModalComponentCustomization.args = argsConfig;
ModalComponentCustomization.argTypes = argTypesConfig;
