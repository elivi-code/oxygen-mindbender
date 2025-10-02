import { DisplayColumnDef } from '@tanstack/react-table';
interface ColumnDefTranslations {
    selectAllRowsLabel: string;
    selectRowLabel: string;
    deselectRowLabel: string;
}
declare const getSelectColumnDef: <TData>({ selectAllRowsLabel, selectRowLabel, deselectRowLabel, }?: ColumnDefTranslations) => DisplayColumnDef<TData, unknown>;
declare const getSingleSelectColumnDef: <TData>({ selectRowLabel, }?: Pick<ColumnDefTranslations, 'selectRowLabel'>) => DisplayColumnDef<TData, unknown>;
export { getSelectColumnDef, getSingleSelectColumnDef };
//# sourceMappingURL=CellDefinitions.d.ts.map