import React from 'react';
import styled from 'styled-components';
import Avatar from '@8x8/oxygen-avatar';
import Checkbox from '@8x8/oxygen-checkbox';
import Radio from '@8x8/oxygen-radio';
import { CheckIcon } from '@8x8/oxygen-icon';
import { avatarSize } from '@8x8/oxygen-constants';
import { withTheme, getTestAttributes } from '@8x8/oxygen-config';
import { components } from 'react-select';
import * as Styled from '../styled';
const Checked = styled(CheckIcon) `
  min-width: 24px;
`;
const Option = (props) => {
    const { children, ...rest } = props;
    const { data, isSelected, isDisabled = false, isMulti, theme, selectProps, } = props;
    const { hasIcons, hasCheckbox, testId } = selectProps;
    const { iconProps } = data;
    const labelTheme = {
        labelColor: theme.optionTextColor,
        label: {
            fontSize: theme.optionTextFontSize,
        },
    };
    const checkboxTheme = {
        labelColor: theme.optionTextColor,
    };
    const renderItem = (checked) => (React.createElement(React.Fragment, null,
        hasIcons && (React.createElement(Styled.AvatarIcon, { ...getTestAttributes(`${testId}_AVATAR_ICON`) },
            React.createElement(Avatar, { size: avatarSize.size2xsmall, testId: testId, ...iconProps }))),
        React.createElement(Styled.OptionWrapper, { isDisabled: isDisabled, ...getTestAttributes(`${testId}_OPTION_WRAPPER`) }, children),
        checked && React.createElement(Checked, { color: theme.optionTextColor })));
    const renderItemWithCheckbox = () => isMulti ? (React.createElement(Styled.CheckboxWrapper, { ...getTestAttributes(`${testId}_CHECKBOX_WRAPPER`) },
        React.createElement(Checkbox, { label: renderItem(false), testId: testId, theme: checkboxTheme, isChecked: isSelected }),
        React.createElement(Styled.OptionCheckboxLayer, { isDisabled: isDisabled, ...getTestAttributes(`${testId}_OPTION_CHECKBOX_LAYER`) }))) : (React.createElement(Radio, { label: renderItem(false), theme: labelTheme, isChecked: isSelected }));
    const renderCheckedOnSelectedItem = isSelected && theme.optionSelectedBackground === 'icon';
    return (React.createElement(components.Option, { ...rest, isDisabled: isDisabled }, hasCheckbox
        ? renderItemWithCheckbox()
        : renderItem(renderCheckedOnSelectedItem)));
};
export { Option };
export default withTheme(Option, 'select');
