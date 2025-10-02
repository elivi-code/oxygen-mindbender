import React, { useContext } from 'react';

import { getTestAttributes } from '@8x8/oxygen-config';
import { useId } from '@8x8/oxygen-utils';

import { SortableList } from '../SortableList/SortableList';
import { ColumnsType } from '../../types/ColumnManagement';
import {
  Title,
  ListWrapper,
  ColumnsWrapper,
} from '../ColumnManagement/styled/ColumnManagement';
import { ColumnManagementContext } from '../../context/ColumnManagementProvider';
import { CurrentColumnsItems } from './CurrentColumnsItems';

export const CurrentColumns = () => {
  const {
    testId,
    items: { currentColumns },
    translations: { currentTitle },
  } = useContext(ColumnManagementContext);
  const id = useId();

  return (
    <ColumnsWrapper {...getTestAttributes(`${testId}_CURRENT_COLUMNS`)}>
      {currentTitle && (
        <Title id={id}>{`${currentTitle} (${currentColumns.length})`}</Title>
      )}
      <ListWrapper aria-labelledby={id} role="grid">
        <SortableList items={currentColumns} type={ColumnsType.CurrentColumns}>
          <CurrentColumnsItems />
        </SortableList>
      </ListWrapper>
    </ColumnsWrapper>
  );
};
