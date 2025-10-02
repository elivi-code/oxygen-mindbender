import React, { FunctionComponent } from 'react';
import { SearchResultItemType } from '../../types';
import ButtonWrapper from './styled/ButtonWrapper';

export interface SearchResultItemProps {
  id: string;
  testId: string;
  isActive: boolean;
  item: SearchResultItemType;
  onClick: (item: SearchResultItemType) => void;
}

export const SearchResultItem: FunctionComponent<SearchResultItemProps> = ({
  id,
  testId,
  isActive,
  item,
  onClick,
}) => {
  return (
    <li tabIndex={-1}>
      <ButtonWrapper
        id={id}
        isActive={isActive}
        isInfo={false}
        onClick={() => onClick(item)}
        tabIndex={-1}
        title={Object.values(item).join(' , ')}
        data-test-id={testId}
      >
        <span>{Object.values(item).join(' • ')}</span>
      </ButtonWrapper>
    </li>
  );
};

export default SearchResultItem;
