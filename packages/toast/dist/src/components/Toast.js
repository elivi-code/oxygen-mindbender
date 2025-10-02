import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { withTheme, getTestAttributes } from '@8x8/oxygen-config';
import { IconButton } from '@8x8/oxygen-button';
import { CloseLargeIcon } from '@8x8/oxygen-icon';
import { toastSizes, toastTypes } from '../types';
import getColor from '../styled/utils/getColor';
import { Title, Description, StructureWrapper, ContentWrapper, IconButtonWrapper, } from '../styled/structure';
import ToastWrapper from '../styled/ToastWrapper';
import { TypeIndicator, TypeIcon } from './typeMarkings';
import Actions from './Actions';
const specificToastTypes = [toastTypes.success, toastTypes.info];
const alertToastTypes = [toastTypes.error, toastTypes.warning];
export const ToastTemplate = ({ title, description, children, actions, hideCloseControl, onCloseControlClick, theme, isToast, iconTitle, closeButtonLabel, ...rest }) => {
    const { type } = rest;
    const ariaLiveValue = alertToastTypes.includes(type)
        ? 'assertive'
        : 'polite';
    const closeIconProps = {
        size: theme.iconSize,
        ...(theme.isClassic && { color: getColor({ theme, type }) }),
    };
    const isInverted = theme.isClassic
        ? specificToastTypes.includes(type)
        : isToast;
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(ToastWrapper, { isToast: isToast, role: ariaLiveValue === 'assertive' ? 'alert' : 'status', "aria-live": ariaLiveValue, ...getTestAttributes(`TOAST_${type.toUpperCase()}_CONTAINER`), ...rest },
            !theme.isClassic && React.createElement(TypeIndicator, { type: type }),
            React.createElement(StructureWrapper, null,
                !theme.isClassic && (React.createElement(TypeIcon, { type: type, theme: theme, iconTitle: iconTitle })),
                React.createElement(ContentWrapper, { ...getTestAttributes('TOAST_VALUE_CONTAINER') },
                    children || (React.createElement(React.Fragment, null,
                        title && React.createElement(Title, null, title),
                        description && React.createElement(Description, null, description))),
                    actions?.length > 0 && React.createElement(Actions, { actions: actions, theme: theme })),
                !hideCloseControl && (React.createElement(IconButtonWrapper, null,
                    React.createElement(IconButton, { onClick: onCloseControlClick, isInverted: isInverted, testId: "TOAST_CLOSE_ICON", "aria-label": closeButtonLabel || 'Close' },
                        React.createElement(CloseLargeIcon, { ...closeIconProps }))))))));
};
ToastTemplate.propTypes = {
    theme: PropTypes.object,
    hideCloseControl: PropTypes.bool,
    onCloseControlClick: PropTypes.func,
    size: PropTypes.oneOf(Object.values(toastSizes)),
    type: PropTypes.oneOf(Object.values(toastTypes)),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    actions: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.string,
        callback: PropTypes.func.isRequired,
    })),
    children: PropTypes.node,
    title: PropTypes.node,
    description: PropTypes.node,
    isToast: PropTypes.bool,
    closeButtonLabel: PropTypes.string,
};
ToastTemplate.defaultProps = {
    hideCloseControl: false,
    onCloseControlClick: undefined,
    size: toastSizes.small,
    type: toastTypes.success,
    actions: [],
    children: '',
    title: undefined,
    description: undefined,
    isToast: true,
    closeButtonLabel: 'Close',
};
const Toast = (props) => {
    return React.createElement(ToastTemplate, { ...props });
};
export default withTheme(Toast, 'toast');
