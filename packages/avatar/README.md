# 8x8 Oxygen - Avatar

## Installation

```sh
$ yarn add @8x8/oxygen-avatar
```

```sh
$ npm install @8x8/oxygen-avatar
```

The package exposes UI Components:

- [Avatar](#avatar)
- [AvatarStack](#avatarstack)

The following constants are also exposed:

- `avatarSize`
- `avatarUserStatus`

Exported types:

- `AvatarProps`
- `AvatarStackProps`
- `AvatarTheme`
- `AvatarSize`
- `AvatarUserStatus`
- `AvatarStackTheme`

## Avatar

### Usage

```js
import Avatar from '@8x8/oxygen-avatar';
```

```js
<Avatar name="Example Name" />
```

### Avatar Props

| Name            | Type                                                     | Default  | Description                                                                                                                                              |
| --------------- | -------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children        | ReactNode                                                | null     | Custom content to be rendered inside of the Avatar. Can be an Oxygen Icon, text, anything really                                                         |
| hasBorder       | boolean                                                  | false    | Whether to render a border around `Avatar`                                                                                                               |
| isGroup         | boolean                                                  | false    | Specifies if the group placeholder should be used                                                                                                        |
| maxInitials     | number                                                   | 2        | How many initials to render                                                                                                                              |
| name            | string                                                   | ''       | Specifies the name after which the initials are computed                                                                                                 |
| onClick         | func                                                     | noop     | Callback for the avatar on-click event                                                                                                                   |
| onEdit          | func                                                     | noop     | Callback for the edit overlay on-click event                                                                                                             |
| showEditOverlay | boolean                                                  | false    | Specifies if the edit overlay should be displayed. The edit overlay is available only for sizes between l and 3xl                                        |
| size            | AvatarSize &#124; number                                 | 'medium' | Specifies the size of the avatar. If specified as number it does not honor `UserStatus` or `EditOverlay`. Number is used when custom scaling is required |
| src             | string                                                   | ''       | Specifies the image source                                                                                                                               |
| imageProps      | Omit<React.ComponentPropsWithRef<'img'>, 'src' \| 'alt'> | {}       | Allow for custom overriding for image component - used only if src is provided                                                                           |
| testId          | string                                                   | 'AVATAR' | Test ID DOM attribute value                                                                                                                              |
| theme           | AvatarTheme                                              |          | Avatar theme object, default value provided by the internal Oxygen theme provider via `@8x8/oxygen-config` and `@8x8/oxygen-constants`                   |
| userStatus      | AvatarUserStatus &#124; React.ReactElement               | null     | Specifies the user status or a render-able element. User status is available only for sizes between `2xsmall` and `2xlarge`                              |
| hasStatusBorder | boolean                                                  | false    | Specifies if the avatar has a border reflecting the userStatus (only if userStatus is a valid string)                                                    |
| isActive        | boolean                                                  | false    | Specifies if the avatar is active, showing the focus border                                                                                              |

### Themes

You can preview all 3 themes via the theme switcher in the [guideline section](/?path=/story/components-avatar--01-guideline).

#### Classic

This is the default theme.

```json
{
  "size3xsmall": "16px",
  "size2xsmall": "24px",
  "sizeXsmall": "32px",
  "sizeSmall": "40px",
  "sizeMedium": "48px",
  "sizeLarge": "64px",
  "sizeXlarge": "72px",
  "size2xlarge": "80px",
  "size3xlarge": "160px",
  "font3xsmall": "7px",
  "font2xsmall": "10px",
  "fontXsmall": "12px",
  "fontSmall": "13px",
  "fontMedium": "15px",
  "fontLarge": "15px",
  "fontXlarge": "19px",
  "font2xlarge": "19px",
  "font3xlarge": "36px",
  "icon3xsmall": 10,
  "icon2xsmall": 14,
  "iconXsmall": 19,
  "iconSmall": 24,
  "iconMedium": 28,
  "iconLarge": 38,
  "iconXlarge": 44,
  "icon2xlarge": 44,
  "icon3xlarge": 76,
  "avatarBackgroundColor": "#A4B8D1",
  "initialsColor": "#1C2025",
  "initialsFontFamily": "'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  "placeholderIconColor": "#5E6D7A",
  "editOverlayColor": "#5E6D7A",
  "editIconColor": "#FFF",
  "editIconSmallSize": "16px",
  "editIconLargeSize": "24px"
}
```

#### Novo

This is the new Novo theme. To use it you'll need to import it and apply it via
config or directly via the `theme` props.

```js
import { set } from '@8x8/oxygen-config';
import { avatarNovo, avatarNovoDark } from '@8x8/oxygen-constants';

// Novo theme
set({
  avatar: avatarNovo,
});

// Novo Dark theme
set({
  avatar: avatarNovoDark,
});
```

Below are the values for the Novo themes. Use this for reference, you shouldn't
need the values directly.

##### Novo

```json
{
  "size3xsmall": "16px",
  "size2xsmall": "24px",
  "sizeXsmall": "32px",
  "sizeSmall": "40px",
  "sizeMedium": "48px",
  "sizeLarge": "64px",
  "sizeXlarge": "72px",
  "size2xlarge": "80px",
  "size3xlarge": "160px",
  "font3xsmall": "7px",
  "font2xsmall": "10px",
  "fontXsmall": "12px",
  "fontSmall": "12px",
  "fontMedium": "16px",
  "fontLarge": "16px",
  "fontXlarge": "19px",
  "font2xlarge": "19px",
  "font3xlarge": "36px",
  "icon3xsmall": 10,
  "icon2xsmall": 16,
  "iconXsmall": 20,
  "iconSmall": 24,
  "iconMedium": 32,
  "iconLarge": 38,
  "iconXlarge": 44,
  "icon2xlarge": 44,
  "icon3xlarge": 76,
  "avatarBackgroundColor": "#E0E0E0",
  "initialsColor": "#292929",
  "initialsFontFamily": "Inter, sans-serif",
  "placeholderIconColor": "#292929",
  "editOverlayColor": "#292929",
  "editIconColor": "#FFFFFF",
  "editIconSmallSize": "16px",
  "editIconLargeSize": "24px",
  "hoverOverlayColor": "#141414",
  "focusBorderColor": "#0056E0",
  "innerBorderColor": "#FFFFFF",
  "iconSet": "novo"
}
```

##### Novo dark

```json
{
  "size3xsmall": "16px",
  "size2xsmall": "24px",
  "sizeXsmall": "32px",
  "sizeSmall": "40px",
  "sizeMedium": "48px",
  "sizeLarge": "64px",
  "sizeXlarge": "72px",
  "size2xlarge": "80px",
  "size3xlarge": "160px",
  "font3xsmall": "7px",
  "font2xsmall": "10px",
  "fontXsmall": "12px",
  "fontSmall": "12px",
  "fontMedium": "16px",
  "fontLarge": "16px",
  "fontXlarge": "19px",
  "font2xlarge": "19px",
  "font3xlarge": "36px",
  "icon3xsmall": 10,
  "icon2xsmall": 16,
  "iconXsmall": 20,
  "iconSmall": 24,
  "iconMedium": 32,
  "iconLarge": 38,
  "iconXlarge": 44,
  "icon2xlarge": 44,
  "icon3xlarge": 76,
  "avatarBackgroundColor": "#666666",
  "initialsColor": "#FFFFFF",
  "initialsFontFamily": "Inter, sans-serif",
  "placeholderIconColor": "#FFFFFF",
  "editOverlayColor": "#FFFFFF",
  "editIconColor": "#171719",
  "editIconSmallSize": "16px",
  "editIconLargeSize": "24px",
  "hoverOverlayColor": "#F1F1F1",
  "focusBorderColor": "#246FE5",
  "innerBorderColor": "#141414",
  "iconSet": "novo"
}
```

If you need to customize the Novo theme it's easy to spread the imported theme
and overwrite _only_ what you need to customize:

```js
import { set } from '@8x8/oxygen-config';
import { avatarNovoDark } from '@8x8/oxygen-constants';

set({
  avatar: {
    ...avatarNovoDark,
    initialsColor: 'yellow',
  },
});
```

## AvatarStack

The `AvatarStack` component has some predefined rules on how to render `Avatar` components.

- It only renders `Avatar` components that are direct children, all other types of content will be ignored
- It will render up to `maxAvatars` number of items. If there are more items available only `maxAvatars-1` will be rendered and in the last place it will show how many items were skipped. In the format (+2) if there are 2 `Avatar` items which haven't been rendered
- By default it is non-interactable. If an `onClick` prop is present the `AvatarStack` component is focusable and hoverable (and will honor the `onClick` event).
- The `Avatar` children components are _forced_ to be rendered with the following props:
  ```javascript
  {
    size: 'xsmall',
    hasBorder: true,
    userStatus: null,
    showEditOverlay: false,
  }
  ```

### Usage

```js
import Avatar, { AvatarStack } from '@8x8/oxygen-avatar';
```

```js
<AvatarStack>
  <Avatar name="Example Name" />
  <Avatar src="https://path/to/image.jpg" />
  <Avatar name="Example Name" />
  <Avatar name="Example Name" />
  <Avatar name="Example Name" />
</AvatarStack>
```

And with custom props:

```js
<AvatarStack onClick={() => {}} maxAvatars={2}>
  <Avatar name="Example Name" />
  <Avatar src="https://path/to/image.jpg" />
  <Avatar name="Example Name" />
  <Avatar name="Example Name" />
  <Avatar name="Example Name" />
</AvatarStack>
```

You can also provide the data through the `avatars` prop (instead of providing the `children` directly).
These accept all `Avatar` props, so it's equivalent with providing them as children.

```javascript
<AvatarStack
  avatars={[
    { name: 'Example Name' },
    { src: 'https://path/to/image.jpg' },
    { name: 'Example Name' },
    { name: 'Example Name' },
    { name: 'Example Name' },
  ]}
/>
```

### AvatarStack Props

| Name       | Type                  | Default   | Description                                                                                                                                                                                     |
| ---------- | --------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children   | `Avatar` component(s) | undefined | Only supports `Avatar` components as direct children, will ignore any other content types                                                                                                       |
| avatars    | array                 | null      | Alternative to providing children with Avatar components. Each array item is an object with `Avatar` props (equivalent to each child props). If this is provided the `children` prop is ignored |
| theme      | AvatarStackTheme      |           | AvatarStack theme object, default value provided by the internal Oxygen theme provider via `@8x8/oxygen-config` and `@8x8/oxygen-constants`                                                     |
| onClick    | function              | null      | If there is an event the component reacts to it will also add focus and hover UX states                                                                                                         |
| maxAvatars | number                | 4         | How many `Avatars` to render before showing the extra items as (+X)                                                                                                                             |

### Themes

The `AvatarStack` component does not have a dedicate Classic theme. It does expose both Classic and Novo but they are in fact identical.

#### Novo & Classic

```json
{
  "backgroundHover": "#F1F1F1",
  "borderColorHover": "#E0E0E0",
  "borderColorFocus": "#0056E0"
}
```

#### Novo Dark

```json
{
  "backgroundHover": "#2F2E32",
  "borderColorHover": "#666666",
  "borderColorFocus": "#246FE5"
}
```
