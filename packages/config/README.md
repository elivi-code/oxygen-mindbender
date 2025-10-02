# `@8x8/oxygen-config`

## Installation

```sh
$ yarn add @8x8/oxygen-config
```

```sh
$ npm install @8x8/oxygen-config
```

The `@8x8/oxygen-config` package provides several functionalities used to globally configure Oxygen components

## Theming

### Global config object

> ⚠️ **Note** This method is being depreacted! If you are building anything new or upgrading a project in regards to themeing please look at the next section and use the `OxygenProvider` component instead.

Currrently the Oxygen components are themed via a global (single instance) config object.

The strategy is the following: you manage your app's theme yourself, and you pass in the novo or novo dark components theme obejct to Oxygen config via the `set` method.

Here's a simplified example (based on how it's done in Work):

```javascript
import { set } from '@8x8/oxygen-config';
import themes from '@8x8/oxygen-theme';

// component theme props (are based on the global theme obejcts), use for Oxygen components only
import { novoTheme, novoDarkTheme } from '@8x8/oxygen-constants';

// global theme objects, use for app themeing and components
const globalThemeMap = {
  light: themes.novo,
  dark: themes.novoDark,
};

// Wrap this around your app
const Theme = ({ children }) => {
  // reading from the redux store, but state can be kept anywhere
  const theme = useSelector(themeSelector); // 'light' | 'dark'

  // Oxygen components theme
  useEffect(() => {
    if (theme === 'dark') {
      set(novoDarkTheme);
    } else if (theme === 'light') {
      set(novoTheme);
    }
  }, [theme]);

  return (
    // styled-components theme for use in own App / MFE
    <ThemeProvider theme={globalThemeMap[theme]}>{children}</ThemeProvider>
  );
};
```

### OxygenProvider

Provides a simplified way to theme Oxygen components and 8x8 Apps. This way both your components and Oxygen components receive the same theme.

```javascript
// Wrap this around your app
import { OxygenProvider } from '@8x8/oxygen-config';

const AppRoot = () => {
  // example reading from the redux store, but state can be kept anywhere
  const themeName = useSelector(themeSelector); // 'light' | 'dark'
  return (
    <OxygenProvider themeName="light">
      <App />
    </OxygenProvider>
  );
};
```

See the [OxygenProvider example page](/?path=/story/components-config-examples--config-oxygen-provider) for more details.

---
