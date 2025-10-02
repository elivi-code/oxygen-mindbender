import React from 'react';
import SvgIcon from './Icon';
function createSvgIcon(path, displayName) {
    const Icon = React.forwardRef((props, ref) => (React.createElement(SvgIcon, { ...props, ref: ref }, path)));
    Icon.displayName = displayName;
    return Icon;
}
export default createSvgIcon;
