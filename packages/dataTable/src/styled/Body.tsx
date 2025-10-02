import styled from 'styled-components';

const Body = styled.tbody<{ height?: number }>`
  ${({ height }) => height !== undefined && `height: ${height}px;`}

  display: flex;
  flex-direction: column;
  min-width: 100%;

  /* makes sure it occupies full available width when scroll is present */
  width: fit-content;
`;

const HiddenRow = styled.div`
  height: 0;
  outline: none;
`;

export { Body, HiddenRow };
