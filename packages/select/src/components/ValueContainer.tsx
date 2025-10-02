import React from 'react';
import { components, GroupBase, ValueContainerProps } from 'react-select';

import { withTheme, getTestAttributes } from '@8x8/oxygen-config';

import { SelectTheme } from '../types';
import * as Styled from '../styled';

export const formatShortDisplay = (optionText: string, otherOptions: any[]) => {
  const suffix = otherOptions?.length ? ` +${otherOptions.length}` : '';

  return `${optionText}${suffix}`;
};

const ValueContainer = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: ValueContainerProps<Option, IsMulti, Group>,
) => {
  const { children, ...rest } = props;
  const { hasValue, selectProps, theme, isMulti } = rest;

  const { inputValue } = selectProps;
  const {
    hasShortMultiDisplay,
    iconLeft: LeftIcon,
    multipleSelectMaxRows,
    size,
    testId,
  } = selectProps;
  const { iconSize, optionIconColor, placeholderIconColor } =
    theme as SelectTheme;

  const getIconColor = () => {
    if (!inputValue && !hasValue) {
      return placeholderIconColor;
    }

    return optionIconColor;
  };

  const renderChildren = () => {
    return (
      <Styled.ValueWrapper
        {...getTestAttributes(`${testId}_VALUE_CONTAINER`)}
        size={size}
        multipleSelectMaxRows={multipleSelectMaxRows as number}
      >
        {children}
      </Styled.ValueWrapper>
    );
  };

  const renderShortMultiDisplay = () => {
    const [selectedOptions, ...otherChildren] = children as any[];

    if (selectedOptions.length) {
      const [first, ...others] = selectedOptions as any[];
      const {
        props: { children: optionText },
      } = first;

      return (
        <Styled.ValueWrapper
          size={size}
          multipleSelectMaxRows={multipleSelectMaxRows as number}
        >
          <Styled.ShortMultiDisplay>
            {formatShortDisplay(optionText, others)}
          </Styled.ShortMultiDisplay>
          {otherChildren}
        </Styled.ValueWrapper>
      );
    }

    return renderChildren();
  };

  return (
    <components.ValueContainer {...rest}>
      {LeftIcon && (
        <Styled.IconLeftWrapper
          {...getTestAttributes(`${testId}_ICON_LEFT_WRAPPER`)}
          aria-hidden
        >
          <LeftIcon
            color={getIconColor()}
            size={iconSize}
            {...getTestAttributes(`${testId}_ICON_LEFT`)}
          />
        </Styled.IconLeftWrapper>
      )}
      {hasShortMultiDisplay && isMulti
        ? renderShortMultiDisplay()
        : renderChildren()}
    </components.ValueContainer>
  );
};

export { ValueContainer };

export default withTheme(ValueContainer, 'select');
