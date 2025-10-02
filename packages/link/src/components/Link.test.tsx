import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { SearchIcon } from '@8x8/oxygen-icon';
import { OxygenProvider } from '@8x8/oxygen-config';
import Link from './Link';
import '@testing-library/jest-dom';

describe('Link Component', () => {
  // Theme-dependent tests
  test.each`
    theme      | defaultColor | hoverColor   | activeColor  | chatColor    | focusRingColor | textDecoration
    ${'light'} | ${'#0056E0'} | ${'#246FE5'} | ${'#0045B3'} | ${'#003486'} | ${'#0056E0'}   | ${'underline'}
    ${'dark'}  | ${'#4687ED'} | ${'#4687ED'} | ${'#0056E0'} | ${'#D7E3F9'} | ${'#D7E3F9'}   | ${'underline'}
  `(
    'handles states and styles for theme=$theme',
    ({
      theme,
      defaultColor,
      hoverColor,
      activeColor,
      chatColor,
      focusRingColor,
      textDecoration,
    }) => {
      const { getByTestId, rerender } = render(
        <OxygenProvider themeName={theme}>
          <Link href="https://example.com">Test Link</Link>
        </OxygenProvider>,
      );

      const linkElement = getByTestId('LINK');

      // Base styles
      expect(linkElement).toHaveStyle(`text-decoration: ${textDecoration}`);
      expect(linkElement).toHaveStyle(`color: ${defaultColor}`);

      // Hover state
      fireEvent.mouseEnter(linkElement);
      expect(linkElement).toHaveStyle(`color: ${hoverColor}`);
      fireEvent.mouseLeave(linkElement);
      expect(linkElement).toHaveStyle(`color: ${defaultColor}`);

      // Focus state and ring styles
      fireEvent.focus(linkElement);
      expect(linkElement).toHaveStyle(`color: ${hoverColor}`);
      expect(linkElement).toHaveStyle(`outline: 2px solid ${focusRingColor}`);
      expect(linkElement).toHaveStyle('outline-offset: 1px');
      expect(linkElement).toHaveStyle('border-radius: 2px');
      fireEvent.blur(linkElement);
      expect(linkElement).toHaveStyle(`color: ${defaultColor}`);

      // Active state
      fireEvent.mouseDown(linkElement);
      expect(linkElement).toHaveStyle(`color: ${activeColor}`);
      fireEvent.mouseUp(linkElement);
      expect(linkElement).toHaveStyle(`color: ${defaultColor}`);

      // Chat context
      rerender(
        <OxygenProvider themeName={theme}>
          <Link href="https://example.com" isChat>
            Test Link
          </Link>
        </OxygenProvider>,
      );
      expect(linkElement).toHaveStyle(`color: ${chatColor}`);
    },
  );

  // Icon in chat context with themes
  test.each`
    theme      | chatColor
    ${'light'} | ${'#003486'}
    ${'dark'}  | ${'#D7E3F9'}
  `('handles icon in chat context for theme=$theme', ({ theme, chatColor }) => {
    const { container } = render(
      <OxygenProvider themeName={theme}>
        <Link
          href="https://example.com"
          isChat
          standalone
          icon={<SearchIcon />}
        >
          Chat Link with Icon
        </Link>
      </OxygenProvider>,
    );

    const svg = container.querySelector('svg');

    expect(svg).toHaveAttribute('color', chatColor);
  });

  // Feature-specific tests
  test('renders standalone link with icon', () => {
    const { getByTestId, container } = render(
      <OxygenProvider>
        <Link href="https://example.com" standalone icon={<SearchIcon />}>
          Click Me
        </Link>
      </OxygenProvider>,
    );

    const linkElement = getByTestId('LINK');
    const svg = container.querySelector('svg');

    expect(linkElement).toBeInTheDocument();
    expect(svg).toBeInTheDocument();
  });

  test('renders standalone link without icon', () => {
    const { getByTestId, container } = render(
      <OxygenProvider>
        <Link href="https://example.com" standalone>
          Click Me
        </Link>
      </OxygenProvider>,
    );

    const linkElement = getByTestId('LINK');
    const svg = container.querySelector('svg');

    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest('a')).toHaveAttribute(
      'href',
      'https://example.com',
    );
    expect(svg).not.toBeInTheDocument();
  });

  test('triggers onClick event', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <OxygenProvider>
        <Link href="https://example.com" onClick={handleClick}>
          Click Me
        </Link>
      </OxygenProvider>,
    );

    const linkElement = getByTestId('LINK');

    linkElement.click();
    expect(handleClick).toHaveBeenCalled();
  });

  test('applies small size styles when size is small', () => {
    const { getByTestId } = render(
      <OxygenProvider>
        <Link href="https://example.com" standalone size="small">
          Small Link
        </Link>
      </OxygenProvider>,
    );

    const linkElement = getByTestId('LINK');

    expect(linkElement).toHaveStyle('font-size: 0.875rem');
  });

  test('applies large size styles when size is large', () => {
    const { getByTestId } = render(
      <OxygenProvider>
        <Link href="https://example.com" standalone size="large">
          Large Link
        </Link>
      </OxygenProvider>,
    );

    const linkElement = getByTestId('LINK');

    expect(linkElement).toHaveStyle('letter-spacing: -0.011rem');
  });

  // Snapshot tests
  test('matches snapshot', () => {
    const { asFragment } = render(
      <OxygenProvider>
        <Link href="https://example.com">Snapshot Link</Link>
      </OxygenProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('matches snapshot for all prop variations', () => {
    const { asFragment } = render(
      <OxygenProvider>
        <Link
          href="https://example.com"
          standalone
          isChat
          icon={<SearchIcon />}
        >
          Complete Test Link
        </Link>
      </OxygenProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

// Export tests
describe('Link Exports', () => {
  test('exports are configured correctly', async () => {
    const { Link: NamedLink, default: DefaultLink } = await import('./Link');

    expect(NamedLink).toBeDefined();
    expect(DefaultLink).toBeDefined();
    expect(DefaultLink).toBe(NamedLink);
    expect(NamedLink.displayName).toBe('Link');
    expect(DefaultLink.displayName).toBe('Link');
  });
});
