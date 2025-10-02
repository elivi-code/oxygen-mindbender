export interface TypographySet {
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: string | number;
  letterSpacing: string;
}

export type ColorHexValue = `#${string}`;

export interface Theme {
  // Tokens

  /**
   * - Primary action color
   * - Primary buttons
   * */
  action01: ColorHexValue;
  /**
   * - Secondary action color
   * - Secondary buttons
   */
  action02: ColorHexValue;
  /**
   * - Destructive button background
   * - Text
   * - Icon
   * - Border
   */
  action03: ColorHexValue;
  /**
   * - Selected elements
   * - Active elements
   */
  action04: ColorHexValue;
  /**
   * - Links
   */
  action05: ColorHexValue;
  /**
   * - Link on high contrast backgrounds
   */
  action06: ColorHexValue;
  /**
   * - Non standard link tokens
   */
  action07: ColorHexValue;
  /**
   * - Text color for Button Text components in hover, focus and active states
   */
  action08: ColorHexValue;
  action09: ColorHexValue;
  /**
   * - Primary text
   * - Body copy
   * - Headers
   * - Labels
   * - Secondary buttons
   */
  textColor01: ColorHexValue;
  /**
   * - Secondary text
   * - Placeholder text
   * - Helper text
   */
  textColor02: ColorHexValue;
  /**
   * - Text on interactive colors
   * - Reverse text color
   * - Reverse icon color
   */
  textColor04: ColorHexValue;
  /**
   * - Data table row text
   */
  textColor05: ColorHexValue;
  /**
   * - Primary button text
   * - Destructive button text
   * - Tooltip
   */
  textColor06: ColorHexValue;
  /**
   * - Text on yellow alert background
   */
  textColor07: ColorHexValue;
  /**
   * - Text color for link's visited state
   */
  textColor08: ColorHexValue;
  textColor09: ColorHexValue;
  /**
   * - AI related colors
   */
  textColor10: ColorHexValue;
  /**
   * - Impartial
   */
  info01: ColorHexValue;
  /**
   * - Success button
   * - Success icons
   */
  success01: ColorHexValue;
  /**
   * - Warning icons
   */
  warning01: ColorHexValue;
  /**
   * - Inline Notification warning type
   */
  warning02: ColorHexValue;
  /**
   * - Notification warning type
   */
  warning03: ColorHexValue;
  /**
   * - Error text
   * - Error icons
   */
  error01: ColorHexValue;

  /**
   * - Subtle border
   * - Progress indicator background
   */
  ui01: ColorHexValue;
  /**
   * - Secondary background
   * - Border
   */
  ui02: ColorHexValue;
  /**
   * - Off states
   */
  ui03: ColorHexValue;
  /**
   * - Emphasis form elements
   * - Tab border hover
   * - Shadows
   */
  ui04: ColorHexValue;
  /**
   * - Default input fields
   * - Zebra highlighting in tables
   * - Drag and drop background
   * - Date picker selected background
   */
  ui05: ColorHexValue;
  /**
   * - Page background
   * - Dialpad background
   * - Overflow menu background
   * - Modal background
   * - Calendar container
   */
  ui06: ColorHexValue;
  /**
   * - High contrast background
   * - Tooltip background
   */
  ui07: ColorHexValue;
  /**
   * - Subtle border on high contrast background
   */
  ui08: ColorHexValue;
  /**
   * - Highlight tag
   */
  ui09: ColorHexValue;
  /**
   * - Offline presence background
   * - Tooltip background
   */
  ui10: ColorHexValue;

  /**
   * - Surface color
   */
  ui11: ColorHexValue;
  /**
   * - Surface color
   */
  ui12: ColorHexValue;
  /**
   * - Surface color
   */
  ui13: ColorHexValue;
  /**
   * - Surface color
   */
  ui14: ColorHexValue;
  /**
   * - Surface color
   */
  ui15: ColorHexValue;
  /**
   * - Surface color
   */
  ui16: ColorHexValue;
  ui17: ColorHexValue;
  ui18: ColorHexValue;
  ui19: ColorHexValue;
  ui20: ColorHexValue;
  ui21: ColorHexValue;
  ui22: ColorHexValue;
  /**
   * - AI related colors
   */
  ui23: ColorHexValue;
  ui24: ColorHexValue;
  ui25: ColorHexValue;

