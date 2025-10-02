# 8x8 Oxygen - Accordion

## Installation

```sh
$ yarn add @8x8/oxygen-accordion
```

```sh
$ npm install @8x8/oxygen-accordion
```

## Accordion

The `AccordionGroup` component will receive a list of `Accordion`s which will externally control.

The `Accordion` should usually be wrapped in an `AccordionGroup`

### Usage

#### Basic Usage

```js
import Accordion, { AccordionGroup } from '@8x8/oxygen-accordion';
import { VideoIcon } from '@8x8/oxygen-icon';

<AccordionGroup>
  <Accordion title="Title" iconLeft={VideoIcon} text="Text">
    Content
  </Accordion>

  <Accordion title="Title 2" iconLeft={VideoIcon} text="Text 2">
    Content
  </Accordion>
</AccordionGroup>;
```

#### Group-level Configuration (Recommended)

Configure `expandTrigger` and `translations` at the `AccordionGroup` level to apply them to all child accordions:

```js
import Accordion, { AccordionGroup } from '@8x8/oxygen-accordion';
import { IconButton } from '@8x8/oxygen-button';
import { InfoCircleIcon } from '@8x8/oxygen-icon';
import Tooltip from '@8x8/oxygen-tooltip';

<AccordionGroup
  expandTrigger="arrow"
  translations={{
    expand: 'Open',
    collapse: 'Close',
  }}
>
  <Accordion
    title="Settings"
    contentAfterTitle={
      <Tooltip title="Help information" includeWrapper={false}>
        <IconButton size="small2XIconXs">
          <InfoCircleIcon />
        </IconButton>
      </Tooltip>
    }
  >
    Content inherits group configuration
  </Accordion>

  <Accordion
    title="Override Example"
    expandTrigger="header"
    translations={{ expand: 'Show' }}
  >
    Individual accordions can override group settings
  </Accordion>
</AccordionGroup>;
```

### Interaction Modes

The `expandTrigger` prop controls how users interact with the accordion:

- **`expandTrigger="header"`** (default): The entire header is clickable
- **`expandTrigger="arrow"`**: Only the arrow icon is clickable, allowing custom content in the header to have independent interactions

#### Group-level Configuration (Recommended)

```js
// Configure all accordions in the group
<AccordionGroup expandTrigger="arrow">
  <Accordion title="Settings" contentAfterTitle={<CustomButton />}>
    Content
  </Accordion>
  <Accordion title="Options" contentAfterTitle={<CustomButton />}>
    Content
  </Accordion>
</AccordionGroup>
```

#### Individual Configuration

```js
// Configure individual accordion
<Accordion
  title="Settings"
  expandTrigger="arrow"
  contentAfterTitle={
    <IconButton onClick={handleCustomAction}>
      <InfoIcon />
    </IconButton>
  }
>
  Content
</Accordion>
```

### AccordionGroup Props

`interface AccordionGroupProps`

