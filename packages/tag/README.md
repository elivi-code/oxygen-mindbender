# 8x8 Oxygen - Tag

## Installation

```sh
$ yarn add @8x8/oxygen-tag
```

```sh
$ npm install @8x8/oxygen-tag
```

## Usage

```js
import Tag, { variants } from '@8x8/oxygen-tag';
```

```js
<Tag>Josephine Lu</Tag>
```

Or with more options:

```js
<Tag variant={variants.yellow} action={() => {}} hasError>
  Josephine Lu
</Tag>
```

## Props

| Name      | Type     | Default          | Description                                                                                              |
| --------- | -------- | ---------------- | -------------------------------------------------------------------------------------------------------- |
| action    | function | undefined        | Callback function to be called when CloseButton is clicked                                               |
| avatar    | object   | undefined        | Avatar object to be rendered inside the tag. Supports: `{ name: string, url: string, isGroup: boolean }` |
| children  | node     | undefined        | Rendered element inside the Tag (should be text or text-like)                                            |
| isFocused | boolean  | undefined        | Control the focus on the CloseButton                                                                     |
| hasError  | boolean  | undefined        | Whether to render a red border around the tag                                                            |
| theme     | object   |                  | Tag theme object override                                                                                |
| testId    | string   | 'TAG'            | Test ID DOM attribute value                                                                              |
| variant   | string   | {variants.light} | Variant of the tag. One of: 'light' 'dark 'yellow' 'blue'. Please use the exposed values from `variants` |
