import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { textLink as theme } from '@8x8/oxygen-constants';

import TextLink from './TextLink';

describe('TextLink', () => {
  it('renders', () => {
    render(<TextLink>TextLink</TextLink>);
    expect(screen.getByText('TextLink')).toBeInTheDocument();
  });
  it('allows the use of the a element attributes', () => {
    render(
      <TextLink href="https://example.com" target="_blank" rel="noreferrer">
        TextLink
      </TextLink>,
    );
    expect(screen.getByText('TextLink')).toBeInTheDocument();
  });
  it('sets aria-disabled when isDisabled is passed', () => {
    const { rerender } = render(
      <TextLink href="https://example.com">TextLink</TextLink>,
    );

    expect(screen.getByText('TextLink')).not.toHaveAttribute('aria-disabled');
    expect(screen.getByText('TextLink')).not.toHaveAttribute('role');
    expect(screen.getByText('TextLink')).toHaveAttribute(
      'href',
      'https://example.com',
    );
    rerender(
      <TextLink isDisabled href="https://example.com">
        TextLink
      </TextLink>,
    );
    expect(screen.getByText('TextLink')).toHaveAttribute(
      'aria-disabled',
      'true',
    );
    expect(screen.getByText('TextLink')).toHaveAttribute('role', 'link');
    expect(screen.getByText('TextLink')).not.toHaveAttribute('href');
  });
  it('handles the onClick event correctly', async () => {
    const onClick = jest.fn();
    const { rerender } = render(
      <TextLink onClick={onClick}>TextLink</TextLink>,
    );

    await userEvent.click(screen.getByText('TextLink'));
    expect(onClick).toHaveBeenCalledTimes(1);

    // when disabled the onClick should not be called
    rerender(
      <TextLink onClick={onClick} isDisabled>
        TextLink
      </TextLink>,
    );
    await userEvent.click(screen.getByText('TextLink'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  describe('styles', () => {
    it('sets default styles', () => {
      render(<TextLink>TextLink</TextLink>);
      expect(screen.getByText('TextLink')).toHaveStyleRule(
        'color',
        theme.textLinkColorPrimary,
      );
      expect(screen.getByText('TextLink')).toHaveStyleRule(
        'color',
        theme.textLinkColorPrimaryHover,
        { modifier: ':hover' },
      );
      expect(screen.getByText('TextLink')).toHaveStyleRule(
        'color',
        theme.textLinkColorPrimary,
        { modifier: ':focus-visible' },
      );
      expect(screen.getByText('TextLink')).toHaveStyleRule(
        'color',
        theme.textLinkColorPrimaryActive,
        { modifier: ':active' },
      );
      expect(screen.getByText('TextLink')).toHaveStyleRule(
        'font-size',
        theme.fontSize,
      );
      expect(screen.getByText('TextLink')).toHaveStyleRule(
        'line-height',
        theme.lineHeight,
      );
      expect(screen.getByText('TextLink')).toHaveStyleRule(
        'text-decoration',
        'none',
      );
      expect(screen.getByText('TextLink')).toHaveStyleRule(
        'text-decoration',
        'underline',
        { modifier: ':hover' },
      );
      expect(screen.getByText('TextLink')).toHaveStyleRule('cursor', 'pointer');
    });
    it('sets correct styles when Color=inherit', () => {
      render(<TextLink color="inherit">TextLink</TextLink>);
      expect(screen.getByText('TextLink')).toHaveStyleRule('color', 'inherit');
      expect(screen.getByText('TextLink')).toHaveStyleRule('color', 'inherit', {
        modifier: ':hover',
      });
      expect(screen.getByText('TextLink')).toHaveStyleRule('color', 'inherit', {
        modifier: ':focus-visible',
      });
      expect(screen.getByText('TextLink')).toHaveStyleRule('color', 'inherit', {
        modifier: ':active',
      });
    });
    it('sets correct styles when isDisabled=true', () => {
      render(<TextLink isDisabled>TextLink</TextLink>);
      expect(screen.getByText('TextLink')).toHaveStyleRule(
        'color',
        theme.textLinkColorPrimaryDisabled,
      );
      expect(screen.getByText('TextLink')).toHaveStyleRule(
        'color',
        theme.textLinkColorPrimaryDisabled,
        { modifier: ':hover' },
      );
      expect(screen.getByText('TextLink')).toHaveStyleRule(
        'color',
        theme.textLinkColorPrimaryDisabled,
        { modifier: ':focus-visible' },
      );
      expect(screen.getByText('TextLink')).toHaveStyleRule(
        'color',
        theme.textLinkColorPrimaryDisabled,
        { modifier: ':active' },
      );
      expect(screen.getByText('TextLink')).toHaveStyleRule(
        'cursor',
        'not-allowed',
      );
    });
    it('sets correct styles when isBlock=true', () => {
      const { rerender } = render(<TextLink>TextLink</TextLink>);

      expect(screen.getByText('TextLink')).toHaveStyleRule(
        'display',
        'inline-block',
      );
      rerender(<TextLink isBlock>TextLink</TextLink>);
      expect(screen.getByText('TextLink')).toHaveStyleRule('display', 'block');
    });
  });
});
