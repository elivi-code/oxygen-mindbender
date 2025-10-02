import { DateTimeType } from '../types';
declare function convertDateTimeRangeToDates(dateTimeRange?: Partial<{
    startDate: string | Date;
    endDate: string | Date;
}>): {
    startDate?: undefined;
    endDate?: undefined;
} | {
    startDate: Date;
    endDate: Date;
};
declare function convertDateTimeRangeToString(dateTimeRange?: DateTimeType): {
    startDate: string;
    endDate: string;
};
export { convertDateTimeRangeToDates, convertDateTimeRangeToString };
//# sourceMappingURL=dateTimeRangeUtils.d.ts.map