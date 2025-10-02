import styled from 'styled-components';
import posed from 'react-pose';

import { toastTypes } from '@8x8/oxygen-constants';

import type { ToastProps } from '../types';

import getColor from './utils/getColor';
import getWidth from './utils/getWidth';

const toastWrapperAnimationProps = {
  enter: {
    opacity: 1,
    transition: {
      duration: 300,
      ease: 'easeIn',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 150,
      ease: 'easeOut',
    },
  },
  flip: {
    transition: {
      type: 'tween',
      duration: 150,
    },
  },
};

type ToastWrapperProps = Omit<
  ToastProps,
  | 'title'
  | 'description'
  | 'children'
  | 'actions'
  | 'hideCloseControl'
  | 'onCloseControlClick'
  | 'theme'
>;

const ToastWrapper = styled(
  posed.div(toastWrapperAnimationProps),
)<ToastWrapperProps>`
  display: flex;
  box-sizing: border-box;

  background-color: ${({ theme, type }) => {
    if (
      theme.isClassic &&
      (type === toastTypes.error || type === toastTypes.warning)
    ) {
      return theme.backgroundColorError;
    }

    return theme.backgroundColor;
  }};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme, isToast }) => (isToast ? theme.boxShadow : 'none')};
  border: ${({ theme, isToast }) =>
    isToast ? 'none' : `1px solid ${theme.borderColor}`};

  color: ${({ theme }) => (theme.isClassic ? getColor : theme.colorTitle)};

  font-stretch: ${({ theme }) => theme.fontStretch};
  font-style: ${({ theme }) => theme.fontStyle};
  text-align: ${({ theme }) => theme.textAlign};

  padding: ${({ theme }) => theme.padding};

  width: ${getWidth};
  max-width: ${({ theme }) => theme.maxWidth};
`;

export default ToastWrapper;
