import React, { PureComponent } from 'react';
import { DateRange } from '../types';
import { InternalCalendarProps } from './CalendarProps';
export interface OwnProps {
    day: Date;
    preview?: DateRange;
    isPassive?: boolean;
    isDisabled?: boolean;
    isToday?: boolean;
    isWeekend?: boolean;
    isStartOfWeek?: boolean;
    isEndOfWeek?: boolean;
    isStartOfMonth?: boolean;
    isEndOfMonth?: boolean;
    onClick?: (day: Date) => void;
    onPreviewChange?: (day?: Date) => void;
    focusedButtonId?: string;
    onFocus?: (day: Date) => void;
}
export type DayProps = OwnProps & Pick<InternalCalendarProps, 'testId' | 'displayMode' | 'range' | 'date' | 'dayNumberFormat' | 'locale' | 'theme'>;
type DayDefaultProps = Required<Pick<DayProps, 'testId' | 'displayMode' | 'isPassive' | 'isDisabled' | 'isToday' | 'isWeekend' | 'isStartOfWeek' | 'isEndOfWeek' | 'isStartOfMonth' | 'isEndOfMonth' | 'dayNumberFormat'>>;
declare class Day extends PureComponent<DayProps> {
    static defaultProps: DayDefaultProps;
    onKeyEvent: (event: React.KeyboardEvent<HTMLDivElement>) => void;
    onMouseEvent: ({ type }: {
        type: string;
    }) => void;
    getSelectionProps: () => {
        isInRange: boolean;
        isStartEdge: boolean;
        isEndEdge: boolean;
        isVisible: boolean;
    } | {
        isInRange?: undefined;
        isStartEdge?: undefined;
        isEndEdge?: undefined;
        isVisible?: undefined;
    };
    getPreviewProps: () => {};
    getRangeProps: (start: Date, end?: Date) => {
        isInRange: boolean;
        isStartEdge: boolean;
        isEndEdge: boolean;
        isVisible: boolean;
    };
    getDayTabIndex: (dayId: string) => 0 | -1;
    render(): React.JSX.Element;
}
declare const _default: typeof Day & React.ForwardRefExoticComponent<OwnProps & Pick<InternalCalendarProps, "date" | "theme" | "testId" | "displayMode" | "dayNumberFormat" | "locale" | "range"> & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=Day.d.ts.map