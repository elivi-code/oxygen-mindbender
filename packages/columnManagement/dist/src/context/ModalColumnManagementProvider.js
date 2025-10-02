import { createContext } from 'react';
export const ModalColumnManagementContext = createContext({
    isResetBtnTriggered: undefined,
    defaultColumns: undefined,
    initialCurrentColumns: [],
});
