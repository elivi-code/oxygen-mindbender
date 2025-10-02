import { createContext } from 'react';
import { ColumnInterface } from '../types/ColumnManagement';

export interface ModalColumnManagementContextProps {
  isResetBtnTriggered?: boolean;
  defaultColumns?: ColumnInterface[];
  initialCurrentColumns: ColumnInterface[];
}

export const ModalColumnManagementContext =
  createContext<ModalColumnManagementContextProps>({
    isResetBtnTriggered: undefined,
    defaultColumns: undefined,
    initialCurrentColumns: [],
  });
