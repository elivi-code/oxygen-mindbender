import React from 'react';
import { getTestAttributes } from '@8x8/oxygen-config';
import { TocContainer } from './styled/Container';
import { TocUnorderedList } from './styled/List';
// eslint-disable-next-line react/display-name
export const TableOfContents = React.forwardRef(({ children, testId = 'TOC', ...props }, forwardedRef) => {
    return (React.createElement(TocContainer, { ref: forwardedRef, ...getTestAttributes(testId), ...props },
        React.createElement(TocUnorderedList, { ...getTestAttributes(`${testId}_TOC_LIST`) }, children)));
});
