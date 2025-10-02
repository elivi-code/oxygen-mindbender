import React from 'react';
import styled from 'styled-components';
import Tag from '@8x8/oxygen-tag';
import { getTestAttributes } from '@8x8/oxygen-config';
import { Ellipsis } from '../styled';
const TagWrapper = styled(Tag) `
  min-width: 3rem;
`;
const MultiValue = (props) => {
    const { selectProps, removeProps, isFocused = false, children } = props;
    const data = props.data; // this is a quick-fix for js -> ts migration purposes
    const { testId, isDisabled, isReadOnly } = selectProps;
    const { isFixed, avatar } = data;
    const canRemoveValue = !isFixed && !isDisabled && !isReadOnly;
    const tagProps = {
        variant: 'dark',
        isFocused,
        avatar,
        role: 'option',
        'aria-selected': true,
        hasError: false,
    };
    if (canRemoveValue) {
        tagProps.action = removeProps.onClick;
        // https://github.com/JedWatson/react-select/blob/884f1c42549faad7cb210169223b427ad6f0c9fd/packages/react-select/src/Select.tsx#L1837-L1839
        // OX-1517 add all items to also include a preventDefault() on the mouseDown event
        tagProps.actionProps = removeProps;
    }
    return (React.createElement(TagWrapper, { testId: `${testId}_TAG`, ...tagProps },
        React.createElement(Ellipsis, { ...getTestAttributes(`${testId}_TAG_VALUE`) }, children)));
};
export default MultiValue;
