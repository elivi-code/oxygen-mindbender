import React, { useState } from 'react';
import { ThemeProvider, useTheme } from 'styled-components';
import { useOxygen, OxygenProvider } from '@8x8/oxygen-config';
import type { ContextType } from '@8x8/oxygen-config';
import Radio, { RadioGroup } from '@8x8/oxygen-radio';
import Button from '@8x8/oxygen-button';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

interface ThemeSwitcherProps {
  themeName: ContextType['themeName'];
  onChange: (params: ContextType['themeName']) => void;
}

const ThemeSwitcher: React.FunctionComponent<ThemeSwitcherProps> = ({
  themeName,
  onChange,
}) => (
  <RadioGroup value={themeName} onChange={onChange}>
    <p>Select theme</p>
    <Radio label="light" value="light" />
    <Radio label="dark" value="dark" />
    <Radio label="classic" value="classic" />
  </RadioGroup>
);

const App: React.FunctionComponent = () => {
  const context = useOxygen();
  const theme = useTheme();

  return (
    <>
      <p>Here&apos;s the whole context object:</p>
      <pre>{JSON.stringify(context, null, 2)}</pre>
      <p>
        And here&apos;s the <code>styled-components</code> theme object:
      </p>
      <pre>{JSON.stringify(theme, null, 2)}</pre>
    </>
  );
};

const GlobalComponentsOverrideExample: React.FunctionComponent = () => {
  return (
    <>
      <OxygenProvider>
        <Button>I am using default theme</Button>
      </OxygenProvider>
      <OxygenProvider
        globalComponentsOverride={{ button: { backgroundColorPrimary: 'red' } }}
      >
        <Button>I have the backgroundColorPrimary theme prop customized</Button>
      </OxygenProvider>
    </>
  );
};

const LocalComponentsOverrideExample: React.FunctionComponent = () => {
  return (
    <OxygenProvider>
      <Button>I am using default theme</Button>
      <Button theme={{ backgroundColorPrimary: 'red' }}>
        I have the backgroundColorPrimary theme prop customized
      </Button>
    </OxygenProvider>
  );
};

