import React from 'react';
import { MenuListProps, GroupBase } from 'react-select';
import { FixedSizeList } from 'react-window';

import { withTheme } from '@8x8/oxygen-config';
import { useFontSize } from '@8x8/oxygen-utils';
import { selectNovo } from '@8x8/oxygen-constants';
import { SelectOption } from './SelectProps';

const VirtualMenuList = <
  OptionValue,
  Option extends SelectOption<OptionValue>,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: MenuListProps<Option, IsMulti, Group>,
) => {
  const { children, maxHeight, getValue } = props;

  const theme = {
    ...selectNovo, // default values
    ...props.theme,
  };

  /**
   * lineHeight: 1.5rem
   * optionPaddingVertical: 8px
   *
   * need to transform to numbers to calculate the height
   */
  const rowHeight =
    useFontSize(parseFloat(theme.lineHeight)) +
    parseFloat(theme.optionPaddingVertical) * 2;
  const [value] = getValue();

  // flatten children to have a non-nested array
  // add the group item as an element and then the group options/children
  const flatChildren = React.Children.toArray(children).flatMap(item => {
    if (!React.isValidElement(item)) {
      return item;
    }

    // for length > 1 we have multiple children
    if (React.Children.toArray(item.props.children).length > 1) {
      return [
        React.cloneElement<React.PropsWithChildren>(
          item as React.ReactElement,
          {
            children: null,
          },
        ),
        ...item.props.children,
      ];
    }

    return item;
  });

  // index * rowHeight = offset
  const initialOffset =
    flatChildren.findIndex(item => {
      if (!item.props) return false;

      if (!item.props.value) return false;

      return item.props.value === value?.value;
    }) * rowHeight;

  return (
    <FixedSizeList
      height={maxHeight}
      width="100%"
      itemCount={flatChildren.length}
      itemSize={rowHeight}
      initialScrollOffset={initialOffset}
    >
      {({ index, style }) => <div style={style}>{flatChildren[index]}</div>}
    </FixedSizeList>
  );
};

export { VirtualMenuList };
export default withTheme(VirtualMenuList, 'select');
