import styled from 'styled-components';
import { getTestAttributes } from '@8x8/oxygen-config';
import getColors from './utils/getColors';
import { badgePosition } from '../types';
const sizeMap = {
    small: {
        dimension: 'sizeSmall',
        fontSize: 'fontSizeSmall',
        lineHeight: 'lineHeightSmall',
        padding: 'paddingSmall',
    },
    medium: {
        dimension: 'sizeMedium',
        fontSize: 'fontSizeMedium',
        lineHeight: 'lineHeightMedium',
        padding: 'paddingMedium',
    },
    big: {
        dimension: 'sizeBig',
        fontSize: 'fontSizeBig',
        lineHeight: 'lineHeightBig',
        padding: 'paddingBig',
    },
};
function getContainerDimensions({ size, theme, }) {
    return `
    min-width: ${theme[sizeMap[size].dimension]};
    min-height: ${theme[sizeMap[size].dimension]};
    border-radius: 999rem;
    font-size: ${theme[sizeMap[size].fontSize]};
    line-height: ${theme[sizeMap[size].lineHeight]};
    padding: 0 ${theme[sizeMap[size].padding]};
  `;
}
const isTopEnd = (position) => position === badgePosition.topRight || position === badgePosition['top-end'];
const isTopStart = (position) => position === badgePosition.topLeft || position === badgePosition['top-start'];
const isBottomEnd = (position) => position === badgePosition.bottomRight ||
    position === badgePosition['bottom-end'];
const isBottomStart = (position) => position === badgePosition.bottomLeft ||
    position === badgePosition['bottom-start'];
function getContainerPosition({ position, isInner, size, theme, }) {
    if (!position) {
        return '';
    }
    const positionMap = {
        small: 'positionOuterSmall',
        medium: 'positionOuterMedium',
        big: 'positionOuterBig',
    };
    const positionOuter = isInner ? 0 : theme[positionMap[size]];
    let vertical = '';
    let horizontal = '';
    if (isTopEnd(position) || isTopStart(position)) {
        vertical = positionOuter ? `top: -${positionOuter}` : 'top: 0';
    }
    if (isBottomEnd(position) || isBottomStart(position)) {
        vertical = positionOuter ? `bottom: -${positionOuter}` : 'bottom: 0';
    }
    if (isTopStart(position) || isBottomStart(position)) {
        horizontal = positionOuter ? `left: -${positionOuter}` : 'left: 0';
    }
    if (isTopEnd(position) || isBottomEnd(position)) {
        horizontal = positionOuter ? `right: -${positionOuter}` : 'right: 0';
    }
    return `
  position: absolute;
  ${vertical};
  ${horizontal};
`;
}
const BadgeWrapper = styled.div.attrs(({ testId }) => ({
    ...getTestAttributes(testId),
})) `
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight};
  ${props => getContainerDimensions(props)};
  ${props => getContainerPosition(props)};
  ${getColors};
`;
export default BadgeWrapper;
