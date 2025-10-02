# 8x8 Oxygen - Context Menu


## Installation

```sh
$ yarn add @8x8/oxygen-context-menu
```

```sh
$npm install @8x8/oxygen-context-menu
```

## Usage
### Import
```js
import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuTrigger,
  Styled,
} from '@8x8/oxygen-context-menu';
```

### Create a simple context menu

```jsx
function SimpleContextMenu() {
	return (
		<ContextMenu id="id">
          <ContextMenuItem>
            <p> Element 1 </p>
          </ContextMenuItem>
          <ContextMenuItem>
            <p> Element 1 </p>
          </ContextMenuItem>
          <ContextMenuItem>
            <p> Element 3 </p>
          </ContextMenuItem>
        </ContextMenu>
        <Styled.ContextMenuTrigger>
          <ContextMenuTrigger id="id">
            <h1>Right Click Here</h1>
          </ContextMenuTrigger>
        </Styled.ContextMenuTrigger>
	);
}
```

### Use show and hide methods to control the component from the outside

```jsx
  show('id', {x: 150, y: 150});
```
```jsx
  hide('id');
```

## Available styled components
* ContextMenu
* ContextMenuItem
* ContextMenuTrigger

### Extend styling
You can extend/override any of the styles by importing the styled components directly.

```js
import { Styled } from '@8x8/oxygen-context-menu';
import styled from 'styled-components';
const StyledContextMenuItem = styled(Styled.ContextMenuItem)`
	color: blue;
	height: 40px;
`;
```

## Custom Close Handlers
|Name|Type|Example|Description|
|---|---|---|---|
|target|node|window|The element that is going to receive the event listener|
|eventName|string|'click'|The name of the event|
|callback|func||Callback to be executed when the event triggers|
|capture|bool|false|Specify weather to use capture or bubbling to propagate the event|

## Props
### ContextMenu
|Name|Type|Default|Description|
|---|---|---|---|
|theme|object||Theme object|
|children*|node||Content|
|id|string||Component ID|
|onShow|func|noop|Callback executed when context menu is shown|
|onHide|func|noop|Callback executed when context menu is hidden|
|onInsideClick|func|noop|Callback executed then clicking inside the context menu|
|customCloseHandlers|array|[]|Array containing events that should trigger the hiding of the context menu|

### ContextMenuItem
|Name|Type|Default|Description|
|---|---|---|---|
|theme|object||Theme object|
|isDisabled|bool|false|Tell when the menu item in context menu is disabled (auto cursor, no background change on hover)|
|children*|node||Content|

### ContextMenuTrigger
|Name|Type|Default|Description|
|---|---|---|---|
|onContextMenu|func||Action|
|children*|node||Content|
|id|string||Component ID|

## Theme

### Classic

```json
{
  "contextMenuBackground": "#FFF",
  "contextMenuBorder": "1px solid #D1DBE8",
  "contextMenuBoxShadow": "0px 1px 5px rgba(28,32,37,0.1)",
  "contextMenuFontFamily": "'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  "contextMenuFontSize": "15px",
  "contextMenuZIndex": 1000,
  "contextMenuItemColor": "#1C2025",
  "contextMenuItemDisabledColor": "#5E6D7A",
  "contextMenuItemWidth": "246px",
  "contextMenuItemHoverColor": "#DAEBFA",
  "contextMenuItemDisabledHoverColor": "transparent",
  "contextMenuItemColorActive": "#0376DA",
  "contextMenuBorderRadius": "0px",
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
  "contextMenuZIndex": 1000,
  "contextMenuWidth": "160px",
  "contextMenuPadding": "8px 0",
  "contextMenuItemPadding": "8px 16px",
  "contextMenuBackground": "#FFFFFF",
  "contextMenuBorder": "1px solid #E0E0E0",
  "contextMenuBorderRadius": "6px",
  "contextMenuBoxShadow": "0px 1px 2px rgba(41,41,41,0.25)",
  "contextMenuItemColor": "#292929",
  "contextMenuItemDisabledColor": "#C2C2C2",
  "contextMenuItemHoverColor": "#F1F1F1",
  "contextMenuItemDisabledHoverColor": "transparent"
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
  "contextMenuZIndex": 1000,
  "contextMenuWidth": "160px",
  "contextMenuPadding": "8px 0",
  "contextMenuItemPadding": "8px 16px",
  "contextMenuBackground": "#171719",
  "contextMenuBorder": "1px solid #666666",
  "contextMenuBorderRadius": "6px",
  "contextMenuBoxShadow": "0px 1px 2px rgba(255,255,255,0.25)",
  "contextMenuItemColor": "#FFFFFF",
  "contextMenuItemDisabledColor": "#C2C2C2",
  "contextMenuItemHoverColor": "#2F2E32",
  "contextMenuItemDisabledHoverColor": "transparent"
}
```
