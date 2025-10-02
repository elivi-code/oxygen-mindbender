import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import { ListItem } from './ListItem';

jest.mock('../styled/ListItemStyled', () => 'ListItemStyled');

describe('<ListItem>', () => {
  let wrapper;
  const itemText = 'item text';

  function shallowSetup(props = {}) {
    return shallow(<ListItem {...props}>{itemText}</ListItem>);
  }

  function setupRender(props = {}) {
    return render(<ListItem {...props}>{itemText}</ListItem>);
  }

  it('should render correctly', () => {
    wrapper = shallowSetup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with no tabindex if disabled', () => {
    wrapper = shallowSetup({ isDisabled: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should trigger click when it is clicked', () => {
    const onClick = jest.fn();

    wrapper = shallowSetup({ onClick });
    wrapper.simulate('click', { preventDefault() {}, stopPropagation() {} });
    expect(onClick).toHaveBeenCalled();
  });

  it('should not trigger click when it is disabled', () => {
    const onClick = jest.fn();

    wrapper = shallowSetup({ onClick, isDisabled: true });
    wrapper.simulate('click', { preventDefault() {}, stopPropagation() {} });
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should render list item with aria-disabled true when it is disabled', () => {
    const listItemWrapper = setupRender({ isDisabled: true });

    expect(listItemWrapper.getByText('item text')).toHaveAttribute(
      'aria-disabled',
    );
  });

  it('should call onClick when Enter/Space is pressed and list item is enabled', () => {
    const onClick = jest.fn();

    wrapper = shallowSetup({ onClick });

    wrapper.simulate('keydown', { key: 'Enter' });
    expect(onClick).toHaveBeenCalledTimes(1);

    wrapper.simulate('keydown', { key: 'Space' });
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('should not call onClick when Enter/Space is pressed and list item is disabled', () => {
    const onClick = jest.fn();

    wrapper = shallowSetup({ onClick, isDisabled: true });

    wrapper.simulate('keydown', {
      key: 'Enter',
      preventDefault() {},
      stopPropagation() {},
    });
    expect(onClick).not.toHaveBeenCalled();

    wrapper.simulate('keydown', {
      key: 'Space',
      preventDefault() {},
      stopPropagation() {},
    });
    expect(onClick).not.toHaveBeenCalled();
  });
});
