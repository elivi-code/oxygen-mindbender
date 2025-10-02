import size from '../choices/size.const';
import color from '../choices/color.const';
import font from '../choices/font.const';
import spacing from '../choices/spacing.const';

const milestoneTracker = {
  // <editor-fold desc="Milestone styling">
  milestoneProgressBarMargin: spacing.md,
  fontFamily: font.family,
  // </editor-fold>
  // <editor-fold desc="Title styling">
  milestoneTitleColorCompleted: color.pickledBluewood800,
  milestoneTitleColorUncompleted: color.cloudyBlue,
  milestoneTitleFontWeight: font.weightAttention,
  milestoneTitleFontSize: font.sizeMd,
  // </editor-fold>
  // <editor-fold desc="Description styling">
  milestoneDescriptionFontColor: color.steel700,
  milestoneDescriptionFontSize: font.sizeSm,
  // </editor-fold>
  // <editor-fold desc="Bullet styling">
  bulletBackgroundColorUncompleted: color.cloudyBlue100,
  bulletBackgroundColorCompleted: color.dodgerBlue,
  bulletBorderColor: color.cloudyBlue300,
  bulletBorderSize: size.smallest,
  bulletColor: color.white,
  bulletInnerDescriptionPaddingVertical: spacing.xs,
  bulletInnerDescriptionPaddingHorizontal: spacing.md,
  bulletBorderRadius: '100px',
  // </editor-fold>
  // <editor-fold desc="Road styling">
  roadBackgroundColorCompleted: color.dodgerBlue,
  roadBackgroundColorUncompleted: color.cloudyBlue300,
  roadWidth: size.smallest,
  roadMinHeight: size.large,
  // </editor-fold>
};

export default milestoneTracker;
