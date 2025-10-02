import { DefaultTheme } from 'styled-components';

import { Status } from '../../constants/status';

const borderColor = {
  available: 'borderColorAvailable',
  onDirectCall: 'borderColorAvailable',
  away: 'borderColorAway',
  busy: 'borderColorBusy',
  wrapUp: 'borderColorWrapUp',
  doNotDisturb: 'borderColorDoNotDisturb',
  offline: 'borderColorOffline',
  onBreak: 'borderColorOnBreak',
  onCall: 'borderColorOnCall',
  workingOffline: 'borderColorWorkingOffline',
} as const;

const backgroundColor = {
  available: 'colorAvailable',
  onDirectCall: 'colorAvailable',
  away: 'colorAway',
  busy: 'colorBusy',
  wrapUp: 'colorWrapUp',
  doNotDisturb: 'colorDoNotDisturb',
  offline: 'colorOffline',
  onBreak: 'colorOnBreak',
  onCall: 'colorOnCall',
  workingOffline: 'colorWorkingOffline',
} as const;

interface Props {
  theme: DefaultTheme;
  $status: Status;
}

export const getColor = ({ theme, $status }: Props) => `
  .presence-border {
    fill: ${theme[borderColor[$status] || 'borderColorAvailable']};
  }
  .presence-background {
    fill: ${theme[backgroundColor[$status] || 'colorAvailable']};
  }
`;

export default getColor;
