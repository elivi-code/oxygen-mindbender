import styled, { css } from 'styled-components';
import { Theme } from '@8x8/oxygen-config';

const AccordionWrapper = styled.div<{ theme: Theme }>`
  border-bottom: 1px solid ${({ theme }) => theme.ui01};
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

// Base styles shared between interactive and non-interactive headers
const headerBaseStyles = css<{ theme: Theme }>`
  all: unset;

  box-sizing: border-box;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  text-align: left;
  align-items: center;
  gap: ${({ theme }) => theme.spacing04};

  padding: 0 ${({ theme }) => theme.spacing05};
  background-color: ${({ theme }) => theme.ui06};

  color: ${({ theme }) => theme.textColor01};
  ${({ theme }) => ({ ...theme.bodyBold01 })};
`;

// Interactive header that can be clicked (native button element)
const InteractiveHeader = styled.button<{
  theme: Theme;
  isNotClickable: boolean;
}>`
  ${headerBaseStyles}

  cursor: ${({ isNotClickable }) => (isNotClickable ? 'initial' : 'pointer')};

  &:focus-visible {
    box-shadow: 0 0 0 2px inset ${({ theme }) => theme.focus01};
  }

  ${({ theme, isNotClickable }) =>
    !isNotClickable &&
    `&:hover {
        background-color: ${theme.ui05};
     }`}
`;

// Non-interactive header (native div element)
const NonInteractiveHeader = styled.div<{ theme: Theme }>`
  ${headerBaseStyles}

  cursor: default;
`;

// (https://keithjgrant.com/posts/2023/04/transitioning-to-height-auto/#with-grid)
// transition without relying on scrollHeight (using grid)
// take note about the padding - had to move to inner wrapper element
// height/transition are conditionally applied based on fixed/dynamic accordion height to ensure smooth animation
const ContentContainer = styled.div<{
  theme: Theme;
  isExpanded: boolean;
  height?: number;
  hasFixedHeight?: boolean;
}>`
  display: grid;
  grid-template-rows: ${({ isExpanded }) => (isExpanded ? '1fr' : '0fr')};
  ${({ hasFixedHeight, height, isExpanded }) =>
    hasFixedHeight
      ? `
    height: ${isExpanded ? `${height}px` : '0'};
    transition: grid-template-rows 150ms cubic-bezier(0.2, 0, 1, 0.9),
                height 150ms cubic-bezier(0.2, 0, 1, 0.9);
  `
      : `
    transition: grid-template-rows 150ms cubic-bezier(0.2, 0, 1, 0.9);
  `}
  overflow: hidden;

  @media (prefers-reduced-motion: reduce) {
    transition: unset;
  }
`;

const Content = styled.div<{
  theme: Theme;
  hasFixedHeight?: boolean;
}>`
  box-sizing: border-box;
  ${({ hasFixedHeight }) => hasFixedHeight && 'height: 100%;'};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

// separate component required for padding as items are partially visible even when accordion is closed
// due to grid-template-rows: 0fr in ContentContainer see notes (https://keithjgrant.com/posts/2023/04/transitioning-to-height-auto/#with-grid)
const ContentWrapper = styled.div<{
  theme: Theme;
  isContentScrollable?: boolean;
  hasPadding?: boolean;
  hasFixedHeight?: boolean;
  isExpanded?: boolean;
}>`
  overflow: hidden;

  /* show scrollbars after animation completes */
  ${({ isContentScrollable, hasFixedHeight, isExpanded }) => {
    if (!isContentScrollable || !hasFixedHeight) {
      return '';
    }

    if (isExpanded) {
      return `
      @media not all and (prefers-reduced-motion: reduce) {
        @keyframes showScrollbar {
          0%, 99% {
            overflow: hidden;
          }
          100% {
            overflow-y: auto;
          }
        }

        /* 150ms for transition in ContentContainer plus small delay */
        animation: showScrollbar 170ms forwards;
      }

      /* skip animation for reduced motion preference */
      @media (prefers-reduced-motion: reduce) {
        overflow-y: auto;
      }

      scrollbar-gutter: stable;
    `;
    }

    return '';
  }}

  ${({ hasPadding, theme }) =>
    hasPadding &&
    `
    padding: ${theme.spacing03} ${theme.spacing05} ${theme.spacing05};
  `}
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
`;

const ellipsis = `
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Title = styled.div<{ theme: Theme }>`
  flex-grow: 4;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing02};
  min-width: 0;
`;

const TitleText = styled.div`
  min-width: 0;
  ${ellipsis}
`;

const SecondaryText = styled.div<{ theme: Theme }>`
  color: ${({ theme }) => theme.textColor02};
  ${({ theme }) => ({ ...theme.label01 })}
  ${ellipsis}
`;

const ContentAfterTitle = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  gap: 4px;
`;

export {
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
};
