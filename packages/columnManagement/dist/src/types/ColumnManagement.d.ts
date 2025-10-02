import { UniqueIdentifier } from '@dnd-kit/core';
import { TelemetryInterface } from './Telemetry';
export declare enum ColumnsType {
    AvailableColumns = "availableColumns",
    CurrentColumns = "currentColumns"
}
export interface ColumnInterface {
    id: UniqueIdentifier;
    name: string;
    isLocked?: boolean;
    tooltipText?: string;
}
export interface ColumnManagementTranslations {
    availableTitle?: string;
    addBtnTitle?: string;
    currentTitle?: string;
    draggableBtnTitle?: string;
    lockIconTitle?: string;
    removeBtnTitle?: string;
    availableEmptyStateMessage?: string;
    currentEmptyStateMessage?: string;
    getColumnAddedMessage?: (columnName: string) => string;
    getColumnRemovedMessage?: (columnName: string) => string;
}
export interface ColumnManagementProps {
    availableColumns: ColumnInterface[];
    currentColumns: ColumnInterface[];
    defaultColumns?: ColumnInterface[];
    onUpdate(currentItems: ColumnInterface[]): void;
    testId?: string;
    translations?: ColumnManagementTranslations;
    telemetryProps?: TelemetryInterface;
}
export interface ColumnManagementItemsProps {
    availableColumns: ColumnInterface[];
    currentColumns: ColumnInterface[];
}
//# sourceMappingURL=ColumnManagement.d.ts.map