import React from 'react';
import RadioButton from '@8x8/oxygen-radio';
import { CheckboxCell } from './CheckboxCell';
const defaultTranslations = {
    selectAllRowsLabel: 'Select all rows',
    selectRowLabel: 'Select row',
    deselectRowLabel: 'Deselect row',
};
const getSelectColumnDef = ({ selectAllRowsLabel, selectRowLabel, deselectRowLabel, } = defaultTranslations) => ({
    id: 'selectRow',
    header: ({ table, isLoading }) => {
        return (React.createElement(CheckboxCell, { testId: "HEADER_CHECKBOX_CELL", inputProps: {
                'aria-label': selectAllRowsLabel,
            }, checked: !isLoading && table.getIsAllPageRowsSelected(), indeterminate: !isLoading && table.getIsSomePageRowsSelected(), onChange: checked => table.getToggleAllPageRowsSelectedHandler()({ target: { checked } }), 
            // do not allow selecting while fetching data as it will have effect on the previously loaded data
            // and may be confusing for the user
            isDisabled: isLoading }));
    },
    cell: ({ row }) => {
        const { index, getIsSelected } = row;
        const ariaLabel = `${getIsSelected() ? deselectRowLabel : selectRowLabel} ${index}`;
        return (React.createElement(CheckboxCell, { testId: `ROW_CHECKBOX_CELL_${index}`, inputProps: { 'aria-label': ariaLabel }, checked: row.getIsSelected(), onChange: checked => row.getToggleSelectedHandler()({ target: { checked } }) }));
    },
    enableSorting: false,
    meta: {
        columnManagement: {
            visibleByDefault: true,
            locked: true,
            label: 'Select row',
        },
        pinned: true,
        type: 'small',
    },
});
const getSingleSelectColumnDef = ({ selectRowLabel, } = defaultTranslations) => ({
    id: 'singleSelectRow',
    cell: ({ row, table }) => {
        return (React.createElement(RadioButton, { testId: `ROW_RADIO_BUTTON_CELL_${row.index}`, inputProps: {
                'aria-label': `${selectRowLabel} ${row.index}`,
            }, isChecked: row.getIsSelected(), onChange: () => table.setRowSelection(() => ({ [row.id]: true })) }));
    },
    enableSorting: false,
    meta: {
        columnManagement: {
            visibleByDefault: true,
            locked: true,
            label: 'Select row',
        },
        pinned: true,
        type: 'small',
    },
});
export { getSelectColumnDef, getSingleSelectColumnDef };
