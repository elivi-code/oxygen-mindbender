/// <reference types="react" />
import { DragEndEvent, UniqueIdentifier } from '@dnd-kit/core';
import { ColumnManagementItemsProps, ColumnsType } from '../types/ColumnManagement';
import { TelemetryInterface } from '../types/Telemetry';
interface handleDragHandlerProps {
    items: ColumnManagementItemsProps;
    setItems: React.Dispatch<React.SetStateAction<ColumnManagementItemsProps>>;
    activeContainerDragEnd: ColumnsType | undefined;
    setActiveContainerDragEnd: React.Dispatch<React.SetStateAction<ColumnsType | undefined>>;
    setIsCurrentItemsChanged: React.Dispatch<React.SetStateAction<boolean>>;
    activeId: UniqueIdentifier | undefined;
    setActiveId: React.Dispatch<React.SetStateAction<UniqueIdentifier | undefined>>;
    telemetryProps?: TelemetryInterface;
    setIsAvailableColumnRemovable: React.Dispatch<React.SetStateAction<boolean>>;
}
export declare function useDragEndHandler({ items, setItems, activeContainerDragEnd, setActiveContainerDragEnd, setIsCurrentItemsChanged, activeId, setActiveId, telemetryProps, setIsAvailableColumnRemovable, }: handleDragHandlerProps): (event: DragEndEvent) => void;
export {};
//# sourceMappingURL=useDragEndHandler.d.ts.map