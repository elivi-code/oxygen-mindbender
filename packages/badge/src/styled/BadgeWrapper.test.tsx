import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { BadgeProps } from '../types';
import Badge from '../components/Badge';

describe('<Badge>', () => {
  let wrapper;

  function setup({ size, position, type, isInner }: Partial<BadgeProps>) {
    return renderer
      .create(
        <Badge size={size} position={position} type={type} isInner={isInner} />,
      )
      .toJSON();
  }

  it('should render correctly as a small size', () => {
    wrapper = setup({ size: 'small' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly as a medium size', () => {
    wrapper = setup({ size: 'medium' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly as a big size', () => {
    wrapper = setup({ size: 'big' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with top-left position', () => {
    wrapper = setup({ size: 'medium', position: 'tl' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with top-right position', () => {
    wrapper = setup({ size: 'medium', position: 'tr' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with bottom-left position', () => {
    wrapper = setup({ size: 'medium', position: 'bl' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with bottom-right position', () => {
    wrapper = setup({ size: 'medium', position: 'br' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly as primary type', () => {
    wrapper = setup({ type: 'primary', size: 'medium' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly as secondary type', () => {
    wrapper = setup({ type: 'secondary', size: 'medium' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with isInner props set on false', () => {
    wrapper = setup({ size: 'medium', isInner: false });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with isInner props set on true', () => {
    wrapper = setup({ size: 'medium', isInner: true });
    expect(wrapper).toMatchSnapshot();
  });
});
