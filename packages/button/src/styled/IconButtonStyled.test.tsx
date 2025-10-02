import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import {
  iconButtonNovo as theme,
  iconButtonNeoLight,
} from '@8x8/oxygen-constants';
import { IconButtonProps } from '../types';
import { IconButtonStyled } from './IconButtonStyled';

describe('<IconButtonStyled>', () => {
  let wrapper;

  function setup(props: Partial<IconButtonProps> = {}) {
    return render(<IconButtonStyled theme={theme} {...props} />);
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when is active', () => {
    wrapper = setup({ isActive: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when is inverted', () => {
    wrapper = setup({ isInverted: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when both active and inverted', () => {
    wrapper = setup({ isActive: true, isInverted: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when disabled', () => {
    wrapper = setup({ 'aria-disabled': true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with custom size', () => {
    wrapper = render(<IconButtonStyled theme={theme} $iconButtonSize="32" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have correct focus border color', () => {
    const { container } = setup();
    const button = container.querySelector('button');

    expect(button).toHaveStyleRule('border-color', theme.borderFocus, {
      modifier: ':focus-visible',
    });
  });

  it('should have correct inverted focus border color', () => {
    const { container } = setup({ isInverted: true });
    const button = container.querySelector('button');

    expect(button).toHaveStyleRule('border-color', theme.borderFocusInverted, {
      modifier: ':focus-visible',
    });
  });

  it('should have box-shadow with Neo theme', () => {
    const { container } = render(
      <IconButtonStyled theme={iconButtonNeoLight} />,
    );
    const button = container.querySelector('button');

    expect(button).toHaveStyleRule(
      'box-shadow',
      `0 0 0 2px ${iconButtonNeoLight.shadowFocus} inset`,
      { modifier: ':focus-visible' },
    );
  });

  it('should have box-shadow even when shadowFocus is undefined', () => {
    const themeWithoutShadow = {
      ...theme,
      borderFocus: '#0056E0',
      shadowFocus: undefined,
    };

    const { container } = render(
      <IconButtonStyled theme={themeWithoutShadow} />,
    );
    const button = container.querySelector('button');

    expect(button).toHaveStyleRule('box-shadow', '0 0 0 2px  inset', {
      modifier: ':focus-visible',
    });
  });

  it.each`
    isActive | isInverted | description
    ${false} | ${false}   | ${'default state'}
    ${true}  | ${false}   | ${'active only'}
    ${false} | ${true}    | ${'inverted only'}
    ${true}  | ${true}    | ${'active and inverted'}
  `(
    'should have correct background for $description',
    ({ isActive, isInverted }) => {
      wrapper = setup({ isActive, isInverted });
      expect(wrapper).toMatchSnapshot();
    },
  );

  it('should have pointer cursor when not disabled', () => {
    const { container } = setup();
    const button = container.querySelector('button');

    expect(button).toHaveStyleRule('cursor', 'pointer');
  });

  it('should have not-allowed cursor when disabled', () => {
    const { container } = setup({ 'aria-disabled': true });
    const button = container.querySelector('button');

    expect(button).toHaveStyleRule('cursor', 'not-allowed');
  });

  it('should apply custom width and height', () => {
    const { container } = render(
      <IconButtonStyled theme={theme} $iconButtonSize="40" />,
    );
    const button = container.querySelector('button');

    expect(button).toHaveStyleRule('width', '40px');
    expect(button).toHaveStyleRule('height', '40px');
  });

  it('should not apply size styles when $iconButtonSize is undefined', () => {
    const { container } = render(<IconButtonStyled theme={theme} />);
    const button = container.querySelector('button');

    expect(button).not.toHaveStyleRule('width');
    expect(button).not.toHaveStyleRule('height');
  });

  it('should not have hover styles when disabled', () => {
    const { container } = setup({ 'aria-disabled': true });
    const button = container.querySelector('button');

    expect(button).toMatchSnapshot();
  });
});
