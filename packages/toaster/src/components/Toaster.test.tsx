import React from 'react';
import { mount } from 'enzyme';
import PubSub from 'pubsub-js';
import { render } from '@testing-library/react';
import ToasterWrapper from '../styled/ToasterWrapper';

import { Toaster } from './Toaster';
import { notify, configure } from '..';

jest.useFakeTimers();

describe('<Toaster />', () => {
  function setup() {
    return mount(<Toaster theme={{}} />);
  }

  it('renders', () => {
    const wrapper = setup();
    const toast = notify({
      content: 'Text',
      actions: [{ title: 'Link', callback: () => {} }],
    });

    wrapper.instance().addToast(undefined, toast);
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('show toast', () => {
    const wrapper = setup();
    const toast = notify({
      content: 'Text',
      actions: [{ title: 'Link', callback: () => {} }],
    });

    wrapper.instance().addToast(undefined, toast);
    wrapper.update();
    expect(wrapper.state().toasts).toHaveLength(1);
  });

  it('remove toast', () => {
    const wrapper = setup();
    const toast = notify({
      content: 'Text',
      actions: [{ title: 'Link', callback: () => {} }],
    });

    wrapper.instance().addToast(undefined, toast);
    wrapper.instance().removeToast(undefined, toast.id);
    wrapper.update();
    expect(wrapper.state().toasts).toHaveLength(0);
  });

  it('remove toast with onClose callback', () => {
    const onCloseCallback = jest.fn();
    const wrapper = setup();
    const toast = notify({
      content: 'Text',
      actions: [{ title: 'Link', callback: () => {} }],
      onClose: onCloseCallback,
    });

    wrapper.instance().addToast(undefined, toast);
    wrapper.instance().removeToast(undefined, toast.id);
    wrapper.update();
    expect(onCloseCallback).toHaveBeenCalled();
    expect(wrapper.state().toasts).toHaveLength(0);
  });

  it('remove all toasts', () => {
    const wrapper = setup();
    const toast1 = notify({
      content: 'Text',
      actions: [{ title: 'Link', callback: () => {} }],
    });
    const toast2 = notify({
      content: 'Text',
      actions: [{ title: 'Link', callback: () => {} }],
    });

    wrapper.instance().addToast(undefined, toast1);
    wrapper.instance().addToast(undefined, toast2);
    wrapper.update();
    expect(wrapper.state().toasts).toHaveLength(2);
    wrapper.instance().removeAllToasts();
    wrapper.update();
    expect(wrapper.state().toasts).toHaveLength(0);
  });

  it('remove all toasts with onClose callback', () => {
    const onCloseCallback = jest.fn();
    const wrapper = setup();
    const toast1 = notify({
      content: 'Text',
      actions: [{ title: 'Link', callback: () => {} }],
      onClose: onCloseCallback,
    });
    const toast2 = notify({
      content: 'Text',
      actions: [{ title: 'Link', callback: () => {} }],
      onClose: onCloseCallback,
    });

    wrapper.instance().addToast(undefined, toast1);
    wrapper.instance().addToast(undefined, toast2);
    wrapper.update();
    expect(wrapper.state().toasts).toHaveLength(2);
    wrapper.instance().removeAllToasts();
    wrapper.update();
    expect(onCloseCallback).toHaveBeenCalledTimes(2);
    expect(wrapper.state().toasts).toHaveLength(0);
  });

  it('subscriptions are created', () => {
    const wrapper = setup();
    const {
      addSubscriptionToken,
      removeSubscriptionToken,
      removeAllSubscriptionToken,
    } = wrapper.instance();

    expect(addSubscriptionToken).toBeDefined();
    expect(removeSubscriptionToken).toBeDefined();
    expect(removeAllSubscriptionToken).toBeDefined();
  });

  it('subscriptions are removed on unmount', () => {
    const unsubscribeMock = jest.spyOn(PubSub, 'unsubscribe');
    const wrapper = setup();

    wrapper.unmount();

    expect(unsubscribeMock).toHaveBeenCalledTimes(4);
  });

  it('`stackSize` component property is set from config', () => {
    const stackSizeMock = 10;

    configure({
      stackSize: stackSizeMock,
    });

    const wrapper = setup();

    expect(wrapper.instance().stackSize).toEqual(stackSizeMock);
  });

  it('update toast content', () => {
    const wrapper = setup();
    const toast1 = notify({
      id: 'toast-id',
      content: 'Initial',
      actions: [{ title: 'Link', callback: () => {} }],
    });
    const toast2 = notify({
      id: 'toast-id',
      content: 'Updated',
      actions: [{ title: 'Link', callback: () => {} }],
    });

    wrapper.instance().addToast(undefined, toast1);
    wrapper.instance().addToast(undefined, toast2);
    wrapper.update();
    expect(wrapper.state().toasts).toHaveLength(1);
  });
});

const mockTheme = {
  isClassic: false,
  zIndex: 1,
};

describe('ToasterWrapper', () => {
  it('renders with default styles', () => {
    const { container } = render(<ToasterWrapper theme={mockTheme} />);

    expect(container).toBeInTheDocument();

    expect(container.firstChild).toHaveStyle('max-width: calc(100% - 24px);');
  });

  it('applies styles based on theme.isClassic', () => {
    const classicTheme = {
      ...mockTheme,
      isClassic: true,
    };

    const { container } = render(<ToasterWrapper theme={classicTheme} />);

    expect(container.firstChild).toHaveStyle('left: 0;');
    expect(container.firstChild).toHaveStyle('right: 0;');
  });
});
