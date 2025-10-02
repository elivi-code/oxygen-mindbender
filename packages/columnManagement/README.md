# 8x8 Oxygen - Column Management

## Installation

```sh
$ yarn add @8x8/oxygen-column-management
```

```sh
$ npm install @8x8/oxygen-column-management
```

The package exposes UI Components:

- [ColumnManagement](#columnmanagement)
- [ModalColumnManagement](#modalcolumnmanagement)

Exported types:

- [ColumnInterface](#columninterface)

## ColumnManagement

### Usage

```ts
import { ColumnManagement } from '@8x8/oxygen-column-management';

<ColumnManagement
  currentColumns={currentColumns}
  availableColumns={availableColumns}
/>;
```

### ColumnManagement Props

| Name           | Type        | Required | Description                                                                                                             |
| -------------- | ----------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| availableColumns | ColumnInterface[] | true     | Available columns items displayed on the right columns list                                                             |
| currentColumns   | ColumnInterface[] | true     | Current columns items displayed on the left columns list                                                                |
| translations | ColumnManagementTranslations      | false    | translations used across the component, if not passed it will fall on the default translation(en)                                                                            |                                                                                |
| onUpdate        | func        | true    | Callback for updated values                                                                                   |
| testId         | string        | false    | testId used on the column management wrapper - default to COLUMN_MANAGEMENT if not passed                                   |
| telemetryProps         | TelemetryInterface        | false    | If defined with telemetryCallback(OxygenProvider) it will trigger telemetry events                                    |

## ModalColumnManagement

The `ModalColumnManagement` component is meant to abstract the usage of the Column Management in a modal.

### Usage

```ts
import React, { useState } from 'react';
import { ModalColumnManagement } from '@8x8/oxygen-column-management';

return (
  <ModalColumnManagement
    currentColumns={currentColumns}
    availableColuns={availableColumns}
    defaultColumns={defaultColumns}
    onSave={onSave}
    onClose={onClose}
  />
);
```

### ModalColumnManagement Props

| Name           | Type         | Required | Description                                                        |
| -------------- | ------------ | -------- | ------------------------------------------------------------------ |
| availableColumns | ColumnInterface[]  | true     | Right side list                                                    |
| currentColumns   | ColumnInterface[]  | true     | Left side list                                                     |
| defaultColumns  | ColumnInterface[]  | false     | Default item values on currentColumns - used when clicked on "Reset". If not provided, reset will pick initial current columns |
| translations   | ModalTranslations | false     | Translations used across the component, if not passed it will fall on the default(en)                             |
| onClose        | function     | true     | Callback used when close the modal                                 |
| onSave         | function     | true     | Callback used when clicked on "Save" btn                           |
| onReset        | function     | false     | Callback used when clicked on "Reset" btn                          |
| modalTestId         | string        | false    | testId used on the modal  - default to MODAL_COLUMN_MANAGEMENT if not passed                                  |
| testId         | string        | false    | testId used on the column management wrapper - default to COLUMN_MANAGEMENT if not passed                                    |
| telemetryProps         | TelemetryInterface        | false    | If defined with telemetryCallback(OxygenProvider), it will trigger telemetry events. All properties from this object will be included as additional data in the telemetry payload (e.g., { uiArea: 'table A', reportName: 'report A' }).                                    |

### Types

## ColumnInterface

```ts
interface ColumnInterface {
  id: string;
  name: string;
  isLocked?: boolean;
}
```
