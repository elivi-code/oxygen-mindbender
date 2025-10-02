export declare const MOCK_COLUMN_MANAGEMENT_CONTEXT: {
    translations: import("..").ModalTranslations;
    items: {
        availableColumns: {
            id: string;
            name: string;
        }[];
        currentColumns: ({
            id: string;
            name: string;
            isLocked: boolean;
        } | {
            id: string;
            name: string;
            isLocked?: undefined;
        })[];
    };
    announceColumnChange: () => void;
    testId: string;
};
export declare const MOCK_COLUMN_MANAGEMENT_CONTEXT_TOOLTIP: {
    items: {
        availableColumns: {
            id: string;
            name: string;
            tooltipText: string;
        }[];
        currentColumns: ({
            id: string;
            name: string;
            isLocked: boolean;
            tooltipText?: undefined;
        } | {
            id: string;
            name: string;
            tooltipText: string;
            isLocked?: undefined;
        })[];
    };
    translations: import("..").ModalTranslations;
    announceColumnChange: () => void;
    testId: string;
};
//# sourceMappingURL=ColumnManagementContext.d.ts.map