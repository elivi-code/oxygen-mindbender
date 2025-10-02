import React, { ReactNode } from 'react';
interface ActionType {
    title: string;
    onClick: () => void;
    testId?: string;
}
type ActionItemProps = ActionType & {
    icon: ReactNode;
};
declare const ActionItem: React.FC<ActionItemProps>;
declare const RefreshAction: ({ title, onClick, ...rest }: ActionType) => React.JSX.Element;
declare const DownloadAction: ({ title, onClick, ...rest }: ActionType) => React.JSX.Element;
declare const ColumnInsertAction: ({ title, onClick, ...rest }: ActionType) => React.JSX.Element;
export { RefreshAction, DownloadAction, ColumnInsertAction, ActionItem };
//# sourceMappingURL=ActionItems.d.ts.map