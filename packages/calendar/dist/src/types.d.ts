import { AllComponentsThemes } from '@8x8/oxygen-constants';
export type CalendarTheme = AllComponentsThemes['calendar'];
export interface DateOptions {
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    customEvenMonths?: boolean;
}
export interface DateRange {
    startDate: Date;
    endDate?: Date;
}
export type DisplayMode = 'date' | 'dateRange';
//# sourceMappingURL=types.d.ts.map