import themes from '@8x8/oxygen-theme';
import color from '../choices/color.const';
import size from '../choices/size.const';
import font from '../choices/font.const';
import spacing from '../choices/spacing.const';
import { dateTimeSelector, dateTimeSelectorNovo, dateTimeSelectorNovoDark, dateTimeSelectorNeoLight, dateTimeSelectorNeoDark, } from './dateTimeSelector.const';
const { light, dark, neoLight, neoDark } = themes;
const dateTimeRangeSelector = {
    ...dateTimeSelector,
    // Input Box
    width: '380px',
    // Dropdown container
    containerPadding: undefined,
    // Dropdown contents
    calendarHorizontalMargin: spacing.lg,
    calendarBottomMargin: spacing.xxl,
    dateTimeInputsPadding: spacing.sm,
    dateTimeInputsMarginBottom: spacing.sm,
    dateTimeInputsBorderSize: size.borderSizeDefault,
    dateTimeInputsBorderColor: color.cloudyBlue300,
    dateInputMarginRight: spacing.sm,
    timeInputMarginRight: spacing.sm,
    timeInputContainerMarginLeft: spacing.md,
    endTimeErrorColor: color.coral,
    endTimeErrorLineHeight: font.lineHeightXs,
    endTimeErrorFontSize: font.sizeXs,
    // Predefined List
    listBackgroundColor: color.cloudyBlue100,
    listBorderRightColor: color.cloudyBlue300,
    listBorderRightSize: size.borderSizeDefault,
    listWidth: '140px',
    listItemFontSize: font.sizeXs,
    listItemLineHeight: font.lineHeightXs,
    listItemPaddingVertical: spacing.xs,
    listItemPaddingHorizontal: `${parseInt(spacing.sm, 10) - 2 * parseInt(size.borderSizeDefault, 10)}px`,
    listItemColor: color.pickledBluewood800,
    listItemSelectedColor: color.dodgerBlue,
    listItemSelectedWidth: size.small,
    listInputMarginTop: `-${parseInt(spacing.xs, 10) - parseInt(size.borderSizeDefault, 10)}px`,
    listInputMarginBottom: `-${parseInt(spacing.xs, 10) - 2 * parseInt(size.borderSizeDefault, 10)}px`,
    listInputMarginLeft: spacing.xxs,
    listInputMarginRight: `${parseInt(spacing.xxs, 10) - parseInt(size.borderSizeDefault, 10)}px`,
    listInputHorizontalSpacing: spacing.xxs,
    listInputMinWidth: 0,
    listInputWidth: '28px',
    listInputVerticalSpacing: 0,
};
const commonProps = {
    // Input Box
    width: '380px',
    // Dropdown container
    containerPadding: undefined,
    // Dropdown contents
    calendarHorizontalMargin: light.spacing06,
    calendarBottomMargin: light.spacing08,
    dateTimeInputsPadding: light.spacing04,
    dateTimeInputsMarginBottom: light.spacing04,
    dateTimeInputsBorderSize: '1px',
    dateInputMarginRight: light.spacing04,
    timeInputMarginRight: light.spacing04,
    timeInputContainerMarginLeft: light.spacing05,
    endTimeErrorFontSize: light.label01.fontSize,
    endTimeErrorLineHeight: light.label01.lineHeight,
    // Predefined List
    listBorderRightSize: '1px',
    listWidth: '140px',
    listItemFontSize: light.label01.fontSize,
    listItemLineHeight: light.label01.lineHeight,
    listItemPaddingVertical: light.spacing03,
    listItemPaddingHorizontal: `${parseInt(light.spacing04, 10) - 2 * parseInt('1px', 10)}px`,
    listItemSelectedWidth: '4px',
    listInputMarginTop: `-${parseInt(light.spacing03, 10) - parseInt('1px', 10)}px`,
    listInputMarginBottom: `-${parseInt(light.spacing03, 10) - 2 * parseInt('1px', 10)}px`,
    listInputMarginLeft: light.spacing02,
    listInputMarginRight: `${parseInt(light.spacing02, 10) - parseInt('1px', 10)}px`,
    listInputHorizontalSpacing: light.spacing02,
    listInputMinWidth: 0,
    listInputWidth: '28px',
    listInputVerticalSpacing: 0,
};
const dateTimeRangeSelectorNovo = {
    ...dateTimeSelectorNovo,
    ...commonProps,
    dateTimeInputsBorderColor: light.ui01,
    endTimeErrorColor: light.action03,
    listBackgroundColor: light.ui05,
    listBorderRightColor: light.ui01,
    listItemColor: light.textColor01,
    listItemSelectedColor: light.focus01,
};
const dateTimeRangeSelectorNovoDark = {
    ...dateTimeSelectorNovoDark,
    ...commonProps,
    dateTimeInputsBorderColor: dark.ui01,
    endTimeErrorColor: dark.action03,
    listBackgroundColor: dark.ui05,
    listBorderRightColor: dark.ui01,
    listItemColor: dark.textColor01,
    listItemSelectedColor: dark.focus01,
};
const dateTimeRangeSelectorNeoLight = {
    ...dateTimeSelectorNeoLight,
    ...commonProps,
    dateTimeInputsBorderColor: neoLight.ui01,
    endTimeErrorColor: neoLight.action03,
    // Predefined List
    listBorderRightSize: '1px',
    listWidth: '140px',
    listItemFontSize: neoLight.label01.fontSize,
    listItemLineHeight: neoLight.label01.lineHeight,
    listBackgroundColor: neoLight.ui05,
    listBorderRightColor: neoLight.ui01,
    listItemColor: neoLight.textColor01,
    listItemSelectedColor: neoLight.focus01,
};
const dateTimeRangeSelectorNeoDark = {
    ...dateTimeSelectorNeoDark,
    ...commonProps,
    dateTimeInputsBorderColor: neoDark.ui01,
    endTimeErrorColor: neoDark.action03,
    listBackgroundColor: neoDark.ui05,
    listBorderRightColor: neoDark.ui01,
    listItemColor: neoDark.textColor01,
    listItemSelectedColor: neoDark.focus01,
};
export { dateTimeRangeSelector, dateTimeRangeSelectorNovo, dateTimeRangeSelectorNovoDark, dateTimeRangeSelectorNeoLight, dateTimeRangeSelectorNeoDark, };
