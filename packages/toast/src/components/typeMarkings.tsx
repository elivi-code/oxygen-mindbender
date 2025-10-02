import React from 'react';
import styled from 'styled-components';

import themes from '@8x8/oxygen-theme';

import {
  CheckIcon,
  ExclamationIcon,
  ErrorIcon,
  InfoCircleIcon,
} from '@8x8/oxygen-icon';

import { Spinner } from '@8x8/oxygen-loaders';

import {
  getMarkingColor,
  getIconMarkingColor,
} from '../styled/utils/getMarkingColor';
import type { Theme, ToastType } from '../types';
import { toastTypes } from '../types';

const { novo } = themes;

type TypeIconProps = {
  theme: Theme;
  type: ToastType;
  iconTitle?: string;
};

const TypeIcon: React.FunctionComponent<TypeIconProps> = ({
  theme,
  type,
  iconTitle,
}) => {
  const props = {
    style: { marginRight: novo.spacing03, flexShrink: 0 },
    color: getIconMarkingColor({ theme, type }),
    size: theme.iconSize,
    title: iconTitle,
  };

  switch (type) {
    case toastTypes.success: {
      return <CheckIcon {...props} />;
    }
    case toastTypes.warning: {
      return <ExclamationIcon {...props} />;
    }
    case toastTypes.error: {
      return <ErrorIcon {...props} />;
    }
    case toastTypes.loading: {
      return <Spinner {...props} />;
    }
    case toastTypes.info:
    default: {
      return <InfoCircleIcon {...props} />;
    }
  }
};

const TypeIndicator = styled.div<{ type: ToastType }>`
  width: 4px;
  border-radius: 2px;
  background: ${getMarkingColor};
  align-self: normal;
  margin-right: ${novo.spacing05};
`;

TypeIndicator.displayName = 'TypeIndicator';

export { TypeIcon, TypeIndicator };
