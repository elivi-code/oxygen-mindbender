import React, { useContext } from 'react';

import sortBy from 'lodash.sortby';

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

import { AvailableColumnsItems } from './AvailableColumnsItems';

export const AvailableColumns = () => {
  const {
    testId,
    items: { availableColumns },
    translations: { availableTitle },
  } = useContext(ColumnManagementContext);
  const id = useId();

  const sortedItems = sortBy(availableColumns, ['name']);

  return (
    <ColumnsWrapper {...getTestAttributes(`${testId}_AVAILABLE_COLUMNS`)}>
      {availableTitle && (
        <Title id={id}>{`${availableTitle} (${sortedItems.length})`}</Title>
      )}
      <ListWrapper aria-labelledby={id} role="grid">
        <SortableList items={sortedItems} type={ColumnsType.AvailableColumns}>
          <AvailableColumnsItems items={sortedItems} />
        </SortableList>
      </ListWrapper>
    </ColumnsWrapper>
  );
};
