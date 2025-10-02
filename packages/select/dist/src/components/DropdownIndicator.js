import React from 'react';
import { components } from 'react-select';
import { ArrowDownSolidIcon, ArrowUpSolidIcon, ArrowDownIcon, } from '@8x8/oxygen-icon';
import { getTestAttributes } from '@8x8/oxygen-config';
const DropdownIndicator = (props) => {
    const { selectProps, isDisabled = false } = props;
    const { menuIsOpen, testId } = selectProps;
    const { getStyles, theme } = props;
    const { color } = getStyles('dropdownIndicator', { ...props, isDisabled });
    const ClassicIcon = menuIsOpen ? ArrowUpSolidIcon : ArrowDownSolidIcon;
    const iconSuffix = menuIsOpen
        ? '_ARROW_UP_SOLID_ICON'
        : '_ARROW_DOWN_SOLID_ICON';
    const Icon = theme.iconSet === 'novo' ? ArrowDownIcon : ClassicIcon;
    const iconProps = {
        disabled: isDisabled,
        color: color,
        ...getTestAttributes(`${testId}${iconSuffix}`),
    };
    return (React.createElement(components.DropdownIndicator, { ...props },
        React.createElement(Icon, { ...iconProps })));
};
export default DropdownIndicator;
