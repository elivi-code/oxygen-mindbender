export declare const keyboardSortableContext: {
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
    over: {
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
    collisionRect: {
        top: number;
        left: number;
        width: number;
        height: number;
        bottom: number;
        right: number;
    };
    droppableContainers: Map<string, {
        id: string;
        key: string;
        disabled: boolean;
        node: {
            current: null;
        };
        rect: {
            current: null;
        };
        data: {
            current: {
                sortable: {
                    containerId: string;
                    index: number;
                    items: string[];
                };
                type?: undefined;
                children?: undefined;
            };
        };
    } | {
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
                type?: undefined;
                children?: undefined;
            };
        };
    } | {
        id: string;
        key: string;
        disabled: boolean;
        node: {
            current: {
                width: number;
                height: number;
                top: number;
                bottom: number;
                right: number;
                left: number;
            };
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
                type?: undefined;
                children?: undefined;
            };
        };
    } | {
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
                type: string;
                children: ({
                    id: string;
                    name: string;
                    isLocked: boolean;
                } | {
                    id: string;
                    name: string;
                    isLocked?: undefined;
                })[];
            };
        };
    }>;
    droppableRects: Map<string, {
        width: number;
        height: number;
        top: number;
        bottom: number;
        right: number;
        left: number;
    }>;
};
//# sourceMappingURL=keyboardSortableContext.d.ts.map