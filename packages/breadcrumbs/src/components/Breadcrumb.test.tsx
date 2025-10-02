import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { textLink as theme } from '@8x8/oxygen-constants';
import Breadcrumb from './Breadcrumb';

jest.mock('@8x8/oxygen-text-link', () => 'TextLink');

describe('<Breadcrumb>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(
        <Breadcrumb
          theme={theme}
          href="http://www.8x8.com"
          title="Example title"
          target="_blank"
          {...props}
        >
          Item 1
        </Breadcrumb>,
      )
      .toJSON();
  }

  function shallowSetup(props = {}) {
    return shallow(<Breadcrumb {...props}>Item 1</Breadcrumb>)
      .dive()
      .find('TextLink');
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly as active', () => {
    wrapper = setup({ isActive: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should trigger click when it is clicked', () => {
    const onClick = jest.fn();

    wrapper = shallowSetup({ onClick });
    wrapper.simulate('click', { preventDefault() {} });
    expect(onClick).toHaveBeenCalled();
  });
});
