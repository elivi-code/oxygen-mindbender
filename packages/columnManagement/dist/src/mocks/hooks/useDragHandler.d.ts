import { DragEndEvent, DragOverEvent } from '@dnd-kit/core';
export declare const MOCK_CURRENT_ACTIVE_EVENTS: DragEndEvent;
export declare const MOCK_AVAILABLE_ACTIVE_EVENTS: DragOverEvent;
export declare const MOCK_CURRENT_AVAILABLE_ACTIVE_EVENTS: DragOverEvent;
export declare const MOCK_COLLISION: {
    active: {
        id: string;
        data: {
            current: {
                sortable: {
                    containerId: string;
                    index: number;
                    items: string[];
                };
            };
        };
        rect: {
            current: {
                initial: null;
                translated: null;
            };
        };
    };
    pointerCoordinates: {
        x: number;
        y: number;
    };
    collisionRect: {
        top: number;
        left: number;
        width: number;
        height: number;
        bottom: number;
        right: number;
    };
    droppableContainers: {
        id: string;
        key: string;
        disabled: boolean;
        node: {
            current: null;
        };
        rect: {
            current: {
                width: number;
                height: number;
                top: number;
                bottom: number;
                right: number;
                left: number;
            };
        };
        data: {
            current: {
                sortable: {
                    containerId: string;
                    index: number;
                    items: string[];
                };
            };
        };
    }[];
    droppableRects: Map<string, {
        width: number;
        height: number;
        top: number;
        bottom: number;
        right: number;
        left: number;
    }>;
};
export declare const MOCK_COLLISION_LOCKED: {
    active: {
        id: string;
        data: {
            current: {
                sortable: {
                    containerId: string;
                    index: number;
                    items: string[];
                };
            };
        };
        rect: {
            current: {
                initial: null;
                translated: null;
            };
        };
    };
    pointerCoordinates: {
        x: number;
        y: number;
    };
    collisionRect: {
        top: number;
        left: number;
        width: number;
        height: number;
        bottom: number;
        right: number;
    };
    droppableContainers: {
        id: string;
        key: string;
        disabled: boolean;
        node: {
            current: null;
        };
        rect: {
            current: {
                width: number;
                height: number;
                top: number;
                bottom: number;
                right: number;
                left: number;
            };
        };
        data: {
            current: {
                sortable: {
                    containerId: string;
                    index: number;
                    items: string[];
                };
            };
        };
    }[];
    droppableRects: Map<string, {
        width: number;
        height: number;
        top: number;
        bottom: number;
        right: number;
        left: number;
    }>;
};
export declare const MOCK_COLLISION_CONTAINER: {
    active: {
        id: string;
        data: {
            current: {
                sortable: {
                    containerId: string;
                    index: number;
                    items: string[];
                };
            };
        };
        rect: {
            current: {
                initial: null;
                translated: null;
            };
        };
    };
    pointerCoordinates: {
        x: number;
        y: number;
    };
    collisionRect: {
        top: number;
        left: number;
        width: number;
        height: number;
        bottom: number;
        right: number;
    };
    droppableContainers: {
        id: string;
        key: string;
        disabled: boolean;
        node: {
            current: null;
        };
        rect: {
            current: {
                width: number;
                height: number;
                top: number;
                bottom: number;
                right: number;
                left: number;
            };
        };
        data: {
            current: {
                children: ({
                    id: string;
                    name: string;
                    isLocked: boolean;
                } | {
                    id: string;
                    name: string;
                    isLocked?: undefined;
                })[];
                type: string;
                sortable: {
                    containerId: string;
                    index: number;
                    items: string[];
                };
            };
        };
    }[];
    droppableRects: Map<string, {
        width: number;
        height: number;
        top: number;
        bottom: number;
        right: number;
        left: number;
    }>;
};
export declare const MOCK_ACTIVE_CURRENT_OVER_AVAILABLE: DragOverEvent;
//# sourceMappingURL=useDragHandler.d.ts.map