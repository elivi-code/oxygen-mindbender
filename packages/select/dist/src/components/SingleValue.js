import React, { useRef } from 'react';
import { components } from 'react-select';
import { useHasOverflow } from '@8x8/oxygen-utils';
const SingleValue = (props) => {
    const innerRef = useRef(null);
    const hasOverflow = useHasOverflow(innerRef);
    const innerProps = {
        ...props.innerProps,
        ref: innerRef,
    };
    if (hasOverflow && typeof props.children === 'string') {
        innerProps.title = props.children;
    }
    return React.createElement(components.SingleValue, { ...props, innerProps: innerProps });
};
export default SingleValue;
