import React from 'react';
import { render } from '@testing-library/react';

import { toastNovo } from '@8x8/oxygen-constants';
import Actions from './Actions';

const actions = [
  { title: 'Link 1', callback: () => {}, id: 1 },
  { title: 'Link 2', callback: () => {}, id: 2 },
];

describe('<Actions>', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Actions actions={actions} theme={toastNovo} />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
