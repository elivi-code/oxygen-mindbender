import { createContext } from 'react';
import { DEFAULT_TRANSLATIONS } from '../constants/translations';
export const ColumnManagementContext = createContext({
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
    announceColumnChange: () => { },
    items: {
        availableColumns: [],
        currentColumns: [],
    },
});
