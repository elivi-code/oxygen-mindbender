/// <reference types="react" />
import { UniqueIdentifier } from '@dnd-kit/core';
import { ColumnManagementItemsProps, ColumnManagementTranslations } from '../types/ColumnManagement';
import { TelemetryInterface } from '../types/Telemetry';
export interface ColumnManagementContextProps {
    translations: ColumnManagementTranslations;
    items: ColumnManagementItemsProps;
    setItems?: React.Dispatch<React.SetStateAction<ColumnManagementItemsProps>>;
    setIsCurrentItemsChanged?: React.Dispatch<React.SetStateAction<boolean>>;
    activeId?: UniqueIdentifier;
    setActiveId?: React.Dispatch<React.SetStateAction<UniqueIdentifier | undefined>>;
    testId?: string;
    telemetryProps?: TelemetryInterface;
    isAvailableColumnRemovable?: boolean;
    announceColumnChange: (columnName: string, action: 'added' | 'removed') => void;
}
export declare const ColumnManagementContext: import("react").Context<ColumnManagementContextProps>;
//# sourceMappingURL=ColumnManagementProvider.d.ts.map