  ui26: ColorHexValue;
  ui27: ColorHexValue;
  ui28: ColorHexValue;
  ui29: ColorHexValue;
  ui30: ColorHexValue;
  ui31: ColorHexValue;
  ui33: ColorHexValue;
  /**
   * - Primary icons
   */
  icon01: ColorHexValue;
  /**
   * - Icons on interactive colors
   */
  icon02: ColorHexValue;
  /**
   * - Disabled icons on backgrounds
   */
  icon03: ColorHexValue;
  /**
   * - Coachmark icon
   */
  icon04: ColorHexValue;
  /**
   * - Icons on secondary buttons
   * - Icons on high contrast background
   */
  icon05: ColorHexValue;
  /**
   * - Disabled icons
   */
  icon06: ColorHexValue;
  /**
   * - Disabled icons on high contrast backgrounds
   */
  icon07: ColorHexValue;
  /**
   * - Icons on yellow alert background
   */
  icon08: ColorHexValue;

  /**
   * - Overlay background
   *
   * Hex value with 0.75 opacity
   */
  overlay01: ColorHexValue;
  /**
   * - Dialog shadows
   */
  shadow01: ColorHexValue;
  /**
   * - Highlighting search results background
   */
  highlight01: ColorHexValue;

  // Interactive Tokens
  /**
   * - Focus
   */
  focus01: ColorHexValue;
  /**
   * - Focus inverted
   */
  focus02: ColorHexValue;
  /**
   * - Primary button active
   */
  active01: ColorHexValue;
  /**
   * - Secondary button active
   */
  active02: ColorHexValue;
  /**
   * - Destructive button active
   */
  active03: ColorHexValue;
  /**
   * - Success button active
   */
  active04: ColorHexValue;
  /**
   * - Icon Background active
   */
  active05: ColorHexValue;
  /**
   * - Links active
   */
  active07: ColorHexValue;
  /**
   * - Dialpad number active
   * - Table row selected
   */
  active08: ColorHexValue;
  /**
   * - Tertiary button reverse background
   */
  active09: ColorHexValue;
  /**
   * - Button Text active background
   */
  active10: ColorHexValue;
  active11: ColorHexValue;
  active12: ColorHexValue;
  active13: ColorHexValue;
  /**
   * - Primary button hover
   */
  hover01: ColorHexValue;
  /**
   * - Secondary button hover
   */
  hover02: ColorHexValue;
  /**
   * - Destructive button hover
   */
  hover03: ColorHexValue;
  /**
   * - Success button hover
   */
  hover04: ColorHexValue;
  /**
   * - Icon hover background
   */
  hover05: ColorHexValue;
  /**
   * - Input hover
   */
  hover06: ColorHexValue;
  /**
   * - Links hover
   */
  hover07: ColorHexValue;
  /**
   * - Dropdown hover
   * - Overflow menu hover
   * - Dialpad number hover
   * - Date picker number hover
   */
  hover08: ColorHexValue;
  /**
   * - Tertiary button reverse
   */
  hover09: ColorHexValue;
  /**
   * - Button Text hover background
   */
  hover10: ColorHexValue;
  hover11: ColorHexValue;
  hover12: ColorHexValue;
  hover13: ColorHexValue;
  hover14: ColorHexValue;
  /**
   * - Disabled backgrounds
   */
  disabled01: ColorHexValue;
  /**
   * - Disabled text
   * - Disabled elements
   */
  disabled02: ColorHexValue;
  /**
   * - Disabled on high contrast background
   */
  disabled03: ColorHexValue;
  /**
   * - Disabled text on buttons
   */
  disabled04: ColorHexValue;

  // Data visualisation colors
  /**
   * - Data visualization color
   *
   * Pair with dataText01
   */
  data01: ColorHexValue;
  /**
   * - Data visualization color
   *
   * Pair with dataText02
   */
  data02: ColorHexValue;
  /**
   * - Data visualization color
   *
   * Pair with dataText03
   */
  data03: ColorHexValue;
  /**
   * - Data visualization color
   *
   * Pair with dataText04
   */
  data04: ColorHexValue;
  /**
   * - Data visualization color
   *
   * Pair with dataText05
   */
  data05: ColorHexValue;
  /**
   * - Data visualization color
   *
   * Pair with dataText06
   */
  data06: ColorHexValue;
  /**
   * - Data visualization color
   *
   * Pair with dataText07
   */
  data07: ColorHexValue;
  /**
   * - Data visualization color
   *
   * Pair with dataText08
   */
  data08: ColorHexValue;
  /**
   * - Data visualization color
   *
   * Pair with dataText09
   */
  data09: ColorHexValue;
  /**
   * - Data visualization color
   *
   * Pair with dataText010
   */
  data10: ColorHexValue;
  /**
   * - Data visualization color
   *
   * Pair with dataText11
   */
  data11: ColorHexValue;

