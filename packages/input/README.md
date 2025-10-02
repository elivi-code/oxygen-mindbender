# 8x8 Oxygen - Input

## Installation

```sh
$ yarn add @8x8/oxygen-input
```

```sh
$ npm install @8x8/oxygen-input
```

## Usage

```js
import Input from '@8x8/oxygen-input';
```

```js
<Input type="text" />
```

## Props

| Name            | Type                                                                 | Default   | Description                                                                                                                       |
|-----------------|----------------------------------------------------------------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------|
| theme           | object                                                               |           | Input theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants |
| id              | string                                                               | undefined | Define id attribute for input element                                                                                             |
| name            | string                                                               | undefined | Define name attribute for input element                                                                                           |
| value           | oneOfType(['string', 'number']                                       | undefined | Value/initial value of the input                                                                                                  |
| placeholder     | string                                                               | ''        | Render placeholder text inside input                                                                                              |
| autoComplete    | string                                                               | undefined | Define autocomplete attribute for Input                                                                                           |
| autoFocus       | bool                                                                 | false     | Define autofocus attribute for Input                                                                                              |
| type            | oneOf(['date', 'email', 'number', 'password', 'tel', 'text', 'url']) | 'text'    | Define type of Input                                                                                                              |
| size            | oneOf(['small', 'default', 'large'])                                 | 'default' | Define Input size                                                                                                                 |
| prefix          | string                                                               | ''        | Show text in front of input                                                                                                       |
| suffix          | string                                                               | ''        | Show text just after input                                                                                                        |
| iconLeft        | oneOfType([func, node, element])                                     | null      | Show icon inside input on the left side                                                                                           |
| iconRight       | oneOfType([func, node, element])                                     | null      | Show icon inside input on the right side                                                                                          |
| focus           | bool                                                                 | false     | Tell when Input is focus                                                                                                          |
| fixed           | bool                                                                 | false     | Render input as pure text                                                                                                         |
| hasError        | bool                                                                 | false     | Tell when Input has error                                                                                                         |
| isDisabled      | bool                                                                 | false     | Tell when Input is disabled                                                                                                       |
| isReadOnly      | bool                                                                 | false     | Tell when Input is read only                                                                                                      |
| isRequired      | bool                                                                 | false     | Tell when Input is required                                                                                                       |
| fullWidth       | bool                                                                 | true      | Tell when Input is stretched                                                                                                      |
| max             | number                                                               | undefined | Define maximum value for input type number                                                                                        |
| min             | number                                                               | undefined | Define minimum value for input type number                                                                                        |
| maxLength       | number                                                               | undefined | Define maximum length for input value                                                                                             |
| onChange        | func                                                                 | noop      | Callback on input value change                                                                                                    |
| onKeyUp         | func                                                                 | noop      | Standard input onkeyup event                                                                                                      |
| onKeyDown       | func                                                                 | noop      | Standard input onkeydown event                                                                                                    |
| forwardedRef    | oneOfType([object, func])                                            | null      | Forwarded ref                                                                                                                     |
| inputRef        | oneOfType([object, func])                                            | null      | Ref for the input field                                                                                                           |
| testId          | string                                                               | 'INPUT'   | Input test id                                                                                                                     |
| autoSuffixWidth | bool                                                                 | false     | Allows suffix to resize                                                                                                           |
| autoPrefixWidth | bool                                                                 | false     | Allows prefix to resize                                                                                                           |

## Themes

You can preview all 3 themes via the theme switcher in the [guideline section](/?path=/story/components-input--01-guidelines).

### Classic

```json
{
  "backgroundColor": "#FFF",
  "backgroundColorDisabled": "#F0F3F7",
  "backgroundColorFixed": "transparent",
  "backgroundColorReadOnly": "#FFF",
  "backgroundColorSemanticBlock": "#F0F3F7",
  "borderColor": "#D1DBE8",
  "borderColorError": "#E12D2D",
  "borderColorFixed": "transparent",
  "borderColorFocused": "#0376DA",
  "borderColorReadOnly": "#D1DBE8",
  "borderColorSemanticBlock": "#A4B8D1",
  "borderRadius": 0,
  "borderRadiusReadOnly": 0,
  "borderStyle": "solid",
  "borderStyleDefaultSemanticBlock": "solid",
  "borderTransitionTiming": "150ms",
  "borderWidth": "1px",
  "borderWidthReadOnly": "1px",
  "borderWidthSemanticBlock": "1px",
  "color": "#1C2025",
  "colorDisabled": "#A4B8D1",
  "colorFixed": "#5E6D7A",
  "colorIcon": "#5E6D7A",
  "colorPlaceholder": "#A4B8D1",
  "colorReadOnly": "#1C2025",
  "colorSemanticBlock": "#5E6D7A",
  "fontFamily": "'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  "fontSize": "15px",
  "fontStretch": "normal",
  "fontStyle": "normal",
  "fontWeight": 400,
  "height": "40px",
  "heightLarge": "48px",
  "heightSmall": "32px",
  "horizontalSpacing": "8px",
  "iconHorizontalSpacing": "8px",
  "iconSize": 24,
  "letterSpacing": "normal",
  "lineHeight": "24px",
  "minWidth": "40px",
  "prefixSuffixHorizontalSpacing": "8px",
  "prefixSuffixInsideInput": false,
  "verticalSpacing": "4px",
  "width": "296px",
  "widthSemanticBlock": "60px"
}
```

### Novo

This is the new Novo theme. To use it you'll need to import it and apply it via
config or directly via the `theme` props.

```js
import { set } from '@8x8/oxygen-config';
import { inputNovo, inputNovoDark } from '@8x8/oxygen-constants';

// Novo theme
set({
  input: inputNovo,
});

// Novo Dark theme
set({
  input: inputNovoDark,
});
```

Below are the values for the Novo themes. Use this for reference, you shouldn't
need the values directly.

#### Novo

```json
{
  "backgroundColor": "#F1F1F1",
  "backgroundColorDisabled": "#F1F1F1",
  "backgroundColorFixed": "transparent",
  "backgroundColorReadOnly": "#FFFFFF",
  "backgroundColorSemanticBlock": "#F1F1F1",
  "borderColor": "#F1F1F1",
  "borderColorError": "#CB2233",
  "borderColorFixed": "transparent",
  "borderColorFocused": "#246FE5",
  "borderColorReadOnly": "transparent",
  "borderColorSemanticBlock": "#F1F1F1",
  "borderRadius": "6px",
  "borderRadiusReadOnly": "0",
  "borderStyle": "solid",
  "borderStyleDefaultSemanticBlock": "solid",
  "borderTransitionTiming": "150ms",
  "borderWidth": "2px",
  "borderWidthReadOnly": "2px",
  "borderWidthSemanticBlock": "2px",
  "color": "#292929",
  "colorDisabled": "#C2C2C2",
  "colorFixed": "#292929",
  "colorIcon": "#292929",
  "colorPlaceholder": "#666666",
  "colorReadOnly": "#292929",
  "colorSemanticBlock": "#292929",
  "fontFamily": "Inter, sans-serif",
  "fontSize": "14px",
  "fontStretch": "normal",
  "fontStyle": "normal",
  "fontWeight": 400,
  "height": "40px",
  "heightLarge": "48px",
  "heightSmall": "32px",
  "horizontalSpacing": "14px",
  "horizontalSpacingReadOnly": "0",
  "iconHorizontalSpacing": "3px",
  "iconSize": 20,
  "letterSpacing": "-0.006em",
  "lineHeight": "20px",
  "minWidth": "40px",
  "prefixSuffixHorizontalSpacing": "10px",
  "prefixSuffixInsideInput": true,
  "verticalSpacing": "2px 0 0",
  "width": "320px",
  "widthSemanticBlock": "60px",
  "borderColorDisabled": "#F1F1F1"
}
```

#### Novo Dark

```json
{
  "backgroundColor": "#2F2E32",
  "backgroundColorDisabled": "#2F2E32",
  "backgroundColorReadOnly": "#171719",
  "backgroundColorFixed": "transparent",
  "backgroundColorSemanticBlock": "#2F2E32",
  "borderColor": "#2F2E32",
  "borderColorDisabled": "#2F2E32",
  "borderColorError": "#D83848",
  "borderColorFixed": "transparent",
  "borderColorFocused": "#246FE5",
  "borderColorReadOnly": "#666666",
  "borderColorSemanticBlock": "#2F2E32",
  "borderRadius": "6px",
  "borderRadiusReadOnly": "0",
  "borderStyle": "solid",
  "borderStyleDefaultSemanticBlock": "solid",
  "borderTransitionTiming": "150ms",
  "borderWidth": "2px",
  "borderWidthReadOnly": "0 0 1px 0",
  "borderWidthSemanticBlock": "2px",
  "color": "#FFFFFF",
  "colorDisabled": "#666666",
  "colorFixed": "#FFFFFF",
  "colorIcon": "#FFFFFF",
  "colorPlaceholder": "#C2C2C2",
  "colorReadOnly": "#FFFFFF",
  "colorSemanticBlock": "#FFFFFF",
  "fontFamily": "Inter, sans-serif",
  "fontSize": "14px",
  "fontStretch": "normal",
  "fontStyle": "normal",
  "fontWeight": 400,
  "height": "40px",
  "heightLarge": "48px",
  "heightSmall": "32px",
  "horizontalSpacing": "14px",
  "iconHorizontalSpacing": "3px",
  "iconSize": 20,
  "letterSpacing": "-0.006em",
  "lineHeight": "20px",
  "minWidth": "40px",
  "prefixSuffixHorizontalSpacing": "10px",
  "prefixSuffixInsideInput": true,
  "verticalSpacing": "2px 0 0",
  "width": "320px",
  "widthSemanticBlock": "60px",
}
```

If you need to customize the Novo theme it's easy to spread the imported theme
and overwrite _only_ what you need to customize:

```js
import { set } from '@8x8/oxygen-config';
import { inputNovoDark } from '@8x8/oxygen-constants';

set({
  input: {
    ...inputNovoDark,
    borderColorError: 'red',
  },
});
```
