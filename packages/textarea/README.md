# 8x8 Oxygen - Textarea

## Installation

```sh
$ yarn add @8x8/oxygen-textarea
```

```sh
$ npm install @8x8/oxygen-textarea
```

## Usage

```js
import Textarea from '@8x8/oxygen-textarea';
```

```js
<Textarea />
```

## Props

### Textarea

| Name         | Type                                                                         | Default   | Description                                                                                                                          |
| ------------ | ---------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| theme        | object                                                                       |           | Textarea theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants |
| forwardedRef | oneOfType([object, func])                                                    | null      | Component ref                                                                                                                        |
| id           | string                                                                       | undefined | The ID for textarea                                                                                                                  |
| name         | string                                                                       | undefined | The name for textarea                                                                                                                |
| placeholder  | string                                                                       | undefined | The content for textarea placeholder                                                                                                 |
| autoComplete | string                                                                       | off       | Define autocomplete attribute for Textarea                                                                                           |
| autoFocus    | bool                                                                         | false     | Define autofocus attribute for Textarea                                                                                              |
| value        | string                                                                       | undefined | The textarea content value                                                                                                           |
| rows         | number                                                                       | 3         | Describe number of rows in textarea                                                                                                  |
| cols         | number                                                                       | undefined | Describe number of columns in textarea                                                                                               |
| minLength    | number                                                                       | undefined | The textarea minimum characters number                                                                                               |
| maxLength    | number                                                                       | undefined | The textarea maximum characters number                                                                                               |
| resize       | oneOf(['auto', 'vertical', 'horizontal', 'both', 'none', 'block', 'inline']) | vertical  | Type of resize textarea                                                                                                              |
| testId       | string                                                                       | TEXTAREA  | Id for automated tests                                                                                                               |
| isDisabled   | bool                                                                         | false     | Tell if the textarea is disabled                                                                                                     |
| isReadOnly   | bool                                                                         | false     | Tell if the textarea is readonly                                                                                                     |
| hasError     | bool                                                                         | false     | Tell if value of textarea is valid                                                                                                   |
| onBlur       | func                                                                         | noop      | Handler to be called when the textarea is blurred                                                                                    |
| onChange     | func                                                                         | noop      | Handler to be called when the textarea changes                                                                                       |
| onFocus      | func                                                                         | noop      | Handler to be called when the textarea is focused                                                                                    |
| onKeyUp      | func                                                                         | noop      | Handler to be called when the key up                                                                                                 |
| onKeyDown    | func                                                                         | noop      | Handler to be called when the key down                                                                                               |

> Props marked with \* are required

## Theme

### Classic

```json
{
  "textareaFontFamily": "'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  "textareaFontSize": "15px",
  "textareaFontStyle": "normal",
  "textareaFontWeight": 400,
  "textareaLetterSpacing": "normal",
  "textareaLineHeight": "24px",
  "textareaWidth": "100%",
  "textareaColor": "#1C2025",
  "textareaColorReadOnly": "#5E6D7A",
  "textareaColorDisabled": "#A4B8D1",
  "textareaPlaceholderColor": "#A4B8D1",
  "textareaBackgroundColor": "#FFF",
  "textareaBackgroundColorDisabled": "#F0F3F7",
  "textareaBackgroundColorReadOnly": "#FFF",
  "textareaBorderColor": "#D1DBE8",
  "textareaBorderColorReadOnly": "#D1DBE8",
  "textareaBorderColorDisabled": "#D1DBE8",
  "textareaBorderColorFocus": "#0376DA",
  "textareaBorderColorError": "#E12D2D",
  "textareaBorderRadius": 0,
  "borderWidth": "1px",
  "textareaPadding": "8px",
  "textareaTransitionTiming": "150ms"
}
```

### Novo

```json
{
  "textareaFontFamily": "Inter, sans-serif",
  "textareaFontSize": "14px",
  "textareaFontStyle": "normal",
  "textareaFontWeight": 400,
  "textareaLetterSpacing": "-0.006em",
  "textareaLineHeight": "20px",
  "textareaWidth": "100%",
  "textareaColor": "#292929",
  "textareaColorReadOnly": "#292929",
  "textareaColorDisabled": "#C2C2C2",
  "textareaPlaceholderColor": "#666666",
  "textareaBackgroundColor": "#F1F1F1",
  "textareaBackgroundColorDisabled": "#F1F1F1",
  "textareaBackgroundColorReadOnly": "#FFFFFF",
  "textareaBorderColor": "#F1F1F1",
  "textareaBorderColorReadOnly": "transparent",
  "textareaBorderColorDisabled": "#F1F1F1",
  "textareaBorderColorFocus": "#246FE5",
  "textareaBorderColorError": "#CB2233",
  "borderWidth": "2px",
  "borderWidthReadOnly": "2px",
  "textareaBorderRadius": "6px",
  "textareaBorderRadiusReadOnly": "6px",
  "textareaPadding": "6px 14px",
  "textareaPaddingReadOnly": "6px 0",
  "textareaTransitionTiming": "150ms"
}
```

### Novo Dark

```json
{
  "textareaFontFamily": "Inter, sans-serif",
  "textareaFontSize": "14px",
  "textareaFontStyle": "normal",
  "textareaFontWeight": 400,
  "textareaLetterSpacing": "-0.006em",
  "textareaLineHeight": "20px",
  "textareaWidth": "100%",
  "textareaColor": "#FFFFFF",
  "textareaColorReadOnly": "#FFFFFF",
  "textareaColorDisabled": "#666666",
  "textareaPlaceholderColor": "#C2C2C2",
  "textareaBackgroundColor": "#2F2E32",
  "textareaBackgroundColorDisabled": "#2F2E32",
  "textareaBackgroundColorReadOnly": "#171719",
  "textareaBorderColor": "#2F2E32",
  "textareaBorderColorReadOnly": "#666666",
  "textareaBorderColorDisabled": "#2F2E32",
  "textareaBorderColorFocus": "#246FE5",
  "textareaBorderColorError": "#D83848",
  "borderWidth": "2px",
  "borderWidthReadOnly": "0 0 1px 0",
  "textareaBorderRadius": "6px",
  "textareaBorderRadiusReadOnly": 0,
  "textareaPadding": "6px 14px",
  "textareaTransitionTiming": "150ms"
}
```

## Available styled components

- TextareaWrapper

### Extend styling

You can extend/override any of the styles by importing the styled components directly.

```js
import { Styled } from '@8x8/oxygen-textarea';
import styled from 'styled-components';
const CustomTextarea = styled(Styled.TextareaWrapper)`
  color: blue;
`;
```
