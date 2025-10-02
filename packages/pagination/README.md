# 8x8 Oxygen - Pagination

## Instalation

```sh
$ yarn add @8x8/oxygen-pagination
```

```sh
$ npm install @8x8/oxygen-pagination
```

### External Props

  - `size`: `PaginationSize | undefined` - style size of the pagination
  - `rowsPerPageOptions`: `number[] | undefined` - array of rows per page options
  - `translations`: `Translations` - object of translations strings for labels
  - `onPaginationChange`: `(pagination: PaginationState) => void;` - callback function for pagination change
  - `isDisabled?`: `boolean` - tell when `Pagination` component is disabled.
  - `testId?`: `string` - test id of pagination component

### Internal props (can be extracted from `usePagination` Hook)
  - `pageNumber`: `number` - page number of the pagination
  - `numberOfPages`: `number` - total number of pages
  - `canGoBack`: `boolean` - determines if previous button is disabled or enabled
  - `canGoNext`: `boolean` - determines if next button is disabled or enabled
  - `rowsPerPage`: `number` - default rows per page dropdown value

### Types

```ts
  const PAGINATION_SIZE = {
    small: 'small',
    default: 'default'
  }
  type PaginationSize = keyof typeof PAGINATION_SIZE;
```

```ts
  interface PaginationState {
    pageNumber: number;
    rowsPerPage: number;
  }
```

```ts
  interface Translations {
    paginationTitle: string;
    rowsPerPage: string;
    prevPage: string;
    numberOfPages: string;
    nextPage: string;
  }
```

### Usage

```tsx
import React, { useState } from 'react';
import Pagination, {
  usePagination,
  PaginationState,
} from '@8x8/oxygen-pagination';
  
  const [pagination, setPagination] = useState<PaginationState>({
    pageNumber: 1,
    rowsPerPage: 10,
  });

  const { canGoBack, canGoNext, numberOfPages, pageNumber, rowsPerPage } =
    usePagination(pagination, totalRecords);

  return (
    <Pagination
      canGoBack={canGoBack}
      canGoNext={canGoNext}
      numberOfPages={numberOfPages}
      onPaginationChange={setPagination}
      pageNumber={pageNumber}
      rowsPerPage={rowsPerPage}
      translations={{
        rowsPerPage: 'Rows per page:',
        prevPage: 'Prev',
        numberOfPages: `of ${numberOfPages} pages`,
        nextPage: 'Next',
      }}
    />
  )
```
