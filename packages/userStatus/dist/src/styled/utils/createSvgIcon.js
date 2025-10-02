import React from 'react';
import styled from 'styled-components';
const SvgWrapper = styled.svg.attrs(() => ({
    viewBox: '0 0 14 14',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
})) `
  display: block;
`;
function createSvgIcon(pathComponent, displayName = 'StatusIcon') {
    const StatusIcon = React.forwardRef((props, ref) => (React.createElement(SvgWrapper, { ...props, ref: ref }, pathComponent)));
    StatusIcon.displayName = displayName;
    return StatusIcon;
}
export default createSvgIcon;
