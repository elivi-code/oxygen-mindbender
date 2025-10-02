import React from 'react';
import { render, screen } from '@testing-library/react';

import { OxygenProvider } from '@8x8/oxygen-config';
import Button, {
  IconButton,
  DropdownButton,
  ButtonGroup,
  buttonSize,
  buttonVariant,
  buttonGroupSpacing,
  buttonGroupAlignment,
} from './index';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { ButtonProps, ButtonGroupProps } from './types';

describe('verify Button exports', () => {
  it('has a default export for Button', () => {
    render(<Button>content</Button>);
    expect(screen.getByText('content')).toBeInTheDocument();
  });
  it('has a named export for ButtonGroup', () => {
    render(<ButtonGroup>content</ButtonGroup>);
    expect(screen.getByText('content')).toBeInTheDocument();
  });
  it('exports values for buttonSize', () => {
    expect(buttonSize).toEqual({
      small: 'small',
      medium: 'medium',
      big: 'big', // deprecated
      large: 'large',
    });
  });
  it('exports values for buttonVariant', () => {
    expect(buttonVariant).toEqual({
      primary: 'primary',
      secondary: 'secondary',
      tertiary: 'tertiary',
      tertiaryReversed: 'tertiaryReversed',
      destructive: 'destructive',
      success: 'success',
      text: 'text',
    });
  });
  it('exports values for buttonGroupSpacing', () => {
    expect(buttonGroupSpacing).toEqual({
      small: 'small',
      large: 'large',
    });
  });
  it('exports values for buttonGroupAlignment', () => {
    expect(buttonGroupAlignment).toEqual({
      left: 'left',
      center: 'center',
      right: 'right',
    });
  });

  it('exports a DropdownButton component', () => {
    render(
      <OxygenProvider>
        <DropdownButton>content</DropdownButton>
      </OxygenProvider>,
    );
    expect(screen.getByText('content')).toBeInTheDocument();
  });
});

describe('IconButton exports', () => {
  it('exports the correct components', () => {
    expect(IconButton).toBeDefined();
  });
});
