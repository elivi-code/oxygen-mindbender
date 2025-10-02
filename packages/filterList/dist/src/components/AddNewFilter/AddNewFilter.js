import React, { useEffect, useMemo, useState } from 'react';
import { getTestAttributes } from '@8x8/oxygen-config';
import { Popover } from '@8x8/oxygen-popover';
import { PlusIcon, SearchIcon } from '@8x8/oxygen-icon';
import List, { ListItem } from '@8x8/oxygen-list';
import { AddFilterSearch, AddFilterTag, ListWrapper, } from './AddNewFilter.styled';
import { Container } from '../FilterDropdownContent/FilterDropdownContent.styled';
function AddNewFilter({ internalCurrentFilters, filterDefinitions, onAddFilter, translations, testId, popoverPortalRef, }) {
    const [isOpen, setIsOpen] = useState(false);
    const [addFilterSearch, setAddFilterSearch] = useState('');
    useEffect(() => {
        if (!isOpen) {
            setAddFilterSearch('');
        }
    }, [isOpen]);
    const availableFilters = useMemo(() => filterDefinitions?.filter(definition => !internalCurrentFilters?.find(currentFilter => currentFilter.id === definition.id)) ?? [], [filterDefinitions, internalCurrentFilters]);
    if (availableFilters.length === 0) {
        return null;
    }
    const filteredFilters = availableFilters?.filter(definition => definition.label.toLowerCase().includes(addFilterSearch?.toLowerCase()));
    return (React.createElement(Popover, { floatingContent: React.createElement(Container, { ...getTestAttributes(`${testId}_new_filter_CONTAINER`) },
            React.createElement(AddFilterSearch, { iconLeft: SearchIcon, onChange: event => setAddFilterSearch(event.target.value), placeholder: translations?.searchNewFilterLabel, testId: `${testId}_SEARCH_INPUT`, "aria-label": translations?.searchNewFilterLabel }),
            React.createElement(ListWrapper, null,
                React.createElement(List, { ...getTestAttributes(`${testId}_CONTAINER`) }, filteredFilters.map(filter => (React.createElement(ListItem, { key: filter.id, onClick: () => {
                        onAddFilter(filter);
                        setIsOpen(false);
                    } }, filter.label)))))), isOpen: isOpen, setIsOpen: setIsOpen, portalTargetRef: popoverPortalRef },
        React.createElement(AddFilterTag, { isDisabled: availableFilters.length === 0, size: "small", variant: "text", iconLeft: React.createElement(PlusIcon, null), testId: `${testId}_BUTTON` }, translations?.addNewFilterLabel)));
}
export default AddNewFilter;
