import { MOCK_AVAILABLE_COLUMNS, MOCK_AVAILABLE_COLUMNS_TOOLTIP, MOCK_CURRENT_COLUMNS, MOCK_CURRENT_COLUMNS_TOOLTIP, } from './ColumnManagement';
import { DEFAULT_TRANSLATIONS } from '../constants/translations';
export const MOCK_COLUMN_MANAGEMENT_CONTEXT = {
    translations: DEFAULT_TRANSLATIONS,
    items: {
        availableColumns: MOCK_AVAILABLE_COLUMNS,
        currentColumns: MOCK_CURRENT_COLUMNS,
    },
    announceColumnChange: () => { },
    testId: 'COLUMN_MANAGEMENT',
};
export const MOCK_COLUMN_MANAGEMENT_CONTEXT_TOOLTIP = {
    ...MOCK_COLUMN_MANAGEMENT_CONTEXT,
    items: {
        availableColumns: MOCK_AVAILABLE_COLUMNS_TOOLTIP,
        currentColumns: MOCK_CURRENT_COLUMNS_TOOLTIP,
    },
};
