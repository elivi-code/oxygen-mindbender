import React from 'react';
import PropTypes from 'prop-types';
import type { DropdownButtonProps } from '../types';
declare const _default: {
    ({ theme, customCloseHandlers, forwardedRef, shouldCloseOnInsideClick, isDefaultOpen, indicatorIcon, children, buttonText, idealDirection, isDisabled, onOpen, onClose, invertIconPosition, renderInPortal, ...otherProps }: DropdownButtonProps): React.JSX.Element;
    propTypes: {
        /**
         * DropdownButton theme
         */
        theme: PropTypes.Requireable<object>;
        /**
         * Rendered nodes inside the dropdown
         */
        children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        /**
         * Rendered text inside the button
         */
        buttonText: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        /**
         * Rendered icon inside the button
         * if `undefined` - normal rendering of built-in icon
         * if other `falsey` value it disables the rendering of the indicator icon
         */
        /**
         * Sets the direction of the flyout
         */
        idealDirection: PropTypes.Requireable<"left" | "top" | "right" | "bottom" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end">;
        /**
         * Tells if the dropdown should close when the content of the dropdown
         * is clicked
         */
        shouldCloseOnInsideClick: PropTypes.Requireable<boolean>;
        /**
         * Tell when dropdown is open by default
         */
        isDefaultOpen: PropTypes.Requireable<boolean>;
        /**
         * Tell when dropdown button is disabled
         */
        isDisabled: PropTypes.Requireable<boolean>;
        /**
         * Callback after dropdown is open
         */
        onOpen: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * Callback after dropdown is close
         */
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * Array of events that should trigger the closing of the dropdown
         */
        customCloseHandlers: PropTypes.Requireable<any[]>;
        /**
         * Invert the icon position within the button
         */
        invertIconPosition: PropTypes.Requireable<boolean>;
        /**
         * Renders the floating part in a portal
         * This is a temporary item to allow disabling portal rendering.
         * Will likely be removed in Oxygen 3
         * @deprecated
         */
        renderInPortal: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        idealDirection: "bottom";
        shouldCloseOnInsideClick: boolean;
        isDefaultOpen: boolean;
        isDisabled: boolean;
        onOpen: () => void;
        onClose: () => void;
        customCloseHandlers: any[];
        invertIconPosition: boolean;
        renderInPortal: boolean;
    };
} & React.ForwardRefExoticComponent<Omit<DropdownButtonProps, "ref"> & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=DropdownButton.d.ts.map