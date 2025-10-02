import React, { forwardRef } from 'react';
import { FloatingFocusManager, FloatingPortal, autoUpdate, flip, shift, useClick, useDismiss, useFloating, useInteractions, useMergeRefs, useRole, } from '@floating-ui/react';
import { getTestAttributes } from '@8x8/oxygen-config';
import { PopoverContainer } from '../styled/Container';
import { defaultProps } from './utils';
export const Popover = forwardRef(function Popover({ children, floatingContent, placement = defaultProps.placement, isDisabled = defaultProps.isDisabled, isOpen, setIsOpen, activeProp = defaultProps.activeProp, disabledProp = defaultProps.disabledProp, maxHeight = 400, portalTargetRef, testId = 'POPOVER', ...rest }, ref) {
    const { refs, floatingStyles, context } = useFloating({
        placement,
        open: isOpen,
        onOpenChange: isOpenState => {
            setIsOpen(isOpenState);
        },
        middleware: [flip(), shift()],
        whileElementsMounted: autoUpdate,
    });
    const click = useClick(context, {
        enabled: !isDisabled,
    });
    const dismiss = useDismiss(context);
    const role = useRole(context);
    const { getReferenceProps, getFloatingProps } = useInteractions([
        click,
        dismiss,
        role,
    ]);
    // combines the ref received from outside with the floating-ui refs
    const childRef = useMergeRefs([refs.setReference, ref]);
    return (React.createElement(React.Fragment, null,
        React.cloneElement(children, {
            ref: childRef,
            [activeProp]: isOpen,
            ...getReferenceProps(),
            ...(isDisabled && { [disabledProp]: true }),
        }),
        isOpen && (React.createElement(FloatingPortal, { root: portalTargetRef },
            React.createElement(FloatingFocusManager, { context: context },
                React.createElement(PopoverContainer, { "$maxHeight": maxHeight, ref: refs.setFloating, style: floatingStyles, ...getTestAttributes(testId), ...getFloatingProps(), ...rest }, floatingContent))))));
});
