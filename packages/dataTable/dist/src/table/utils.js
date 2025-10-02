var CellTypeValues;
(function (CellTypeValues) {
    CellTypeValues["Small"] = "small";
    CellTypeValues["Medium"] = "medium";
    CellTypeValues["Large"] = "large";
})(CellTypeValues || (CellTypeValues = {}));
var AlignTypeValues;
(function (AlignTypeValues) {
    AlignTypeValues["Left"] = "left";
    AlignTypeValues["Center"] = "center";
    AlignTypeValues["Right"] = "right";
})(AlignTypeValues || (AlignTypeValues = {}));
const defaultType = CellTypeValues.Large;
const widthMappings = {
    // first value is the size from the design, second is the 8x px padding on either side
    // padding instead of a gap on the row so that the scrollable content doesn't become visible when scrolling underneath
    // the gap between sticky cells
    // TODO: have a discussion with Andrei about getting the padding value from the theme or maybe a different solution
    [CellTypeValues.Small]: 50 + 16,
    [CellTypeValues.Medium]: 100 + 16,
    [CellTypeValues.Large]: 150 + 16,
};
const stickyWidthMappings = {
    [CellTypeValues.Small]: 50 + 16,
    [CellTypeValues.Medium]: 100 + 16,
    [CellTypeValues.Large]: 200 + 16,
};
const getColumnMeta = ({ type = defaultType, pinned }) => ({
    // TODO: see with Andrei if we  want to allow custom widths for columns, or only allow the 3 types defined in design
    // if we do we should also allow the flexible prop to be overridden
    width: pinned ? stickyWidthMappings[type] : widthMappings[type],
    flexible: type === CellTypeValues.Large,
});
// TODO if design changes and allows for nested headers we need to update the logic to account for thath
const getPinnedColumns = (columnDefs) => {
    if (!columnDefs.length) {
        return {};
    }
    let hasPinnedColumns = false;
    let lastPinnedColumnId;
    let currentOffset = 0;
    const pinnedColumns = {};
    for (const columnDef of columnDefs) {
        if (columnDef.pinned) {
            hasPinnedColumns = true;
            pinnedColumns[columnDef.id] = {
                offset: currentOffset,
                // for now design only allows for left pinned columns, we still add position to the API so if
                // in the future right position needs to be supported it will be backwards compatible
                position: 'left',
            };
            lastPinnedColumnId = columnDef.id;
            currentOffset += stickyWidthMappings[columnDef.type || defaultType];
        }
    }
    // design calls for at least one sticky column so if none are defined or none of th sticky ones are visible
    // make the first column to being sticky
    if (!hasPinnedColumns) {
        const firstColumn = columnDefs[0];
        pinnedColumns[firstColumn.id] = {
            offset: 0,
            position: 'left',
        };
        lastPinnedColumnId = firstColumn.id;
    }
    pinnedColumns[lastPinnedColumnId].isLastPinnedColumn = true;
    return pinnedColumns;
};
const adaptColumnDefinition = (columnDef) => {
    const { width, flexible } = getColumnMeta({
        pinned: columnDef.meta?.pinned,
        type: columnDef.meta?.type,
    });
    return {
        ...columnDef,
        size: width,
        meta: {
            ...columnDef.meta,
            flexible: columnDef.meta?.flexible ?? flexible,
        },
    };
};
export { getPinnedColumns, stickyWidthMappings, widthMappings, adaptColumnDefinition, };
