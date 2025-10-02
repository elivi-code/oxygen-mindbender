import { action } from 'storybook/actions';

const defaultSearchResults = [
  { 0: 'XYZ Morris' },
  { 0: 'Klx More', 1: 'US – Sales' },
  { 0: 'Aluca Ab', 1: 'Romania – Sales' },
  { 0: 'Aluca Smth', 1: 'UK – Sales' },
  { 0: 'Alan Smith', 1: 'UK – Sales' },
  { 0: 'Joanna Williams 1', 1: 'Johannesburg – Sales' },
  { 0: 'Joanna Williams 2', 1: 'Johannesburg – Sales' },
  { 0: 'Joanna Williams 3', 1: 'Johannesburg – Sales' },
  { 0: 'Joanna Williams 4', 1: 'Johannesburg – Sales' },
  { 0: 'Joanna Williams 5', 1: 'Johannesburg – Sales' },
];

export const argTypesConfig = {
  size: {
    options: ['small', 'default', 'large'],
    defaultValue: 'default',
    control: { type: 'select' },
  },
  searchResultsSizeLimit: {
    control: {
      type: 'number',
    },
    defaultValue: 8,
  },
  searchResultsCount: {
    control: {
      type: 'number',
    },
    defaultValue: defaultSearchResults.length,
  },
  onViewAllResults: { table: { disable: true } },
  onSearchResultSelect: { table: { disable: true } },
  onSearchChange: { table: { disable: true } },
};

export const argsConfig = {
  searchResults: defaultSearchResults,
  translations: {
    clearButtonTitle: 'Clear button',
    placeholder: 'Search',
    viewAllResultsText: 'View all results',
    noResultsText: "We couldn't find any results for",
    viewAllResultsForText: 'View all results for',
    loadingSearchResultsText: 'Searching for',
  },
  onViewAllResults: action('View all results'),
  onSearchResultSelect: action('Search result select'),
  onSearchChange: action('Input search change'),
};
