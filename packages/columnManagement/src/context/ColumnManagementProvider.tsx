import { createContext } from 'react';
import { UniqueIdentifier } from '@dnd-kit/core';
import {
  ColumnManagementItemsProps,
  ColumnManagementTranslations,
} from '../types/ColumnManagement';
import { TelemetryInterface } from '../types/Telemetry';
import { DEFAULT_TRANSLATIONS } from '../constants/translations';

export interface ColumnManagementContextProps {
  translations: ColumnManagementTranslations;
  items: ColumnManagementItemsProps;
  setItems?: React.Dispatch<React.SetStateAction<ColumnManagementItemsProps>>;
  setIsCurrentItemsChanged?: React.Dispatch<React.SetStateAction<boolean>>;
  activeId?: UniqueIdentifier;
  setActiveId?: React.Dispatch<
    React.SetStateAction<UniqueIdentifier | undefined>
  >;
  testId?: string;
  telemetryProps?: TelemetryInterface;
  isAvailableColumnRemovable?: boolean;
  announceColumnChange: (
    columnName: string,
    action: 'added' | 'removed',
  ) => void;
}

export const ColumnManagementContext =
  createContext<ColumnManagementContextProps>({
    translations: {
      addBtnTitle: undefined,
      availableTitle: undefined,
      currentTitle: undefined,
      draggableBtnTitle: undefined,
      lockIconTitle: undefined,
      removeBtnTitle: undefined,
      getColumnAddedMessage: DEFAULT_TRANSLATIONS.getColumnAddedMessage,
      getColumnRemovedMessage: DEFAULT_TRANSLATIONS.getColumnRemovedMessage,
    },
    announceColumnChange: () => {},
    items: {
      availableColumns: [],
      currentColumns: [],
    },
  });
