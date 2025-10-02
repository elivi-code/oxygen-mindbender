import React, { useState } from 'react';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import Pagination, {
  PaginationState,
  usePagination,
} from '@8x8/oxygen-pagination';
import { argsConfig, argTypesConfig } from './config';
import README from '../README.md?raw';
import CHANGELOG from '../CHANGELOG.md?raw';
import { StoryProps } from './Pagination.basicUsage.stories';

export const PaginationDocumentation = (args: StoryProps) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageNumber: 1,
    rowsPerPage: 10,
  });

  const { canGoBack, canGoNext, numberOfPages, pageNumber, rowsPerPage } =
    usePagination(pagination, args.totalRecords);

  return (
    <>
      <Doc markdown>{README}</Doc>
      <ComponentSection>
        <Pagination
          {...args}
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
      </ComponentSection>
      <Doc markdown>{CHANGELOG}</Doc>
    </>
  );
};
PaginationDocumentation.storyName = 'Documentation';
PaginationDocumentation.args = argsConfig;
PaginationDocumentation.argsTypes = argTypesConfig;

export default {
  title: 'Components/Pagination [alpha]',
};
