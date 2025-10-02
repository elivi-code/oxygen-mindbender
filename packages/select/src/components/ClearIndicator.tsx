import React from 'react';
import { GroupBase, ClearIndicatorProps } from 'react-select';

import { withTheme, getTestAttributes } from '@8x8/oxygen-config';
import { CSSProperties } from 'styled-components';
import * as Styled from '../styled';

const ClearIndicator = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: ClearIndicatorProps<Option, IsMulti, Group>,
) => {
  const {
    theme,
    isFocused = false,
    selectProps,
    getStyles,
    innerProps: { ref, ...restInnerProps },
  } = props;
  const { testId, clearIconAriaLabel } = selectProps;
  const { clearIconColor, clearIconFocusedColor, iconSet } = theme;
  const { isClearable } = selectProps;

  const Icon = iconSet === 'novo' ? Styled.CloseNovoIcon : Styled.CloseIcon;
  const iconProps = {
    isFocused,
    color: isFocused ? clearIconFocusedColor : clearIconColor,
    'aria-hidden': true,
    ...(iconSet === 'novo' && { size: 22 }),
    ...getTestAttributes(`${testId}_CLEAR_INDICATOR`),
  };

  return (
    <div
      {...restInnerProps}
      ref={ref}
      style={getStyles('clearIndicator', props) as CSSProperties}
      aria-hidden="false"
      role={isClearable ? 'button' : undefined}
      aria-label={clearIconAriaLabel ? `${clearIconAriaLabel}` : undefined}
    >
      <Icon {...iconProps} />
    </div>
  );
};

export { ClearIndicator };

export default withTheme(ClearIndicator, 'select');
