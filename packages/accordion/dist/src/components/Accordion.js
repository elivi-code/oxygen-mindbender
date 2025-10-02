import React, { useCallback } from 'react';
import { IconButton } from '@8x8/oxygen-button';
import { ArrowDownIcon, ArrowUpIcon } from '@8x8/oxygen-icon';
import { getTestAttributes } from '@8x8/oxygen-config';
import { AccordionWrapper, Content, ContentAfterTitle, ContentContainer, ContentWrapper, InteractiveHeader, NonInteractiveHeader, IconContainer, SecondaryText, Title, TitleText, } from '../styled/Accordion';
function Accordion({ children = null, testId = 'ACCORDION', title, text = '', iconLeft = null, contentAfterTitle = null, isExpanded = false, id, forcedHeight = 0, 
/** @deprecated */
shouldCloseOnActiveClick, isContentScrollable = false, onChange = undefined, hasPadding = true, expandTrigger = 'header', translations, ...rest }) {
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
    const arrowIcon = (React.createElement(ArrowIcon, { size: 20, ...getTestAttributes(`${testId}_ICON_RIGHT`) }));
    const arrowContent = (React.createElement(IconContainer, null, expandTrigger === 'arrow' ? (React.createElement(IconButton, { ...toggleProps, "aria-expanded": isExpanded, "aria-controls": contentId, "aria-label": `${isExpanded ? finalTranslations.collapse : finalTranslations.expand} ${title}`, ...getTestAttributes(`${testId}_ARROW_BUTTON`) }, arrowIcon)) : (arrowIcon)));
    const headerContent = (React.createElement(React.Fragment, null,
        React.isValidElement(iconLeft) && (React.createElement(IconContainer, null, React.cloneElement(iconLeft, {
            size: 20,
            ...getTestAttributes(`${testId}_ICON_LEFT`),
        }))),
        React.createElement(Title, null,
            React.createElement(TitleText, { title: title, ...getTestAttributes(`${testId}_TEXT`) }, title),
            contentAfterTitle && (React.createElement(ContentAfterTitle, { ...getTestAttributes(`${testId}_CONTENT_AFTER_TITLE`) }, contentAfterTitle))),
        text && (React.createElement(SecondaryText, { title: text, ...getTestAttributes(`${testId}_TEXT_SECONDARY`) }, text)),
        arrowContent));
    const commonHeaderProps = {
        ...getTestAttributes(`${testId}_HEADER`),
        ...(expandTrigger === 'header' && {
            'aria-expanded': isExpanded,
            'aria-controls': contentId,
        }),
    };
    return (React.createElement(AccordionWrapper, { ...getTestAttributes(testId) },
        expandTrigger === 'header' ? (React.createElement(InteractiveHeader, { ...commonHeaderProps, ...toggleProps }, headerContent)) : (React.createElement(NonInteractiveHeader, { ...commonHeaderProps }, headerContent)),
        React.createElement(ContentContainer, { isExpanded: isExpanded, hasFixedHeight: hasFixedHeight, height: forcedHeight, id: contentId, "aria-labelledby": `${testId}_HEADER`, ...(!isExpanded && { inert: '' }), ...getTestAttributes(`${testId}_CONTENT`), ...rest },
            React.createElement(Content, { hasFixedHeight: hasFixedHeight },
                React.createElement(ContentWrapper, { isContentScrollable: isContentScrollable, hasFixedHeight: hasFixedHeight, hasPadding: hasPadding, isExpanded: isExpanded }, children)))));
}
export default Accordion;
