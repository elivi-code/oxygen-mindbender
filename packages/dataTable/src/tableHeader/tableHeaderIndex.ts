import { Translations as FilterTranslations } from '@8x8/oxygen-filter-list';
import { Translations as SearchTranslations } from '@8x8/oxygen-keyword-search';
import { DataRetrievalParameters } from '../dataRetrieval/useDataRetrievalParams';

type SearchParams = Omit<DataRetrievalParameters, 'sorting'>;

export { SearchParams, SearchTranslations, FilterTranslations };
