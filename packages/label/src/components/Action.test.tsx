import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Action from './Action';

jest.mock('../styled/ActionText', () => 'ActionText');

describe('<Action>', () => {
  function setup(props = {}, children = 'Action text') {
    return renderer.create(<Action {...props}>{children}</Action>).toJSON();
  }

  it('should render correctly', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with action as a link', () => {
    const wrapper = setup({
      action: 'www.8x8.com',
      actionLabel: 'External link',
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with _blank link action', () => {
    const wrapper = setup({
      action: 'www.8x8.com',
      actionLabel: 'External link',
      actionTarget: '_blank',
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with _parent link action', () => {
    const wrapper = setup({
      action: 'www.8x8.com',
      actionLabel: 'External link',
      actionTarget: '_parent',
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with _top link action', () => {
    const wrapper = setup({
      action: 'www.8x8.com',
      actionLabel: 'External link',
      actionTarget: '_top',
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render as `button` with action as function', () => {
    const action = jest.fn();
    const wrapper = setup({ action, actionLabel: 'External link' });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when isDisabled', () => {
    const wrapper = setup({ isDisabled: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly the action text when expects to wrap', () => {
    const wrapper = setup({ shouldWrapText: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('should NOT render title attribute when the Action children is HTML', () => {
    const component = mount(
      <Action>
        <div>Action text</div>
      </Action>,
    );

    expect(component.find('ActionText').props().title).toBeUndefined();
  });

  it('should render title attribute, when the Action children is a plain text', () => {
    const actionText = 'Action text';
    const component = mount(<Action>{actionText}</Action>);

    expect(component.find('ActionText').props().title).toEqual(actionText);
  });

  it('should render title attribute, when the Action children is a number', () => {
    const actionText = 1;
    const component = mount(<Action>{actionText}</Action>);

    expect(component.find('ActionText').props().title).toEqual(
      String(actionText),
    );
  });
});
