# 8x8 Oxygen - Dropdown Button

## !!! This component is deprecated

The whole `@8x8/oxygen-dropdown-button` package (and `DropdownButton` component) is deprecated. Instead of this use the new `Popover` component (from `@8x8/oxygen-popover`) together with the new `DropdownButton` component from under `@8x8/oxygen-button`

## Installation

```sh
$ yarn add @8x8/oxygen-dropdown-button
$ npm install @8x8/oxygen-dropdown-button
```

## Props

### `interface DropdownButtonProps`

| Name                        | Type                                                                                                                                                                 | Default     | Description                                                                                                                                |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `children`                  | `React.ReactNode`                                                                                                                                                    |             | Items rendered inside the floating part of the dropdown when open                                                                          |
| `buttonText`                | `React.ReactNode`                                                                                                                                                    |             | Text rendered inside the button                                                                                                            |
| `idealDirection?`           | `'top' \| 'right' \| 'bottom' \| 'left' \| 'top-start' \| 'top-end' \| 'bottom-start' \| 'bottom-end' \| 'left-start' \| 'left-end' \| 'right-start' \| 'right-end'` | `'bottom'`  | The direction of the floating element (relative to the button)                                                                             |
| `shouldCloseOnInsideClick?` | `boolean`                                                                                                                                                            | `true`      | Controls whether the dropdown will close when the floating part receives click events                                                      |
| `isDefaultOpen?`            | `boolean`                                                                                                                                                            | `false`     | DropdownButton open by default                                                                                                             |
| `isDisabled?`               | `boolean`                                                                                                                                                            | `false`     | Disables the DropdownButton                                                                                                                |
| `invertIconPosition?`       | `boolean`                                                                                                                                                            | `false`     | Controls the icon position: before/after the text                                                                                          |
| `indicatorIcon?`            | `React.ComponentType` \| `false`                                                                                                                                     | `undefined` | Receives custom Icon component - on `false` value it will not render any icon                                                              |
| `onOpen?`                   | `() => void`                                                                                                                                                         | `() => {}`  | Callback after dropdown open action                                                                                                        |
| `onClose?`                  | `() => void`                                                                                                                                                         | `() => {}`  | Callback after dropdown close action                                                                                                       |
| `customCloseHandlers?`      | `CustomCloseHandler[]`                                                                                                                                               | `[]`        | Array containing events that should trigger the hiding of the tooltip                                                                      |
| `forwardedRef?`             | oneOfType([object, func])                                                                                                                                            | `null`      | DropdownButton button component ref                                                                                                        |
| `theme?`                    | `object`                                                                                                                                                             | `{}`        | DropdownButton theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants |

### `interface CustomCloseHandler`

| Name        | Type               | Example  | Description                                                       |
| ----------- | ------------------ | -------- | ----------------------------------------------------------------- |
| `target`    | `EventTarget`      | `window` | The element that is going to receive the event listener           |
| `callback`  | `(Event) => void;` | `click`  |                                                                   |
| `eventName` | `string`           | `false`  | The name of the event                                             |
| `capture`   | `boolean`          |          | Specify weather to use capture or bubbling to propagate the event |

#### Example

```js
const customCloseHandlers = [
  {
    target: document.body,
    eventName: 'ps-scroll-x',
    capture: true,
  },
];
```

## Usage

For content of dropdown we recommend to use List from '@8x8/oxygen-list'

```js
import DropdownButton from '@8x8/oxygen-dropdown-button';
import List, { ListItem } from '@8x8/oxygen-list';

<DropdownButton buttonText="Example Button">
  <List>
    <ListItem>Item 1</ListItem>
    <ListItem isDisabled>Item 2 - is disabled</ListItem>
    <ListItem>Item 3 - has a extremely long name</ListItem>
    <ListItem>Item 4</ListItem>
    <ListItem title="Title">Item 5</ListItem>
    <ListItem>Item 6</ListItem>
    <ListItem>Item 7</ListItem>
  </List>
</DropdownButton>;
```
