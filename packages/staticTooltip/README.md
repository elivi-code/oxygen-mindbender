# 8x8 Oxygen - Static Tooltip


## Installation

```sh
$ yarn add @8x8/oxygen-static-tooltip
```

```sh
$ npm install @8x8/oxygen-static-tooltip
```

## Usage
Tooltip without any positioning logic/information. It acts as a normal div, it does not require any ref to an anchor or something similar.
```js
import StaticTooltip from '@8x8/oxygen-static-tooltip';
```

```js
 <StaticTooltip theme={theme}>Lorem ipsum</StaticTooltip>
```

## Props

|Name|Type|Default|Description|
|---|---|---|---|
|theme|object| |Theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants|
|renderArrow|function|undefined|Render props that should render an Arrow component when called|
|children*|

>Props marked with \* are required

## Theme

### Classic

```json
{
  "backgroundColor": "#F0F3F7",
  "borderWidth": "1px",
  "borderStyle": "solid",
  "borderColor": "#D1DBE8",
  "borderRadius": "2px",
  "boxShadow": "1px 1px 0 rgba(28,32,37,0.1)",
  "color": "'#1C2025'",
  "fontSize": "13px",
  "fontFamily": "'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  "lineHeight": "18px",
  "fontWeight": 400,
  "margin": "4px",
  "maxHeight": "126px",
  "maxWidth": "256px",
  "padding": "8px",
  "zIndex": 4000,
  "letterSpacing": "normal",
  "textAlign": "center",
  "enableArrow": false,
  "arrowSize": "11.31px",
  "arrowBorderRadius": "2px",
  "arrowMarginOffset": "-6.8px"
}
```

### Novo

```json
{
  "backgroundColor": "#292929",
  "borderWidth": "1px",
  "borderStyle": "none",
  "borderColor": "#D1DBE8",
  "borderRadius": "6px",
  "boxShadow": "0px 1px 2px rgba(41,41,41,0.25)",
  "color": "#FFFFFF",
  "fontSize": "14px",
  "fontFamily": "Inter, sans-serif",
  "lineHeight": "24px",
  "fontWeight": 400,
  "margin": "4px",
  "maxHeight": "126px",
  "maxWidth": "240px",
  "padding": "4px 8px",
  "zIndex": 4000,
  "letterSpacing": "-0.006em",
  "textAlign": "left",
  "enableArrow": true,
  "arrowSize": "11.31px",
  "arrowBorderRadius": "2px",
  "arrowMarginOffset": "-5.5px"
}
```

### Novo Dark

```json
{
  "backgroundColor": "#F1F1F1",
  "borderWidth": "1px",
  "borderStyle": "none",
  "borderColor": "#D1DBE8",
  "borderRadius": "6px",
  "boxShadow": "0px 1px 2px rgba(255,255,255,0.25)",
  "color": "#292929",
  "fontSize": "14px",
  "fontFamily": "Inter, sans-serif",
  "lineHeight": "24px",
  "fontWeight": 400,
  "margin": "4px",
  "maxHeight": "126px",
  "maxWidth": "240px",
  "padding": "4px 8px",
  "zIndex": 4000,
  "letterSpacing": "-0.006em",
  "textAlign": "left",
  "enableArrow": true,
  "arrowSize": "11.31px",
  "arrowBorderRadius": "2px",
  "arrowMarginOffset": "-5.5px"
}
