const getAvailableAndDefaultColumns = (reactTableColumns) => reactTableColumns.reduce((acc, column) => {
    const meta = column.columnDef.meta || {};
    if (!meta.columnManagement) {
        meta.columnManagement = {
            locked: false,
            visibleByDefault: true,
            label: column.id,
        };
    }
    const columnManagementDefinition = {
        id: column.id,
        name: meta.columnManagement.label,
        isLocked: meta.columnManagement.locked,
    };
    if (meta.columnManagement.visibleByDefault) {
        acc.defaultColumns.push(columnManagementDefinition);
    }
    acc.availableColumns.push(columnManagementDefinition);
    return acc;
}, {
    availableColumns: [],
    defaultColumns: [],
});
export { getAvailableAndDefaultColumns };
