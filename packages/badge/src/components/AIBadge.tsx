import React from 'react';
import { getTestAttributes } from '@8x8/oxygen-config';
import { StarIcon } from '@8x8/oxygen-icon';

import AIBadgeWrapper from '../styled/AIBadgeWrapper';
import { AIBadgeProps } from '../types';

const AIBadge = ({
  children = 'AI',
  testId = 'AI_BADGE',
  ...props
}: AIBadgeProps) => {
  return (
    <AIBadgeWrapper {...getTestAttributes(testId)} {...props}>
      <StarIcon size={16} color="currentColor" aria-hidden="true" />
      {children}
    </AIBadgeWrapper>
  );
};

AIBadge.displayName = 'AIBadge';

export default AIBadge;
