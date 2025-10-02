import React, { isValidElement } from 'react';
import { useOxygen } from '@8x8/oxygen-config';

export const useAddIconColor = (icon?: React.ReactElement) => {
  const { theme } = useOxygen();

  if (!isValidElement(icon)) {
    return icon;
  }

  const { props } = icon as React.ReactElement;

  return <icon.type {...props} color={theme.icon01} size={20} />;
};
