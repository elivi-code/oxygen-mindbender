# 8x8 Oxygen - Toast

The `@8x8/oxygen-toast` package contains notification components.

## Installation

```sh
$ yarn add @8x8/oxygen-toast
```

```sh
$ npm install @8x8/oxygen-toast
```

## Components

### `Toast` and `ToastStack`

The `Toast` component can be used to show notifications to the user. It can be used as a standalone component or as a child of the `ToastStack` component. The `ToastStack` component handles grouping and positioning of the `Toast` components.

```
import { Toast, ToastStack } from '@8x8/oxygen-toast';

<ToastStack>
  <Toast title="One notification" closeButtonLabel="Dismiss" />
  <Toast title="Second notification" closeButtonLabel="Dismiss toast" description="A longer description of the second notification" />
</ToastStack>
```

To actually render these you probably want some state. You can either look at the `Toaster` component which knows how to render these or you can implement your own internal notification state.

#### Props `Toast`

`interface ToastProps`

| Name                   | Type                | Default     | Description                                                                                                                                                                                       |
|------------------------|---------------------|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title?`               | `React.ReactNode`   | `undefined` | Notification title. Should be used for main notification text.                                                                                                                                    |
| `closeButtonLabel?`    | `string`            | 'Close'     | `aria-label` for the close button. Defaults to "Close" if not provided or if a falsy value (null, undefined, '') is passed.                                                                         |
| `description?`         | `React.ReactNode`   | `undefined` | Notification description. Use for additional description (if needed) besides the title.                                                                                                            |
| `children?`            | `React.ReactNode`   | `undefined` | _DEPRECATED_: Old implementaion of notification. When used takes precedence over title + description (this is to preserve older notifications). Please migrate over to `title` and `description`. |
| `actions?`             | `Array<ActionType>` | `[]`        | Array containing action with respective callbacks.                                                                                                                                                |
| `type?`                | `'success' \        | 'warning' \ | 'error' \                                                                                                                                                                                         | 'info'` | `'success'` | Notification type.                                                                                                                                                                                |
| `size?`                | `'small' \          | 'large' \   | 'medium'`                                                                                                                                                                                         | `'small'`   | Notification size.                                                                                                                                                                                |
| `hideCloseControl?`    | `boolean`           | false       | Hides the close button.                                                                                                                                                                           |
| `onCloseControlClick?` | `() => void`        | `undefined` | Custom callback called when the notification is closed.                                                                                                                                           |
| `theme?`               | `Partial<Theme>`    | `{}`        | Theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants                                                                       |
| `iconTitle?`           | `string`            | `undefined` | Title for the icon to provide context to the user about the notification.                                                                                                                         |

```
type ActionType = {
  title: string;
  id: string;
  callback: () => void;
}
```

#### `ToastStack`

`interface ToastStackProps`

| Name       | Type              | Default | Description                                                                                                                 |
| ---------- | ----------------- | ------- | --------------------------------------------------------------------------------------------------------------------------- |
| `children` | `React.ReactNode` |         | Expects only `Toast` components as children                                                                                 |
| `theme?`   | `Theme`           |         | Theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants |
