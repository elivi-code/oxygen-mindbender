import React from 'react';
import renderer from 'react-test-renderer';

import { loaders as theme } from '@8x8/oxygen-constants';
import ProgressBar from './ProgressBar';
import { ProgressBarContainer, ProgressBarText } from '../styled/ProgressBar';

const id = '1';

jest.mock('../styled/ProgressBar', () => ({
  Bar: 'Bar',
  ProgressBarContainer: 'ProgressBarContainer',
  ProgressBarText: 'ProgressBarText',
}));
jest.mock('@8x8/oxygen-utils', () => ({
  useId: () => id,
}));

describe('<ProgressBar>', () => {
  let wrapper;

  const getComponent = props => (
    <ProgressBar theme={theme} text="Loading..." value={10} {...props} />
  );

  const setup = (props = {}) => renderer.create(getComponent(props));

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render correctly when ProgressBar is fullWidth', () => {
    wrapper = setup({ fullWidth: true });
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render correctly when ProgressBar is small', () => {
    wrapper = setup({ size: 'small' });
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render correctly when ProgressBar is large', () => {
    wrapper = setup({ size: 'large' });
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render correctly with custom attributes', () => {
    wrapper = setup({ text: undefined, 'aria-label': 'Loading 10%' });

    expect(wrapper.root.props).toMatchObject({
      'aria-label': 'Loading 10%',
    });
  });

  it('should set proper attributes when text is present', () => {
    wrapper = setup();

    const progressBarWrapper = wrapper.root.findByType(ProgressBarContainer);
    const textWrapper = wrapper.root.findByType(ProgressBarText);

    expect(progressBarWrapper.props['aria-labelledby']).toEqual(id);
    expect(textWrapper.props.id).toEqual(id);
  });
});
