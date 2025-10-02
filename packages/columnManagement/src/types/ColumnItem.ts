import { UniqueIdentifier } from '@dnd-kit/core';
import {
  ColumnInterface,
  ColumnManagementItemsProps,
  ColumnsType,
} from './ColumnManagement';

export interface ColumnItemOverlayProps {
  items: ColumnManagementItemsProps;
  activeId: UniqueIdentifier;
  type: ColumnsType;
  testId?: string;
}

export interface ColumnItemProps {
  item: ColumnInterface;
  type?: ColumnsType;
  testId?: string;
  setIsActionFocused?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsActionClicked?: React.Dispatch<React.SetStateAction<boolean>>;
  onAction: (item: ColumnInterface) => void;
}
