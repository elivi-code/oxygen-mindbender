/// <reference types="react" />
import { UniqueIdentifier } from '@dnd-kit/core';
import { ColumnManagementItemsProps } from '../types/ColumnManagement';
import { TelemetryInterface } from '../types/Telemetry';
export declare function useDragHandler(items: ColumnManagementItemsProps, setItems: React.Dispatch<React.SetStateAction<ColumnManagementItemsProps>>, telemetryProps?: TelemetryInterface): {
    activeId: UniqueIdentifier | undefined;
    setActiveId: import("react").Dispatch<import("react").SetStateAction<UniqueIdentifier | undefined>>;
    isCurrentItemsChanged: boolean;
    setIsCurrentItemsChanged: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    collisionDetectionStrategy: import("@dnd-kit/core").CollisionDetection;
    handleDragStart: ({ active }: import("@dnd-kit/core").DragStartEvent) => void;
    handleDragEnd: (event: import("@dnd-kit/core").DragEndEvent) => void;
    handleDragCancel: () => void;
    handleDragOver: (event: import("@dnd-kit/core").DragOverEvent) => void;
    isAvailableColumnRemovable: boolean;
};
//# sourceMappingURL=useDragHandler.d.ts.map