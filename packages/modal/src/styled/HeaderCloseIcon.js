import styled from 'styled-components';

import { IconButton } from '@8x8/oxygen-button';
import { getTestAttributes } from '@8x8/oxygen-config';

const HeaderCloseIcon = styled(IconButton).attrs(() => ({
  ...getTestAttributes('MODAL_HEADER_CLOSE_ICON'),
}))`
  margin-left: auto;
`;

export default HeaderCloseIcon;
