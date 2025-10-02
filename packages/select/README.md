# 8x8 Oxygen - Select

## Installation

```sh
$ yarn add @8x8/oxygen-select
```

```sh
$ npm install @8x8/oxygen-select
```

## Usage

```js
import Select, {
  ClearIndicator,
  DropdownIndicator,
  MultiValue,
  Option,
  ValueContainer,
  components,
} from '@8x8/oxygen-select';
```

The `components` object contains `react-select` default components that can be extended in order to customise the look/behavior of the `Select`.

`ClearIndicator`, `DropdownIndicator`, `Option`, `ValueContainer` are custom components made for `oxygen-select`, using `react-select` default components.
`MultiValue` is a custom component made for `oxygen-select`, but it does not extend `react-select` default components.

To clear/reset selected value it is necessary to pass as value `null`

See https://react-select.com/components for more information about customising `react-select` components.

```js
<Select
  iconLeft={iconLeft}
  size="default"
  labelValue="Dropdown label"
  onChange={onChange}
  hasCheckbox={false}
  hasIcons={false}
  hasShortMultiDisplay={false}
  hasError={false}
  isClearable={true}
  isDisabled={false}
  isMulti={false}
  components={components}
  options={options}
/>
```

## Available styled components

- AvatarIcon
- CheckboxWrapper
- CloseIcon
- IconLeftWrapper
- OptionWrapper
- SelectContainer
- ShortMultiDisplay
- ValueWrapper

## Options

The `options` array can contain two types of objects:

- header

```ts
interface SelectOptionHeader {
  label: string;
  options?: ReadonlyArray<SelectOption>;
}
```

- item

```ts
interface SelectOption {
  label: string;
  value?: any;
  isDisabled?: boolean;
  iconProps?: Partial<React.ComponentProps<Avatar>>;
}
```

### Example

```js
const options = [
  {
    value: 'First',
    label: 'First Option',
    isDisabled: true,
    iconProps: { ...iconProps },
  },
  {
    value: 'Second',
    label: 'Second Option',
    iconProps: { ...iconProps },
  },
  {
    label: 'Header',
    options: [
      {
        value: 'Third',
        label: 'Third Option',
        iconProps: { ...iconProps },
      },
    ],
  },
];
```

For the values that can be passed as iconProps see Avatar component props

## Props

| Name                   | Type                                        | Default             | Description                                                                                                                                                          |
|------------------------| ------------------------------------------- |---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| action                 | oneOfType([func, string])                   | ''                  | Defines callback onClick event                                                                                                                                       |
| actionLabel            | oneOfType([string, number])                 | ''                  | Renders text inside action element                                                                                                                                   |
| components             | object                                      | {}                  | Object containing custom React components that override already existing components in the Select. See https://react-select.com/components                           |
| forwardedRef           | oneOfType([object, func])                   | null                | Select component ref                                                                                                                                                 |
| hasCheckbox            | bool                                        | false               | Tell when options have checkboxes (enables multi select)                                                                                                             |
| hasError               | bool                                        | false               | Tell when Select has error                                                                                                                                           |
| hasIcons               | bool                                        | false               | Tell when options have icons                                                                                                                                         |
| hasShortMultiDisplay   | bool                                        | false               | Only together with `isMulti`. Tell when multiple selected options are displayed in short mode                                                                        |
| hideSelectedOptions    | bool                                        | false               | Tell when the selected options should be removed from the menu                                                                                                       |
| iconLeft               | oneOf(func, node)                           | null                | Icon that will be rendered on the left side of the input                                                                                                             |
| infoBoxText            | string                                      | 'Dropdown info box' | Renders text inside Tooltip                                                                                                                                          |
| infoBoxButtonLabel     | string                                      |                     | undefined           | Adds accessible aria-label to info button                                                                                                      |
| isAsync                | bool                                        | false               | Use async data loading via `loadOptions` (instead of `options`). See https://react-select.com/async                                                                  |
| isClearable            | bool                                        | true                | Tell when input can be cleared. If specified, renders the clear indicator                                                                                            |
| isDisabled             | bool                                        | false               | Tell when the input is disabled                                                                                                                                      |
| isMulti                | bool                                        | false               | Tell when multiple options can be selected                                                                                                                           |
| isRequired             | bool                                        | false               | Tell when required sight is visible                                                                                                                                  |
| labelValue             | string                                      | 'Dropdown label'    | Renders label text                                                                                                                                                   |
| shouldWrapLabel        | bool                                        | false               | Tell when the label and action text should wrap into multilines                                                                                                      |
| loadOptions            | func                                        |                     | Use to provide data _instead_ of `options` when `isAsync` is used                                                                                                    |
| multipleSelectMaxRows  | number                                      | 1                   | Only together with `isMulti`. Tells how many rows of chips to render before allowing a scrollbar. The height of the Select will grow up until that number of rows    |
| noOptionsMessage       | func                                        | 'No options...'     | Function returns a text or component                                                                                                                                 |
| onBlur                 | func                                        | noop                | Callback executed when the select is closed                                                                                                                          |
| onChange               | func                                        | noop                | Callback executed when the select is changed                                                                                                                         |
| otherActionProps       | object                                      | {}                  | Object containing props applied to the `Action` component. It will be disabled or enabled based on the isDisabled prop value. It will be passed to `Label` component |
| options                | array                                       | _required_          | The list of options. Not required in case of `isAsync` — provide `loadOptions` instead                                                                            |
| placeholder            | node                                        | 'Select...'         | Renders text as a HTML placeholder                                                                                                                                   |
| size                   | oneOf(['default', 'large', 'small'])        | 'default'           | The size of the input box                                                                                                                                            |
| testId                 | string                                      | 'SELECT'            | Test ID DOM attribute value                                                                                                                                          |
| isLoading              | bool                                        | false               | This is a passthrough prop from https://react-select.com/props which specifies if the loader should be displayed -                                                   |
| loadingMessage         | string                                      | 'Loading...'        | specifies the loading message                                                                                                                                        |
| theme                  | object                                      |                     | Theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants                                          |
| inputProps             | React.InputHTMLAttributes<HTMLInputElement> | {}                  | Provides props for the Input component e.g. autoComplete                                                                                                             |

