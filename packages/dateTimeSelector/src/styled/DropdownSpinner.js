import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Spinner } from '@8x8/oxygen-loaders';

export const OverlayCentered = styled.div`
  max-width: 100%;
  min-width: 282px;
  padding: 24px 0;
`;

export const DropdownSpinner = ({ loadingMessage }) => (
  <OverlayCentered>
    <Spinner size="small" text={loadingMessage} />
  </OverlayCentered>
);

DropdownSpinner.propTypes = {
  loadingMessage: PropTypes.string,
};
