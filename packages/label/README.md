# 8x8 Oxygen - Label

## Installation

```sh
$ yarn add @8x8/oxygen-label
```

```sh
$ npm install @8x8/oxygen-label
```

## Usage

```js
import Label from '@8x8/oxygen-label';
```

```js
<Label value="Label text" />
```
#### Action link configuration
```js
<Label
    value="Label text"
    actionLabel="Action"
    action="https://www.8x8.com/"
    otherActionProps={{
        isDisabled: true,
    }}
/>
```

## Props

| Name                  | Type                                          | Default   | Description                                                                                                                                                                                                                     |
|-----------------------| --------------------------------------------- | --------- |---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| testId                | string                                        | 'LABEL'   | Label test id                                                                                                                                                                                                                   |
| theme                 | object                                        |           | Label theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants                                                                                               |
| children              | node                                          | null      | Renders element just after value and action                                                                                                                                                                                     |
| className             | string                                        | undefined | Adds css class to parent element                                                                                                                                                                                                |
| style                 | object                                        | undefined | **DEPRECATED** Adds inline styles to parent element                                                                                                                                                                             |
| value                 | string                                        | ''        | Renders label text                                                                                                                                                                                                              |
| action                | oneOfType([func, string])                     | ''        | Defines callback onClick event.<br/><br/>When the props is used as a function then the action link is rendered as the `button` HTML tag, otherwise it's an `a` tag <br/><br/>It's required to use it with the actionLabel props |
| actionLabel           | oneOfType([string, number])                   | ''        | Renders text inside action element. It's required to use it with the action props                                                                                                                                               |
| actionTarget          | oneOf(['_blank', '_parent', '_self', '_top']) | null      | Specifies type of target on action element                                                                                                                                                                                      |
| htmlFor               | string                                        | null      | Specifies which form element a label is bound to                                                                                                                                                                                |
| infoBoxText           | node                                          | undefined | Renders text inside Tooltip                                                                                                                                                                                                     |
| infoBoxShowOn         | oneOf(['click', 'hover'])                     | 'hover'   | Decide what event to use in order to show the tooltip                                                                                                                                                                           |
| infoBoxButtonLabel               | string                                                      | undefined         | Adds accessible aria-label to info button
| isDisabled            | bool                                          | false     | Tell when label is disabled                                                                                                                                                                                                     |
| isRequired            | bool                                          | false     | Tell when required sight is visible                                                                                                                                                                                             |
| shouldWrapText        | bool                                          | false     | Tell when the label and action text should wrap into multilines                                                                                                                                                                 |
| showTooltipOnOverflow | bool                                          | true      | Show action tooltip on label overflow                                                                                                                                                                                           |
| otherActionProps      | object                                        | undefined | Props applied to the Action component. It will be disabled or enabled based on the isDisabled prop value                                                                                                                        |
| infoBoxContainer      | instance of Element                           | undefined | Tooltip content render container (creates portal)                                                                                                                                                                               |

## Themes

You can preview all 3 themes via the theme switcher in the [guideline section](/?path=/story/components-label--01-guideline).

### Classic

This is the default theme.

```json
{
  "fontColor": "#1C2025",
  "fontColorAction": "#0376DA",
  "fontColorActionHover": "#6FB1EA",
  "fontColorActionDisabled": "#6FB1EA",
  "fontColorStarRequired": "#E12D2D",
  "fontFamily": "'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  "fontSize": "15px",
  "fontStretch": "normal",
  "fontWeight": 400,
  "height": "24px",
  "lineHeight": "24px",
  "letterSpacing": "normal",
  "borderSizeFocus": "2px",
  "borderColorFocus": "#0376DA",
  "iconSet": "classic",
  "iconSize": 18,
  "iconColor": "#5E6D7A",
  "iconBackgroundColorHover": "#F1F1F1",
  "iconPadding": "2px",
  "iconMarginLeft": "8px",
  "actionLinkPaddingHorizontal": "2px",
  "actionLinkPaddingVertical": "4px",
  "tooltip": {
    // Extends tooltip theme properties
  }
}
```

### Novo

This is the new Novo theme. To use it you'll need to import it and apply it via
config or directly via the `theme` props.

```js
import { set } from '@8x8/oxygen-config';
import { labelNovo, labelNovoDark } from '@8x8/oxygen-constants';

// Novo theme
set({
  label: labelNovo,
});

// Novo Dark theme
set({
  label: labelNovoDark,
});
```

Below are the values for the Novo themes. Use this for reference, you shouldn't
need the values directly.

#### Novo

```json
{
  "fontColor": "#292929",
  "fontColorAction": "#0056E0",
  "fontColorActionDisabled": "#C2C2C2",
  "fontColorActionHover": "#246FE5",
  "fontColorStarRequired": "#CB2233",
  "fontFamily": "Inter, sans-serif",
  "fontSize": "14px",
  "fontStretch": "normal",
  "fontWeight": 400,
  "height": "24px",
  "letterSpacing": "normal",
  "lineHeight": "24px",
  "iconColor": "#292929",
  "iconMarginLeft": "8px",
  "iconSize": 16,
  "iconSet": "novo",
  "iconBackgroundColorHover": "#F1F1F1",
  "borderSizeFocus": "2px",
  "borderColorFocus": "#0056E0",
  "actionLinkPadding": "4px",
  "iconPadding": "4px",
}
```

#### Novo dark

```json
{
  "fontColor": "#FFFFFF",
  "fontColorAction": "#4687ED",
  "fontColorActionDisabled": "#666666",
  "fontColorActionHover": "#99BBF3",
  "fontColorStarRequired": "#D83848",
  "fontFamily": "Inter, sans-serif",
  "fontSize": "14px",
  "fontStretch": "normal",
  "fontWeight": 400,
  "height": "24px",
  "letterSpacing": "normal",
  "lineHeight": "24px",
  "iconColor": "#FFFFFF",
  "iconMarginLeft": "8px",
  "iconSize": 16,
  "iconSet": "novo",
  "iconBackgroundColorHover": "#3D3D3D",
  "borderSizeFocus": "2px",
  "borderColorFocus": "#0056E0",
  "actionLinkPadding": "4px",
  "iconPadding": "4px",
}
```

If you need to customize the Novo theme it's easy to spread the imported theme
and overwrite _only_ what you need to customize:

```js
import { set } from '@8x8/oxygen-config';
import { labelNovoDark } from '@8x8/oxygen-constants';

set({
  label: {
    ...labelNovoDark,
    fontSize: '20px',
  },
});
```
