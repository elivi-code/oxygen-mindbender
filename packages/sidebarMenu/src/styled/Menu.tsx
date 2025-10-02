import styled from 'styled-components';

export const Ul = styled.ul<{ footer?: boolean }>`
  list-style-type: none;
  margin: 0;
  padding: 0;
  ${({ footer, theme }) =>
    footer
      ? `
    flex-shrink: 1;
    border-top: 1px solid ${theme.ui01};
  `
      : `
    flex-grow: 1;
    overflow: auto;
  `}
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  ${({ theme }) => ({ ...theme.body01 })};
  margin: ${({ theme }) => `${theme.spacing03} 0;`};
`;

export const MenuItemLabel = styled.div`
  padding: 6px 0; /* keep this in sync with [BadgeWrapper](/components/Menu/components/Badge.tsx) */
`;
