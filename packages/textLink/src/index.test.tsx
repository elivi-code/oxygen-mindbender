import React from 'react';
import { render, screen } from '@testing-library/react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { TextLinkProps, Color, Size, Underline } from './types';
import TextLink, { TextLinkWrapper } from '.';

describe('verify exports', () => {
  it('has a default export for TextLink', () => {
    render(<TextLink>content</TextLink>);
    expect(screen.getByText('content')).toBeInTheDocument();
  });
  it('has a named export for TextLinkWrapper', () => {
    render(<TextLinkWrapper>content</TextLinkWrapper>);
    expect(screen.getByText('content')).toBeInTheDocument();
  });
});
