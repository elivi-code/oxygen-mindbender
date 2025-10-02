# 8x8 Oxygen - Tabs

## Installation

```sh
$ yarn add @8x8/oxygen-tabs
```

```sh
$ npm install @8x8/oxygen-tabs
```

## Usage

```js
import Tabs, { Tab } from '@8x8/oxygen-tabs';
```

```js
<Tabs>
  <Tab isActive>Tab 1</Tab>
  <Tab>Tab 2</Tab>
<Tabs/>
```

## Props

### Tabs

| Name         | Type                      | Default | Description                                                                                                                      |
| ------------ | ------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------- |
| theme        | object                    |         | Tabs theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants |
| children\*   | node                      |         | Rendered nodes inside the Tabs                                                                                                   |
| color        | oneOf(['dark', 'light'])  | 'light' | Define color version of Tabs bar                                                                                                 |
| forwardedRef | oneOfType([object, func]) | null    | Component ref                                                                                                                    |

### Tab

| Name        | Type                                | Default   | Description                                                                                                                     |
| ----------- | ----------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------- |
| theme       | object                              |           | Tab theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants |
| children\*  | node                                |           | Rendered content inside the Tab                                                                                                 |
| color       | oneOf(['dark', 'light'])            | 'light'   | Define color version of Tab                                                                                                     |
| title       | string                              | undefined | Title text shows on hover                                                                                                       |
| value       | oneOfType([number, string, object]) | undefined | Value returned onClick                                                                                                          |
| isActive    | bool                                | false     | Tell when tab is active                                                                                                         |
| isDisabled  | bool                                | false     | Tell when tab is disabled                                                                                                       |
| isStretched | bool                                | false     | Tell when tab is stretched in Tabs                                                                                              |
| onClick     | func                                | noop      | Callback when Tab is click. Function called with (event, value)                                                                 |
| testId      | string                              | 'TABS'    | Component test ID attribute value                                                                                               |

> Props marked with \* are required

## Available styled components

- TabsBar
- TabItem

### Extend styling

You can extend/override any of the styles by importing the styled components directly.

```js
import { Styled } from '@8x8/oxygen-tabs';
import styled from 'styled-components';
const BlueTabsBarCell = styled(Styled.TabsBar)`
  color: blue;
`;
```
