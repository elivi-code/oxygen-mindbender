import { shouldShowSearchInput } from './shouldShowSearchInput';

describe('shouldShowSearchInput', () => {
  it.each`
    numOptionValues | showSearchInput | allowFreeformSuggestions | isGetSearchSuggestionsDefined | expected
    ${undefined}    | ${undefined}    | ${undefined}             | ${undefined}                  | ${false}
    ${undefined}    | ${undefined}    | ${true}                  | ${undefined}                  | ${true}
    ${undefined}    | ${true}         | ${undefined}             | ${undefined}                  | ${true}
    ${undefined}    | ${false}        | ${undefined}             | ${undefined}                  | ${false}
    ${10}           | ${undefined}    | ${undefined}             | ${undefined}                  | ${false}
    ${11}           | ${undefined}    | ${undefined}             | ${undefined}                  | ${true}
    ${undefined}    | ${undefined}    | ${undefined}             | ${true}                       | ${true}
  `(
    'returns correctly',
    ({
      numOptionValues,
      showSearchInput,
      allowFreeformSuggestions,
      isGetSearchSuggestionsDefined,
      expected,
    }) => {
      expect(
        shouldShowSearchInput({
          numOptionValues,
          filterDefinition: {
            id: 'id',
            allowFreeformSuggestions,
            showSearchInput,
          },
          isGetSearchSuggestionsDefined,
        }),
      ).toEqual(expected);
    },
  );
});
