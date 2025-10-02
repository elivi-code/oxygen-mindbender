import React from 'react';
import SvgIcon, { IconProps } from './Icon';

function createSvgIcon(path: React.ReactElement, displayName: string) {
  const Icon = React.forwardRef<React.FC<IconProps>, IconProps>(
    (props, ref) => (
      <SvgIcon {...props} ref={ref}>
        {path}
      </SvgIcon>
    ),
  );

  Icon.displayName = displayName;

  return Icon;
}

export type { IconProps };
export default createSvgIcon;
