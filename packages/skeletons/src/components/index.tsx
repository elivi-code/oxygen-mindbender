import React from 'react';
import styled from 'styled-components';

import { getTestAttributes } from '@8x8/oxygen-config';
import { Theme } from '@8x8/oxygen-theme';
import {
  type SkeletonProps,
  typographySizes,
  avatarSizes,
  avatarSizeMap,
} from '../types';

import skeletonAnimation from './skeletonAnimation';

const getSize = (theme: Theme, size: SkeletonProps['size']) => {
  const typographySize = typographySizes.find(value => size === value);

  // have one of the typography-related sizes, these match the lineheight of the typography tokens
  if (typographySize) {
    return theme[typographySize].lineHeight;
  }

  const avatarSize = avatarSizes.find(value => size === value);

  // have one of the Avatar sizes matching, the size is a number in px and does not scale with base font-size
  if (avatarSize) {
    return `${avatarSizeMap[avatarSize]}px`;
  }

  // custom size string, can be anything. final escape hatch
  return size;
};

const SkeletonBlockStyled = styled.div<Omit<SkeletonProps, 'testId'>>`
  height: ${({ theme, size }) => getSize(theme, size)};
  border-radius: 6px;

  ${skeletonAnimation};
`;

const SkeletonCircleStyled = styled.div<Omit<SkeletonProps, 'testId'>>`
  ${({ size, theme }) => {
    const s = getSize(theme, size);

    return `
      height: ${s};
      min-height: ${s};
      width: ${s};
      min-width: ${s};
    `;
  }}

  border-radius: 50%;

  ${skeletonAnimation};
`;

const SkeletonBlock: React.FC<SkeletonProps> = ({
  size = 'body01',
  testId = 'SKELETON_BLOCK',
  ...rest
}) => (
  <SkeletonBlockStyled size={size} {...getTestAttributes(testId)} {...rest} />
);

const SkeletonCircle: React.FC<SkeletonProps> = ({
  size = 'body01',
  testId = 'SKELETON_CIRCLE',
  ...rest
}) => (
  <SkeletonCircleStyled size={size} {...getTestAttributes(testId)} {...rest} />
);

export { SkeletonBlock, SkeletonCircle, skeletonAnimation };
