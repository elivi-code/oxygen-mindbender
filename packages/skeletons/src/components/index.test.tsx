import React from 'react';
import { render, screen } from '@testing-library/react';

import { OxygenProvider } from '@8x8/oxygen-config';
import themes from '@8x8/oxygen-theme';

import { SkeletonBlock, SkeletonCircle } from '.';

const renderWithOxygenProvider = (children, providerProps = {}) =>
  render(<OxygenProvider {...providerProps}>{children}</OxygenProvider>);

describe('SkeletonBlock', () => {
  it('renders with default styles', () => {
    renderWithOxygenProvider(<SkeletonBlock />);
    const wrapper = screen.getByTestId('SKELETON_BLOCK');

    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveStyle(`height: ${themes.novo.body01.lineHeight}`);
  });
  it('renders with given size typography prop', () => {
    renderWithOxygenProvider(<SkeletonBlock size="body02" />);
    const wrapper = screen.getByTestId('SKELETON_BLOCK');

    expect(wrapper).toHaveStyle(`height: ${themes.novo.body02.lineHeight}`);
  });
  it('renders with avatar size', () => {
    renderWithOxygenProvider(<SkeletonBlock size="xlarge" />);
    const wrapper = screen.getByTestId('SKELETON_BLOCK');

    expect(wrapper).toHaveStyle('height: 80px');
  });
  it('should render with custom size', () => {
    renderWithOxygenProvider(<SkeletonBlock size="200px" />);
    const wrapper = screen.getByTestId('SKELETON_BLOCK');

    expect(wrapper).toHaveStyle('height: 200px');
  });
});
describe('SkeletonCircle', () => {
  it('renders with default value', () => {
    renderWithOxygenProvider(<SkeletonCircle />);

    const wrapper = screen.getByTestId('SKELETON_CIRCLE');

    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveStyle('width: 1.25rem');
    expect(wrapper).toHaveStyle('height: 1.25rem');
    expect(wrapper).toHaveStyle('min-width: 1.25rem');
    expect(wrapper).toHaveStyle('min-height: 1.25rem');
  });
  it('renders with avatar size', () => {
    renderWithOxygenProvider(<SkeletonCircle size="xlarge" />);
    const wrapper = screen.getByTestId('SKELETON_CIRCLE');

    expect(wrapper).toHaveStyle('height: 80px');
    expect(wrapper).toHaveStyle('width: 80px');
    expect(wrapper).toHaveStyle('min-height: 80px');
    expect(wrapper).toHaveStyle('min-width: 80px');
  });
  it('should render with given size', () => {
    renderWithOxygenProvider(<SkeletonCircle size="1rem" />);
    const wrapper = screen.getByTestId('SKELETON_CIRCLE');

    expect(wrapper).toHaveStyle('height: 1rem');
    expect(wrapper).toHaveStyle('width: 1rem');
    expect(wrapper).toHaveStyle('min-height: 1rem');
    expect(wrapper).toHaveStyle('min-width: 1rem');
  });
});
