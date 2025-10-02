import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { contextMenu as theme } from '@8x8/oxygen-constants';

import ContextMenuItem from './ContextMenuItem';

jest.mock('../styled/ContextMenuItem', () => 'ContextMenuItem');

describe('<ContextMenuItem>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(
        <ContextMenuItem theme={theme} {...props}>
          <span>Context Menu Item </span>
        </ContextMenuItem>,
      )
      .toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
