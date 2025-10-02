import React, { useCallback } from 'react';
import { IconButton } from '@8x8/oxygen-button';
import { ArrowDownIcon, ArrowUpIcon } from '@8x8/oxygen-icon';
import { getTestAttributes } from '@8x8/oxygen-config';

import {
  AccordionWrapper,
  Content,
  ContentAfterTitle,
  ContentContainer,
  ContentWrapper,
  InteractiveHeader,
  NonInteractiveHeader,
  IconContainer,
  SecondaryText,
  Title,
  TitleText,
} from '../styled/Accordion';
import { AccordionInterface } from '../types';

function Accordion({
  children = null,
  testId = 'ACCORDION',
  title,
  text = '',
  iconLeft = null,
  contentAfterTitle = null,
  isExpanded = false,
  id,
  forcedHeight = 0,
  /** @deprecated */
  shouldCloseOnActiveClick,
  isContentScrollable = false,
  onChange = undefined,
  hasPadding = true,
  expandTrigger = 'header',
  translations,
  ...rest
}: AccordionInterface) {
  const isNotClickable = !shouldCloseOnActiveClick && isExpanded;
  const ArrowIcon = isExpanded ? ArrowUpIcon : ArrowDownIcon;

  const hasFixedHeight = !!forcedHeight;

  const defaultTranslations = {
    expand: 'Expand',
    collapse: 'Collapse',
  };

  const finalTranslations = {
    ...defaultTranslations,
    ...translations,
  };

  const toggle = useCallback(() => {
    onChange?.(id, !isExpanded);
  }, [onChange, isExpanded, id]);

  // These props are attached either to the 'header' or the 'arrow' depending on the expandTrigger prop.
  // If expandTrigger is 'header', the entire header is clickable.
  // If expandTrigger is 'arrow', only the arrow icon is clickable.
  const toggleProps = {
    onClick: toggle,
    isNotClickable,
  };

  const contentId = `${testId}_CONTENT_PANEL`;

  const arrowIcon = (
    <ArrowIcon size={20} {...getTestAttributes(`${testId}_ICON_RIGHT`)} />
  );

  const arrowContent = (
    <IconContainer>
      {expandTrigger === 'arrow' ? (
        <IconButton
          {...toggleProps}
          aria-expanded={isExpanded}
          aria-controls={contentId}
          aria-label={`${
            isExpanded ? finalTranslations.collapse : finalTranslations.expand
          } ${title}`}
          {...getTestAttributes(`${testId}_ARROW_BUTTON`)}
        >
          {arrowIcon}
        </IconButton>
      ) : (
        arrowIcon
      )}
    </IconContainer>
  );

  const headerContent = (
    <>
      {React.isValidElement(iconLeft) && (
        <IconContainer>
          {React.cloneElement(
            iconLeft as React.ReactElement<{ size: number }>,
            {
              size: 20,
              ...getTestAttributes(`${testId}_ICON_LEFT`),
            },
          )}
        </IconContainer>
      )}

      <Title>
        <TitleText title={title} {...getTestAttributes(`${testId}_TEXT`)}>
          {title}
        </TitleText>
        {contentAfterTitle && (
          <ContentAfterTitle
            {...getTestAttributes(`${testId}_CONTENT_AFTER_TITLE`)}
          >
            {contentAfterTitle}
          </ContentAfterTitle>
        )}
      </Title>

      {text && (
        <SecondaryText
          title={text}
          {...getTestAttributes(`${testId}_TEXT_SECONDARY`)}
        >
          {text}
        </SecondaryText>
      )}

      {arrowContent}
    </>
  );

  const commonHeaderProps = {
    ...getTestAttributes(`${testId}_HEADER`),
    ...(expandTrigger === 'header' && {
      'aria-expanded': isExpanded,
      'aria-controls': contentId,
    }),
  };

  return (
    <AccordionWrapper {...getTestAttributes(testId)}>
      {expandTrigger === 'header' ? (
        <InteractiveHeader {...commonHeaderProps} {...toggleProps}>
          {headerContent}
        </InteractiveHeader>
      ) : (
        <NonInteractiveHeader {...commonHeaderProps}>
          {headerContent}
        </NonInteractiveHeader>
      )}

      <ContentContainer
        isExpanded={isExpanded}
        hasFixedHeight={hasFixedHeight}
        height={forcedHeight}
        id={contentId}
        aria-labelledby={`${testId}_HEADER`}
        {...(!isExpanded && { inert: '' })}
        {...getTestAttributes(`${testId}_CONTENT`)}
        {...rest}
      >
        <Content hasFixedHeight={hasFixedHeight}>
          <ContentWrapper
            isContentScrollable={isContentScrollable}
            hasFixedHeight={hasFixedHeight}
            hasPadding={hasPadding}
            isExpanded={isExpanded}
          >
            {children}
          </ContentWrapper>
        </Content>
      </ContentContainer>
    </AccordionWrapper>
  );
}

export default Accordion;
