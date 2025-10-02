import React, { ReactNode } from 'react';
import { IconButton } from '@8x8/oxygen-button';
import { ColumnInsertIcon, DownloadIcon, RefreshIcon } from '@8x8/oxygen-icon';

interface ActionType {
  title: string;
  onClick: () => void;
  testId?: string;
}

type ActionItemProps = ActionType & {
  icon: ReactNode;
};

const ActionItem: React.FC<ActionItemProps> = ({
  icon,
  title,
  onClick,
  ...rest
}) => (
  <IconButton onClick={onClick} title={title} {...rest}>
    {icon}
  </IconButton>
);

const RefreshAction = ({ title, onClick, ...rest }: ActionType) => (
  <ActionItem
    icon={<RefreshIcon />}
    title={title}
    onClick={onClick}
    {...rest}
  />
);

const DownloadAction = ({ title, onClick, ...rest }: ActionType) => (
  <ActionItem
    icon={<DownloadIcon />}
    title={title}
    onClick={onClick}
    {...rest}
  />
);

const ColumnInsertAction = ({ title, onClick, ...rest }: ActionType) => (
  <ActionItem
    icon={<ColumnInsertIcon />}
    title={title}
    onClick={onClick}
    {...rest}
  />
);

export { RefreshAction, DownloadAction, ColumnInsertAction, ActionItem };
