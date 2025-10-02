/// <reference types="react" />
import { DragOverEvent } from '@dnd-kit/core';
import { ColumnManagementItemsProps, ColumnsType } from '../types/ColumnManagement';
interface dragOverHandlerProps {
    items: ColumnManagementItemsProps;
    setItems: React.Dispatch<React.SetStateAction<ColumnManagementItemsProps>>;
    activeContainerDragEnd: ColumnsType | undefined;
    setIsAvailableColumnRemovable: React.Dispatch<React.SetStateAction<boolean>>;
}
export declare function useDragOverHandler({ items, setItems, activeContainerDragEnd, setIsAvailableColumnRemovable, }: dragOverHandlerProps): (event: DragOverEvent) => void;
export {};
//# sourceMappingURL=useDragOverHandler.d.ts.map