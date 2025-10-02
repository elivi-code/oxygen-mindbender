import type { StorybookConfig } from '@storybook/react-vite';
import { fixCssObjectSpread } from './plugins/vite-plugin-fix-css-object-spread';

const config: StorybookConfig = {
  stories: [
    '../docs/QuickStart/**/*.mdx',
    '../**/*.stories.@(ts|tsx)',
    '../docs/Community/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-jest',
  ],
  core: {
    disableTelemetry: true,
  },
  framework: {
    name: '@storybook/react-vite',
    options: {
      strictMode: false,
    },
  },
  typescript: {
    check: false,
    reactDocgen: false, // Disable react-docgen to prevent parsing issues with JS source files
  },
  viteFinal: async config => {
    config.esbuild = {
      jsx: 'automatic',
    };

    // Add custom plugin to fix CSS object spread serialization in production builds
    config.plugins = config.plugins || [];
    config.plugins.push(fixCssObjectSpread());

    // Set base to relative path for proper asset resolution
    config.base = './';

    return config;
  },
};

export default config;
