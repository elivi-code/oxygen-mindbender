# 8x8 Oxygen - Sidebar Menu

## Installation

```sh
$ yarn add @8x8/oxygen-sidebar-menu
```

```sh
$ npm install @8x8/oxygen-sidebar-menu
```

This component is marked as Alpha.

The following functionality is not yet implemented and will be required to finalize the component,
also potential issues and items to look into:

- icon active state (green dot)
- CollapseItem separator rendering (check use-cases on whether this item can be the first)

## Badge Accessibility Features

The sidebar menu includes comprehensive accessibility support for badges:

### Accessibility Structure

- **Badges are decorative**: All badges are hidden from screen readers using `aria-hidden="true"`
- **Button accessibility**: Accessibility attributes are applied to the interactive button elements for proper semantic structure
- **Contextual aria-labels**: Menu buttons receive descriptive aria-labels that include badge information when present

### Automatic Aria-Label Generation

Menu buttons automatically receive contextual aria-labels:
- **Without badge**: `"Menu item name"`
- **With badge (default)**: `"Menu item name, requires attention"`
- **With badge (custom)**: `"Menu item name, custom badge description"`

### Usage Examples

```typescript
// Basic menu item without badge
<MenuItem label="Settings" />
// Button aria-label: "Settings"

// Menu item with badge (default message)
<MenuItem label="Messages" hasBadge badgeChildren={5} />
// Button aria-label: "Messages, requires attention"

// Menu item with custom badge description
<MenuItem
  label="Messages"
  hasBadge
  badgeChildren={5}
  badgeAriaLabel="5 unread messages"
/>
// Button aria-label: "Messages, 5 unread messages"
```

## Components for building sidebar from a configuration object:

### `SidebarPosition` (type)

Position of the sidebar - it can be on the left or right side of the screen

### `BadgeProps` (interface)

Public badge interface for menu items

**Members:**

