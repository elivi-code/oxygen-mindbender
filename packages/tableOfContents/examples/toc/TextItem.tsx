import React from 'react';
import styled from 'styled-components';

const Container = styled.div.attrs(({ fontSize }: { fontSize?: number }) => ({
  fontSize: `${fontSize || 14}px`,
}))`
  padding: 5px;
  font-size: ${({ fontSize }) => fontSize};
`;

interface Props {
  id: string;
  fontSize: number;
}

// eslint-disable-next-line react/display-name
export const TextItem = React.forwardRef<HTMLDivElement, Props>(
  ({ id, fontSize }, forwardedRef) => {
    return (
      <Container fontSize={fontSize} ref={forwardedRef}>
        <b>{id}</b>&nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
        {fontSize < 14
          ? ` Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.`
          : null}
      </Container>
    );
  },
);
