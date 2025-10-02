# 8x8 Oxygen

Oxygen UI components library and design system.
<br />
For more info, please access our [official documentation](https://oxygen.8x8.com) and [storybook](https://oxygen-dev.8x8.com).

## Release Notes

Providing actual release notes is new. Please be gentle.
You can always see the full changelog in the [CHANGELOG.md](CHANGELOG.md) file.

### 2.21.0 - Release date 2023-02-06

This is a smaller release.

It contains the conversion to Typescript for the `Button` component as well as some clean-up of unused theme props and adds an additional object value export `buttonGroupAlignment` for the `ButtonGroup` component.

We also fixed some broken types for `DropdownButton`, `Select` as well as some improvements to the exported types for `TextLinkProps` and `TooltipProps`.

The `DateTimeSelector` has a fix to no longer call stopPropagation on the click outside handler which was causing a crash in Work.

### 2.20.0 — Release date 2023-01-20

#### Components

##### `IconButton`

The `IconButton` component is released (as Beta). See the docs for it here: https://oxygen-dev.8x8.com/?path=/story/components-iconbutton-beta--icon-button-documentation
The `Label` component is now using the new `IconButton` internally

##### `TextLink`

The `@8x8/oxygen-text-link` package has been converted to TypeScript.
It also allows focus when the component is disabled now (adds "aria-disabled") and other smaller improvements.
It also exports used interfaces now.
The documentation (Storybook) page and examples have been also revamped.

##### `Tooltip`

`Tooltip` has a content render improvement where content is broken onte multiple lines even when no white-space breaking characters are available.

### 2.19.0

#### Alpha components

2.19 ships the first _Alpha_ component. A component in _Alpha_ or _Beta_ does not have a stable API yet, and might (in this particular case read this as _very likely_) contain changes in _minor_ Oxygen releases. Please use at your own risk. We will do our best to call out breaking changes to these components, but you might need to update your code in using them across Oxygen minor releases.

You can read more about [Alpha components](https://oxygen-dev.8x8.com/docs/alpha-components) in our documentation (this is also not complete).

The `Accordion` component is released as Alpha. It only exposes an `AccordionItem` component, so it can't actually be used right now as a complete accordion since there's no wrapper `Accordion` component exposed that knows how to handle multiple `AccordionItem`s. Each item is independent right now.

### Typescript

2.19 is the first Oxygen version that ships some packages which have been converted to TypeScript, mainly:

- @8x8/oxygen-avatar
- @8x8/oxygen-config
- @8x8/oxygen-constants
- @8x8/oxygen-icon
- @8x8/oxygen-staticTooltip
- @8x8/oxygen-theme
- @8x8/oxygen-tooltip
- @8x8/oxygen-utils

There's potential changes to the exposed types as the old d.ts files were managed manually (and were out of sync with the actual exports in lots of cases).
Please let us know if there are type issues, as this is still a new effort and there are likely not always all best practices in place.

From now every new component added to Oxygen should be written in TypeScript. The transition needs to be done from leafs towards the root of the dependency tree, so there's potential issues with depending on a JS component from a Typescript one.

### Font-scaling

2.19 Also adds full accessibility in regards to font-scaling. All components now respect the user set root font-size value, and scale accordingly. This is done by using `rem` units instead of `px` for font-sizes. See https://agile.8x8.com/browse/OX-676 for more info.

This is by far not perfect and we expect further adjusments in the future to achieve specific design goals. But for now even if scaled up components don't always look _great_ there is no more text clipping.

We have tested and support a root font-size of up to 32px (twice the default 16px).

### Tooltip

The `Tooltip` has had a major overhaul as we switched the internal implementation from `react-popper` to `@floating-ui`. This is a successor to `react-popper`, see https://floating-ui.com for more info.

The upgrade should be seamless in most cases. As a best effort some offset values are parsed and applied via the new API.

By default the `Tooltip`'s floating part is rendered via a react portal now. Most usage for the `renderContainer` prop was for this purpose, you can likely remove that.

The `triggerRef` prop functions slightly different now. This is now a reference for both the target and the floating part. So you can define a `Tooltip` without children and the element under `triggerRef` will take that role.

We deprecated the props `customCloseHandlers` (let us know if you have usage for this) and `modifiers` (use `offset` instead, and let us know if you need/use other modifiers).
