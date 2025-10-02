import React from 'react';
import { render, screen } from '@testing-library/react';

import { ClockIcon } from '@8x8/oxygen-icon';
import ClockIconDeepImport from '@8x8/oxygen-icon/novo/ClockIcon';

// @todo maybe this should be generated as well to test all icon
describe('oxygen/icon package', () => {
  test('verify named export', () => {
    render(<ClockIcon data-test-id="click-icon" />);

    expect(screen.getByTestId('click-icon')).toBeInTheDocument();
  });
  test('verify deep import', () => {
    render(<ClockIconDeepImport data-test-id="click-icon" />);

    expect(screen.getByTestId('click-icon')).toBeInTheDocument();
  });
});