| Name                        | Type                                                   | Default       | Description                                                                                                                                                                                                                    |
| :-------------------------- | :----------------------------------------------------- | :------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`                  | `React.ReactNode`                                      | `null`        | Rendered AccordionItems inside the AccordionGroup                                                                                                                                                                              |
| `testId?`                   | `string`                                               | `'ACCORDION'` | Test ID DOM attribute value                                                                                                                                                                                                    |
| `initialActiveElementId?`   | `string`                                               | `undefined`   | Id of the activeElement - to be used only as initial value - ignored otherwise                                                                                                                                                 |
| `hasFixedHeight?`           | `boolean`                                              | `false`       | If true, the AccordionGroup will have a fixed height (height of parent container) and content of active Accordion will be set to fill the AccordionGroup's parent container                                                    |
| `expandTrigger?`            | `'header' \| 'arrow'`                                  | `undefined`   | Default interaction mode for all child accordions. Individual accordions can override this setting                                                                                                                             |
| `translations?`             | `Translations`                                         | `undefined`   | Default translations for all child accordions. Individual accordions can override with their own translations                                                                                                                  |
| `onChange?`                 | `(id: string, isExpanded: boolean) => boolean \| void` | `undefined`   | Callback function to be called when Accordion header is clicked. The function can return true or false, false meaning the navigation will be blocked. If the function returns void, the return value will be defaulted to true |
| `shouldCloseOnActiveClick?` | `boolean`                                              | `true`        | **@deprecated** If true, clicking on the active Accordion will close the Accordion                                                                                                                                             |

### Accordion Props

`interface AccordionInterface`

| Name                        | Type                                        | Default       | Description                                                                                                                                                                                                               |
| :-------------------------- | :------------------------------------------ | :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `children`                  | `React.ReactNode`                           | `null`        | Rendered content inside the Accordion                                                                                                                                                                                     |
| `title`                     | `string`                                    | `undefined`   | Accordion title, shown in the Header on the left side                                                                                                                                                                     |
| `testId?`                   | `string`                                    | `'ACCORDION'` | Test ID DOM attribute value                                                                                                                                                                                               |
| `text?`                     | `string`                                    | `''`          | Accordion secondary text, shown in the Header on the right side                                                                                                                                                           |
| `iconLeft?`                 | `React.ReactNode`                           | `null`        | Show icon inside Accordion Header on the left side                                                                                                                                                                        |
| `contentAfterTitle?`        | `React.ReactNode`                           | `null`        | Custom content (e.g., IconButton with Tooltip) rendered after the accordion title                                                                                                                                         |
| `id?`                       | `string`                                    | `undefined`   | Unique identifier for one Accordion - if none provided, AccordionGroup will provide a guid for it - will be sent as param for AccordionGroup onChange                                                                     |
| `isExpanded?`               | `boolean`                                   | `false`       | Controls whether the accordion is expanded or collapsed                                                                                                                                                                   |
| `forcedHeight?`             | `number`                                    | `0`           | Forces accordion content to a specific height in pixels                                                                                                                                                                   |
| `isContentScrollable?`      | `boolean`                                   | `false`       | Controls content scrolling behavior. By default, if an accordion has a fixed height the content will be scrollable, otherwise an overflow is not required. This behaviour can be overridden by explicitly setting a value |
| `hasPadding?`               | `boolean`                                   | `true`        | If false, it removes the padding of expanded content                                                                                                                                                                      |
| `expandTrigger?`            | `'header' \| 'arrow'`                       | `'header'`    | Controls interaction mode: 'header' makes entire header clickable, 'arrow' makes only the chevron icon clickable                                                                                                          |
| `translations?`             | `Translations`                              | `undefined`   | Custom translations for expand/collapse aria-labels. Supports partial overrides                                                                                                                                           |
| `onChange?`                 | `(id: string, isExpanded: boolean) => void` | `undefined`   | Callback function called when accordion state changes                                                                                                                                                                     |
| `shouldCloseOnActiveClick?` | `boolean`                                   | `undefined`   | **@deprecated** If true, clicking on the active Accordion will close the Accordion                                                                                                                                        |

### Translations

`interface Translations`

| Name        | Type     | Default      | Description                                     |
| :---------- | :------- | :----------- | :---------------------------------------------- |
| `expand?`   | `string` | `'Expand'`   | Text used in expand aria-label for arrow mode   |
| `collapse?` | `string` | `'Collapse'` | Text used in collapse aria-label for arrow mode |

#### Group-level Configuration (Recommended)

```js
// Set translations for all accordions in the group
<AccordionGroup
  expandTrigger="arrow"
  translations={{
    expand: 'Open',
    collapse: 'Close',
  }}
>
  <Accordion title="Settings">Content inherits group translations</Accordion>
  <Accordion title="Override" translations={{ expand: 'Show' }}>
    Content uses individual translation
  </Accordion>
</AccordionGroup>
```

#### Individual Configuration

```js
// Configure individual accordion translations
<Accordion
  title="Settings"
  expandTrigger="arrow"
  translations={{
    expand: 'Open',
    collapse: 'Close'
  }}
>
  Content
</Accordion>

// Partial translations (only overriding expand)
<Accordion
  title="Settings"
  expandTrigger="arrow"
  translations={{
    expand: 'Show'
  }}
>
  Content
</Accordion>
```

## Accessibility

The Accordion component follows WCAG 2.2 AA guidelines and implements proper ARIA patterns:

### Keyboard Navigation

- **Header mode** (`expandTrigger="header"`): Entire header is focusable and responds to Enter and Space keys
- **Arrow mode** (`expandTrigger="arrow"`): Only the arrow button is focusable for keyboard navigation

### ARIA Attributes

- **Header mode**: Header button has `aria-expanded` and `aria-controls` attributes
- **Arrow mode**: Arrow button has `aria-expanded`, `aria-controls`, and descriptive `aria-label` attributes
- Content panels have `aria-labelledby` connecting them to their headers

### Screen Reader Support

- Content panels are properly labeled and announced as regions
- Expand/collapse state changes are communicated to screen readers
- Arrow mode provides descriptive labels like "Expand Settings" or "Collapse Settings"
- Labels can be customized using the `translations` prop for internationalization

### Best Practices

- Use `expandTrigger="arrow"` when you have interactive elements in the header content
- Ensure custom content in `contentAfterTitle` has proper focus management
- Test with screen readers to verify the accordion structure is announced correctly
