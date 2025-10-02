# 8x8 Oxygen - Typography

## Installation

```sh
$ yarn add @8x8/oxygen-typography
```

```sh
$ npm install @8x8/oxygen-typography
```

## Usage
### Import
```jsx
import Typography from '@8x8/oxygen-typography';
const App = () => <Typography>Lorem ipsum</Typography>;
```

## Props
|Name|Type|Default|Description|
|---|---|---|---|
|theme|object||Theme object|
|children|node|null|Rendered elements|
|color|string||Color|
|weight|string||Predefined font weights(default, attention, max) or pass any possible CSS value|
|display|string||`display` CSS value|
|shouldWrap|boolean|true|Define if text should wrap or truncate with ellipsis|
|align|string||`text-align` CSS value|
|as|string||HTML element type|
|isParagraph|boolean|false|Add extra bottom padding|
|size|string||Predefined font sizes(small, default, medium, large, attention, max) or pass any possible CSS value|
|testId|string|TYPOGRAPHY|Test id|

>Props marked with \* are required

## More customization
You can extend the styling by wrapping `Typography` component with `styled` from styled-components.

```jsx
const FancyButton = styled(Typography)`
  text-decoration: underline;
  letter-spacing: 5px;
  background-color: #3a50d9;
  color: #e0eff2;
  text-shadow: -4px 3px 0 #3a50d9, -14px 7px 0 #0a0e27;
`;
<FancyButton>Text</FancyButton>
```

## Theme
|Property name|Value|
|---|---|
|typographyColor|#1C2025|
|typographyFontSize|15px|
|typographyPaddingBottomParagraph|8px|
|typographyFontWeight|400|