export const ConfigOxygenProvider = () => {
  const [themeName, setThemeName] = useState<ContextType['themeName']>('light');

  return (
    <>
      <Doc>
        <h1>
          <code>OxygenProvider</code>
        </h1>
        <p>
          To use the Oxygen theme, you will use the <code>OxygenProvider</code>{' '}
          to wrap your app.
        </p>
        <p>
          At this time any theme switching capability needs to be prvoided by
          the App (Shell), or if you are in an MFE you should listen to an event
          that sets the themeName
        </p>
        <pre>{`
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
        `}</pre>
        <p>
          The <code>OxygenProvider</code> component does a few things:
        </p>
        <ul>
          <li>
            it sets the <code>themeName</code> and a <code>theme</code> object
            on context, you can use these values to style your App/MFE
            <br />
            (scroll down at the bottom of the page to see an example)
          </li>
          <li>
            it provides the correct theme props for each Oxygen component
            <br />
            (this is done automatically at the <code>withTheme</code> HoC level)
          </li>
          <li>
            it wraps the App with a <code>styled-components</code>{' '}
            <code>ThemeProvider</code> as well, so you have access to the{' '}
            <code>theme</code> object in your <code>styled-components</code> as
            well.
          </li>
        </ul>
        <h3>Available themes are also exposed</h3>
        <p>
          If you like to not provide string values for the theme directly, you
          can also supply the value from the exposed <code>themeNames</code>{' '}
          object. This won&apos;t be that useful since in most cases the{' '}
          <code>themeName</code> will come directly as a string from the shell
          or MFE config.
        </p>
        <pre>{`
import { OxygenProvider, themeNames } from '@8x8/oxygen-config';

const AppRoot = () => {
  return (
    <OxygenProvider themeName={themeNames.dark}>
      <App />
    </OxygenProvider>
  );
};
        `}</pre>
        <h2>How to access theme values</h2>
        <h3>
          Automatically in <code>styled-components</code>
        </h3>
        <p>
          If you are using <code>styled-components</code> the <code>theme</code>{' '}
          object already contains all exposed theme tokens, you can simply use
          them directly.
        </p>
        <p>
          If you use <code>Typescript</code> you need tell{' '}
          <code>styled-components</code> about the theme object shape. You need
          to declare the module and provide the interface{' '}
          <code>DefaultTheme</code> with the used theme properties. Do this in a
          ts file which is included in your project (either diectly imported or
          through <code>includes</code> from <code>tsconfig.json</code>See
          https://styled-components.com/docs/api#typescript
        </p>
        <pre>{`
// styled.d.ts
import styled from 'styled-components';
import type { Theme } from '@8x8/oxygen-config';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
          `}</pre>
        <h4>
          What if I have <strong>custom</strong> theme properties for my{' '}
          <code>styled-components</code> theme?
        </h4>
        <p>
          No worries. You can have multiple nested<code>ThemeProviders</code>{' '}
          and they will merge their <code>theme</code> object properties.
        </p>
        <p>
          In the example at the end of this document we add a custom property
          called <code>customItemOutside</code>. Notice it is available together
          with the Oxygen theme properties.
        </p>
        <blockquote>
          ⚠️ <strong>Note:</strong> If using Typescript you will need to enhance
          the <code>DefaultTheme</code> interface with your custom properties as
          well.
        </blockquote>
        <h3>
          In react components via the <code>useOxygen</code> hook
        </h3>
        <p>
          You have access to the theme object via the <code>useOxygen</code>{' '}
          hook
        </p>
        <blockquote>
          The <code>themeName</code> is also available if you need to cusomize
          your app based on it. We recommend to style the app in such a way that
          imperative theme checks are not required, but this is provided if
          needed
        </blockquote>

        <pre>{`
import { useOxygen } from '@8x8/oxygen-config';

const Component = () => {
  const { theme, themeName } = useOxygen();

  console.log(theme);
  // { "action01": "#0056E0", ...}

  console.log(themeName);
  // "light"
};
        `}</pre>
        <h2>
          Customize the <code>theme</code>
        </h2>
        <p>
          You can customize the look and feel in several ways. You can customize
          the Oxygen components directly, or provide an alternative theme
          obejct. This should be kept to a minimum. These are best used when
          your project tests things out before they land in stable Oxygen
          releases
        </p>
        <h3>Provide overrides for the Oxygen components globally</h3>
        <p>
          <code>OxygenProvider</code> exposes a{' '}
          <code>globalComponentsOverride</code> prop which can be used to
          globally overwrite the theme props (decisions) at each individual
          Oxygen component.
        </p>
        <p>
          These are merged into each components theme props overriding the value
          from the selected theme.
        </p>
        <blockquote>
          ⚠️ <strong>Note:</strong> We don&apos;t recommend to use this for
          several reaons: <br />
          1) slippery slope to strying away from the XCaSS vision (we are trying
          to use Oxygen to bring the separate products together from a Design &
          UI standpoint) <br />
          2) we are in a process of simplifying decision theme props (they might
          go away entierly)
        </blockquote>
        <pre>{`
import { OxygenProvider } from '@8x8/oxygen-config';
import Button from '@8x8/oxygen-button';

const GlobalComponentsOverrideExample: React.FunctionComponent = () => {
  return (
    <>
      <OxygenProvider>
        <Button>I am using default theme</Button>
      </OxygenProvider>
      <OxygenProvider
        globalComponentsOverride={{ button: { backgroundColorPrimary: 'red' } }}
      >
        <Button theme={{ backgroundColorPrimary: 'red' }}>I have the backgroundColorPrimary theme prop customized</Button>
      </OxygenProvider>
    </>
  );
};
        `}</pre>
      </Doc>
      <ComponentSection>
        <GlobalComponentsOverrideExample />
      </ComponentSection>
      <Doc>
        <h3>Provide overrides locally</h3>
        <p>
          You can also style individual Oxygen components locally through the{' '}
          <code>theme</code> prop
        </p>
        <p>Similar example above</p>
        <pre>{`
import { OxygenProvider } from '@8x8/oxygen-config';
import Button from '@8x8/oxygen-button';

const GlobalComponentsOverrideExample: React.FunctionComponent = () => {
  return (
    <>
      <OxygenProvider>
        <Button>I am using default theme</Button>
        <Button theme={{ backgroundColorPrimary: 'red' }}>
          I have the backgroundColorPrimary theme prop customized
        </Button>
      </OxygenProvider>
    </>
  );
};
        `}</pre>
      </Doc>
      <ComponentSection>
        <LocalComponentsOverrideExample />
      </ComponentSection>
      <Doc>
        <h3>
          Provide a new <code>theme</code>
        </h3>
        <p>
          <code>OxygenProvider</code> also accepts a complete <code>theme</code>{' '}
          object. This woud be used to prototype and test new themes. You can
          start from the exising _novo_ themes, or provide your own.
        </p>
        <p>
          We do not recommend running wild with custom themes. This should be
          used in the future when we&apos;ll either migrate from novo, or
          prototype additional themes (such as a high contrast one)
        </p>
        <h2>Example</h2>
        <p>
          Here&apos;s a simple theme switcher example (this sets the themeName
          in local state and then feeds it to the <code>OxygenProvider</code>).
          The <code>App</code> component from this example just outputs the{' '}
          <code>context</code> and <code>styled-components</code> theme values
        </p>
        <p>This is a Typescript example</p>
        <pre>{`
import React from 'react';
import { ThemeProvider, useTheme } from 'styled-components';
import { useOxygen, OxygenProvider } from '@8x8/oxygen-config';
import type { ContextType } from '@8x8/oxygen-config';

interface ThemeSwitcherProps {
  themeName: ContextType['themeName'];
  onChange: (params: ContextType['themeName']) => void;
}

const ThemeSwitcher: React.FunctionComponent<ThemeSwitcherProps> = ({
  themeName,
  onChange,
}) => (
  <RadioGroup value={themeName} onChange={onChange}>
    <p>Select theme</p>
    <Radio label="light" value="light" />
    <Radio label="dark" value="dark" />
    <Radio label="classic" value="classic" />
  </RadioGroup>
);

const App: React.FunctionComponent = () => {
  const context = useOxygen();
  const theme = useTheme();
  return (
    <>
      <p>Here&apos;s the whole context object:</p>
      <pre>{JSON.stringify(context, null, 2)}</pre>
      <p>
        And here&apos;s the <code>styled-components</code> theme object:
      </p>
      <pre>{JSON.stringify(theme, null, 2)}</pre>
    </>
  );
};

const Root = () => {
  const [themeName, setThemeName] = useState<ContextType['themeName']>('light');
  return (
    <>
      <ThemeSwitcher themeName={themeName} onChange={setThemeName} />
      <ThemeProvider theme={{ customItemOutside: 'red' }}>
        <OxygenProvider themeName={themeName}>
          <App />
        </OxygenProvider>
      </ThemeProvider>
    </>
  );
};
        `}</pre>
      </Doc>
      <ComponentSection block>
        <ThemeSwitcher themeName={themeName} onChange={setThemeName} />
      </ComponentSection>
      <Doc>
        <hr />
        <ThemeProvider theme={{ customItem: 'red' }}>
          <OxygenProvider themeName={themeName}>
            <App />
          </OxygenProvider>
        </ThemeProvider>
      </Doc>
    </>
  );
};
ConfigOxygenProvider.args = argsConfig;
ConfigOxygenProvider.argTypes = argTypesConfig;
ConfigOxygenProvider.storyName = 'OxygenProvider';
