import React from 'react';
import renderer from 'react-test-renderer';

import Label from './Label';

jest.mock('./Icon', () => 'Icon');
jest.mock('./Value', () => 'Value');
jest.mock('./Action', () => 'Action');
jest.mock('../styled/LabelWrapper', () => 'LabelWrapper');

describe('<Label>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<Label {...props} value="Label text" />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with action', () => {
    wrapper = setup({ action: jest.fn(), actionLabel: 'ActionText text' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly info icon with infoBoxText', () => {
    wrapper = setup({ infoBoxText: 'Test' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly info icon with infoBoxButtonLabel', () => {
    wrapper = setup({ infoBoxButtonLabel: 'Info Button' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when expects to wrap', () => {
    wrapper = setup({ shouldWrapText: true });
    expect(wrapper).toMatchSnapshot();
  });
});
