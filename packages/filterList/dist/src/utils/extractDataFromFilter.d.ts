import { FilterDefinitionType, FilterType, FilterValueType } from '../types';
interface ExtractDataFromFilterResponseInterface {
    filterLabel: string;
    operatorLabel: string;
    firstValueLabel: FilterValueType;
    valuesLabels: FilterValueType[];
    filterValuesLength: number;
}
declare function extractDataFromFilter(filter: FilterType, filterDefinition?: FilterDefinitionType): ExtractDataFromFilterResponseInterface;
export default extractDataFromFilter;
//# sourceMappingURL=extractDataFromFilter.d.ts.map