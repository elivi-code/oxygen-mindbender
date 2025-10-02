/* eslint-disable no-underscore-dangle */
import React, { useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import FocusTrap from 'focus-trap-react';

import { withTheme } from '@8x8/oxygen-config';
import Overlay from '@8x8/oxygen-overlay';
import { useId, useGlobalActionKeyHandler, EventKey } from '@8x8/oxygen-utils';

import { propTypes, defaultProps } from './Modal.props';
import { Container, Content, PortalNode, ModalInnerWrapper } from '../styled';

const ModalPortal = ({
  isVisible,
  hasShadow,
  shouldCloseOnEsc,
  allowOutsideClick,
  shouldCloseOnOverlayClick,
  size,
  width,
  height,
  onClose,
  children,
  shouldUseFocusTrap = true,
  testId,
  theme,
  initialFocus,
  title,
  disableAutoFocus,
  modalProps,
  portalRef,
  focusAfterCloseItemRef,
  ...rest
}) => {
  /**
   * Request close action if the overlay is clicked and CloseOnOverlayClick is enabled
   */
  const onOverlayClick = useCallback(() => {
    if (shouldCloseOnOverlayClick) {
      onClose();
      focusAfterCloseItemRef?.current?.focus();
    }
  }, [shouldCloseOnOverlayClick, onClose, focusAfterCloseItemRef]);

  const handleCloseOnEscape = useCallback(() => {
    if (!shouldCloseOnEsc) {
      return;
    }
    onClose();
    focusAfterCloseItemRef?.current?.focus();
  }, [shouldCloseOnEsc, onClose, focusAfterCloseItemRef]);

  useGlobalActionKeyHandler({
    actionKeyHandler: handleCloseOnEscape,
    fireEvents: [EventKey.Escape],
  });

  const randomId = useId();
  const manualLabelId = modalProps?.['aria-labelledby'];
  const modalHeadingId = manualLabelId || randomId;

  const setContentRef = ref => {
    if (ref && !disableAutoFocus) {
      ref.focus();
    }
  };

  if (!isVisible) {
    return null;
  }

  // true if Modal has any other children other than ModalHeader & ModalFooter
  const modalHasContent = React.Children.toArray(children).some(
    child =>
      child?.props?.__TYPE !== 'ModalHeader' &&
      child?.props?.__TYPE !== 'ModalFooter',
  );

  const focusTrapOptions = {
    allowOutsideClick: allowOutsideClick ?? shouldCloseOnOverlayClick,
    fallbackFocus: window.document.activeElement,
    initialFocus,
  };

  return (
    <ThemeProvider theme={theme}>
      <Container {...rest}>
        <Overlay onClick={onOverlayClick} tabIndex="0" />
        <FocusTrap
          active={shouldUseFocusTrap}
          focusTrapOptions={focusTrapOptions}
        >
          <ModalInnerWrapper>
            <Content
              size={size}
              width={width}
              height={height}
              hasShadow={hasShadow}
              ref={setContentRef}
              testId={testId}
              role="dialog"
              aria-modal
              aria-labelledby={modalHeadingId}
              {...modalProps}
            >
              {React.Children.map(children, item => {
                // Pass in the modalHasContent prop only to ModalHeader & ModalFooter
                // Pass in the modalHeadingId as titleProps.id so there is
                // an association between aria-labelledby and headerTitle.id
                if (
                  item?.props?.__TYPE === 'ModalHeader' ||
                  item?.props?.__TYPE === 'ModalFooter'
                ) {
                  const updatedProps = { modalHasContent };

                  if (!manualLabelId && item?.props?.__TYPE === 'ModalHeader') {
                    updatedProps.titleProps = {
                      id: modalHeadingId,
                    };
                  }

                  return React.cloneElement(item, updatedProps);
                }

                return item;
              })}
            </Content>
            <PortalNode ref={portalRef} />
          </ModalInnerWrapper>
        </FocusTrap>
      </Container>
    </ThemeProvider>
  );
};

ModalPortal.propTypes = propTypes;
ModalPortal.defaultProps = defaultProps;

export default withTheme(ModalPortal, 'modal');

export { ModalPortal };
