import styled from 'styled-components';

import { getTestAttributes } from '@8x8/oxygen-config';

import { MODAL_SIZE } from '../constants';

function getModalWidth({ width, size, theme }) {
  if (width) {
    return width;
  }

  if (size === MODAL_SIZE.BIG) {
    return theme.widthLarge;
  }

  if (size === MODAL_SIZE.SMALL) {
    return theme.widthSmall;
  }

  // MODAL_SIZE.SMALL & Default
  return theme.width;
}

function getModalHeight({ height, theme }) {
  if (height) {
    return `height: ${height};`;
  }

  return `
    min-height: ${theme.minHeight};
    max-height: calc(100% - ${theme.modalOffsetMinimal});
  `;
}

/**
 * Return the button shadow based on props
 * @param {Object} props
 * @return {String}
 */
function getModalBoxShadow({ hasShadow, theme }) {
  return `box-shadow: ${
    hasShadow ? `${theme.shadowSize} ${theme.shadowColor}` : 'none'
  }`;
}

const Content = styled.div.attrs(({ testId }) => ({
  ...getTestAttributes(testId),
}))`
  ${getModalHeight};
  width: ${getModalWidth};
  max-width: calc(100% - ${({ theme }) => theme.modalOffsetMinimal});
  background: ${({ theme }) => theme.backgroundColor};
  ${props => getModalBoxShadow(props)};
  border-radius: ${({ theme }) => theme.borderRadius};
  position: relative;
  outline: none;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.animation};
  z-index: ${({ theme }) => theme.zIndex};
  overflow: auto;
`;

export default Content;
