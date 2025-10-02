import React from 'react';
import renderer from 'react-test-renderer';

import { toggleButtonGroup as theme } from '@8x8/oxygen-constants';

import { ToggleButtonGroup, ToggleButtonGroupProps } from './ToggleButtonGroup';

describe('<ToggleButtonGroup>', () => {
  let wrapper;

  function setup(
    props: Partial<ToggleButtonGroupProps> & React.PropsWithChildren,
  ) {
    return renderer
      .create(<ToggleButtonGroup theme={theme as any} {...props} />)
      .toJSON();
  }

  it('should render the toggle-button group component', () => {
    wrapper = setup({
      children: 'mockedChildren',
    });
    expect(wrapper).toMatchSnapshot();
  });
});
