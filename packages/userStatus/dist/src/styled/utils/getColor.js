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
};
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
};
export const getColor = ({ theme, $status }) => `
  .presence-border {
    fill: ${theme[borderColor[$status] || 'borderColorAvailable']};
  }
  .presence-background {
    fill: ${theme[backgroundColor[$status] || 'colorAvailable']};
  }
`;
export default getColor;
