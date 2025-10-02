/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TableOfContents } from './TableOfContents';
import { Item } from './Item';

const user = userEvent.setup();

describe('TableOfContents', () => {
  let onClick;

  beforeEach(() => {
    onClick = jest.fn();
  });
  it('should render active state', () => {
    const { container } = render(
      <TableOfContents>
        <Item onClick={onClick} isActive={false}>
          An item
        </Item>
      </TableOfContents>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render inactive state', () => {
    const { container } = render(
      <TableOfContents>
        <Item onClick={onClick} isActive>
          An item
        </Item>
      </TableOfContents>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
  it('should call onClick', async () => {
    render(
      <TableOfContents>
        <Item onClick={onClick} isActive>
          Item1
        </Item>
      </TableOfContents>,
    );
    await user.click(screen.getByText('Item1'));
    expect(onClick).toBeCalledTimes(1);
  });
});
