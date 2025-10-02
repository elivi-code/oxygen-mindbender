import { FilterDefinitionType } from '../../../../../types';

interface Props {
  numOptionValues?: number;
  filterDefinition: FilterDefinitionType;
  isGetSearchSuggestionsDefined: boolean;
}

const MIN_NUM_OPTION_VALUES = 10;

export const shouldShowSearchInput = ({
  numOptionValues,
  filterDefinition,
  isGetSearchSuggestionsDefined,
}: Props) => {
  // If the filter definition has allowFreeformSuggestions set, show search input
  if (filterDefinition.allowFreeformSuggestions) {
    return true;
  }

  // 2nd priority. If `showSearchInput` is defined on a filter definition, it takes precedence over other rules
  if (typeof filterDefinition.showSearchInput !== 'undefined') {
    return filterDefinition.showSearchInput;
  }

  // If more than the minimum number of option values, show search input
  if (numOptionValues > MIN_NUM_OPTION_VALUES) {
    return true;
  }

  // If `getSearchSuggestions` is defined, show search input
  if (isGetSearchSuggestionsDefined) {
    return true;
  }

  // Otherwise, do not show search input
  return false;
};
