import React from 'react';
import { DropdownIndicatorProps, GroupBase, components } from 'react-select';

import {
  ArrowDownSolidIcon,
  ArrowUpSolidIcon,
  ArrowDownIcon,
} from '@8x8/oxygen-icon';
import { getTestAttributes } from '@8x8/oxygen-config';

const DropdownIndicator = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: DropdownIndicatorProps<Option, IsMulti, Group>,
) => {
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
    color: color as string,
    ...getTestAttributes(`${testId}${iconSuffix}`),
  };

  return (
    <components.DropdownIndicator {...props}>
      <Icon {...iconProps} />
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;
