import React from 'react';
import { IconButton } from '@8x8/oxygen-button';
import { ColumnInsertIcon, DownloadIcon, RefreshIcon } from '@8x8/oxygen-icon';
const ActionItem = ({ icon, title, onClick, ...rest }) => (React.createElement(IconButton, { onClick: onClick, title: title, ...rest }, icon));
const RefreshAction = ({ title, onClick, ...rest }) => (React.createElement(ActionItem, { icon: React.createElement(RefreshIcon, null), title: title, onClick: onClick, ...rest }));
const DownloadAction = ({ title, onClick, ...rest }) => (React.createElement(ActionItem, { icon: React.createElement(DownloadIcon, null), title: title, onClick: onClick, ...rest }));
const ColumnInsertAction = ({ title, onClick, ...rest }) => (React.createElement(ActionItem, { icon: React.createElement(ColumnInsertIcon, null), title: title, onClick: onClick, ...rest }));
export { RefreshAction, DownloadAction, ColumnInsertAction, ActionItem };
