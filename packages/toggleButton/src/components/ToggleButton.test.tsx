import React from 'react';
import renderer from 'react-test-renderer';

import { toggleButton as theme } from '@8x8/oxygen-constants';
import { ToggleButton } from './ToggleButton';

jest.mock('@8x8/oxygen-switch-base', () => 'SwitchBase');
jest.mock('../styled/ToggleButtonIcon', () => 'ToggleButtonIcon');

describe('<ToggleButton>', () => {
  let wrapper;
  const mockProps = {
    id: 'mockedId',
    label: 'mockedLabel',
    value: 'mockedValue',
    name: 'mockedName',
  };

  function setup(props = {}) {
    return renderer
      .create(<ToggleButton theme={theme} {...mockProps} {...props} />)
      .toJSON();
  }

  it('should render the toggle-button component', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with infoBoxText', () => {
    wrapper = setup({ infoBoxText: 'Test' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with infoBoxButtonLabel', () => {
    wrapper = setup({ infoBoxButtonLabel: 'Button Label' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when the label tooltip is disabled', () => {
    wrapper = setup({ showLabelTooltipOnOverflow: false });
    expect(wrapper).toMatchSnapshot();
  });
});
