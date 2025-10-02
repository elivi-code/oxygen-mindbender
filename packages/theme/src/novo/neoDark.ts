/**
 * This includes tokens for "Neo" which implements the 2025 8x8 rebrand
 */
import { Theme } from '../types';
import novoDark from './novoDark';
import colorPalette from './novoColorPalette';

// based on current docs, dark theme remains the same as "novo"
const neoDark: Theme = {
  ...novoDark,
  brand01: colorPalette.white,
};

export default neoDark;
