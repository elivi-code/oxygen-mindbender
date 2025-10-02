import React from 'react';
import { shallow } from 'enzyme';

import { select as theme } from '@8x8/oxygen-constants';

import { Select } from './Select';

jest.mock('react-select', () => 'ReactSelect');
jest.mock('react-select/async', () => 'ReactSelectAsync');
jest.mock('react-select/creatable', () => 'ReactSelectCreatable');
jest.mock('react-select/async-creatable', () => 'ReactSelectAsyncCreatable');
jest.mock('@8x8/oxygen-label', () => 'Label');

jest.mock('../styled', () => ({
  SelectContainer: 'SelectContainer',
}));

jest.mock('./ClearIndicator', () => 'ClearIndicator');
jest.mock('./DropdownIndicator', () => 'DropdownIndicator');
jest.mock('./Option', () => 'Option');
jest.mock('./ValueContainer', () => 'ValueContainer');

describe('<Select />', () => {
  let wrapper;

  function setupShallow(props = {}) {
    return shallow(<Select theme={theme} {...props} />);
  }

  it('renders correctly the select', () => {
    wrapper = setupShallow();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly the select when hasError', () => {
    wrapper = setupShallow({ hasError: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onChange callback when an option is selected', () => {
    const onChange = jest.fn();

    wrapper = setupShallow({ onChange });

    wrapper.find('ReactSelect').simulate('change');

    expect(onChange).toHaveBeenCalled();
  });

  it('should call onChange callback with a single object when select is not multi or checkbox', () => {
    const onChange = jest.fn();

    wrapper = setupShallow({ onChange });

    wrapper
      .find('ReactSelect')
      .simulate('change', { value: 'test-value', label: 'test-label' });

    expect(onChange).toHaveBeenCalledWith({
      value: 'test-value',
      label: 'test-label',
    });
  });

  it('should call onChange callback with an array when select is multi', () => {
    const onChange = jest.fn();

    wrapper = setupShallow({ onChange, isMulti: true });
    wrapper
      .find('ReactSelect')
      .simulate('change', [{ value: 'test-value', label: 'test-label' }]);

    expect(onChange).toHaveBeenCalledWith([
      { value: 'test-value', label: 'test-label' },
    ]);
  });

  it('should call onChange callback with an array when select is with checkbox', () => {
    const onChange = jest.fn();

    wrapper = setupShallow({ onChange, hasCheckbox: true });
    wrapper
      .find('ReactSelect')
      .simulate('change', [{ value: 'test-value', label: 'test-label' }]);

    expect(onChange).toHaveBeenCalledWith([
      { value: 'test-value', label: 'test-label' },
    ]);
  });

  it('shows the label if labelValue has value', () => {
    wrapper = setupShallow({ labelValue: 'label value' });
    expect(wrapper.exists('Label')).toBeTruthy();
  });

  it.each`
    isAsync  | isCreatable | ReactSelectCount | ReactSelectAsyncCount | ReactSelectCreatableCount | ReactSelectAsyncCreatableCount
    ${false} | ${false}    | ${1}             | ${0}                  | ${0}                      | ${0}
    ${true}  | ${false}    | ${0}             | ${1}                  | ${0}                      | ${0}
    ${false} | ${true}     | ${0}             | ${0}                  | ${1}                      | ${0}
    ${true}  | ${true}     | ${0}             | ${0}                  | ${0}                      | ${1}
  `(
    'when isAsync={isAsync} and isCreatable={isCreatable} it should render ReactSelect {ReactSelectCount} and' +
      'ReactSelectAsyncCount {ReactSelectAsyncCount} and ReactSelectCreatableCount {ReactSelectCreatableCount} and' +
      'ReactSelectAsyncCreatableCount {ReactSelectAsyncCreatableCount}',
    ({
      isAsync,
      isCreatable,
      ReactSelectCount,
      ReactSelectAsyncCount,
      ReactSelectCreatableCount,
      ReactSelectAsyncCreatableCount,
    }) => {
      wrapper = setupShallow({ isAsync, isCreatable });
      expect(wrapper.find('ReactSelect')).toHaveLength(ReactSelectCount);
      expect(wrapper.find('ReactSelectAsync')).toHaveLength(
        ReactSelectAsyncCount,
      );
      expect(wrapper.find('ReactSelectCreatable')).toHaveLength(
        ReactSelectCreatableCount,
      );
      expect(wrapper.find('ReactSelectAsyncCreatable')).toHaveLength(
        ReactSelectAsyncCreatableCount,
      );
    },
  );
});
