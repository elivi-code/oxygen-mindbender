import React from 'react';
import 'jest-styled-components';
import { shallow, mount } from 'enzyme';
import { contextMenu as theme } from '@8x8/oxygen-constants';
import PubSub from 'pubsub-js';

import { ContextMenu } from './ContextMenu';
import { CONTEXT_MENU_SHOW, CONTEXT_MENU_HIDE } from '../constants';

jest.mock('../styled/ContextMenu', () => 'ContextMenu');

describe('<ContextMenu>', () => {
  let wrapper;
  const mockEventsMap = new Map();

  function setup(props = {}) {
    return shallow(
      <ContextMenu id="id" theme={theme} {...props}>
        <span>context menu</span>
      </ContextMenu>,
    );
  }

  function setupMount(props = {}) {
    return mount(
      <ContextMenu id="id" theme={theme} {...props}>
        <span>context menu</span>
      </ContextMenu>,
    );
  }

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render correctly', () => {
    wrapper = setup();
    wrapper.instance().show({ x: 0, y: 0 });
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render if not visible', () => {
    wrapper = setup();
    expect(wrapper.isEmptyRender()).toBe(true);
  });

  it('should subscribe to pubsub events after mounting', () => {
    const spy = jest.spyOn(PubSub, 'subscribe');

    wrapper = setupMount();

    expect(spy).toHaveBeenCalled();
  });

  it('should unsubscribe from pubsub events after unmounting', () => {
    const spy = jest.spyOn(PubSub, 'unsubscribe');

    wrapper = setupMount();
    wrapper.unmount();

    expect(spy).toHaveBeenCalled();
  });

  it('should call onShow when the context menu is shown', () => {
    const onShow = jest.fn();

    jest
      .spyOn(PubSub, 'subscribe')
      .mockImplementation((eventName, eventCallback) => {
        const currentEventCallbacks = mockEventsMap.get(eventName) || [];

        currentEventCallbacks.push(eventCallback);
        mockEventsMap.set(eventName, currentEventCallbacks);
      });

    jest
      .spyOn(PubSub, 'publish')
      .mockImplementation((eventName, eventParams) => {
        const currentEventCallbacks = mockEventsMap.get(eventName);

        currentEventCallbacks.forEach(cb => {
          cb(eventName, eventParams);
        });
      });

    wrapper = setupMount({ onShow });
    PubSub.publish(CONTEXT_MENU_SHOW, { id: 'id', x: 200, y: 200 });
    expect(onShow).toHaveBeenCalled();
  });

  it('should not call onShow when a different context menu is shown', () => {
    const onShow = jest.fn();

    jest
      .spyOn(PubSub, 'subscribe')
      .mockImplementation((eventName, eventCallback) => {
        const currentEventCallbacks = mockEventsMap.get(eventName) || [];

        currentEventCallbacks.push(eventCallback);
        mockEventsMap.set(eventName, currentEventCallbacks);
      });

    jest
      .spyOn(PubSub, 'publish')
      .mockImplementation((eventName, eventParams) => {
        const currentEventCallbacks = mockEventsMap.get(eventName);

        currentEventCallbacks.forEach(cb => {
          cb(eventName, eventParams);
        });
      });

    wrapper = setupMount({ onShow });
    PubSub.publish(CONTEXT_MENU_SHOW, { id: 'id2', x: 200, y: 200 });
    expect(onShow).toHaveBeenCalledTimes(0);
  });

  it('should call onHide when the context menu is closed', () => {
    const onHide = jest.fn();

    jest
      .spyOn(PubSub, 'subscribe')
      .mockImplementation((eventName, eventCallback) => {
        const currentEventCallbacks = mockEventsMap.get(eventName) || [];

        currentEventCallbacks.push(eventCallback);
        mockEventsMap.set(eventName, currentEventCallbacks);
      });

    jest
      .spyOn(PubSub, 'publish')
      .mockImplementation((eventName, eventParams) => {
        const currentEventCallbacks = mockEventsMap.get(eventName);

        currentEventCallbacks.forEach(cb => {
          cb(eventName, eventParams);
        });
      });

    jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => cb());

    wrapper = setupMount({ onHide });
    PubSub.publish(CONTEXT_MENU_SHOW, { id: 'id', x: 200, y: 200 });
    PubSub.publish(CONTEXT_MENU_HIDE, { id: 'id' });
    expect(onHide).toHaveBeenCalled();
  });

  it('should not call onHide when a different context menu is closed', () => {
    const onHide = jest.fn();

    jest
      .spyOn(PubSub, 'subscribe')
      .mockImplementation((eventName, eventCallback) => {
        const currentEventCallbacks = mockEventsMap.get(eventName) || [];

        currentEventCallbacks.push(eventCallback);
        mockEventsMap.set(eventName, currentEventCallbacks);
      });

    jest
      .spyOn(PubSub, 'publish')
      .mockImplementation((eventName, eventParams) => {
        const currentEventCallbacks = mockEventsMap.get(eventName);

        currentEventCallbacks.forEach(cb => {
          cb(eventName, eventParams);
        });
      });

    wrapper = setupMount({ onHide });
    PubSub.publish(CONTEXT_MENU_SHOW, { id: 'id', x: 200, y: 200 });
    PubSub.publish(CONTEXT_MENU_HIDE, { id: 'id2' });
    expect(onHide).toHaveBeenCalledTimes(0);
  });

  it('should not call onHide if the context menu is not visible', () => {
    const onHide = jest.fn();

    jest
      .spyOn(PubSub, 'subscribe')
      .mockImplementation((eventName, eventCallback) => {
        const currentEventCallbacks = mockEventsMap.get(eventName) || [];

        currentEventCallbacks.push(eventCallback);
        mockEventsMap.set(eventName, currentEventCallbacks);
      });

    jest
      .spyOn(PubSub, 'publish')
      .mockImplementation((eventName, eventParams) => {
        const currentEventCallbacks = mockEventsMap.get(eventName);

        currentEventCallbacks.forEach(cb => {
          cb(eventName, eventParams);
        });
      });

    wrapper = setupMount({ onHide });
    PubSub.publish(CONTEXT_MENU_HIDE, { id: 'id' });
    expect(onHide).toHaveBeenCalledTimes(0);
  });
});
