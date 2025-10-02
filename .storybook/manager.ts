import { addons } from 'storybook/manager-api';
import { themes } from 'storybook/theming';

// Listen for theme changes from toolbar and update both UI theme and CSS classes
addons.register('oxygen-theme-switcher', api => {
  api.on('globalsUpdated', args => {
    const theme = args.globals.theme;

    // Update Storybook UI theme
    addons.setConfig({
      theme: theme === 'dark' ? themes.dark : themes.light,
    });

    // Post message to preview iframe
    const previewIframe = document.querySelector(
      '#storybook-preview-iframe',
    ) as HTMLIFrameElement | null;
    if (previewIframe && previewIframe.contentWindow) {
      previewIframe.contentWindow.postMessage(
        {
          type: 'OXYGEN_THEME_CHANGE',
          theme: theme,
        },
        '*',
      );
    }
  });
});
