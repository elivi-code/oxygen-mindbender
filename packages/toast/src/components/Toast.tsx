import React, { AriaAttributes } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { withTheme, getTestAttributes } from '@8x8/oxygen-config';
import { IconButton } from '@8x8/oxygen-button';
import { CloseLargeIcon } from '@8x8/oxygen-icon';

import { ToastProps, toastSizes, ToastType, toastTypes } from '../types';
import getColor from '../styled/utils/getColor';

import {
  Title,
  Description,
  StructureWrapper,
  ContentWrapper,
  IconButtonWrapper,
} from '../styled/structure';
import ToastWrapper from '../styled/ToastWrapper';

import { TypeIndicator, TypeIcon } from './typeMarkings';
import Actions from './Actions';

const specificToastTypes: ToastType[] = [toastTypes.success, toastTypes.info];
const alertToastTypes: ToastType[] = [toastTypes.error, toastTypes.warning];

export const ToastTemplate: React.FunctionComponent<ToastProps> = ({
  title,
  description,
  children,
  actions,
  hideCloseControl,
  onCloseControlClick,
  theme,
  isToast,
  iconTitle,
  closeButtonLabel,
  ...rest
}) => {
  const { type } = rest;
  const ariaLiveValue: AriaAttributes['aria-live'] = alertToastTypes.includes(
    type,
  )
    ? 'assertive'
    : 'polite';
  const closeIconProps = {
    size: theme.iconSize,
    ...(theme.isClassic && { color: getColor({ theme, type }) }),
  };
  const isInverted = theme.isClassic
    ? specificToastTypes.includes(type)
    : isToast;

  return (
    <ThemeProvider theme={theme}>
      <ToastWrapper
        isToast={isToast}
        role={ariaLiveValue === 'assertive' ? 'alert' : 'status'}
        aria-live={ariaLiveValue}
        {...getTestAttributes(`TOAST_${type.toUpperCase()}_CONTAINER`)}
        {...rest}
      >
        {!theme.isClassic && <TypeIndicator type={type} />}
        <StructureWrapper>
          {!theme.isClassic && (
            <TypeIcon type={type} theme={theme} iconTitle={iconTitle} />
          )}
          <ContentWrapper {...getTestAttributes('TOAST_VALUE_CONTAINER')}>
            {children || (
              <>
                {title && <Title>{title}</Title>}
                {description && <Description>{description}</Description>}
              </>
            )}
            {actions?.length > 0 && <Actions actions={actions} theme={theme} />}
          </ContentWrapper>
          {!hideCloseControl && (
            <IconButtonWrapper>
              <IconButton
                onClick={onCloseControlClick}
                isInverted={isInverted}
                testId="TOAST_CLOSE_ICON"
                aria-label={closeButtonLabel || 'Close'}
              >
                <CloseLargeIcon {...closeIconProps} />
              </IconButton>
            </IconButtonWrapper>
          )}
        </StructureWrapper>
      </ToastWrapper>
    </ThemeProvider>
  );
};

ToastTemplate.propTypes = {
  theme: PropTypes.object,
  hideCloseControl: PropTypes.bool,
  onCloseControlClick: PropTypes.func,
  size: PropTypes.oneOf(Object.values(toastSizes)),
  type: PropTypes.oneOf(Object.values(toastTypes)),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string,
      callback: PropTypes.func.isRequired,
    }),
  ),
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

const Toast = (props: ToastProps) => {
  return <ToastTemplate {...props} />;
};

export default withTheme(Toast, 'toast');
