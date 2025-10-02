# 8x8 Oxygen - Popover

The `Popover` package exposes the following components: `Popover` and `PopoverMenu`.

They are opinionated `@floating-ui` wrappers which open floating containers

## Installation

```sh
yarn add @8x8/oxygen-popover
npm install @8x8/oxygen-popover
```

## Interfaces

### `Popover`

Use for generic popover contents. State is (partially) controlled. You _have_ to provide the state and an update function for it.

| Name               | Type                                                                                                                                                                                       | Default          | Description                                                                                                                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`         | `React.ReactElement`                                                                                                                                                                       | `undefined`      | Anchor element. Click and KeyPress target to open the Popover. Used for relative Popover position as well. Should contain 1 root node as events and refs will be attached to it                      |
| `floatingContent`  | `React.ReactNode`                                                                                                                                                                          | `undefined`      | Popover content. Can be anything                                                                                                                                                                     |
| `isOpen`           | `boolean`                                                                                                                                                                                  | `undefined`      | Controls the Popover state. Can be used from react state `const [isOpen, setIsOpen] = useState(false);` (See example)                                                                                |
| `setIsOpen`        | `(isOpen: boolean) => void`                                                                                                                                                                | `undefined`      | State update function. Can be used from react state `const [isOpen, setIsOpen] = useState(false);` (See example)                                                                                     |
| `isDisabled?`      | `boolean`                                                                                                                                                                                  | `undefined`      | Disabled Popover state. Disables opening, also passes the `disabledProp` to the `children` element                                                                                                   |
| `placement?`       | `'top'` \| `'top-start'` \| `'top-end'` \| `'right'` \| `'right-start'` \| `'right-end'` \| `'bottom'` \| `'bottom-start'` \| `'bottom-end'` \| `'left'` \| `'left-start'` \| `'left-end'` | `'bottom-start'` | Controls Popover render position. See https://floating-ui.com/docs/useFloating#placement . If there is not enough space flip() is used to allow the Popover to be rendered in the opposite direction |
| `portalTargetRef?` | `React.RefObject<HTMLElement>`                                                                                                                                                             | `undefined`      | Use a custom reference where to render the floating UI through a portal                                                                                                                              |
| `activeProp?`      | `string`                                                                                                                                                                                   | `isActive`       | Prop name which is passed to the `children` element when the Popover is open (used if your target element requires a different prop)                                                                 |
| `disabledProp?`    | `string`                                                                                                                                                                                   | `isDisabled`     | Prop name which is passed to the `children` element when the Popover is disabled (used if your target element requires a different prop)                                                             |
| `maxHeight?`       | `number`                                                                                                                                                                                   | `400`            | Custom maxHeight, defaults to 400 (px) — note that this does not include 16px padding, for the default 400px height this yields a total maxHeight of 384px                                           |
| `testId?`          | `string`                                                                                                                                                                                   | `'POPOVER'`      | TestId value                                                                                                                                                                                         |

### `PopoverMenu`

Use specifically for listing menu items, simpler use-case. Provide data under `items`, listen to selection done via `onUpdate`.

| Name               | Type                                                                                                                                                                                       | Default          | Description                                                                                                                                                                                          |
| ------------------ |--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| ---------------- |------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `children`         | `React.ReactElement`                                                                                                                                                                       | `undefined`      | Anchor element. Click and KeyPress target to open the Popover. Used for relative Popover position as well. Should contain 1 root node as events and refs will be attached to it                      |
| `items`            | `ListItem[]`                                                                                                                                                                               | `undefined`      | Array of items to be rendered as ListItems. You provide the props for these items.                                                                                                                   |
| `onUpdate`         | `(item: ListItemProps, index: number) => void`                                                                                                                                             | `undefined`      | Callback function invoked when the user has made a selection. You receive the selected item back (same format as provided) and the index as the second argument                                      |
| `onMenuOpenToggle` | `(newOpenState: boolean) => void`                                                                                                                                                          | `undefined`      | Callback function invoked when the menu open state is changed. You receive one argument with the new open state (boolean)                                                                            |
| `onCancel`         | `() => void`                                                                                                                                                                               | `undefined`      | Callback function invoked when the user closes the menu without choosing an option                                                                                                                   |
| `header?`          | `React.ReactNode`                                                                                                                                                                          | `undefined`      | Optional header content that appears above the list of items. This can be used for titles, labels, or any custom content.                                                                            |
| `footer?`          | `React.ReactNode`                                                                                                                                                                          | `undefined`      | Optional footer content that appears below the list of items. This can be used for actions, additional links, or any custom content.                                                                 |
| `isDisabled?`      | `boolean`                                                                                                                                                                                  | `undefined`      | Disabled Popover state. Disables opening, also passes the `disabledProp` to the `children` element                                                                                                   |
| `placement?`       | `'top'` \| `'top-start'` \| `'top-end'` \| `'right'` \| `'right-start'` \| `'right-end'` \| `'bottom'` \| `'bottom-start'` \| `'bottom-end'` \| `'left'` \| `'left-start'` \| `'left-end'` | `'bottom-start'` | Controls Popover render position. See https://floating-ui.com/docs/useFloating#placement . If there is not enough space flip() is used to allow the Popover to be rendered in the opposite direction |
| `portalTargetRef?` | `React.RefObject<HTMLElement>`                                                                                                                                                             | `undefined`      | Use a custom reference where to render the floating UI through a portal                                                                                                                              |
| `activeProp?`      | `string`                                                                                                                                                                                   | `isActive`       | Prop name which is passed to the `children` element when the Popover is open (used if your target element requires a different prop)                                                                 |
| `disabledProp?`    | `string`                                                                                                                                                                                   | `isDisabled`     | Prop name which is passed to the `children` element when the Popover is disabled (used if your target element requires a different prop)                                                             |
| `maxHeight?`       | `number`                                                                                                                                                                                   | `400`            | Custom maxHeight, defaults to 400 (px) — note that this does not include 16px padding, for the default 400px height this yields a total maxHeight of 384px                                           |
| `testId?`          | `string`                                                                                                                                                                                   | `'POPOVER_MENU'` | TestId value                                                                                                                                                                                         |

### Rendering Complex List Items

The `PopoverMenu` component allows for the rendering of complex list items, including the use of sub-arrays. If the `items` prop contains nested arrays, the component will render the children of the nested array as List Items, complete with select and keyboard navigation functionality.

### `ListItem` Interface

The `ListItem` interface used under the `items` prop allows any HTML button attributes as well as `isActive`, `isDisabled` & `testId`

```ts
interface ListItemProps extends React.ComponentPropsWithRef<'button'> {
  isActive?: boolean;
  isDisabled?: boolean;
  testId?: string;
}
```