  // Data visualisation text colors when against the same numbered background
  /**
   * - Data visualization text color
   *
   * Pair with data01
   */
  dataText01: ColorHexValue;
  /**
   * - Data visualization text color
   *
   * Pair with data02
   */
  dataText02: ColorHexValue;
  /**
   * - Data visualization text color
   *
   * Pair with data03
   */
  dataText03: ColorHexValue;
  /**
   * - Data visualization text color
   *
   * Pair with data04
   */
  dataText04: ColorHexValue;
  /**
   * - Data visualization text color
   *
   * Pair with data05
   */
  dataText05: ColorHexValue;
  /**
   * - Data visualization text color
   *
   * Pair with data06
   */
  dataText06: ColorHexValue;
  /**
   * - Data visualization text color
   *
   * Pair with data07
   */
  dataText07: ColorHexValue;
  /**
   * - Data visualization text color
   *
   * Pair with data08
   */
  dataText08: ColorHexValue;
  /**
   * - Data visualization text color
   *
   * Pair with data09
   */
  dataText09: ColorHexValue;
  /**
   * - Data visualization text color
   *
   * Pair with data10
   */
  dataText10: ColorHexValue;
  /**
   * - Data visualization text color
   *
   * Pair with data11
   */
  dataText11: ColorHexValue;

  // Data vis colors for "ordered" items (from good to bad)
  dataStatus01: ColorHexValue;
  dataStatus02: ColorHexValue;
  dataStatus03: ColorHexValue;
  dataStatus04: ColorHexValue;
  dataStatus05: ColorHexValue;
  dataStatus06: ColorHexValue;
  dataStatus07: ColorHexValue;

  // Data vis alerts (will likely be used in other places as well)
  /**
   * - RAG color
   */
  alertRed: ColorHexValue;
  /**
   * - RAG color
   */
  alertYellow: ColorHexValue;
  /**
   * - RAG color
   */
  alertGreen: ColorHexValue;

  // Typography Set
  label01: TypographySet;
  labelBold01: TypographySet;
  body01: TypographySet;
  bodyBold01: TypographySet;
  body02: TypographySet;
  bodyBold02: TypographySet;
  bulletList01: TypographySet;
  heading01: TypographySet;
  heading02: TypographySet;

  // Spacing
  spacing01: string;
  spacing02: string;
  spacing03: string;
  spacing04: string;
  spacing05: string;
  spacing06: string;
  spacing07: string;
  spacing08: string;
  spacing09: string;

  // Box Shadows
  shadowLow: string;
  shadowMedium: string;
  shadowHigh: string;

  // Avatar
  avatarText01: ColorHexValue;
  avatarText02: ColorHexValue;
  avatarText03: ColorHexValue;
  avatarText04: ColorHexValue;
  avatarText05: ColorHexValue;
  avatarText06: ColorHexValue;
  avatarBackground01: ColorHexValue;
  avatarBackground02: ColorHexValue;
  avatarBackground03: ColorHexValue;
  avatarBackground04: ColorHexValue;
  avatarBackground05: ColorHexValue;
  avatarBackground06: ColorHexValue;

  // Status related
  statusAvailable01: ColorHexValue;
  statusBusy01: ColorHexValue;
  statusAway01: ColorHexValue;
  statusOffline01: ColorHexValue;
  statusWrapup01: ColorHexValue;

  // Brand related
  brand01: ColorHexValue;
  brand05: ColorHexValue;
}

