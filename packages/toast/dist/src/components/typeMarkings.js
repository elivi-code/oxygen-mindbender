import React from 'react';
import styled from 'styled-components';
import themes from '@8x8/oxygen-theme';
import { CheckIcon, ExclamationIcon, ErrorIcon, InfoCircleIcon, } from '@8x8/oxygen-icon';
import { Spinner } from '@8x8/oxygen-loaders';
import { getMarkingColor, getIconMarkingColor, } from '../styled/utils/getMarkingColor';
import { toastTypes } from '../types';
const { novo } = themes;
const TypeIcon = ({ theme, type, iconTitle, }) => {
    const props = {
        style: { marginRight: novo.spacing03, flexShrink: 0 },
        color: getIconMarkingColor({ theme, type }),
        size: theme.iconSize,
        title: iconTitle,
    };
    switch (type) {
        case toastTypes.success: {
            return React.createElement(CheckIcon, { ...props });
        }
        case toastTypes.warning: {
            return React.createElement(ExclamationIcon, { ...props });
        }
        case toastTypes.error: {
            return React.createElement(ErrorIcon, { ...props });
        }
        case toastTypes.loading: {
            return React.createElement(Spinner, { ...props });
        }
        case toastTypes.info:
        default: {
            return React.createElement(InfoCircleIcon, { ...props });
        }
    }
};
const TypeIndicator = styled.div `
  width: 4px;
  border-radius: 2px;
  background: ${getMarkingColor};
  align-self: normal;
  margin-right: ${novo.spacing05};
`;
TypeIndicator.displayName = 'TypeIndicator';
export { TypeIcon, TypeIndicator };
