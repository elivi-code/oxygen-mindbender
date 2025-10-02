import React from 'react';
import renderer from 'react-test-renderer';

import RadioInput from './RadioInput';

jest.mock('./RadioIcon', () => 'RadioIcon');
jest.mock('../styled', () => ({
  __esModule: true,
  RadioInputField: 'RadioInputField',
  RadioInputWrapper: 'RadioInputWrapper',
}));
describe('<RadioInput />', () => {
  let wrapper;
  const setup = (props = {}) =>
    renderer
      .create(
        <RadioInput
          testId="testId"
          name="test-name"
          id="test-id"
          isChecked={false}
          isDisabled={false}
          isFocused={false}
          isHovered={false}
          hasLabel={false}
          onBlur={jest.fn()}
          onChange={jest.fn()}
          onFocus={jest.fn()}
          onMouseEnter={jest.fn()}
          onMouseLeave={jest.fn()}
          {...props}
        />,
      )
      .toJSON();

  it('should render correctly with default props', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
