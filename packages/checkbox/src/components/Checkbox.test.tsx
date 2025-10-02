import React from 'react';
import renderer from 'react-test-renderer';

import { checkbox as theme } from '@8x8/oxygen-constants';
import { Checkbox, CheckboxProps } from './Checkbox';

jest.mock('@8x8/oxygen-switch-base', () => 'SwitchBase');
jest.mock('../styled/CheckboxIconWrapper', () => ({
  CheckboxIconWrapper: 'CheckboxIconWrapper',
}));

describe('<Checkbox>', () => {
  let wrapper;
  const setup = (props?: Omit<CheckboxProps, 'theme'>) =>
    renderer.create(<Checkbox theme={theme} {...props} />).toJSON();

  it('should render correctly with default properties', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with testID', () => {
    wrapper = setup({ testId: 'exampleTestId' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with id', () => {
    wrapper = setup({ id: 'exampleId' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with label', () => {
    wrapper = setup({ label: 'exampleLabel' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with value', () => {
    wrapper = setup({ value: 'exampleValue' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with name', () => {
    wrapper = setup({ name: 'exampleName' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with infoBoxText', () => {
    wrapper = setup({ infoBoxText: 'Test' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with infoBoxButtonLabel', () => {
    wrapper = setup({ infoBoxButtonLabel: 'Checkbox Button' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when is checked', () => {
    wrapper = setup({ isChecked: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when is disabled', () => {
    wrapper = setup({ isDisabled: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when is indeterminate', () => {
    wrapper = setup({ isIndeterminate: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when the label tooltip is disabled', () => {
    wrapper = setup({ showLabelTooltipOnOverflow: false });
    expect(wrapper).toMatchSnapshot();
  });
});
