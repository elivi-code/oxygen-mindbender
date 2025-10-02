import { ModalTranslations } from '../types/ModalColumnManagement';

export const DEFAULT_TRANSLATIONS: ModalTranslations = {
  addBtnTitle: 'Add',
  availableTitle: 'Available Columns',
  currentTitle: 'Active Columns',
  draggableBtnTitle: 'Drag',
  lockIconTitle: 'Locked Icon',
  modalCancel: 'Cancel',
  modalDescription: 'Drag and drop to add and re-order columns.',
  modalHeaderTitle: 'Edit columns',
  modalReset: 'Reset',
  modalSave: 'Save',
  removeBtnTitle: 'Remove',
  availableEmptyStateMessage: 'All available columns are being used.',
  currentEmptyStateMessage: 'All current columns are being used.',
  getColumnAddedMessage: (columnName: string) =>
    `Column ${columnName} was added to the list of visible columns`,
  getColumnRemovedMessage: (columnName: string) =>
    `Column ${columnName} was removed from the list of visible columns`,
};
