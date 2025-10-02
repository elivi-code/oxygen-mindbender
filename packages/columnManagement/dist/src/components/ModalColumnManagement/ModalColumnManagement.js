import React, { useEffect, useMemo, useState } from 'react';
import isEqual from 'lodash.isequal';
import differenceBy from 'lodash.differenceby';
import Modal, { ModalFooter, MODAL_SIZE, ModalContent, } from '@8x8/oxygen-modal';
import { useOxygen } from '@8x8/oxygen-config';
import Button, { buttonVariant } from '@8x8/oxygen-button';
import { ColumnManagement } from '../ColumnManagement/ColumnManagement';
import { Description, StyledModalHeader } from './styled/ModalColumnManagement';
import { DEFAULT_TRANSLATIONS } from '../../constants/translations';
import { ModalColumnManagementContext } from '../../context/ModalColumnManagementProvider';
export const ModalColumnManagement = ({ availableColumns, currentColumns, defaultColumns, onClose, onReset, onSave, modalTestId = 'MODAL_COLUMN_MANAGEMENT', testId, translations, telemetryProps, }) => {
    const [updatedCurrentItems, setUpdatedCurrentItems] = useState(currentColumns);
    const [isResetBtnEnabled, setIsResetBtnEnabled] = useState(true);
    const [isCloseBtnEnabled, setIsCloseBtnEnabled] = useState(false);
    const [isResetBtnTriggered, setIsResetBtnTriggered] = useState(false);
    const { telemetryCallback } = useOxygen();
    const ModalColumnManagementContextValue = useMemo(() => {
        return {
            isResetBtnTriggered,
            defaultColumns,
            initialCurrentColumns: currentColumns,
        };
    }, [isResetBtnTriggered, defaultColumns, currentColumns]);
    const handleUpdate = (items) => {
        setUpdatedCurrentItems(items);
    };
    const handleCancel = () => {
        if (telemetryProps && telemetryCallback) {
            telemetryCallback('edit_columns_cancelled', { ...telemetryProps });
        }
        onClose();
    };
    const handleSave = () => {
        if (telemetryProps && telemetryCallback) {
            telemetryCallback('edit_columns_saved', {
                ...telemetryProps,
                activeColumnsNumber: updatedCurrentItems.length,
                availableColumnsNumber: differenceBy(availableColumns, updatedCurrentItems, 'name').length,
                activeColumnsList: updatedCurrentItems,
            });
        }
        onSave(updatedCurrentItems);
    };
    const handleReset = () => {
        if (onReset) {
            onReset();
        }
        if (telemetryProps && telemetryCallback) {
            telemetryCallback('edit_columns_reset', { ...telemetryProps });
        }
        setIsResetBtnEnabled(false);
        setIsResetBtnTriggered(true);
    };
    useEffect(() => {
        const resetCurrentItems = !defaultColumns
            ? ModalColumnManagementContextValue.initialCurrentColumns
            : defaultColumns;
        setIsCloseBtnEnabled(!isEqual(updatedCurrentItems, currentColumns));
        setIsResetBtnEnabled(!isEqual(updatedCurrentItems, resetCurrentItems));
    }, [isResetBtnEnabled, updatedCurrentItems, defaultColumns]);
    useEffect(() => {
        if (isResetBtnTriggered) {
            setIsResetBtnTriggered(false);
        }
    }, [isResetBtnTriggered]);
    return (React.createElement(Modal, { testId: modalTestId, size: MODAL_SIZE.BIG, onClose: handleCancel },
        React.createElement(StyledModalHeader, { title: translations?.modalHeaderTitle ||
                DEFAULT_TRANSLATIONS.modalHeaderTitle, onClose: handleCancel }),
        React.createElement(ModalContent, null,
            React.createElement(Description, null, translations?.modalDescription ||
                DEFAULT_TRANSLATIONS.modalDescription),
            React.createElement(ModalColumnManagementContext.Provider, { value: ModalColumnManagementContextValue },
                React.createElement(ColumnManagement, { availableColumns: availableColumns, currentColumns: currentColumns, onUpdate: handleUpdate, testId: testId, translations: translations, telemetryProps: telemetryProps }))),
        React.createElement(ModalFooter, null,
            React.createElement(Button, { isDisabled: !isResetBtnEnabled, onClick: handleReset, variant: buttonVariant.text, testId: `${modalTestId}_${DEFAULT_TRANSLATIONS.modalReset}` }, translations?.modalReset || DEFAULT_TRANSLATIONS.modalReset),
            React.createElement(Button, { onClick: handleCancel, variant: buttonVariant.secondary, testId: `${modalTestId}_${DEFAULT_TRANSLATIONS.modalCancel}` }, translations?.modalCancel || DEFAULT_TRANSLATIONS.modalCancel),
            React.createElement(Button, { isDisabled: !isCloseBtnEnabled, onClick: handleSave, testId: `${modalTestId}_${DEFAULT_TRANSLATIONS.modalSave}` }, translations?.modalSave || DEFAULT_TRANSLATIONS.modalSave))));
};
