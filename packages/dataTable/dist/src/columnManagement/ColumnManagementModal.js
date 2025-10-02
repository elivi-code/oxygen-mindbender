import { ModalColumnManagement } from '@8x8/oxygen-column-management';
import React from 'react';
const ColumnManagementModal = ({ isOpened, ...rest }) => isOpened ? React.createElement(ModalColumnManagement, { ...rest }) : null;
export { ColumnManagementModal };
