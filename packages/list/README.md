# 8x8 Oxygen - List


## Installation

```sh
$ yarn add @8x8/oxygen-list
```

```sh
$ npm install @8x8/oxygen-list
```

## Usage

```js
import List, { ListItem } from '@8x8/oxygen-list';
```
```js
<List isGroup>
  <ListItem>Item 1</ListItem>
  <ListItem isDisabled>Item 2 - is disabled</ListItem>
  <ListItem>Item 3</ListItem>
</List>
```

## Props

|Name|Type|Default|Description|
|---|---|---|---|
|theme|object| |List theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants|
|children*|node| |Rendered item content should be `ListItem` component|
|isGroup|bool|false|Tell when list is styled as a group|
|isOrdered|bool|false|Tell when list is ordered|
|withBackground|bool|false|Tell when list has background|

>Props marked with \* are required

## Theme

### Classic
```json
{
  "listPadding": "0",
  "listMargin": "0",
  "listStyle": "none",
  "listGroupBorderColor": "#D1DBE8",
  "listBackground": "#FFF",
  "listMaxWidth": "100%",
  "listItemFontFamily": "'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  "listItemFontSize": "15px",
  "listItemFontWeight": 400,
  "listItemLineHeight": "24px",
  "listItemPadding": "2px 8px",
  "listItemColor": "#1C2025",
  "listItemActiveTextDecoration": "none",
  "listItemColorActive": "#0376DA",
  "listItemColorDisabled": "#5E6D7A",
  "isClassic": true
}
```

### Novo
```json
{
  "isClassic": false,
  "fontFamily": "Inter, sans-serif",
  "fontSize": "16px",
  "lineHeight": "22px",
  "fontWeight": 400,
  "letterSpacing": "-0.011em",
  "listPadding": "0",
  "listItemPadding": "8px 16px",
  "listMargin": "0",
  "listMaxWidth": "100%",
  "listStyle": "none",
  "listItemActiveTextDecoration": "none",
  "listGroupBorderColor": "#E0E0E0",
  "listBackground": "#FFFFFF",
  "listItemColor": "#292929",
  "listItemHoverColor": "#F1F1F1",
  "listItemColorDisabled": "#C2C2C2"
}
```

### Novo Dark
```json
{
  "isClassic": false,
  "fontFamily": "Inter, sans-serif",
  "fontSize": "16px",
  "lineHeight": "22px",
  "fontWeight": 400,
  "letterSpacing": "-0.011em",
  "listPadding": "0",
  "listItemPadding": "8px 16px",
  "listMargin": "0",
  "listMaxWidth": "100%",
  "listStyle": "none",
  "listItemActiveTextDecoration": "none",
  "listGroupBorderColor": "#666666",
  "listBackground": "#171719",
  "listItemColor": "#FFFFFF",
  "listItemHoverColor": "#2F2E32",
  "listItemColorDisabled": "#C2C2C2"
}
```
