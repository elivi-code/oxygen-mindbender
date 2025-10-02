# 8x8 Oxygen - KeywordSearch

The `KeywordSearch` component should be used when need to combine search `Input` with list suggestions as user types in.

## Installation

```sh
$ yarn add @8x8/oxygen-keyword-search
```

```sh
$ npm install @8x8/oxygen-keyword-search
```

### External Props

- ```showSuggestionsDropdown```: ```boolean``` - boolean(true as default) that shows/hides list of suggestions
- ```storedSearchValue```: ```string | undefined``` - represents the applied(stored) filter
- ```isLoading```: ```boolean``` - boolean that indicates that list of suggestions are being fetched
- ```searchResults```: ```SearchResultItemType``` - array of search result list based on input filtering
- ```onSearchChange```: ```(value: string) => void``` - callback function for input change
- ```onViewAllResults```: ```(value: string) => void``` - callback function for "View all results" click/enter
- ```onFetchSearchResults```: ```(value: string) => void``` - callback function that fetch suggestions
- ```onClear```: ```() => void``` - callback function that is called when clear button is fired
- ```onSearchResultSelect```: ```(item: SearchResultItemType) => void``` - callback function for search result item click/enter
- ```translations```: ```Translations``` - object of translations strings for different labels/text

### Types

```ts
    interface SearchResultItemType {
      [key: number]: string | undefined
    }
```

```ts
    interface Translations extends SearchResultTranslations {
      clearButtonTitle: string;
      placeholder: string;
    }

    interface SearchResultTranslations {
      viewAllResultsForText: string;
      viewAllResultsText: string;
      noResultsText: string;
      loadingSearchResultsText: string;
    }
```

### Usage

```tsx
    import KeywordSearch from '@8x8/oxygen-keyword-search';
    <KeywordSearch
      translations={{
        clearButtonTitle: 'Clear button',
        placeholder: 'Search',
        viewAllResultsText: 'View all results',
        noResultsText: "We couldn't find any results for",
        viewAllResultsForText: 'View all results for',
        loadingSearchResultsText: 'Searching for',
      }}
      searchResults={
        [
          { 0: 'Joanna Morris' },
          { 0: 'Joanna More', 1: 'Johannesburg – Sales' },
        ]
      }
      showSuggestionsDropdown
      isLoading={false}
      onViewAllResults={(value: string) => {}}
      onSearchResultSelect={(item: SearchResultItemType) => {}}
      onSearchChange={(value: string) => {}}
      onFetchSearchResults={(value: string) => {}}
      onClear={() => {}}
      size="default"
    />
```