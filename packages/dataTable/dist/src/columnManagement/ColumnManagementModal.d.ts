import { ModalColumnManagement } from '@8x8/oxygen-column-management';
import React, { ComponentProps } from 'react';
type ModalColumnManagementType = ComponentProps<typeof ModalColumnManagement>;
interface Props extends ModalColumnManagementType {
    isOpened?: boolean;
}
declare const ColumnManagementModal: React.FC<Props>;
export { ColumnManagementModal, Props as ColumnManagementModalProps };
//# sourceMappingURL=ColumnManagementModal.d.ts.map