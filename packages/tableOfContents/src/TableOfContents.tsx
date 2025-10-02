import React from 'react';
import { getTestAttributes } from '@8x8/oxygen-config';
import { TocContainer } from './styled/Container';
import { TocUnorderedList } from './styled/List';

interface Props {
  testId?: string;
}

// eslint-disable-next-line react/display-name
export const TableOfContents = React.forwardRef<
  HTMLElement,
  React.PropsWithChildren & Props
>(({ children, testId = 'TOC', ...props }, forwardedRef) => {
  return (
    <TocContainer ref={forwardedRef} {...getTestAttributes(testId)} {...props}>
      <TocUnorderedList {...getTestAttributes(`${testId}_TOC_LIST`)}>
        {children}
      </TocUnorderedList>
    </TocContainer>
  );
});
