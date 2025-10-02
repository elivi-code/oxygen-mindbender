export declare const MOCK_COLUMN_REMOVED: {
    columnName: string;
    fromPosition: number;
    uiArea: string;
};
export declare const MOCK_COLUMN_ADDED: {
    columnName: string;
    uiArea: string;
};
export declare const MOCK_EDIT_COLUMNS_RESET: {
    uiArea: string;
};
export declare const MOCK_EDIT_COLUMNS_SAVED: {
    activeColumnsList: ({
        id: string;
        isLocked: boolean;
        name: string;
    } | {
        id: string;
        name: string;
        isLocked?: undefined;
    })[];
    activeColumnsNumber: number;
    availableColumnsNumber: number;
    uiArea: string;
};
//# sourceMappingURL=Telemetry.d.ts.map