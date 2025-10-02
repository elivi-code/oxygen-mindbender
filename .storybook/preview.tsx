import React from 'react';
import { Preview } from '@storybook/react-vite';
import { OxygenProvider } from '@8x8/oxygen-config';

export const parameters = {
  controls: { expanded: true },
  options: {
    storySort: {
      method: 'alphabetical',
      includeNames: true,
      order: ['Quick start', 'Components', 'Community', 'Versions', '*'],
      locales: 'en-US',
    },
  },
  chromatic: { disable: true },
  layout: 'padded',
  // this is needed for react-router-dom to work in storybook for SidebarMenu examples
  // from https://github.com/storybookjs/storybook/issues/17720#issuecomment-1466725964
  docs: {
    source: {
      // any non-empty string here will skip jsx rendering, see:
      // https://github.com/storybookjs/storybook/blob/next/code/renderers/react/src/docs/jsxDecorator.tsx#L165
      code: 'hello world',
    },
  },
};

// Simple theme class toggle function
const setThemeClass = theme => {
  const html = document.documentElement;

  // Remove existing theme classes
  html.classList.remove('light', 'dark');

  // Add new theme class
  const themeClass = theme === 'dark' ? 'dark' : 'light';
  html.classList.add(themeClass);
};

export const decorators = [
  (Story, context) => {
    const { theme } = context.globals;

    // Set theme classes on root elements
    React.useEffect(() => {
      setThemeClass(theme);
    }, [theme]);

    return (
      <OxygenProvider
        themeName={context.globals.theme}
        enableNeo={context.globals.enableNeo}
        globalComponentsOverride={context.args.globalComponentsOverride}
      >
        <div
          style={{
            boxSizing: 'border-box',
            height: '100%',
            overflow: 'auto',
            padding: '1rem',
          }}
          className={context.globals.theme}
        >
          <style>
            {`
          html, body, #root { height: 100%; }
          body { padding: 0 !important; }
        `}
          </style>
          <Story />
        </div>
      </OxygenProvider>
    );
  },
];

// Get default theme from browser preference
const getDefaultTheme = () => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
  return 'light';
};

// Initialize theme class when preview loads and set up cross-frame communication
if (typeof window !== 'undefined') {
  // For stand-alone docs, listen for theme changes from the preview iframe
  window.addEventListener('message', event => {
    if (event.data && event.data.type === 'OXYGEN_THEME_CHANGE') {
      setThemeClass(event.data.theme);
    }
  });
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: getDefaultTheme(),
    toolbar: {
      // The icon for the toolbar item
      icon: 'circlehollow',
      // Array of options
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
        { value: 'classic', icon: 'circlehollow', title: 'classic' },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
      dynamicTitle: true,
    },
  },
  enableNeo: {
    name: 'Rebrand (neo theme)',
    description: 'Switches light/dark themes to neo for rebrand',
    defaultValue: true,
    toolbar: {
      // The icon for the toolbar item
      icon: 'bookmarkhollow',
      // Array of options
      items: [
        { value: true, icon: 'bookmark', title: 'Neo 8x8 Rebrand ON' },
        { value: false, icon: 'bookmarkhollow', title: 'Neo 8x8 Rebrand OFF' },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
      dynamicTitle: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    ...parameters,
    docs: {
      ...parameters.docs,
      codePanel: true,
    },
  },
  decorators,
  globalTypes,
};

export default preview;
