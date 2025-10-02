export interface SearchResultItemType {
  [key: number]: string | undefined;
}

export interface SearchResultTranslations {
  viewAllResultsForText: string;
  viewAllResultsText: string;
  noResultsText: string;
  loadingSearchResultsText: string;
}

export interface Translations extends SearchResultTranslations {
  clearButtonTitle: string;
  placeholder: string;
}
