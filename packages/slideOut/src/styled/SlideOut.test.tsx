import React from 'react';
import renderer from 'react-test-renderer';

import { slideOut as theme } from '@8x8/oxygen-constants';

import { Container, Content, Splitter } from './SlideOut';

describe('<Container>', () => {
  let wrapper;

  function setupRenderer(props = {}) {
    return renderer
      .create(
        <Container theme={theme} {...props}>
          content
        </Container>,
      )
      .toJSON();
  }

  it('should style correctly', () => {
    wrapper = setupRenderer();
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly with minWidth specified', () => {
    wrapper = setupRenderer({ minWidth: 200 });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly with maxWidth specified', () => {
    wrapper = setupRenderer({ maxWidth: 500 });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly when visible', () => {
    wrapper = setupRenderer({ isVisible: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly when it has animation', () => {
    wrapper = setupRenderer({ hasAnimation: true });
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<Splitter>', () => {
  let wrapper;

  function setupRenderer(props = {}) {
    return renderer.create(<Splitter theme={theme} {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setupRenderer();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when it is resizable', () => {
    wrapper = setupRenderer({ isResizable: true });
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<Content>', () => {
  let wrapper;

  function setupRenderer() {
    return renderer.create(<Content>content</Content>).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setupRenderer();
    expect(wrapper).toMatchSnapshot();
  });
});
