import React, { useEffect, useMemo, useState } from 'react';
import {
  type SidebarContextType,
  type SidebarProviderProps,
} from '../../types';

export const SidebarContext = React.createContext<SidebarContextType>({
  isSidebarCollapsed: false,
  setSidebarCollapsed: () => false,
});

/**
 * Wrap everything in this provider when using declarative sidebar
 */
export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  initialCollapsedState = false,
  linkComponent,
  linkProp,
  children,
}) => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(
    initialCollapsedState,
  );

  useEffect(() => {
    setSidebarCollapsed(initialCollapsedState);
  }, [initialCollapsedState]);

  const sidebarContextValue: SidebarContextType = useMemo(
    () => ({
      isSidebarCollapsed,
      setSidebarCollapsed,
      linkComponent,
      linkProp,
    }),
    [isSidebarCollapsed, setSidebarCollapsed, linkComponent, linkProp],
  );

  return (
    <SidebarContext.Provider value={sidebarContextValue}>
      {children}
    </SidebarContext.Provider>
  );
};
