import { ModalColumnManagement } from '@8x8/oxygen-column-management';
import React, { ComponentProps } from 'react';

type ModalColumnManagementType = ComponentProps<typeof ModalColumnManagement>;

interface Props extends ModalColumnManagementType {
  isOpened?: boolean;
}

const ColumnManagementModal: React.FC<Props> = ({ isOpened, ...rest }) =>
  isOpened ? <ModalColumnManagement {...rest} /> : null;

export { ColumnManagementModal, Props as ColumnManagementModalProps };