export interface NovoColorPalette {
  black: ColorHexValue;
  white: ColorHexValue;
  blue01: ColorHexValue;
  blue02: ColorHexValue;
  blue03: ColorHexValue;
  blue04: ColorHexValue;
  blue05: ColorHexValue;
  blue06: ColorHexValue;
  blue07: ColorHexValue;
  blue08: ColorHexValue;
  blue09: ColorHexValue;
  blue10: ColorHexValue;
  gray01: ColorHexValue;
  gray02: ColorHexValue;
  gray03: ColorHexValue;
  gray04: ColorHexValue;
  gray05: ColorHexValue;
  gray06: ColorHexValue;
  gray07: ColorHexValue;
  gray08: ColorHexValue;
  gray085: ColorHexValue;
  gray09: ColorHexValue;
  gray10: ColorHexValue;
  purple01: ColorHexValue;
  purple02: ColorHexValue;
  red01: ColorHexValue;
  red02: ColorHexValue;
  red03: ColorHexValue;
  red04: ColorHexValue;
  red05: ColorHexValue;
  red06: ColorHexValue;
  red07: ColorHexValue;
  red08: ColorHexValue;
  red09: ColorHexValue;
  red10: ColorHexValue;
  yellow01: ColorHexValue;
  yellow02: ColorHexValue;
  yellow03: ColorHexValue;
  yellow04: ColorHexValue;
  yellow05: ColorHexValue;
  yellow06: ColorHexValue;
  yellow07: ColorHexValue;
  yellow08: ColorHexValue;
  yellow09: ColorHexValue;
  yellow10: ColorHexValue;
  yellow11: ColorHexValue;
  green01: ColorHexValue;
  green02: ColorHexValue;
  green03: ColorHexValue;
  green04: ColorHexValue;
  green05: ColorHexValue;
  green06: ColorHexValue;
  green07: ColorHexValue;
  green08: ColorHexValue;
  green09: ColorHexValue;
  green10: ColorHexValue;
  violet01: ColorHexValue;
  violet02: ColorHexValue;
  violet03: ColorHexValue;
  violet04: ColorHexValue;
  violet05: ColorHexValue;
  violet06: ColorHexValue;
  violet07: ColorHexValue;
  violet08: ColorHexValue;
  violet09: ColorHexValue;
  violet10: ColorHexValue;
  magenta01: ColorHexValue;
  magenta02: ColorHexValue;
  magenta03: ColorHexValue;
  magenta04: ColorHexValue;
  magenta05: ColorHexValue;
  magenta06: ColorHexValue;
  magenta07: ColorHexValue;
  magenta08: ColorHexValue;
  magenta09: ColorHexValue;
  magenta10: ColorHexValue;
  pink01: ColorHexValue;
  pink02: ColorHexValue;
  pink03: ColorHexValue;
  pink04: ColorHexValue;
  pink05: ColorHexValue;
  pink06: ColorHexValue;
  pink07: ColorHexValue;
  pink08: ColorHexValue;
  pink09: ColorHexValue;
  pink10: ColorHexValue;
  midnight01: ColorHexValue;
  midnight02: ColorHexValue;
  midnight03: ColorHexValue;
  midnight04: ColorHexValue;
  midnight05: ColorHexValue;
  midnight06: ColorHexValue;
  midnight07: ColorHexValue;
  midnight08: ColorHexValue;
  midnight09: ColorHexValue;
  midnight10: ColorHexValue;
  teal01: ColorHexValue;
  teal02: ColorHexValue;
  teal03: ColorHexValue;
  teal04: ColorHexValue;
  teal05: ColorHexValue;
  teal06: ColorHexValue;
  teal07: ColorHexValue;
  teal08: ColorHexValue;
  teal09: ColorHexValue;
  teal10: ColorHexValue;
  orange01: ColorHexValue;
  orange02: ColorHexValue;
  orange03: ColorHexValue;
  orange04: ColorHexValue;
  orange05: ColorHexValue;
  orange06: ColorHexValue;
  orange07: ColorHexValue;
  orange08: ColorHexValue;
  orange09: ColorHexValue;
  orange10: ColorHexValue;
  coolgray01: ColorHexValue;
  coolgray02: ColorHexValue;
  indigo01: ColorHexValue;
  indigo02: ColorHexValue;
  indigo03: ColorHexValue;
  indigo04: ColorHexValue;
  indigo05: ColorHexValue;
  indigo06: ColorHexValue;
  indigo07: ColorHexValue;
  indigo08: ColorHexValue;
  indigo09: ColorHexValue;
  indigo10: ColorHexValue;
  offwhite01: ColorHexValue;
  offwhite02: ColorHexValue;
  offwhite03: ColorHexValue;
  offwhite04: ColorHexValue;
  offwhite05: ColorHexValue;
  offwhite06: ColorHexValue;
  offwhite07: ColorHexValue;
  offwhite08: ColorHexValue;
  offwhite085: ColorHexValue;
  offwhite09: ColorHexValue;
  offwhite10: ColorHexValue;
  offwhite11: ColorHexValue;
  lime05: ColorHexValue;
}
