import React, { useMemo, memo } from 'react';
import Select from '@8x8/oxygen-select';
import styled from 'styled-components';
import { ControlWrapper } from '../../styled';
const RowsPerPageWrapper = styled(ControlWrapper) `
  gap: ${({ theme }) => theme.spacing03};
`;
const RowsPerPage = ({ onRowsPerPageChange, selectedRowsPerPage, rowsPerPageOptions, isDisabled = false, size, translations, testId, }) => {
    const rowsPerPageSelectOptions = useMemo(() => rowsPerPageOptions.map(item => ({ label: `${item}`, value: item })), [rowsPerPageOptions]);
    return (React.createElement(RowsPerPageWrapper, null,
        React.createElement(Select, { "aria-label": `${selectedRowsPerPage} ${translations.rowsPerPage}`, isSearchable: false, isClearable: false, isDisabled: isDisabled, labelValue: translations.rowsPerPage, menuPlacement: "top", onChange: option => onRowsPerPageChange(option.value), options: rowsPerPageSelectOptions, testId: `${testId}_ROWS_PER_PAGE_SELECTOR`, value: rowsPerPageSelectOptions.find(row => row.value === selectedRowsPerPage), size: size })));
};
export default memo(RowsPerPage);