- hasBadge (`boolean`) - whether the menu item should display a badge
- badgeChildren (`ReactNode`) - the content that will be rendered inside the badge
- badgeAriaLabel (`string`) - custom aria-label for the badge (used in button's aria-label)

### `MenuItemProps` (interface)

Properties for a SubItem

**Members:**

- label (`string`) - an internationalized string
- isActive (`boolean`) - true means SubItem is rendered as an active item
- onTrigger (`(event: MouseEvent<HTMLElement, MouseEvent>) => void`) - mouse click event and keyboard (space, enter) calls this callback
- link (`string`) - Path
- position (`SidebarPosition`)
- linkComponent (`ComponentType<any>`) - Custom link component
- linkProp (`string`) - Custom prop for the link path. Defaults to "to" for ReactRouter
- testId (`string`) - data-test-id value
- hasBadge (`boolean`) - true means badge is rendered
- badgeChildren (`ReactNode`) - the content that will be rendered inside the badge if is active (children will be rendered only sub-menu items)
- badgeAriaLabel (`string`) - custom aria-label for the badge (used in button's aria-label)

### `MenuProps` (interface)

**Members:**

- as (`keyof IntrinsicElements`)
- icon (`ReactElement<any, string | JSXElementConstructor<any>>`)
- children (`ReactElement<MenuItemProps, string | JSXElementConstructor<any>> | ReactElement<MenuItemProps, string | JSXElementConstructor<...>>[]`) - only children of type SubMenuItem are allowed

### `SidebarItemProps` (interface)

**Members:**

- icon (`ReactElement<any, string | JSXElementConstructor<any>>`) - for a SubItem can be omitted
- isFooter (`boolean`) - true means item will appear below the collapse button
- subItems (`SidebarItemProps[]`) - if subItems are present, it becomes a Menu

### `SidebarProps` (interface)

Properties of Sidebar component

**Members:**

- items (`SidebarItemProps[]`) - all the items and subitems on the sidebar
- initialCollapsedState (`boolean`) - Initial value for collapsed state
- collapseLabel (`string`) - label for collapse button or null to omit collapse button
- expandLabel (`string`) - label for collapse button when the sidebar is collapsed (both `collapseLabel` and `expandLabel` are needed for collapse button to be rendered)
- position (`SidebarPosition`) - position of the sidebar
- onCollapseChange (`(collapsed: boolean) => void`) - callback for collapse change
- linkComponent (`ComponentType<any>`) - Custom link Component. Used to render items instead of Button
- linkProp (`string`) - Custom prop for the link path. Defaults to "to" for ReactRouter
- testId (`string`) - data-test-id value

### `SidebarProviderProps` (interface)

**Members:**

- children (`ReactNode`)

### `SidebarContextType` (interface)

**Members:**

- isSidebarCollapsed (`boolean`)
- setSidebarCollapsed (`Dispatch<SetStateAction<boolean>>`)

### `Sidebar` (function)

Renders a sidebar from a configuration object

## Components for building sidebar declaratively:

### `SidebarPosition` (type)

Position of the sidebar - it can be on the left or right side of the screen

### `BadgeProps` (interface)

Public badge interface for menu items

**Members:**

- hasBadge (`boolean`) - whether the menu item should display a badge
- badgeChildren (`ReactNode`) - the content that will be rendered inside the badge
- badgeAriaLabel (`string`) - custom aria-label for the badge (used in button's aria-label)

### `MenuItemProps` (interface)

Properties for a SubItem

**Members:**

- label (`string`) - an internationalized string
- isActive (`boolean`) - true means SubItem is rendered as an active item
- onTrigger (`(event: MouseEvent<HTMLElement, MouseEvent>) => void`) - mouse click event and keyboard (space, enter) calls this callback
- link (`string`) - Path
- position (`SidebarPosition`)
- linkComponent (`ComponentType<any>`) - Custom link component
- linkProp (`string`) - Custom prop for the link path. Defaults to "to" for ReactRouter
- testId (`string`) - data-test-id value
- hasBadge (`boolean`) - true means badge is rendered
- badgeChildren (`ReactNode`) - the content that will be rendered inside the badge
- badgeAriaLabel (`string`) - custom aria-label for the badge (used in button's aria-label)

### `MenuProps` (interface)

**Members:**

- as (`keyof IntrinsicElements`)
- icon (`ReactElement<any, string | JSXElementConstructor<any>>`)
- children (`ReactElement<MenuItemProps, string | JSXElementConstructor<any>> | ReactElement<MenuItemProps, string | JSXElementConstructor<...>>[]`) - only children of type SubMenuItem are allowed

### `SidebarItemProps` (interface)

**Members:**

- icon (`ReactElement<any, string | JSXElementConstructor<any>>`) - for a SubItem can be omitted
- isFooter (`boolean`) - true means item will appear below the collapse button
- subItems (`SidebarItemProps[]`) - if subItems are present, it becomes a Menu

### `SidebarProps` (interface)

Properties of Sidebar component

**Members:**

- items (`SidebarItemProps[]`) - all the items and subitems on the sidebar
- initialCollapsedState (`boolean`) - Initial value for collapsed state
- collapseLabel (`string`) - label for collapse button or null to omit collapse button
- expandLabel (`string`) - label for collapse button when the sidebar is collapsed (both `collapseLabel` and `expandLabel` are needed for collapse button to be rendered)
- position (`SidebarPosition`) - position of the sidebar
- onCollapseChange (`(collapsed: boolean) => void`) - callback for collapse change
- linkComponent (`ComponentType<any>`) - Custom link Component. Used to render items instead of Button
- linkProp (`string`) - Custom prop for the link path. Defaults to "to" for ReactRouter
- testId (`string`) - data-test-id value

### `SidebarProviderProps` (interface)

**Members:**

- children (`ReactNode`)

### `SidebarContextType` (interface)

**Members:**

- isSidebarCollapsed (`boolean`)
- setSidebarCollapsed (`Dispatch<SetStateAction<boolean>>`)

### `MenuItem` (function)

Renders a menu with submenus

### `scrollToRef` (function)

### `getCustomButtonOverrideProps` (function)

**Parameters:**

- arg0 (`boolean`)
- arg1 (`PropsWithAll`)

**returns:** { as: ComponentType<any>; linkProp: string; }

### `getCustomButtonOverrideProps` (function)

**Parameters:**

- arg0 (`boolean`)
- arg1 (`PropsWithEither`)

**returns:** { as: ComponentType<any>; linkProp: string; }

### `getCustomButtonOverrideProps` (function)

**Parameters:**

- customCheck (`boolean`)
- { linkComponent, link, linkProp } (`PropsWithEither`)

**returns:** { as: ComponentType<any>; linkProp: string; }

### `SubMenuItem` (variable)

Renders a sub menu item

### `CollapseItem` (function)

Renders the collapse item

### `SidebarContext` (variable)

### `SidebarProvider` (function)

Wrap everything in this provider when using declarative sidebar
