import React from 'react';
import styled from 'styled-components';
import Avatar from '@8x8/oxygen-avatar';
import Checkbox, { CheckboxProps } from '@8x8/oxygen-checkbox';
import Radio from '@8x8/oxygen-radio';
import { CheckIcon } from '@8x8/oxygen-icon';
import { avatarSize } from '@8x8/oxygen-constants';
import { withTheme, getTestAttributes } from '@8x8/oxygen-config';
import { GroupBase, components, OptionProps } from 'react-select';

import * as Styled from '../styled';
import { SelectOption } from './SelectProps';

const Checked = styled(CheckIcon)`
  min-width: 24px;
`;

const Option = <
  OptionValue,
  Option extends SelectOption<OptionValue>,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: OptionProps<Option, IsMulti, Group>,
) => {
  const { children, ...rest } = props;
  const {
    data,
    isSelected,
    isDisabled = false,
    isMulti,
    theme,
    selectProps,
  } = props;

  const { hasIcons, hasCheckbox, testId } = selectProps;
  const { iconProps } = data;

  const labelTheme = {
    labelColor: theme.optionTextColor,
    label: {
      fontSize: theme.optionTextFontSize,
    },
  };
  const checkboxTheme: Partial<CheckboxProps['theme']> = {
    labelColor: theme.optionTextColor,
  };

  const renderItem = (checked: boolean) => (
    <>
      {hasIcons && (
        <Styled.AvatarIcon {...getTestAttributes(`${testId}_AVATAR_ICON`)}>
          <Avatar
            size={avatarSize.size2xsmall}
            testId={testId}
            {...iconProps}
          />
        </Styled.AvatarIcon>
      )}
      <Styled.OptionWrapper
        isDisabled={isDisabled}
        {...getTestAttributes(`${testId}_OPTION_WRAPPER`)}
      >
        {children}
      </Styled.OptionWrapper>
      {checked && <Checked color={theme.optionTextColor} />}
    </>
  );

  const renderItemWithCheckbox = () =>
    isMulti ? (
      <Styled.CheckboxWrapper
        {...getTestAttributes(`${testId}_CHECKBOX_WRAPPER`)}
      >
        <Checkbox
          label={renderItem(false)}
          testId={testId}
          theme={checkboxTheme as CheckboxProps['theme']}
          isChecked={isSelected}
        />
        <Styled.OptionCheckboxLayer
          isDisabled={isDisabled}
          {...getTestAttributes(`${testId}_OPTION_CHECKBOX_LAYER`)}
        />
      </Styled.CheckboxWrapper>
    ) : (
      <Radio
        label={renderItem(false)}
        theme={labelTheme}
        isChecked={isSelected}
      />
    );

  const renderCheckedOnSelectedItem =
    isSelected && theme.optionSelectedBackground === 'icon';

  return (
    <components.Option {...rest} isDisabled={isDisabled}>
      {hasCheckbox
        ? renderItemWithCheckbox()
        : renderItem(renderCheckedOnSelectedItem)}
    </components.Option>
  );
};

export { Option };
export default withTheme(Option, 'select') as typeof Option;
