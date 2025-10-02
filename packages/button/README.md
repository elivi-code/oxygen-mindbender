# 8x8 Oxygen - Button

The `Button` component is a wrapper around the HTML `button` element. It is mostly a visual component as it provides 5 different variants and a few sizes. It also renders circular buttons through the `isCircular` prop.

## Installation

```sh
$ yarn add @8x8/oxygen-button
```

```sh
$ npm install @8x8/oxygen-button
```

## Props

### Button

`interface ButtonProps`

| Name             | Type                                                                                     | Default     | Description                                                                                                                                                                                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`       | `React.ReactNode`                                                                        | `undefined` | Button content                                                                                                                                                                                                                                                 |
| `size?`          | `'small' \| 'medium' \| 'large'`                                                         | `'medium'`  | Button size. Use `'large'` for touch targets                                                                                                                                                                                                                   |
| `variant?`       | `'primary' \| 'secondary' \| 'tertiary' \| 'tertiaryReversed' \| 'text' \| 'success' \|` | `'primary'` | Use `'primary'` and `'secondary'` to denote a form default action vs secondary actions. `'success'` and `'tertiary'` are also used together with `isCircular` for call (phone) actions. Use `'tertiaryReversed'` against inverted backgrounds (ex: in-call ui) |
| `iconLeft?`      | `React.ReactNode`                                                                        | `undefined` | Adds an icon on the left side of the Button                                                                                                                                                                                                                    |
| `iconRight?`     | `React.ReactNode`                                                                        | `undefined` | Adds an icon on the right side of the Button                                                                                                                                                                                                                   |
| `isActive?`      | `boolean`                                                                                | `false`     | Active button state                                                                                                                                                                                                                                            |
| `isDisabled?`    | `boolean`                                                                                | `false`     | Disabled button state                                                                                                                                                                                                                                          |
| `isCircular?`    | `boolean`                                                                                | `false`     | Makes the button circular. Use with one `Icon` as child                                                                                                                                                                                                        |
| `isDestructive?` | `boolean`                                                                                | `false`     | Destructive button state                                                                                                                                                                                                                                       |
| `testId?`        | `string`                                                                                 | `'BUTTON'`  | Use for test selectors                                                                                                                                                                                                                                         |
| `theme?`         | `object`                                                                                 | `{}`        | Use to customize component instance theme                                                                                                                                                                                                                      |

#### Button size vs iconLeft/iconRight size map

The icon sizes are set according to the Button size:

- `large`: 24px
- `medium`: 20px
- `small`: 16px

### ButtonGroup

Used to group `Button`'s

`interface ButtonGroupProps`

| Name       | Type                            | Default    | Description                                                                 |
| ---------- | ------------------------------- | ---------- | --------------------------------------------------------------------------- |
| `children` | `React.ReactNode`               |            | Should be `Button` components                                               |
| `spacing?` | `'large' \| 'small'`            | `'large'`  | Spacing between the buttons in ButtonGroup. Use `small` for `small` Buttons |
| `align?`   | `'center' \| 'left' \| 'right'` | `'center'` | Content alignment                                                           |

### DropdownButton

Usually used together with the `Popover` or `PopoverMenu` components.

!!! Note that the `DropdownButton` component requires `OxygenProvider`

`interface DropdownButtonProps`

| Name          | Type                                 | Default             | Description                                                                    |
| ------------- | ------------------------------------ | ------------------- | ------------------------------------------------------------------------------ |
| `children?`   | `React.ReactNode`                    | `undefined`         | Content. We recommend using text                                               |
| `size?`       | `'large'` \| `'medium'` \| `'small'` | `medium`            | Controls typography values (and implicitly height) and icon size               |
| `isActive?`   | `boolean`                            | `false`             | Whether the item is active (denotes that something like the `Popover` is open) |
| `isDisabled?` | `boolean`                            | `false`             | Whether the item is disabled                                                   |
| `fullWidth?`  | `boolean`                            | `false`             | Has width: 100%. You can control the width through the parent component        |
| `testId?`     | `string`                             | `'DROPDOWN_BUTTON'` | TestId value                                                                   |

# IconButton

The `IconButton` component is used to add interactivity to `Icons`. It _can_ be used to wrap other items, but it has been build specifically for icons. Results may vary if it wraps other items.

To use it simply wrap an icon and you will get `hover`, `active`, `focus` and `disabled` states.

For the _disabled_ state the `IconButton` controls its child `Icon` `color` prop, hence some features might not work fully (or as expected) with various content.

## Props

## Props

| Name            | Type                           | Default        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :-------------- | :----------------------------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children?`     | `React.ReactNode`              |                | The icon to be wrapped. It can be _any_ component, but we advise to use this for `Icon` components.                                                                                                                                                                                                                                                                                                                                                                                      |
| `forwardedRef?` | `React.Ref<HTMLButtonElement>` | `null`         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `isActive?`     | `boolean`                      | `false`        | Controls the `active` state of the component                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `isDisabled?`   | `boolean`                      | `false`        | Controls the `disabled` state of the component                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `isInverted?`   | `boolean`                      | `false`        | Use against inverted backgrounds, such as Toast (Notification)                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `testId?`       | `string`                       | `'iconButton'` | `data-test-id` DOM attribute value                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `theme?`        | `object`                       | `{}`           | IconButton theme object, default value provided by the internal Oxygen theme provider                                                                                                                                                                                                                                                                                                                                                                                                    |
| `size?`         | `string`                       | `default`      | Specifies the size of the IconButton. Possible values are 'small2XIconXs', 'smallXIconS', 'default', 'smallIconM', 'smallIconS', 'smallIconXs', 'mediumIconL', 'mediumIconM', 'mediumIconS', 'largeIconL', 'largeIconM'. These correspond to the following [IconButtonSize, IconSize]: [20px, 16px], [24px, 20px], [28px, 24px], [32px, 24px], [32px, 20px], [32px, 16px], [40px, 32px], [40px, 24px], [40px, 20px], [48px, 32px], [48px, 24px] sizes. The default size is [28px, 24px]. |
