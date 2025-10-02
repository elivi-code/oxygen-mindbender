import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { shallow } from 'enzyme';

import ContextMenuTrigger from './ContextMenuTrigger';

jest.mock('../styled/ContextMenuTrigger', () => 'ContextMenuTrigger');

describe('<ContextMenuTrigger>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(
        <ContextMenuTrigger id="id" {...props}>
          <span>Context Menu Trigger</span>
        </ContextMenuTrigger>,
      )
      .toJSON();
  }

  function setupShallow(props = {}) {
    return shallow(
      <ContextMenuTrigger id="id" {...props}>
        <span>Context Menu Trigger</span>
      </ContextMenuTrigger>,
    );
  }

  it('should be rendered correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onContextMenu when contextmenu event is triggered', () => {
    const onContextMenu = jest.fn();

    wrapper = setupShallow({ onContextMenu });

    wrapper.find('span').simulate('contextmenu', {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    });

    expect(onContextMenu).toHaveBeenCalled();
  });
});
