import React from 'react';
import { getTestAttributes } from '@8x8/oxygen-config';
import Tooltip, { orientation } from '@8x8/oxygen-tooltip';
import { InfoCircleIcon } from '@8x8/oxygen-icon';
import IconButtonWrapper from '../styled/IconButtonWrapper';
export const Icon = (props) => {
    const propsWithDefault = {
        testId: 'LABEL',
        ...props,
    };
    const { theme, testId, infoBoxText, infoBoxShowOn, infoBoxButtonLabel } = propsWithDefault;
    const iconButtonProps = {
        ...(infoBoxButtonLabel && { 'aria-label': infoBoxButtonLabel }),
    };
    return (React.createElement(Tooltip, { title: infoBoxText, orientation: orientation.top, showOn: infoBoxShowOn, includeWrapper: false },
        React.createElement(IconButtonWrapper, { ...iconButtonProps },
            React.createElement(InfoCircleIcon, { ...getTestAttributes(`${testId}_ICON`), color: theme.iconColor, size: theme.iconSize }))));
};
export default Icon;
