import React, { useContext } from 'react';
import { getTestAttributes } from '@8x8/oxygen-config';
import { useId } from '@8x8/oxygen-utils';
import { SortableList } from '../SortableList/SortableList';
import { ColumnsType } from '../../types/ColumnManagement';
import { Title, ListWrapper, ColumnsWrapper, } from '../ColumnManagement/styled/ColumnManagement';
import { ColumnManagementContext } from '../../context/ColumnManagementProvider';
import { CurrentColumnsItems } from './CurrentColumnsItems';
export const CurrentColumns = () => {
    const { testId, items: { currentColumns }, translations: { currentTitle }, } = useContext(ColumnManagementContext);
    const id = useId();
    return (React.createElement(ColumnsWrapper, { ...getTestAttributes(`${testId}_CURRENT_COLUMNS`) },
        currentTitle && (React.createElement(Title, { id: id }, `${currentTitle} (${currentColumns.length})`)),
        React.createElement(ListWrapper, { "aria-labelledby": id, role: "grid" },
            React.createElement(SortableList, { items: currentColumns, type: ColumnsType.CurrentColumns },
                React.createElement(CurrentColumnsItems, null)))));
};
