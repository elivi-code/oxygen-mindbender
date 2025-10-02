import React, { useEffect, useMemo, useState } from 'react';
export const SidebarContext = React.createContext({
    isSidebarCollapsed: false,
    setSidebarCollapsed: () => false,
});
/**
 * Wrap everything in this provider when using declarative sidebar
 */
export const SidebarProvider = ({ initialCollapsedState = false, linkComponent, linkProp, children, }) => {
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(initialCollapsedState);
    useEffect(() => {
        setSidebarCollapsed(initialCollapsedState);
    }, [initialCollapsedState]);
    const sidebarContextValue = useMemo(() => ({
        isSidebarCollapsed,
        setSidebarCollapsed,
        linkComponent,
        linkProp,
    }), [isSidebarCollapsed, setSidebarCollapsed, linkComponent, linkProp]);
    return (React.createElement(SidebarContext.Provider, { value: sidebarContextValue }, children));
};
