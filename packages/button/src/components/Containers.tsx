import React from 'react';

import type { StyledButtonProps, ButtonSize } from '../types';
import { getColor, getIconStyle } from '../styled/button.utils';

import {
  ButtonRegularStyled,
  ButtonCircularStyled,
} from '../styled/ButtonStyled';

const iconSizeMap: Record<ButtonSize, number> = {
  small: 16,
  medium: 20,
  large: 24,
  big: 24,
};

export const ButtonRegular = React.forwardRef<
  HTMLButtonElement,
  StyledButtonProps
>(({ children, iconLeft, iconRight, ...props }, ref) => {
  const iconProps = {
    color: getColor(props, getIconStyle(props)),
    size: iconSizeMap[props.size],
  };

  return (
    <ButtonRegularStyled {...props} ref={ref}>
      {iconLeft &&
        React.isValidElement(iconLeft) &&
        React.cloneElement(iconLeft, iconProps)}
      {children}
      {iconRight &&
        React.isValidElement(iconRight) &&
        React.cloneElement(iconRight, iconProps)}
    </ButtonRegularStyled>
  );
});
ButtonRegular.displayName = 'ButtonRegular';

export const ButtonCircular = React.forwardRef<
  HTMLButtonElement,
  StyledButtonProps
>(({ children, ...props }, ref) => (
  <ButtonCircularStyled {...props} ref={ref}>
    {React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        const color = getColor(props, getIconStyle(props));
        const childProps = { color };

        return React.cloneElement(child, childProps);
      }

      return child;
    })}
  </ButtonCircularStyled>
));
ButtonCircular.displayName = 'ButtonCircular';
