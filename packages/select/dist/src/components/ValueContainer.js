import React from 'react';
import { components } from 'react-select';
import { withTheme, getTestAttributes } from '@8x8/oxygen-config';
import * as Styled from '../styled';
export const formatShortDisplay = (optionText, otherOptions) => {
    const suffix = otherOptions?.length ? ` +${otherOptions.length}` : '';
    return `${optionText}${suffix}`;
};
const ValueContainer = (props) => {
    const { children, ...rest } = props;
    const { hasValue, selectProps, theme, isMulti } = rest;
    const { inputValue } = selectProps;
    const { hasShortMultiDisplay, iconLeft: LeftIcon, multipleSelectMaxRows, size, testId, } = selectProps;
    const { iconSize, optionIconColor, placeholderIconColor } = theme;
    const getIconColor = () => {
        if (!inputValue && !hasValue) {
            return placeholderIconColor;
        }
        return optionIconColor;
    };
    const renderChildren = () => {
        return (React.createElement(Styled.ValueWrapper, { ...getTestAttributes(`${testId}_VALUE_CONTAINER`), size: size, multipleSelectMaxRows: multipleSelectMaxRows }, children));
    };
    const renderShortMultiDisplay = () => {
        const [selectedOptions, ...otherChildren] = children;
        if (selectedOptions.length) {
            const [first, ...others] = selectedOptions;
            const { props: { children: optionText }, } = first;
            return (React.createElement(Styled.ValueWrapper, { size: size, multipleSelectMaxRows: multipleSelectMaxRows },
                React.createElement(Styled.ShortMultiDisplay, null, formatShortDisplay(optionText, others)),
                otherChildren));
        }
        return renderChildren();
    };
    return (React.createElement(components.ValueContainer, { ...rest },
        LeftIcon && (React.createElement(Styled.IconLeftWrapper, { ...getTestAttributes(`${testId}_ICON_LEFT_WRAPPER`), "aria-hidden": true },
            React.createElement(LeftIcon, { color: getIconColor(), size: iconSize, ...getTestAttributes(`${testId}_ICON_LEFT`) }))),
        hasShortMultiDisplay && isMulti
            ? renderShortMultiDisplay()
            : renderChildren()));
};
export { ValueContainer };
export default withTheme(ValueContainer, 'select');
