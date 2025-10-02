import { useContext } from 'react';
import { SidebarContext } from '../components/Sidebar/SidebarProvider';

export const useSidebar = () => {
  const context = useContext(SidebarContext);

  return context;
};
