import React, { useMemo, memo } from 'react';
import { ArrowRightLongIcon, ArrowLeftLongIcon } from '@8x8/oxygen-icon';
import { getTestAttributes, useOxygen } from '@8x8/oxygen-config';
import Select from '@8x8/oxygen-select';
import { ControlWrapper, PageNavigationWrapper } from '../../styled';
import NavigationButton from '../../styled/NavigationButton';
const PageNavigation = ({ canGoBack, canGoNext, currentPage, numberOfPages, isCompactMode, isDisabled = false, onPageChange, size, translations, testId, }) => {
    const pageOptions = useMemo(() => Array(numberOfPages)
        .fill(null)
        .map((_, index) => ({ label: `${index + 1}`, value: index + 1 })), [numberOfPages]);
    const { theme } = useOxygen();
    const canNavigateForward = !isDisabled && canGoNext;
    const canNavigateBack = !isDisabled && canGoBack;
    return (React.createElement(PageNavigationWrapper, { isCompactMode: isCompactMode },
        React.createElement(NavigationButton, { color: "inherit", role: "button", isDisabled: !canNavigateBack, onClick: () => onPageChange(currentPage - 1), onKeyDown: ({ key }) => {
                if ((key === 'Enter' || key === ' ') && canNavigateBack) {
                    onPageChange(currentPage - 1);
                }
            }, ...getTestAttributes(`${testId}_PREVIOUS_PAGE_BUTTON`) },
            React.createElement(ArrowLeftLongIcon, { "aria-hidden": "true", color: !canNavigateBack ? theme.icon06 : theme.icon01 }),
            translations.prevPage),
        React.createElement(ControlWrapper, null,
            React.createElement(Select, { "aria-label": `${currentPage} ${translations.numberOfPages}`, onChange: option => onPageChange(option.value), options: pageOptions, menuPlacement: "top", isDisabled: isDisabled, size: size, testId: `${testId}_CURRENT_PAGE_SELECTOR`, value: pageOptions.find(option => option.value === currentPage), isClearable: false }),
            !isCompactMode && React.createElement("span", null, translations.numberOfPages)),
        React.createElement(NavigationButton, { color: "inherit", role: "button", isDisabled: !canNavigateForward, onClick: () => onPageChange(currentPage + 1), onKeyDown: ({ key }) => {
                if ((key === 'Enter' || key === ' ') && canNavigateForward) {
                    onPageChange(currentPage + 1);
                }
            }, ...getTestAttributes(`${testId}_NEXT_PAGE_BUTTON`) },
            translations.nextPage,
            React.createElement(ArrowRightLongIcon, { "aria-hidden": "true", color: !canNavigateForward ? theme.icon06 : theme.icon01 }))));
};
export default memo(PageNavigation);