For more information about overriding components see react-select documentation: https://react-select.com/components

## Rendering large data-sets with virtual scrolling

Rendering a large number of `options` has a severe performance penalty in `react-select`. To address this a `VirtualMenuList` list component is exported which is an implementation of the `react-select` `MenuList` component

### Example

```javascript
import Select, { VirtualMenuList } from '@8x8/oxygen-select';

...

<Select
  options={[...]}
  components={{
    MenuList: VirtualMenuList,
  }}
/>
```

## Themes

You can preview all 3 themes via the theme switcher in the [guideline section](/?path=/story/components-select--01-guidelines).

### Classic

{
avatarPaddingRight: '8px',
backgroundColor: '#FFF',
backgroundColorDisabled: '#F0F3F7',
backgroundColorHover: '#FFF',
baseUnit: 0,
borderColor: '#D1DBE8',
borderColorDisabled: '#D1DBE8',
borderColorError: '#E12D2D',
borderColorFocus: '#0376DA',
borderColorHover: '#D1DBE8',
borderRadius: 0,
borderWidth: '1px',
checkboxPaddingRight: '8px',
clearIconColor: '#A4B8D1',
clearIconFocusedColor: '#5E6D7A',
clearIconFocusedHoverColor: '#2A3A4B',
clearIconHoverColor: '#5E6D7A',
controlFocusBoxShadow: 'none',
dropdownIndicatorColor: '#5E6D7A',
dropdownIndicatorColorDisabled: '#5E6D7A',
fontFamily: "'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif",
fontSize: '15px',
headingBorderColor: '#D1DBE8',
headingBorderSize: '1px',
headingBorderStyle: 'solid',
headingMargin: 0,
headingPadding: '8px',
headingTextColor: '#2A3A4B',
headingTextFontSize: '15px',
headingTextFontWeight: 600,
iconHeight: '24px',
iconMargin: 0,
iconPaddingRight: '8px',
iconSize: 24,
indicatorsContainerPaddingHorizontal: '8px',
inputBoxSizeDefault: '40px',
inputBoxSizeLarge: '48px',
inputBoxSizeSmall: '32px',
inputColor: '#2A3A4B',
labelFontWeight: 600,
lineHeight: '24px',
marginTop: '4px',
menuBackgroundColor: '#FFF',
menuBorderColor: '#D1DBE8',
menuBorderSize: '1px',
menuBorderStyle: 'solid',
menuBoxShadowColor: 'rgba(28,32,37,0.1)',
menuBoxShadowSize: '0 2px 2px 0',
menuGutter: 1,
menuZindex: 1000,
multiValueChipPaddingVerticalDefault: '6px',
multiValueChipPaddingVerticalLarge: '8px',
multiValueChipPaddingVerticalSmall: '2px',
noOptionTextColor: '#A4B8D1',
noOptionTextFontSize: '15px',
optionActiveBackgroundColor: '#D1DBE8',
optionHoveredBackgroundColor: '#F0F3F7',
optionIconColor: '#2A3A4B',
optionPaddingHorizontal: '8px',
optionPaddingVertical: '4px',
optionSelectedBackground: 'color',
optionTextColor: '#2A3A4B',
optionTextFontSize: '15px',
optionTextFontWeightSelected: 600,
optionTextSelectedColor: '#0376DA',
placeholderIconColor: '#A4B8D1',
placeholderTextColor: '#A4B8D1',
placeholderTextColorDisabled: '#A4B8D1',
selectedOptionTextColor: '#5E6D7A',
selectedOptionTextColorDisabled: '#A4B8D1',
shortMultiDisplayPadding: '4px',
valueContainerPadding: '0 8px'
}

