/**
 * This includes tokens for "Neo" which implements the 2025 8x8 rebrand
 */
import { Theme } from '../types';
import novo from './novo';
import colorPalette from './novoColorPalette';

// light theme has overrides, the rest are based on the existing "novo" theme
const neoLight: Theme = {
  ...novo,
  action02: colorPalette.offwhite02,
  icon01: colorPalette.offwhite02,
  icon03: colorPalette.offwhite06,
  icon06: colorPalette.offwhite08,
  icon07: colorPalette.offwhite05,
  icon08: colorPalette.offwhite02,
  info01: colorPalette.offwhite09,
  active02: colorPalette.offwhite03,
  active05: colorPalette.offwhite09,
  active08: colorPalette.offwhite09,
  active09: colorPalette.offwhite08,
  active10: colorPalette.offwhite09,
  active12: colorPalette.offwhite085,
  disabled01: colorPalette.offwhite08,
  disabled02: colorPalette.offwhite08,
  disabled03: colorPalette.offwhite05,
  disabled04: colorPalette.offwhite06,
  hover02: colorPalette.offwhite05,
  hover05: colorPalette.offwhite10,
  hover06: colorPalette.offwhite09,
  hover08: colorPalette.offwhite10,
  hover09: colorPalette.offwhite10,
  hover10: colorPalette.offwhite10,
  hover12: colorPalette.offwhite09,
  hover13: colorPalette.offwhite09,
  textColor01: colorPalette.offwhite02,
  textColor02: colorPalette.offwhite05,
  textColor05: colorPalette.offwhite04,
  textColor07: colorPalette.offwhite02,
  ui01: colorPalette.offwhite09,
  ui02: colorPalette.offwhite10,
  ui03: colorPalette.offwhite07,
  ui04: colorPalette.offwhite02,
  ui05: colorPalette.offwhite10,
  ui07: colorPalette.offwhite02,
  ui08: colorPalette.offwhite04,
  ui10: colorPalette.offwhite05,
  ui11: colorPalette.offwhite10,
  ui19: colorPalette.offwhite09,
  ui21: colorPalette.offwhite05,
  ui25: colorPalette.offwhite10,
  brand01: colorPalette.offwhite02,
  statusOffline01: colorPalette.offwhite05,
};

export default neoLight;
