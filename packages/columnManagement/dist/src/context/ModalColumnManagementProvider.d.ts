/// <reference types="react" />
import { ColumnInterface } from '../types/ColumnManagement';
export interface ModalColumnManagementContextProps {
    isResetBtnTriggered?: boolean;
    defaultColumns?: ColumnInterface[];
    initialCurrentColumns: ColumnInterface[];
}
export declare const ModalColumnManagementContext: import("react").Context<ModalColumnManagementContextProps>;
//# sourceMappingURL=ModalColumnManagementProvider.d.ts.map