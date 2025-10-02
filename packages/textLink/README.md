# 8x8 Oxygen - TextLink

## !! Deprecated

Please use the new `Link` component. The `TextLink` component will not receive further updates.

## Installation

```sh
$ yarn add @8x8/oxygen-text-link
```

```sh
$ npm install @8x8/oxygen-text-link
```

## Props

| Name          | Type                                          | Default     | Description                                                                                                                                                                               |
| ------------- | --------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`    | `React.ReactNode`                             |             | Inner node. We advise to use text, and not use complex (block-level) components.                                                                                                          |
| `href?`       | `string`                                      | `undefined` | The URL to link to. If you want to handle the action via JS, don't provide this and instead provide an `onClick` callback. This is also not appended to the DOM when `isDisabled` is set. |
| `color?`      | `'primary' \| 'inherit'`                      | `'primary'` | Whether to use its owned defined color (`primary`) or whether to `inherit` it.                                                                                                            |
| `size?`       | `'default' \| 'inherit'`                      | `'default'` | Whether to use its owned defined size (`default`) or whether to `inherit` it.                                                                                                             |
| `underline?`  | `'always' \| 'hover' \| 'inherit' \| 'never'` | `'never'`   | Which underline rules to use. The values are self-explanatory.                                                                                                                            |
| `isBlock?`    | `boolean`                                     | `false`     | Tell when TextLink is render as a block element.                                                                                                                                          |
| `isDisabled?` | `boolean`                                     | `false`     | Tell when TextLink is disabled.                                                                                                                                                           |
| `onClick?`    | `(event: React.MouseEvent) => void`           | `undefined` | Callback when TextLink is cliced in case when href is empty.                                                                                                                              |
| `theme?`      | `object`                                      | `{}`        | `TextLink` compatible theme object, default provided by the internal Oxygen theme provider.                                                                                               |
| `as?`         | `ElementType`                                 | `undefined` | optional parameter, so the component can take different tag behaviour (e.g `as="button"`).                                                                                                |

Since the `TextLink` component is a simple wrapper around `a` use any regular HTML attributes for it. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a

You will want to set the `href` attribute to make it a valid link.

Alternatively use `onClick` and handle the click yourself.
