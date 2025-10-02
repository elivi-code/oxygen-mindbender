import React from 'react';
import renderer from 'react-test-renderer';
import { Radio } from './Radio';

jest.mock('@8x8/oxygen-label', () => 'Label');
jest.mock('./RadioIcon', () => 'RadioIcon');
jest.mock('./RadioInput', () => 'RadioInput');
jest.mock('../styled', () => ({
  __esModule: true,
  LabelTextWrapper: 'LabelTextWrapper',
  RadioContainer: 'RadioContainer',
}));

describe('<Radio />', () => {
  let wrapper;
  const setup = props => renderer.create(<Radio {...props} />).toJSON();

  it('should render correctly with default props', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with infoBoxText', () => {
    wrapper = setup({ infoBoxText: 'Test' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with infoBoxButtonLabel', () => {
    wrapper = setup({ infoBoxButtonLabel: 'Radio Button Label' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with label', () => {
    wrapper = setup({ label: 'Label text' });
    expect(wrapper).toMatchSnapshot();
  });
});
