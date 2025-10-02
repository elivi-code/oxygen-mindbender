import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import isFunction from 'lodash.isfunction';

import { withTheme } from '@8x8/oxygen-config';
import { CloseLargeIcon } from '@8x8/oxygen-icon';

import {
  HeaderContainer,
  HeaderCloseIcon,
  HeaderTitle,
  HeaderTitleWrapper,
  HeaderSubtitle,
} from '../styled';

import { MODAL_HEADER_ALIGN_TITLE } from '../constants';

const ModalHeader = ({
  alignTitle,
  children,
  hasBorderBottom,
  modalHasContent,
  iconCloseTitle,
  buttonCloseRef,
  onClose,
  testId,
  theme,
  title,
  titleProps,
  ...props
}) => {
  const rendersCloseButton = isFunction(onClose);

  return (
    <ThemeProvider theme={theme}>
      <HeaderContainer
        hasBorderBottom={hasBorderBottom}
        modalHasContent={modalHasContent}
        onClose={onClose}
        testId={testId}
        {...props}
      >
        {(title || rendersCloseButton) && (
          <HeaderTitleWrapper>
            {title && (
              <HeaderTitle alignTitle={alignTitle} {...titleProps}>
                {title}
              </HeaderTitle>
            )}

            {rendersCloseButton && (
              <HeaderCloseIcon
                ref={buttonCloseRef}
                title={iconCloseTitle}
                onClick={onClose}
              >
                <CloseLargeIcon role="presentation" />
              </HeaderCloseIcon>
            )}
          </HeaderTitleWrapper>
        )}
        {children && <HeaderSubtitle>{children}</HeaderSubtitle>}
      </HeaderContainer>
    </ThemeProvider>
  );
};

ModalHeader.propTypes = {
  alignTitle: PropTypes.oneOf(Object.values(MODAL_HEADER_ALIGN_TITLE)),
  children: PropTypes.node,
  hasBorderBottom: PropTypes.bool,
  modalHasContent: PropTypes.bool,
  iconCloseTitle: PropTypes.string,
  onClose: PropTypes.func,
  testId: PropTypes.string,
  theme: PropTypes.object,
  title: PropTypes.string,
  buttonCloseRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  titleProps: PropTypes.object,
  __TYPE: PropTypes.string,
};

ModalHeader.defaultProps = {
  alignTitle: MODAL_HEADER_ALIGN_TITLE.LEFT,
  children: null,
  hasBorderBottom: false,
  modalHasContent: true,
  onClose: undefined,
  iconCloseTitle: 'Close',
  testId: 'MODAL_HEADER',
  title: '',
  buttonCloseRef: undefined,
  titleProps: {
    // Use if manually setting the title id for Modal aria-labelledby
    id: undefined,
  },
  __TYPE: 'ModalHeader',
};

export default withTheme(ModalHeader, 'modal');

export { ModalHeader, MODAL_HEADER_ALIGN_TITLE };
