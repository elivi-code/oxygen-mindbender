import React, { Children, cloneElement, isValidElement, useEffect, useState, useRef, } from 'react';
import { FloatingFocusManager, FloatingArrow, arrow, autoUpdate, offset, safePolygon, shift, useClick, useDismiss, useFloating, useFloatingTree, useHover, useInteractions, useListNavigation, useMergeRefs, } from '@floating-ui/react';
import { useOxygen, getTestAttributes } from '@8x8/oxygen-config';
import { IconContainer } from './IconContainer';
import { MenuBadge } from './Badge';
import { getMenuAriaLabel } from '../menuAriaLabelUtils';
import { useSidebar } from '../../../hooks/useSidebar';
import { Button } from '../../../styled/Button';
import { FloatingContainer, UlCollapsed } from '../../../styled/SubMenu';
import { getCustomButtonOverrideProps } from '../utils';
/**
 * Renders:
 * - a button with an icon
 * - on hovering over the button, shows a popover on the right, showing children
 */
export const FloatingUIWrapper = React.forwardRef(({ icon, header, isActive, testId, position, children, onTrigger, link, hasBadge, badgeChildren, badgeAriaLabel, menuItemLabel, ...props }, forwardedRef) => {
    const { linkComponent, linkProp } = useSidebar();
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = React.useState(null);
    const listItemsRef = React.useRef([]);
    const arrowRef = useRef(null);
    const { theme } = useOxygen();
    const tree = useFloatingTree();
    const { x, y, strategy, refs, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        placement: position === 'left' ? 'right-start' : 'left-start',
        middleware: [
            offset({ mainAxis: 12, crossAxis: -5 }),
            shift(),
            arrow({
                element: arrowRef,
            }),
        ],
        whileElementsMounted: autoUpdate,
    });
    const hover = useHover(context, {
        enabled: true,
        handleClose: safePolygon({
            blockPointerEvents: true,
        }),
    });
    const dismiss = useDismiss(context);
    const click = useClick(context, {
        event: 'click',
        ignoreMouse: true,
    });
    const listNavigation = useListNavigation(context, {
        listRef: listItemsRef,
        activeIndex,
        nested: true,
        onNavigate: setActiveIndex,
        focusItemOnHover: false,
    });
    const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([hover, dismiss, click, listNavigation]);
    // close all menus when an item gets clicked
    useEffect(() => {
        if (!tree)
            return;
        const onTreeTrigger = () => {
            setIsOpen(false);
        };
        tree.events.on('trigger', onTreeTrigger);
        // eslint-disable-next-line consistent-return
        return () => {
            tree.events.off('trigger', onTreeTrigger);
        };
    }, [tree]);
    const referenceRef = useMergeRefs([refs.setReference, forwardedRef]);
    const hasChildren = Children.count(children) !== 0;
    const buttonProps = {
        ...props,
        onClick: (event) => {
            onTrigger?.(event);
        },
    };
    // Customizations to the actual component which will be rendered
    const customButtonProps = getCustomButtonOverrideProps(!hasChildren, {
        linkComponent,
        link,
        linkProp,
    });
    const ariaLabel = getMenuAriaLabel({
        menuItemLabel,
        badgeAriaLabel,
        hasBadge,
    });
    return (React.createElement(React.Fragment, null,
        isOpen && (React.createElement(FloatingFocusManager, { context: context, modal: false, closeOnFocusOut: true },
            React.createElement(FloatingContainer, { ref: refs.setFloating, hasChildren: hasChildren, style: {
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                }, ...getFloatingProps(), ...getTestAttributes(`${testId}_FLOATING_UI`) },
                React.createElement(FloatingArrow, { ref: arrowRef, context: context, height: 7, width: 14, fill: theme.ui06, stroke: theme.ui01, strokeWidth: 1 }),
                header,
                hasChildren && (React.createElement(UlCollapsed, null, Children.map(children, (child, index) => {
                    const clone = isValidElement(child) &&
                        cloneElement(child, {
                            ...getItemProps({
                                ref(node) {
                                    listItemsRef.current[index] = node;
                                },
                            }),
                            // the cloned element will have onTrigger passed as props
                            onTrigger: (event) => {
                                child.props.onTrigger?.(event); // call original element's onTrigger()
                                tree?.events.emit('trigger'); // closes the open menu
                            },
                        });
                    return clone;
                })))))),
        React.createElement(Button, { ref: referenceRef, ...customButtonProps, "aria-label": ariaLabel, ...getReferenceProps(buttonProps), "$isActive": isActive, ...getTestAttributes(`${testId}_FLOATING_UI_TRIGGER`) },
            React.createElement(MenuBadge, { badgeChildren: hasChildren ? '' : badgeChildren, hasBadge: hasBadge }),
            React.createElement(IconContainer, { icon: icon }))));
});
FloatingUIWrapper.displayName = 'FloatingUIWrapper';
