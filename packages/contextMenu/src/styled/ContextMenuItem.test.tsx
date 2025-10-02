import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { contextMenu, contextMenuNovo } from '@8x8/oxygen-constants';

import ContextMenuItem from './ContextMenuItem';

describe('<ContextMenuItem>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<ContextMenuItem theme={contextMenu} {...props} />)
      .toJSON();
  }

  it('should render correctly in Classic', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly in Novo', () => {
    wrapper = setup({ theme: contextMenuNovo });
    expect(wrapper).toMatchSnapshot();
  });
});
