import React from 'react';
import { render, screen, within } from '@testing-library/react';

import { toastNovo } from '@8x8/oxygen-constants';

import Toast from './Toast';

describe('Toast types', () => {
  it.each`
    type         | testId                       | color
    ${'success'} | ${'TOAST_SUCCESS_CONTAINER'} | ${toastNovo.markingColorSuccess}
    ${'warning'} | ${'TOAST_WARNING_CONTAINER'} | ${toastNovo.markingColorWarning}
    ${'error'}   | ${'TOAST_ERROR_CONTAINER'}   | ${toastNovo.markingColorError}
    ${'info'}    | ${'TOAST_INFO_CONTAINER'}    | ${toastNovo.markingColorInfo}
  `(
    'useOxygen returns correct values from OxygenProvider for $type',
    ({ type, testId, color }) => {
      render(<Toast type={type} theme={toastNovo} />);

      expect(
        within(screen.getByTestId(testId)).queryAllByRole('presentation')[0],
      ).toHaveAttribute('color', color);
    },
  );

  it.each`
    type         | testId                       | color
    ${'loading'} | ${'TOAST_LOADING_CONTAINER'} | ${toastNovo.markingColorLoading}
  `(
    'useOxygen returns correct values from OxygenProvider for $type',
    ({ type, testId, color }) => {
      render(<Toast type={type} theme={toastNovo} />);

      expect(
        within(screen.getByTestId(testId)).getByTestId('SPINNER'),
      ).toHaveAttribute('color', color);
    },
  );

  it('renders with title attribute when passed iconTitle prop', () => {
    render(
      <Toast
        type="success"
        theme={toastNovo}
        iconTitle="custom title on icon"
      />,
    );

    expect(screen.getByTitle('custom title on icon')).toBeInTheDocument();
  });
});
