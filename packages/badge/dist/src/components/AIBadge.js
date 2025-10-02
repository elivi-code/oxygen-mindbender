import React from 'react';
import { getTestAttributes } from '@8x8/oxygen-config';
import { StarIcon } from '@8x8/oxygen-icon';
import AIBadgeWrapper from '../styled/AIBadgeWrapper';
const AIBadge = ({ children = 'AI', testId = 'AI_BADGE', ...props }) => {
    return (React.createElement(AIBadgeWrapper, { ...getTestAttributes(testId), ...props },
        React.createElement(StarIcon, { size: 16, color: "currentColor", "aria-hidden": "true" }),
        children));
};
AIBadge.displayName = 'AIBadge';
export default AIBadge;
