import React, { FunctionComponent, useMemo, memo } from 'react';

import { ArrowRightLongIcon, ArrowLeftLongIcon } from '@8x8/oxygen-icon';
import { getTestAttributes, useOxygen } from '@8x8/oxygen-config';
import Select from '@8x8/oxygen-select';

import { ControlWrapper, PageNavigationWrapper } from '../../styled';
import NavigationButton from '../../styled/NavigationButton';
import { PaginationSize, Translations } from '../../types';

export interface PageNavigationProps {
  canGoBack: boolean;
  canGoNext: boolean;
  currentPage: number;
  isCompactMode: boolean;
  numberOfPages: number;
  onPageChange: (value: number) => void;
  size: PaginationSize;
  translations: Partial<Translations>;
  testId: string;
  isDisabled?: boolean;
}

const PageNavigation: FunctionComponent<PageNavigationProps> = ({
  canGoBack,
  canGoNext,
  currentPage,
  numberOfPages,
  isCompactMode,
  isDisabled = false,
  onPageChange,
  size,
  translations,
  testId,
}) => {
  const pageOptions = useMemo(
    () =>
      Array(numberOfPages)
        .fill(null)
        .map((_, index) => ({ label: `${index + 1}`, value: index + 1 })),
    [numberOfPages],
  );
  const { theme } = useOxygen();
  const canNavigateForward = !isDisabled && canGoNext;
  const canNavigateBack = !isDisabled && canGoBack;

  return (
    <PageNavigationWrapper isCompactMode={isCompactMode}>
      <NavigationButton
        color="inherit"
        role="button"
        isDisabled={!canNavigateBack}
        onClick={() => onPageChange(currentPage - 1)}
        onKeyDown={({ key }) => {
          if ((key === 'Enter' || key === ' ') && canNavigateBack) {
            onPageChange(currentPage - 1);
          }
        }}
        {...getTestAttributes(`${testId}_PREVIOUS_PAGE_BUTTON`)}
      >
        <ArrowLeftLongIcon
          aria-hidden="true"
          color={!canNavigateBack ? theme.icon06 : theme.icon01}
        />
        {translations.prevPage}
      </NavigationButton>
      <ControlWrapper>
        <Select
          aria-label={`${currentPage} ${translations.numberOfPages}`}
          onChange={option => onPageChange(option.value)}
          options={pageOptions}
          menuPlacement="top"
          isDisabled={isDisabled}
          size={size}
          testId={`${testId}_CURRENT_PAGE_SELECTOR`}
          value={pageOptions.find(option => option.value === currentPage)}
          isClearable={false}
        />
        {!isCompactMode && <span>{translations.numberOfPages}</span>}
      </ControlWrapper>
      <NavigationButton
        color="inherit"
        role="button"
        isDisabled={!canNavigateForward}
        onClick={() => onPageChange(currentPage + 1)}
        onKeyDown={({ key }) => {
          if ((key === 'Enter' || key === ' ') && canNavigateForward) {
            onPageChange(currentPage + 1);
          }
        }}
        {...getTestAttributes(`${testId}_NEXT_PAGE_BUTTON`)}
      >
        {translations.nextPage}
        <ArrowRightLongIcon
          aria-hidden="true"
          color={!canNavigateForward ? theme.icon06 : theme.icon01}
        />
      </NavigationButton>
    </PageNavigationWrapper>
  );
};

export default memo(PageNavigation);
