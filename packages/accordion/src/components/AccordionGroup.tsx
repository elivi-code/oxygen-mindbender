import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { v4 as uuid } from 'uuid';
import { getTestAttributes } from '@8x8/oxygen-config';

import { Container, Wrapper } from '../styled/AccordionGroup';
import { AccordionGroupInterface } from '../types';

function AccordionGroup({
  children,
  testId = 'ACCORDION_GROUP',
  initialActiveElementId = null,
  shouldCloseOnActiveClick = true,
  hasFixedHeight = false,
  onChange,
  expandTrigger,
  translations,
  ...rest
}: AccordionGroupInterface) {
  const [activeElementId, setActiveElementId] = useState(
    initialActiveElementId,
  );
  const containerRef = useRef(null);
  const headersRef = useRef(null);
  const [forcedContentHeight, setForcedContentHeight] = useState(0);

  const accordionItemsList = useMemo(
    () => (Array.isArray(children) ? children : [children]),
    [children],
  );

  const idsList: string[] = useMemo(
    () =>
      accordionItemsList.map(accordionItem => accordionItem.props.id || uuid()),
    [accordionItemsList],
  );

  const toggleActiveChange = useCallback(
    (id: string, isExpanded: boolean) => {
      const newActiveId = !isExpanded && shouldCloseOnActiveClick ? null : id;

      const canUpdate = onChange?.(newActiveId) ?? true;

      if (canUpdate) {
        setActiveElementId(newActiveId);
      }
    },
    [shouldCloseOnActiveClick, onChange, setActiveElementId],
  );

  useEffect(() => {
    const rawHeight =
      containerRef.current.clientHeight - headersRef.current.clientHeight;

    setForcedContentHeight(Math.abs(rawHeight));
  }, []);

  return (
    <Container
      {...getTestAttributes(testId)}
      hasFixedHeight={hasFixedHeight}
      ref={containerRef}
      {...rest}
    >
      <Wrapper ref={headersRef}>
        {accordionItemsList.map((accordionItem, index) =>
          React.cloneElement(accordionItem, {
            key: idsList[index],
            id: idsList[index],
            onChange: toggleActiveChange,
            isExpanded:
              (!hasFixedHeight || forcedContentHeight) &&
              idsList[index] === activeElementId,
            testId: accordionItem.props.testId || `${testId}_ITEM`,
            forcedHeight: hasFixedHeight ? forcedContentHeight : 0,
            shouldCloseOnActiveClick,
            isContentScrollable:
              accordionItem.props.isContentScrollable ?? hasFixedHeight,
            // Group-level props with individual accordion props taking precedence
            expandTrigger: accordionItem.props.expandTrigger ?? expandTrigger,
            translations: accordionItem.props.translations ?? translations,
          }),
        )}
      </Wrapper>
    </Container>
  );
}

export default AccordionGroup;
