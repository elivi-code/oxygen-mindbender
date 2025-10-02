/// <reference types="react" />
import { DragStartEvent, UniqueIdentifier } from '@dnd-kit/core';
import { ColumnManagementItemsProps, ColumnsType } from '../types/ColumnManagement';
interface dragStartHandlerProps {
    items: ColumnManagementItemsProps;
    setActiveContainerDragEnd: React.Dispatch<React.SetStateAction<ColumnsType | undefined>>;
    setIsCurrentItemsChanged: React.Dispatch<React.SetStateAction<boolean>>;
    setActiveId: React.Dispatch<React.SetStateAction<UniqueIdentifier | undefined>>;
}
export declare function useDragStartHandler({ items, setActiveContainerDragEnd, setIsCurrentItemsChanged, setActiveId, }: dragStartHandlerProps): ({ active }: DragStartEvent) => void;
export {};
//# sourceMappingURL=useDragStartHandler.d.ts.map