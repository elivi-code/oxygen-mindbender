interface DayCellProps {
    isFocused?: boolean;
    isSelected?: boolean;
    isPassive?: boolean;
    isDisabled?: boolean;
    isEdge?: boolean;
}
interface SelectionRangeProps {
    isDisabled?: boolean;
    isInRange?: boolean;
    isStartEdge?: boolean;
    isEndEdge?: boolean;
    isVisible?: boolean;
}
declare const DayCell: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, DayCellProps, never>;
declare const SelectionRange: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, SelectionRangeProps, never>;
declare const SelectionRangeEdge: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, SelectionRangeProps, never>;
declare const PreviewRange: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, SelectionRangeProps, never>;
declare const DayNumber: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    isToday?: boolean | undefined;
}, never>;
declare const TodayLine: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, DayCellProps, never>;
declare const NumberContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export { DayCell, SelectionRange, SelectionRangeEdge, PreviewRange, DayNumber, TodayLine, NumberContainer, };
//# sourceMappingURL=DayCell.d.ts.map