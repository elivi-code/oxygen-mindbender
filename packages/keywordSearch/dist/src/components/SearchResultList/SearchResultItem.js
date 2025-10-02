import React from 'react';
import ButtonWrapper from './styled/ButtonWrapper';
export const SearchResultItem = ({ id, testId, isActive, item, onClick, }) => {
    return (React.createElement("li", { tabIndex: -1 },
        React.createElement(ButtonWrapper, { id: id, isActive: isActive, isInfo: false, onClick: () => onClick(item), tabIndex: -1, title: Object.values(item).join(' , '), "data-test-id": testId },
            React.createElement("span", null, Object.values(item).join(' • ')))));
};
export default SearchResultItem;
