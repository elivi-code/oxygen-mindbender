export declare const PAGINATION_SIZE: {
    readonly small: "small";
    readonly default: "default";
};
export interface Translations {
    rowsPerPage: string;
    prevPage: string;
    numberOfPages: string;
    nextPage: string;
}
export type PaginationSize = keyof typeof PAGINATION_SIZE;
export interface PaginationState {
    pageNumber: number;
    rowsPerPage: number;
}
export interface PaginationHookProps {
    canGoBack: boolean;
    canGoNext: boolean;
    numberOfPages: number;
    pageNumber: number;
    rowsPerPage: number;
}
//# sourceMappingURL=types.d.ts.map