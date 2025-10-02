import React from 'react';

import de from 'date-fns/locale/de';
import enGB from 'date-fns/locale/en-GB';
import enUS from 'date-fns/locale/en-US';
import es from 'date-fns/locale/es';
import fi from 'date-fns/locale/fi';
import fr from 'date-fns/locale/fr';
import frCA from 'date-fns/locale/fr-CA';
import it from 'date-fns/locale/it';
import nl from 'date-fns/locale/nl';
import ptBR from 'date-fns/locale/pt-BR';
import sv from 'date-fns/locale/sv';

import {
  ArrowRightLongIcon,
  FaceFrownIcon,
  CalendarIcon,
  SearchIcon,
  VideoIcon,
} from '@8x8/oxygen-icon';

const localeExamples = {
  'German (de)': de,
  'US English (en-US)': enUS,
  'British English (en-GB)': enGB,
  'Spanish (es)': es,
  'Finnish (fi)': fi,
  'French (fr)': fr,
  'Canadian French (fr-CA)': frCA,
  'Italian (it)': it,
  'Dutch (nl)': nl,
  'Brazilian Portuguese (pt-BR)': ptBR,
  'Swedish (sv)': sv,
};

export const localeSelect = {
  options: Object.keys(localeExamples),
  mapping: localeExamples,
  control: {
    type: 'select',
  },
};

const icons = {
  Search: SearchIcon,
  Video: VideoIcon,
  Calendar: CalendarIcon,
  FaceFrown: FaceFrownIcon,
  ArrowRightLong: ArrowRightLongIcon,
};

const iconsWithFalse = {
  false: false,
  Search: SearchIcon,
  Video: VideoIcon,
  Calendar: CalendarIcon,
  FaceFrown: FaceFrownIcon,
};

export const iconSelect = {
  mapping: icons,
  options: Object.keys(icons),
  control: {
    type: 'select',
  },
};

export const iconSelectWithFalse = {
  mapping: {
    ...iconsWithFalse,
  },
  options: Object.keys(iconsWithFalse),
  control: {
    type: 'select',
  },
};

const iconsRendered = {
  Search: <SearchIcon />,
  Video: <VideoIcon />,
  Calendar: <CalendarIcon />,
  FaceFrown: <FaceFrownIcon />,
  ArrowRightLong: <ArrowRightLongIcon />,
};

export const iconSelectRendered = {
  mapping: iconsRendered,
  options: Object.keys(icons),
  control: {
    type: 'select',
  },
};