````

### Novo

This is the new Novo theme. To use it you'll need to import it and apply it via
config or directly via the `theme` props.

```js
import { set } from '@8x8/oxygen-config';
import { selectNovo, selectNovoDark } from '@8x8/oxygen-constants';

// Novo theme
set({
  select: selectNovo,
});

// Novo Dark theme
set({
  select: selectNovoDark,
});
````

Below are the values for the Novo themes. Use this for reference, you shouldn't
need the values directly.

#### Novo

```json
{
  "avatarPaddingRight": "8px",
  "backgroundColor": "#F1F1F1",
  "backgroundColorDisabled": "#F1F1F1",
  "backgroundColorHover": "#F1F1F1",
  "baseUnit": 0,
  "borderColor": "#F1F1F1",
  "borderColorDisabled": "#F1F1F1",
  "borderColorError": "#CB2233",
  "borderColorFocus": "#0056E0",
  "borderColorHover": "#F1F1F1",
  "borderRadius": "6px",
  "borderWidth": "2px",
  "checkboxPaddingRight": "8px",
  "clearIconColor": "#292929",
  "clearIconFocusedColor": "#292929",
  "clearIconFocusedHoverColor": "#2A3A4B",
  "clearIconHoverColor": "#5E6D7A",
  "controlFocusBoxShadow": "none",
  "dropdownIndicatorColor": "#292929",
  "dropdownIndicatorColorDisabled": "#C2C2C2",
  "fontFamily": "Inter, sans-serif",
  "fontSize": "14px",
  "headingBorderColor": "#D1DBE8",
  "headingBorderSize": "0",
  "headingBorderStyle": "solid",
  "headingMargin": "0",
  "headingPadding": "8px 16px",
  "headingTextColor": "#292929",
  "headingTextFontSize": "14px",
  "headingTextFontWeight": 600,
  "iconHeight": "28px",
  "iconMargin": "0 6px 0 -6px",
  "iconPaddingRight": "0",
  "iconSize": 20,
  "indicatorsContainerPaddingHorizontal": "8px",
  "inputBoxSizeDefault": "40px",
  "inputBoxSizeLarge": "48px",
  "inputBoxSizeSmall": "28px",
  "inputColor": "#292929",
  "labelFontWeight": 400,
  "lineHeight": "20px",
  "marginTop": "4px",
  "menuBackgroundColor": "#FFFFFF",
  "menuBorderColor": "#0056E0",
  "menuBorderSize": "2px",
  "menuBorderStyle": "solid",
  "menuBoxShadowColor": null,
  "menuBoxShadowSize": 0,
  "menuGutter": 1,
  "menuZindex": 1000,
  "multiValueChipPaddingVerticalDefault": "2px",
  "multiValueChipPaddingVerticalLarge": "4px",
  "multiValueChipPaddingVerticalSmall": "0px",
  "noOptionTextColor": "#292929",
  "noOptionTextFontSize": "14px",
  "optionActiveBackgroundColor": "",
  "optionHoveredBackgroundColor": "#F1F1F1",
  "optionIconColor": "#292929",
  "optionPaddingHorizontal": "16px",
  "optionPaddingVertical": "8px",
  "optionSelectedBackground": "icon",
  "optionTextColor": "#292929",
  "optionTextFontSize": "14px",
  "optionTextFontWeightSelected": 400,
  "optionTextSelectedColor": "#292929",
  "placeholderIconColor": "#292929",
  "placeholderTextColor": "#666666",
  "placeholderTextColorDisabled": "#C2C2C2",
  "selectedOptionTextColor": "#292929",
  "selectedOptionTextColorDisabled": "#C2C2C2",
  "shortMultiDisplayPadding": "4px",
  "valueContainerPadding": "0 0 0 16px",
  "iconSet": "novo"
}
```

#### Novo Dark

```json
{
  "avatarPaddingRight": "8px",
  "backgroundColor": "#2F2E32",
  "backgroundColorDisabled": "#2F2E32",
  "backgroundColorHover": "#2F2E32",
  "baseUnit": 0,
  "borderColor": "#2F2E32",
  "borderColorDisabled": "#2F2E32",
  "borderColorError": "#D83848",
  "borderColorFocus": "#246FE5",
  "borderColorHover": "#2F2E32",
  "borderRadius": "6px",
  "borderWidth": "2px",
  "checkboxPaddingRight": "8px",
  "clearIconColor": "#FFFFFF",
  "clearIconFocusedColor": "#FFFFFF",
  "clearIconFocusedHoverColor": "#2A3A4B",
  "clearIconHoverColor": "#5E6D7A",
  "controlFocusBoxShadow": "none",
  "dropdownIndicatorColor": "#FFFFFF",
  "dropdownIndicatorColorDisabled": "#666666",
  "fontFamily": "Inter, sans-serif",
  "fontSize": "14px",
  "headingBorderColor": "#D1DBE8",
  "headingBorderSize": "0",
  "headingBorderStyle": "solid",
  "headingMargin": "0",
  "headingPadding": "8px 16px",
  "headingTextColor": "#FFFFFF",
  "headingTextFontSize": "14px",
  "headingTextFontWeight": 600,
  "iconHeight": "28px",
  "iconMargin": "0 6px 0 -6px",
  "iconPaddingRight": "0",
  "iconSize": 20,
  "indicatorsContainerPaddingHorizontal": "8px",
  "inputBoxSizeDefault": "40px",
  "inputBoxSizeLarge": "48px",
  "inputBoxSizeSmall": "28px",
  "inputColor": "#FFFFFF",
  "labelFontWeight": 400,
  "lineHeight": "20px",
  "marginTop": "4px",
  "menuBackgroundColor": "#171719",
  "menuBorderColor": "#246FE5",
  "menuBorderSize": "2px",
  "menuBorderStyle": "solid",
  "menuBoxShadowColor": null,
  "menuBoxShadowSize": 0,
  "menuGutter": 1,
  "menuZindex": 1000,
  "multiValueChipPaddingVerticalDefault": "2px",
  "multiValueChipPaddingVerticalLarge": "4px",
  "multiValueChipPaddingVerticalSmall": "0px",
  "noOptionTextColor": "#FFFFFF",
  "noOptionTextFontSize": "14px",
  "optionActiveBackgroundColor": "",
  "optionHoveredBackgroundColor": "#3D3D3D",
  "optionIconColor": "#FFFFFF",
  "optionPaddingHorizontal": "16px",
  "optionPaddingVertical": "8px",
  "optionSelectedBackground": "icon",
  "optionTextColor": "#FFFFFF",
  "optionTextFontSize": "14px",
  "optionTextFontWeightSelected": 400,
  "optionTextSelectedColor": "#FFFFFF",
  "placeholderIconColor": "#FFFFFF",
  "placeholderTextColor": "#C2C2C2",
  "placeholderTextColorDisabled": "#666666",
  "selectedOptionTextColor": "#FFFFFF",
  "selectedOptionTextColorDisabled": "#666666",
  "shortMultiDisplayPadding": "4px",
  "valueContainerPadding": "0 0 0 16px",
  "iconSet": "novo"
}
```

If you need to customize the Novo theme it's easy to spread the imported theme
and overwrite _only_ what you need to customize:

```js
import { set } from '@8x8/oxygen-config';
import { selectNovoDark } from '@8x8/oxygen-constants';

set({
  select: {
    ...selectNovoDark,
    fontSize: '20px',
  },
});
```

## Working with redux-form

There is a known issue with react-select and redux-form.
Calling redux-form field blur without any params does not cause blur to change the value of the field,
otherwise, it sets the value of the field to `undefined`, leading to the field being cleared on blur.
https://github.com/erikras/redux-form/issues/2768

Solution:

```js
const handleOnBlur = () => {
  inputProps.onBlur();
};
```

```js
<Select {...inputProps} onBlur={handleOnBlur} />
```
