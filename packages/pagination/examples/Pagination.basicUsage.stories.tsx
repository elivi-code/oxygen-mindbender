import React, { useEffect, useState } from 'react';

import Pagination, {
  usePagination,
  PaginationState,
  PaginationProps,
} from '@8x8/oxygen-pagination';
import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { argsConfig, argTypesConfig } from './config';

export interface StoryProps extends PaginationProps {
  totalRecords: number;
}

export const BasicUsage = (args: StoryProps) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageNumber: 1,
    rowsPerPage: args.rowsPerPage,
  });

  useEffect(() => {
    setPagination({
      pageNumber: pagination.pageNumber,
      rowsPerPage: args.rowsPerPage,
    });
  }, [args.rowsPerPage]);

  const { canGoBack, canGoNext, numberOfPages, pageNumber, rowsPerPage } =
    usePagination(pagination, args.totalRecords);

  return (
    <>
      <Doc>
        <h1>
          <code>Pagination</code> basic usage
        </h1>
        <p>
          The example below show that we need to use <code>useState</code> for
          pagination (pageNumber, rowsPerPage) and <code>usePagination</code>{' '}
          hook - both outside the oxygen component, in order to manage the
          pagination state.
        </p>
        <pre>
          {`
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
        rowsPerPageOptions={[5, 10, 20, 50, 100, 250]}
        translations={{
          rowsPerPage: 'Rows per page:',
          prevPage: 'Prev',
          numberOfPages: 'of \${numberOfPages} pages',
          nextPage: 'Next'
        }}
      />
    )
          `}
        </pre>
      </Doc>
      <ComponentSection>
        <Pagination
          {...args}
          canGoBack={canGoBack}
          canGoNext={canGoNext}
          numberOfPages={numberOfPages}
          onPaginationChange={setPagination}
          pageNumber={pageNumber}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 20, 50, 100, 250]}
          translations={{
            rowsPerPage: 'Rows per page:',
            prevPage: 'Prev',
            numberOfPages: `of ${numberOfPages} pages`,
            nextPage: 'Next',
          }}
        />
      </ComponentSection>
    </>
  );
};

BasicUsage.storyName = 'BasicUsage';
BasicUsage.args = argsConfig;
BasicUsage.argTypes = argTypesConfig;

export default {
  title: 'Components/Pagination [alpha]',
};
