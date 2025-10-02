import {
  ColumnInterface,
  ColumnManagementTranslations,
} from './ColumnManagement';
import { TelemetryInterface } from './Telemetry';

export interface ModalTranslations extends ColumnManagementTranslations {
  modalCancel: string;
  modalDescription: string;
  modalHeaderTitle: string;
  modalReset: string;
  modalSave: string;
}

export interface ModalColumnManagementProps {
  availableColumns: ColumnInterface[];
  currentColumns: ColumnInterface[];
  defaultColumns?: ColumnInterface[];
  onClose(): void;
  onSave(currentItems: ColumnInterface[]): void;
  onReset?(): void;
  modalTestId?: string;
  translations?: ModalTranslations;
  testId?: string;
  telemetryProps?: TelemetryInterface;
}
