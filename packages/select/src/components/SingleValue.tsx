import React, { useRef } from 'react';
import { components, GroupBase, SingleValueProps } from 'react-select';
import { useHasOverflow } from '@8x8/oxygen-utils';

const SingleValue = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: SingleValueProps<Option, IsMulti, Group>,
) => {
  const innerRef = useRef(null);
  const hasOverflow = useHasOverflow(innerRef);

  const innerProps = {
    ...props.innerProps,
    ref: innerRef,
  };

  if (hasOverflow && typeof props.children === 'string') {
    innerProps.title = props.children;
  }

  return <components.SingleValue {...props} innerProps={innerProps} />;
};

export default SingleValue;
