# 8x8 Oxygen - Breadcrumbs


## Installation

```sh
$ yarn add @8x8/oxygen-breadcrumbs
```

```sh
$ npm install @8x8/oxygen-breadcrumbs
```

## Usage

```js
import Breadcrumbs, { Breadcrumb } from '@8x8/oxygen-breadcrumbs';
```
```js
<Breadcrumbs>
  <Breadcrumb>
    Home
  </Breadcrumb>
  <Breadcrumb isActive>
    Settings
  </Breadcrumb>
</Breadcrumbs>
```

## Usage with React Router

```js
<Breadcrumbs>
   <Link to="/">Home</Link>
   <Link to="/settings">Settings</Link>
</Breadcrumbs>
```

## Props

### Breadcrumbs

|Name|Type|Default|Description|
|---|---|---|---|
|theme|object| |Breadcrumbs theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants|
|children*|node| |Recommend to use Breadcrumb as a children but you can use Link component from React Router|
|maxItems|number|4|Set the maximum number of breadcrumbs to display. When there are more than the maximum number, only the first number of items specified in `itemsBeforeCollapse` and last number of items specified in itemsAfterCollapse will be shown, with an ellipsis in between|
|itemsBeforeCollapse|number|1|If max items is exceeded, the number of items to show before the ellipsis|
|itemsAfterCollapse|number|1|If max items is exceeded, the number of items to show after the ellipsis|
|separator|node|'/'|Text element displays between items|
|ariaLabel|string|'Breadcrumbs'|Pass aria-label to nav element|
|collapsedTitle|string|'Show all links'|Shows HTML title text on ellipsis|

### Breadcrumb

|Name|Type|Default|Description|
|---|---|---|---|
|theme|object| |Breadcrumbs theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants|
|children*|node| |Renders children element|
|href|string|undefined|The url or path which the breadcrumb should act as a link to|
|title|string|undefined|Shows HTML title text|
|target|oneOf(['_blank', '_parent', '_self', '_top'])|'_self'|The target of the link |
|isActive|bool|false|Tell when breadcrumb is active. Usually is the last element|
|onClick|func|undefined|Handler to be called on click|

>Props marked with \* are required

## Theme

### Classic

```json
{
  "textLink": {
    "textLinkColorPrimaryDisabled": "#1C2025"
  },
  "separatorFontSize": "15px",
  "separatorFontWeight": 400,
  "separatorPadding": "0 6px",
  "separatorTextColor": "#1C2025"
}
```

### Novo

```json
{
  "textLink": {
    "textLinkColorPrimaryDisabled": "#292929"
  },
  "separatorFontSize": "16px",
  "separatorFontWeight": 400,
  "separatorPadding": "0 6px",
  "separatorTextColor": "#292929"
}
```

### Novo Dark

```json
{
  "textLink": {
    "textLinkColorPrimaryDisabled": "#FFFFFF"
  },
  "separatorFontSize": "16px",
  "separatorFontWeight": 400,
  "separatorPadding": "0 6px",
  "separatorTextColor": "#FFFFFF"
}
'
```

