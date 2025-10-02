import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import CheckboxIcon from './CheckboxIcon';

describe('<CheckboxIcon>', () => {
  it.each`
    isNovo   | isChecked | isIndeterminate
    ${true}  | ${true}   | ${true}
    ${true}  | ${true}   | ${false}
    ${true}  | ${false}  | ${true}
    ${true}  | ${false}  | ${false}
    ${false} | ${true}   | ${true}
    ${false} | ${true}   | ${false}
    ${false} | ${false}  | ${true}
    ${false} | ${false}  | ${false}
  `(
    `renders items with role="presentation" and color="currentColor", and each to have a different icon for { novo: $isNovo, isChecked: $isChecked, isIndeterminate: $isIndeterminate }`,
    ({ isNovo, isChecked, isIndeterminate }) => {
      render(
        <CheckboxIcon
          isNovo={isNovo}
          isChecked={isChecked}
          isIndeterminate={isIndeterminate}
        />,
      );
      const item = screen.getByRole('presentation');

      // all should have common properties
      expect(item).toHaveAttribute('color', 'currentColor');
      // each should render the correct icon visual snapshots will be better, but this is fine
      expect(item).toMatchSnapshot();
    },
  );
});
