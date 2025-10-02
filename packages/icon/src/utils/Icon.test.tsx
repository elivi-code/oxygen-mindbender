import React from 'react';
import { render } from '@testing-library/react';
import { iconNovo } from '@8x8/oxygen-constants';

import Icon from './Icon';

describe('Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon />);

    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render with color, part of both css and svg color attr', () => {
    const COLOR = '#FF0000';
    const { container } = render(<Icon color={COLOR} />);

    expect(container.firstChild).toHaveStyleRule('fill', COLOR);
    expect(container.firstChild).toHaveAttribute('color', COLOR);
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render default', () => {
    const { container } = render(<Icon theme={iconNovo} />);

    expect(container.firstChild).toHaveStyleRule('fill', iconNovo.color);
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render disabled', () => {
    const { container } = render(<Icon theme={iconNovo} disabled />);

    expect(container.firstChild).toHaveStyleRule(
      'fill',
      iconNovo.disabledColor,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render active', () => {
    const { container } = render(<Icon theme={iconNovo} active />);

    expect(container.firstChild).toHaveStyleRule('fill', iconNovo.hoverColor);
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render selected', () => {
    const { container } = render(<Icon theme={iconNovo} selected />);

    expect(container.firstChild).toHaveStyleRule(
      'fill',
      iconNovo.selectedColor,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render when link', () => {
    const { container } = render(<Icon theme={iconNovo} link />);

    expect(container.firstChild).toHaveStyleRule('fill', iconNovo.linkColor);
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render inverted default', () => {
    const { container } = render(<Icon theme={iconNovo} invertColors />);

    expect(container.firstChild).toHaveStyleRule(
      'fill',
      iconNovo.noLinkInvertColor,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render inverted disabled', () => {
    const { container } = render(
      <Icon theme={iconNovo} invertColors disabled />,
    );

    expect(container.firstChild).toHaveStyleRule(
      'fill',
      iconNovo.disabledInvertColor,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render inverted active', () => {
    const { container } = render(<Icon theme={iconNovo} invertColors active />);

    expect(container.firstChild).toHaveStyleRule(
      'fill',
      iconNovo.hoverInvertColor,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render inverted selected', () => {
    const { container } = render(
      <Icon theme={iconNovo} invertColors selected />,
    );

    expect(container.firstChild).toHaveStyleRule(
      'fill',
      iconNovo.selectedInvertColor,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render inverted link', () => {
    const { container } = render(<Icon theme={iconNovo} invertColors link />);

    expect(container.firstChild).toHaveStyleRule(
      'fill',
      iconNovo.linkInvertColor,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
