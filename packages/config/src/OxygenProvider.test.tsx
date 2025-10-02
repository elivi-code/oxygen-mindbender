import React from 'react';
import { render } from '@testing-library/react';
import themes from '@8x8/oxygen-theme';

// test @8x8/oxygen-config exports as well
import { OxygenProvider, useOxygen, themeNames } from './index';
import type { OxygenProviderProps } from './index';

const { light, dark, neoLight, neoDark } = themes;

// Test useOxygen hook result
const TestComponent = () => {
  const oxygen = useOxygen();

  return <div>{JSON.stringify(oxygen)}</div>;
};

// kind of hacky, but does the job
// we're writing the context into the DOM as a string, and parsing it here for validation
const extractContext = (container: HTMLElement) => {
  const element = container.firstChild as HTMLElement;

  return JSON.parse(element.innerHTML as string);
};

describe('OxygenProvider', () => {
  test('useOxygen returns undefined when not wrapped by an OxygenProvider', () => {
    const { container } = render(<TestComponent />);

    expect(container.firstChild).toBeEmptyDOMElement();
  });
  test.each`
    themeName             | expectedThemeName | expectedTheme
    ${undefined}          | ${'light'}        | ${light}
    ${'light'}            | ${'light'}        | ${light}
    ${'dark'}             | ${'dark'}         | ${dark}
    ${'classic'}          | ${'classic'}      | ${light}
    ${themeNames.light}   | ${'light'}        | ${light}
    ${themeNames.dark}    | ${'dark'}         | ${dark}
    ${themeNames.classic} | ${'classic'}      | ${light}
  `(
    'useOxygen returns correct values from OxygenProvider',
    ({ themeName, expectedThemeName, expectedTheme }) => {
      const { container } = render(
        <OxygenProvider themeName={themeName}>
          <TestComponent />
        </OxygenProvider>,
      );
      const context = extractContext(container);

      expect(context.themeName).toEqual(expectedThemeName);
      expect(context.globalComponentsOverride).toBeUndefined();
      expect(context.theme).toEqual(expectedTheme);
    },
  );
  test.each`
    themeName             | enableNeo | expectedThemeName | expectedTheme
    ${undefined}          | ${false}  | ${'light'}        | ${light}
    ${'light'}            | ${false}  | ${'light'}        | ${light}
    ${'dark'}             | ${false}  | ${'dark'}         | ${dark}
    ${'classic'}          | ${false}  | ${'classic'}      | ${light}
    ${themeNames.light}   | ${false}  | ${'light'}        | ${light}
    ${themeNames.dark}    | ${false}  | ${'dark'}         | ${dark}
    ${themeNames.classic} | ${false}  | ${'classic'}      | ${light}
    ${undefined}          | ${true}   | ${'light'}        | ${neoLight}
    ${'light'}            | ${true}   | ${'light'}        | ${neoLight}
    ${'dark'}             | ${true}   | ${'dark'}         | ${neoDark}
    ${'classic'}          | ${true}   | ${'classic'}      | ${neoLight}
    ${themeNames.light}   | ${true}   | ${'light'}        | ${neoLight}
    ${themeNames.dark}    | ${true}   | ${'dark'}         | ${neoDark}
    ${themeNames.classic} | ${true}   | ${'classic'}      | ${neoLight}
  `(
    'nesting OxygenProvider components allows inheritance',
    ({ themeName, enableNeo, expectedThemeName, expectedTheme }) => {
      const { container } = render(
        <OxygenProvider enableNeo={enableNeo} themeName={themeName}>
          <OxygenProvider>
            <TestComponent />
          </OxygenProvider>
        </OxygenProvider>,
      );
      const context = extractContext(container);

      expect(context.themeName).toEqual(expectedThemeName);
      expect(context.globalComponentsOverride).toBeUndefined();
      expect(context.theme).toEqual(expectedTheme);
    },
  );
  test('nested OxygenProvider components can override values', () => {
    const { container } = render(
      <OxygenProvider themeName="light">
        <OxygenProvider themeName="dark">
          <TestComponent />
        </OxygenProvider>
      </OxygenProvider>,
    );
    const context = extractContext(container);

    expect(context.themeName).toEqual('dark');
    expect(context.globalComponentsOverride).toBeUndefined();
    expect(context.theme).toEqual(dark);
  });
  test('useOxygen returns globalComponentsOverride', () => {
    const OVERRIDE = { button: { backgroundColorPrimary: 'red' } };
    const { container } = render(
      <OxygenProvider globalComponentsOverride={OVERRIDE}>
        <TestComponent />
      </OxygenProvider>,
    );
    const context = extractContext(container);

    expect(context.globalComponentsOverride).toEqual(OVERRIDE);
  });
  test('test types', () => {
    // eslint-disable-next-line
    function assertTypeEqual<T, U extends T>(): void {}

    type ExtractedProps = React.ComponentProps<typeof OxygenProvider>;
    assertTypeEqual<OxygenProviderProps, ExtractedProps>();
  });
});
