# 8x8 Oxygen - Tooltip

## Installation

```sh
$ yarn add @8x8/oxygen-tooltip
```

```sh
$ npm install @8x8/oxygen-tooltip
```

## Usage

```js
import Tooltip from '@8x8/oxygen-tooltip';

<Tooltip title="Tooltip Content">Trigger</Tooltip>;
```

## Props

`interface TooltipProps`

| Name                   | Type                                                                                                                                                                    | Default                            | Description                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `title`                | `React.ReactNode`                                                                                                                                                       | `undefined`                        | Content that will be placed inside the tooltip                                                                                                                                                                                                                                                                     |
| `children?`            | `React.ReactNode`                                                                                                                                                       | `undefined`                        | Target used to attach hover/click events to trigger the Tooltip open events & position the floating Tooltip against                                                                                                                                                                                                |
| `includeWrapper?`      | `boolean`                                                                                                                                                               | `true`                             | When `false` the `Tooltip` component does not render anything around the target element (no DOM node is added)                                                                                                                                                                                                     |
| `delay?`               | `number`                                                                                                                                                                | `0`                                | Delay in milliseconds until the tooltip is shown. Only applied for hover                                                                                                                                                                                                                                           |
| `orientation?`         | `'top' \| 'right' \| 'bottom' \| 'left' \| 'top-start' \| 'top-end' \| 'bottom-start' \| 'bottom-end' \| 'left-start' \| 'left-end' \| 'right-start' \| 'right-end' \|` | `'top'`                            | Direction towards which the `Tooltip` will be shown. If there's not enough space to render in the provided direction the `Tooltip` will flip. Can use exported values from `directions`                                                                                                                            |
| `showOn?`              | `'hover' \| 'click'`                                                                                                                                                    | `'hover'`                          | Which event shows the `Tooltip`. Can use exported values from `showOnTypes`                                                                                                                                                                                                                                        |
| `disableInteractive?`  | `boolean`                                                                                                                                                               | `false`                            | Disables keeping the Tooltip open while hovering over the floating UI. Note that this doesn't work together with `showOn="click"`                                                                                                                                                                                  |
| `offset?`              | `number`                                                                                                                                                                | `7`                                | Offset in pixels from the target element. Current value matches the Arrow dimension                                                                                                                                                                                                                                |
| `renderContainerId?`   | `string`                                                                                                                                                                | `undefined`                        | All Tooltip elements are rendered through a react-portal. By default the element `<div id="oxygen-tooltip-root" />` os appended in the root of the document. If for some reason you require some tooltips to use a different element, supply a different value. See https://floating-ui.com/docs/FloatingPortal#id |
| `renderContainer?`     | `instanceof HTMLElement`                                                                                                                                                | `undefined`                        | Provide a reference to a node to use that as a root instead of the default one. If this is active and no custom `renderContainerId` is provided, a UUID will be used as `id` instead. See https://floating-ui.com/docs/floatingportal#root                                                                         |
| `triggerRef?`          | `instanceof HTMLElement`                                                                                                                                                | `undefined`                        | If this is specified the reference provided will be used both as target for the hover/click events and for relative positioning of the floating `Tooltip`. Use when wrapping the target with the `Tooltip` component is problematic. Children will still be rendered, but have no events attached to them          |
| `customCloseHandlers?` | `array`                                                                                                                                                                 | `[]`                               | **Deprecated** Array containing events that should trigger the hiding of the tooltip                                                                                                                                                                                                                               |
| `modifiers?`           | `object`                                                                                                                                                                | `{ offset: { offset: '0, 7', }, }` | **Deprecated** Modifier object that can be used to alter the behaviour of the popper library. This component uses react-popper v1.x. The modifiers documentation can be found [here](https://popper.js.org/docs/v1//#modifiers--codeobjectcode)                                                                    |
| `enableArrow?`         | `boolean`                                                                                                                                                               | `undefined`                        | Controls whether the tooltip Arrow component is displayed or not - **takes precedence** over theme config `theme.enableArrow`                                                                                                                                                                                      |
| `testId?`              | `string`                                                                                                                                                                | `'TOOLTIP'`                        | Test ID DOM attribute value                                                                                                                                                                                                                                                                                        |
| `theme?`               | `object`                                                                                                                                                                | `{}`                               | Theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants                                                                                                                                                                                        |

## Custom Close Handlers

| Name      | Type   | Example | Description                                                       |
| --------- | ------ | ------- | ----------------------------------------------------------------- |
| target    | node   | window  | The element that is going to receive the event listener           |
| eventName | string | 'click' | The name of the event                                             |
| capture   | bool   | false   | Specify weather to use capture or bubbling to propagate the event |

### Example

```js
const customCloseHandlers = [
  {
    target: document.body,
    eventName: 'ps-scroll-x',
    capture: true,
  },
];
```

### `orientation` & `showOn`

There are 2 value objects exported which can be used to pass in the `orientation` and `showOn` props.

```js
import Tooltip, { orientation, showOn } from '@8x8/oxygen-tooltip';

...

<Tooltip orientation={orientation.top} showOn={showOn.hover} title="title">
  <button>I have a tooltip shown on hover positioned at the top</button>
</Tooltip>
```

If you need the types for these values you can get them from the `TooltipProps` interface.

```js
import Tooltip, { orientation } from '@8x8/oxygen-tooltip';
import type { TooltipProps } from '@8x8/oxygen-tooltip';
...

const TooltipWrapper = (props: { myOrientation: TooltipProps['orientation'] }) => {
  const { myOrientation } = props;
  return <Tooltip orientation={myOrientation} />;
};

```

#### Deprecated

The `directions` object is deprecated. Please use the `orientation` object instead.

Old usage:

```js
import Tooltip, { directions } from '@8x8/oxygen-tooltip';

...

<Tooltip orientation={directions.top}>
```

## DEPRECATED — Modifiers

This is deprecated. Please use the `offset` prop instead.

```js
const modifiers = {
  offset: {
    offset: '0, 7',
  },
};
```
