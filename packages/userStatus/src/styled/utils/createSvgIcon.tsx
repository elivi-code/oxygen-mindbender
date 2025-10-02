import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

const SvgWrapper = styled.svg.attrs(() => ({
  viewBox: '0 0 14 14',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
}))`
  display: block;
`;

type Props = {
  theme?: DefaultTheme;
} & React.PropsWithChildren;

function createSvgIcon(
  pathComponent: React.ReactElement,
  displayName = 'StatusIcon',
) {
  const StatusIcon = React.forwardRef<SVGSVGElement, Props>((props, ref) => (
    <SvgWrapper {...props} ref={ref}>
      {pathComponent}
    </SvgWrapper>
  ));

  StatusIcon.displayName = displayName;

  return StatusIcon;
}

export default createSvgIcon;
