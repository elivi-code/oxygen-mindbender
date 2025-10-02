import color from '../choices/color.const';

export interface GraphicsTheme {
  ghostly: {
    background: string;
  };
  workingDesk: {
    background: string;
  };
  clock: {
    background: string;
  };
  incomingCall: {
    background: string;
  };
}

const graphics: GraphicsTheme = {
  ghostly: {
    background: color.surfaceLight50,
  },
  workingDesk: {
    background: 'transparent',
  },
  clock: {
    background: color.cloudyBlue100,
  },
  incomingCall: {
    background: color.white,
  },
};

export default graphics;
