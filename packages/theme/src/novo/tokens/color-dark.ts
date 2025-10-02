import { rgba } from 'polished';
import colorPalette from './colorPalette';

/**
 * @deprecated please use `packages/theme/src/novo/novoDark.js`
 */
const color = {
  // Tokens

  // Page background
  // Dialpad background
  // Overflow menu background
  // Modal background
  // Calendar container
  uiBackground01: colorPalette.colorPurple01,
  // High contrast background
  // Tooltip background
  uiBackground02: colorPalette.colorGray10,
  // Primary action colour
  // Primary buttons
  action01: colorPalette.colorBlue06,
  // Secondary action color
  // Secondary buttons
  action02: colorPalette.colorGray09,
  // Link on high contrast backgrounds
  action03: colorPalette.colorBlue05,
  // Selected elements
  // Active elements
  action04: colorPalette.colorBlue06,
  // Links
  action05: colorPalette.colorBlue07,
  // Destructive button background
  // Text
  // Icon
  // Border
  destructive01: colorPalette.colorRed06,
  // Primary text
  // Body copy
  // Headers
  // Labels
  // Secondary buttons
  text01: colorPalette.colorWhite,
  // Secondary text
  // Placeholder text
  // Helper text
  text02: colorPalette.colorGray08,
  // TODO: removed?
  text03: colorPalette.colorGray08,
  // Text on interactive colours
  // Reverse text colour
  // Reverse icon colour
  text04: colorPalette.colorGray02,
  // Data table row text
  text05: colorPalette.colorGray08,
  // Button Primary, Destructive
  text06: colorPalette.colorWhite,
  // Error text
  // Error icons
  error01: colorPalette.colorRed07,
  // Success button
  // Success icons
  success01: colorPalette.colorGreen05,
  // Warning icons
  // Notification counter primary
  warning01: colorPalette.colorYellow05,
  // Impartial
  info01: colorPalette.colorGray05,
  // Subtle border
  // Progress indicator background
  ui01: colorPalette.colorGray05,
  // Secondary background
  // Border
  ui02: colorPalette.colorGray03,
  // Off states
  ui03: colorPalette.colorGray06,
  // Emphasis form elements
  // Tab border hover
  // Shadows
  ui04: colorPalette.colorWhite,
  // Default input fields
  // Zebra highlighting in tables
  ui05: colorPalette.colorPurple02,
  // Overlay background
  overlay: rgba(colorPalette.colorGray02, 0.75),
  // Dialog shadows
  shadow: colorPalette.colorGray01,
  // Primary icons
  icon01: colorPalette.colorWhite,
  // Icons on interactive colors
  icon02: colorPalette.colorWhite,
  // Disabled icons on backgrounds
  icon03: colorPalette.colorGray05,
  // Coachmark icon
  icon04: colorPalette.colorBlue05,
  // Icons on secondary buttons
  icon05: colorPalette.colorGray02,
  // Disabled icons
  icon06: colorPalette.colorGray05,

  // Interactive tokens

  // Focus
  focus01: colorPalette.colorBlue05,

  // Disabled backgrounds
  disabled01: colorPalette.colorGray08,
  // Disabled text
  disabled02: colorPalette.colorGray05,
  // Disabled on high contrast background
  disabled03: colorPalette.colorGray08,
  // Disabled text on buttons
  disabled04: colorPalette.colorGray06,

  // Primary button hover
  hover01: colorPalette.colorBlue07,
  // Primary button active
  active01: colorPalette.colorBlue05,

  // Secondary button hover
  hover02: colorPalette.colorGray10,
  // Secondary button active
  active02: colorPalette.colorGray08,

  // Destructive button hover
  hover03: colorPalette.colorRed07,
  // Destructive button active
  active03: colorPalette.colorRed05,

  // Success button hover
  hover04: colorPalette.colorGreen06,
  // Success button active
  active04: colorPalette.colorGreen04,

  // Icon hover
  hover05: colorPalette.colorGray03,
  // Icon active
  active05: colorPalette.colorGray05,
  // Icon selected
  selected05: colorPalette.colorBlue06,

  // Dropdown hover
  // Overflow menu hover
  // Date picker number hover
  hover06: colorPalette.colorGray03,

  // Links hover
  hover07: colorPalette.colorBlue08,
  // Links active
  active07: colorPalette.colorBlue05,

  // Dialpad number hover
  hover08: colorPalette.colorPurple02,
  // Dialpad number active
  active08: colorPalette.colorGray04,
};

export default color;
