// this is a test utility so no deps required
/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import { OxygenProvider } from '@8x8/oxygen-config';

export const renderWithTheme = (children: React.ReactNode) => {
  const result = render(
    <OxygenProvider themeName="light">{children}</OxygenProvider>,
  );

  return {
    ...result,
    rerender: (ui: React.ReactElement) =>
      result.rerender(<OxygenProvider themeName="light">{ui}</OxygenProvider>),
  };
};
