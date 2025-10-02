import React, { useContext } from 'react';
import sortBy from 'lodash.sortby';
import { getTestAttributes } from '@8x8/oxygen-config';
import { useId } from '@8x8/oxygen-utils';
import { SortableList } from '../SortableList/SortableList';
import { ColumnsType } from '../../types/ColumnManagement';
import { Title, ListWrapper, ColumnsWrapper, } from '../ColumnManagement/styled/ColumnManagement';
import { ColumnManagementContext } from '../../context/ColumnManagementProvider';
import { AvailableColumnsItems } from './AvailableColumnsItems';
export const AvailableColumns = () => {
    const { testId, items: { availableColumns }, translations: { availableTitle }, } = useContext(ColumnManagementContext);
    const id = useId();
    const sortedItems = sortBy(availableColumns, ['name']);
    return (React.createElement(ColumnsWrapper, { ...getTestAttributes(`${testId}_AVAILABLE_COLUMNS`) },
        availableTitle && (React.createElement(Title, { id: id }, `${availableTitle} (${sortedItems.length})`)),
        React.createElement(ListWrapper, { "aria-labelledby": id, role: "grid" },
            React.createElement(SortableList, { items: sortedItems, type: ColumnsType.AvailableColumns },
                React.createElement(AvailableColumnsItems, { items: sortedItems })))));
};
