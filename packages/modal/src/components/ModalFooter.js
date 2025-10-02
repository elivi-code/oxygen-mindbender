import React from 'react';
import PropTypes from 'prop-types';

import { withTheme } from '@8x8/oxygen-config';

import FooterContainer from '../styled/FooterContainer';
import { MODAL_FOOTER_ALIGN } from '../constants';

const ModalFooter = ({ children, ...passThroughProps }) => (
  <FooterContainer {...passThroughProps}>{children}</FooterContainer>
);

ModalFooter.propTypes = {
  align: PropTypes.oneOf(Object.values(MODAL_FOOTER_ALIGN)),
  children: PropTypes.node,
  hasBorderTop: PropTypes.bool,
  hasButtonSpacing: PropTypes.bool,
  isSmall: PropTypes.bool,
  modalHasContent: PropTypes.bool,
  testId: PropTypes.string,
  theme: PropTypes.object,
  __TYPE: PropTypes.string,
};

ModalFooter.defaultProps = {
  align: MODAL_FOOTER_ALIGN.RIGHT,
  children: null,
  hasBorderTop: false,
  hasButtonSpacing: true,
  isSmall: false,
  modalHasContent: true,
  testId: 'MODAL_FOOTER',
  __TYPE: 'ModalFooter',
};

export default withTheme(ModalFooter, 'modal');

export { ModalFooter, MODAL_FOOTER_ALIGN };
