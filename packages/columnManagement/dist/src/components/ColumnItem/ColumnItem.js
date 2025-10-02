import React, { useContext } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { LockIcon, PlusIcon, TrashIcon } from '@8x8/oxygen-icon';
import { IconButton } from '@8x8/oxygen-button';
import { getTestAttributes } from '@8x8/oxygen-config';
import Tooltip from '@8x8/oxygen-tooltip';
import { ColumnsType } from '../../types/ColumnManagement';
import { ColumnManagementContext } from '../../context/ColumnManagementProvider';
import { Item, Label, LockedIcon, OrderNumber, Wrapper, } from './styled/ColumnItem';
import { stopPropagation } from '../../utils/stopPropagation';
export const ColumnItem = ({ item, onAction, type, setIsActionFocused, }) => {
    const { testId, translations: { lockIconTitle, addBtnTitle, removeBtnTitle }, } = useContext(ColumnManagementContext);
    const addBtnTooltip = `${addBtnTitle} ${item.name}`;
    const removeBtnTooltip = `${removeBtnTitle} ${item.name}`;
    const { isSorting, newIndex } = useSortable({
        id: item.id,
    });
    const handleFocus = () => {
        if (setIsActionFocused) {
            setIsActionFocused(true);
        }
    };
    const handleBlur = () => {
        if (setIsActionFocused) {
            setIsActionFocused(false);
        }
    };
    const renderLabel = item.tooltipText ? (React.createElement(Tooltip, { title: item.tooltipText, includeWrapper: false },
        React.createElement(Label, { ...getTestAttributes(`${testId}_LABEL`), title: item.tooltipText }, item.name))) : (React.createElement(Label, { ...getTestAttributes(`${testId}_LABEL`) }, item.name));
    if (type === ColumnsType.CurrentColumns) {
        const isItemLocked = !!item.isLocked;
        const icon = isItemLocked ? (React.createElement(Wrapper, null,
            React.createElement(LockedIcon, { ...getTestAttributes(`${testId}_LOCK_ICON`) },
                React.createElement(LockIcon, { title: lockIconTitle, size: 16 })))) : (React.createElement(Wrapper, null,
            React.createElement(IconButton, { "aria-label": removeBtnTooltip, onClick: () => onAction(item), isDisabled: isSorting, onKeyDown: stopPropagation, testId: `${testId}_TRASH_BIN_BTN`, onFocus: handleFocus, onBlur: handleBlur },
                React.createElement(TrashIcon, { size: 16 }))));
        return (React.createElement(Item, { role: "gridcell", ...getTestAttributes(`${testId}_COLUMN_ITEM`) },
            React.createElement(OrderNumber, { ...getTestAttributes(`${testId}_ORDER_NUMBER`) }, newIndex + 1),
            renderLabel,
            icon));
    }
    return (React.createElement(Item, { role: "gridcell", ...getTestAttributes(`${testId}_COLUMN_ITEM`) },
        renderLabel,
        React.createElement(Wrapper, null,
            React.createElement(IconButton, { "aria-label": addBtnTooltip, onClick: () => onAction(item), isDisabled: isSorting, onKeyDown: stopPropagation, testId: `${testId}_PLUS_BTN`, onFocus: handleFocus, onBlur: handleBlur },
                React.createElement(PlusIcon, { size: 16 })))));
};
