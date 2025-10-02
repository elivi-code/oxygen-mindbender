import styled from 'styled-components';
import Input from '@8x8/oxygen-input';
import Button from '@8x8/oxygen-button';
const AddFilterTag = styled(Button) `
  ${({ theme }) => ({ ...theme.body01 })}
  padding: ${({ theme }) => `${theme.spacing03} ${theme.spacing04}`};
`;
const AddFilterSearch = styled(Input) `
  margin: 0 8px 8px;
  width: auto;
`;
const ListWrapper = styled.div `
  overflow: auto;
`;
export { AddFilterTag, AddFilterSearch, ListWrapper };
