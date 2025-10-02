# 8x8 Oxygen - TextField

## Installation

```sh
$ yarn add @8x8/oxygen-text-field
```

```sh
$ npm install @8x8/oxygen-text-field
```

## Usage

```js
import TextField from '@8x8/oxygen-text-field';
```

```js
<TextField label="Label text" description="Description text" />
```

## Props

| Name             | Type                                                          | Default      | Description                                                                                                                       |
| ---------------- | ------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| theme            | object                                                        |              | Input theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants |
| id               | string                                                        | undefined    | Define id attribute for input element                                                                                             |
| name             | string                                                        | undefined    | Define name attribute for input element                                                                                           |
| value            | string                                                        | undefined    | Value/initial value of the input                                                                                                  |
| placeholder      | string                                                        | ''           | Render placeholder text inside input                                                                                              |
| type             | oneOf(['date', 'email', 'number', 'password', 'text', 'url']) | 'text'       | Define type of Input                                                                                                              |
| size             | oneOf(['small', 'default'])                                   | 'default'    | Define Input size                                                                                                                 |
| prefix           | `React.node`                                                  | ''           | Show text in front of input                                                                                                       |
| suffix           | `React.node`                                                  | ''           | Show text just after input                                                                                                        |
| iconLeft         | oneOfType([func, node, element])                              | null         | Show icon inside input on the left side                                                                                           |
| iconRight        | oneOfType([func, node, element])                              | null         | Show icon inside input on the right side                                                                                          |
| label            | string                                                        | ''           | Renders label text                                                                                                                |
| labelOrientation | oneOf(['row', 'column'])                                      | 'column'     | Tell where label is render: top or before Input                                                                                   |
| action           | oneOfType([func, string])                                     | ''           | Defines callback onClick event on label action                                                                                    |
| description      | `React.node`                                                  | ''           | Renders text just below Input.                                                                                                    |
| actionLabel      | oneOfType([string, number])                                   | ''           | Renders text inside action element                                                                                                |
| actionTarget     | oneOf(['_blank', '_parent', '_self', '_top'])                 | null         | Specifies type of target on action element                                                                                        |
| infoBoxText      | node                                                          | undefined    | Renders text inside Tooltip on Label Info Box icon                                                                                |
| infoBoxButtonLabel               | string                                                      | undefined         | Adds accessible aria-label to info button
| focus            | bool                                                          | false        | Tell when Input is focus                                                                                                          |
| fixed            | bool                                                          | false        | Render input as pure text                                                                                                         |
| hasError         | bool                                                          | false        | Tell when Input has error                                                                                                         |
| fullWidth        | bool                                                          | false        | Tell when Input is stretched                                                                                                      |
| isDisabled       | bool                                                          | false        | Tell when Input is disabled                                                                                                       |
| isReadOnly       | bool                                                          | false        | Tell when Input is read only                                                                                                      |
| isRequired       | bool                                                          | false        | Tell when required sign is visible                                                                                                |
| actionProps      | object                                                        | undefined    | Props applied to the Action component.<br />It will be disabled or enabled based on the isDisabled prop value.                    |
| labelProps       | object                                                        | undefined    | Props pass into Label component                                                                                                   |
| otherInputProps  | object                                                        | undefined    | Props pass into Input component                                                                                                   |
| otherActionProps | object                                                        | undefined    | _Deprecated_. Use `inputProps`                                                                                                    |
| otherLabelProps  | object                                                        | undefined    | _Deprecated_. Use `actionProps`                                                                                                   |
| inputProps       | object                                                        | undefined    | _Deprecated_. Use `labelProps`                                                                                                    |
| testId           | string                                                        | 'TEXT_FIELD' | Text field testId                                                                                                                 |
| onKeyUp          | func                                                          | noop         | Standard input onkeyup event                                                                                                      |
| onChange         | func                                                          | noop         | Callback when the input change                                                                                                    |
| onKeyDown        | func                                                          | noop         | Standard input onkeydown event                                                                                                    |

## Themes

You can preview all 3 themes via the theme switcher in the [guideline section](/?path=/story/components-textfield--01-guideline).

### Classic

```json
{
  "input": {}, // Extends input theme properties
  "label": {
    "labelPadding": "0 8px 0 0",
    "labelMinWidth": "initial"
  },
  "descriptionFontFamily": "Nunito, Helvetica Neue, Helvetica, Arial, sans-serif",
  "descriptionFontSize": "13px",
  "descriptionFontStyle": "normal",
  "descriptionFontWeight": 400,
  "descriptionLineHeight": 1.6
}
```

### Novo

This is the new Novo theme. To use it you'll need to import it and apply it via
config or directly via the `theme` props.

```js
import { set } from '@8x8/oxygen-config';
import { textFieldNovo, textFieldNovoDark } from '@8x8/oxygen-constants';

// Novo theme
set({
  textField: textFieldNovo,
});

// Novo Dark theme
set({
  textField: textFieldNovoDark,
});
```

Below are the values for the Novo themes. Use this for reference, you shouldn't
need the values directly.

#### Novo

```json
{
  "label": {
    "labelPadding": "0 8px 0 0",
    "labelMinWidth": "initial"
  },
  "descriptionFontFamily": "Inter, sans-serif",
  "descriptionFontSize": "12px",
  "descriptionFontStyle": "normal",
  "descriptionFontWeight": 400,
  "descriptionLineHeight": "16px",
  "descriptionColor": "#666666"
}
```

#### Novo Dark

```json
{
  "label": {
    "labelPadding": "0 8px 0 0",
    "labelMinWidth": "initial"
  },
  "descriptionFontFamily": "Inter, sans-serif",
  "descriptionFontSize": "12px",
  "descriptionFontStyle": "normal",
  "descriptionFontWeight": 400,
  "descriptionLineHeight": "16px",
  "descriptionColor": "#C2C2C2"
}
```
