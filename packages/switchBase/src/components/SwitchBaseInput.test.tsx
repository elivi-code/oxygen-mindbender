import React from 'react';
import renderer from 'react-test-renderer';

import SwitchBaseInput, { Props } from './SwitchBaseInput';

jest.mock('../styled', () => ({
  __esModule: true,
  SwitchBaseInputField: 'SwitchBaseInputField',
  SwitchBaseInputWrapper: 'SwitchBaseInputWrapper',
}));

describe('<SwitchBaseInput />', () => {
  let wrapper;
  const setup = (props?: Omit<Props, 'id' | 'icon' | 'testId' | 'onChange'>) =>
    renderer
      .create(
        <SwitchBaseInput
          testId="testId"
          name="test-name"
          id="test-id"
          isChecked={false}
          isDisabled={false}
          onBlur={jest.fn()}
          onChange={jest.fn()}
          onFocus={jest.fn()}
          onMouseEnter={jest.fn()}
          onMouseLeave={jest.fn()}
          icon={null}
          {...props}
        />,
      )
      .toJSON();

  it('should render correctly with default props', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with role', () => {
    wrapper = setup({ role: 'testRole' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly is disabled', () => {
    wrapper = setup({ isDisabled: true });
    expect(wrapper).toMatchSnapshot();
  });
});
