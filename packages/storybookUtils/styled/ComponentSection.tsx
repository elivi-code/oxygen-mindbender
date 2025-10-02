import styled from 'styled-components';

import Label from './Label';

interface ComponentSectionProps {
  block?: boolean;
  reversed?: boolean;
}

const ComponentSection = styled.div<ComponentSectionProps>`
  ${({ block }) => {
    if (block) {
      return `display: block;`;
    }

    return `
    display: flex;
    align-items: flex-start;
    `;
  }};
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.body01.fontFamily};
  padding: ${({ theme }) => theme.spacing06} ${({ theme }) => theme.spacing03};
  margin: ${({ theme }) => theme.spacing04} 0;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border-radius: 4px;
  width: 100%;
  background: ${({ theme, reversed }) =>
    reversed ? theme.textColor01 : theme.ui06};
  color: ${({ theme, reversed }) =>
    reversed ? theme.textColor04 : theme.textColor01};
  & ${Label} {
    color: ${({ theme, reversed }) =>
      reversed ? theme.textColor04 : theme.textColor01};
  }
`;

export default ComponentSection;
