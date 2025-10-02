import React from 'react';
import { mount } from 'enzyme';

import { slideOut as theme } from '@8x8/oxygen-constants';

import { SlideOut } from './SlideOut';

jest.mock('../styled/SlideOut', () => ({
  Container: 'mock-container',
  Splitter: 'mock-splitter',
  Content: 'mock-content',
}));

describe('<SlideOut>', () => {
  let wrapper;

  function setupMount(props = {}) {
    return mount(
      <SlideOut theme={theme} {...props}>
        Children
      </SlideOut>,
    );
  }

  it('should render', () => {
    wrapper = setupMount();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when visible', () => {
    wrapper = setupMount({ isVisible: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with default width specified', () => {
    wrapper = setupMount({ isVisible: true, defaultWidth: 300 });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with default width null', () => {
    wrapper = setupMount({ isVisible: true, defaultWidth: null });
    expect(wrapper).toMatchSnapshot();
  });

  it('should not start drag if not clicked with left click', () => {
    wrapper = setupMount({ isVisible: true, defaultWidth: 400 });
    wrapper
      .find('mock-splitter')
      .simulate('mouseDown', { nativeEvent: { which: 2 } });
    expect(wrapper).toMatchSnapshot();
  });

  it('should start drag when Splitter is left clicked', () => {
    wrapper = setupMount({ isVisible: true, defaultWidth: 400 });
    wrapper
      .find('mock-splitter')
      .simulate('mouseDown', { nativeEvent: { which: 1 }, clientX: 400 });
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render Splitter if slideOut is not resizable', () => {
    wrapper = setupMount({
      isVisible: true,
      defaultWidth: 400,
      isResizable: false,
    });
    expect(wrapper.find('mock-splitter')).toHaveLength(0);
  });

  it('should update Splitter width when left click is held and mouse is moved', () => {
    const map = {};

    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });

    wrapper = setupMount({ isVisible: true, defaultWidth: 400 });
    wrapper
      .find('mock-splitter')
      .simulate('mouseDown', { nativeEvent: { which: 1 }, clientX: 400 });
    map.mousemove({ clientX: 500 });
    expect(wrapper).toMatchSnapshot();

    window.addEventListener.mockRestore();
  });

  it('should remove event listeners when left click is released', () => {
    const map = {};

    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    window.removeEventListener = jest.fn(event => {
      map[event] = null;
    });

    wrapper = setupMount({ isVisible: true, defaultWidth: 400 });
    wrapper
      .find('mock-splitter')
      .simulate('mouseDown', { nativeEvent: { which: 1 }, clientX: 400 });
    map.mousemove({ clientX: 500 });
    map.mouseup({ clientX: 600 });

    expect(map.mousemove).toBe(null);
    expect(map.mouseup).toBe(null);

    window.addEventListener.mockRestore();
    window.removeEventListener.mockRestore();
  });
});
