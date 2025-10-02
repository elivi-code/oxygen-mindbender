import React from 'react';
import { render, screen } from '@testing-library/react';
import { modalNovo } from '@8x8/oxygen-constants';

import ModalHeader from './ModalHeader';

describe('<ModalHeader>', () => {
  it('renders an empty container if no content is provided', () => {
    render(<ModalHeader />);
    expect(screen.getByTestId('MODAL_HEADER')).toBeInTheDocument();
    expect(screen.getByTestId('MODAL_HEADER')).toBeEmptyDOMElement();
  });

  it('renders title & alignment', () => {
    const { rerender } = render(<ModalHeader title="Title" />);

    expect(screen.getByText('Title')).toBeInTheDocument();

    // default text align is left
    expect(screen.getByText('Title')).toHaveStyle('text-align: left');

    // custom props
    rerender(<ModalHeader title="Title" alignTitle="left" />);
    expect(screen.getByText('Title')).toHaveStyle('text-align: left');
    rerender(<ModalHeader title="Title" alignTitle="right" />);
    expect(screen.getByText('Title')).toHaveStyle('text-align: right');
    rerender(<ModalHeader title="Title" alignTitle="center" />);
    expect(screen.getByText('Title')).toHaveStyle('text-align: center');
  });

  it('renders close icon', () => {
    const { rerender } = render(<ModalHeader onClose={jest.fn} />);

    expect(screen.getByTestId('MODAL_HEADER_CLOSE_ICON')).toBeInTheDocument();
    expect(screen.getByTestId('MODAL_HEADER_CLOSE_ICON')).toHaveAttribute(
      'title',
      'Close',
    );

    // use a custom title
    rerender(
      <ModalHeader onClose={jest.fn} iconCloseTitle="Close the modal" />,
    );
    expect(screen.getByTestId('MODAL_HEADER_CLOSE_ICON')).toHaveAttribute(
      'title',
      'Close the modal',
    );
  });

  it('OX-2041 the icon has presentation role', () => {
    render(<ModalHeader onClose={jest.fn} iconCloseTitle="Close the modal" />);
    expect(
      screen.getByTestId('MODAL_HEADER_CLOSE_ICON').firstChild,
    ).toHaveAttribute('role', 'presentation');
  });

  it('renders hasBorderBottom', () => {
    const { rerender } = render(<ModalHeader />);

    expect(screen.getByTestId('MODAL_HEADER')).toHaveStyle('box-shadow: none');
    rerender(<ModalHeader hasBorderBottom />);
    expect(screen.getByTestId('MODAL_HEADER')).toHaveStyle(
      'box-shadow: 0 1px 0 0 #D1DBE8',
    );
  });

  it('renders modalHasContent', () => {
    const { rerender } = render(<ModalHeader theme={modalNovo} />);

    expect(screen.getByTestId('MODAL_HEADER')).toHaveStyle('padding: 16px');
    rerender(<ModalHeader modalHasContent theme={modalNovo} />);
    expect(screen.getByTestId('MODAL_HEADER')).toHaveStyle('padding: 16px');
    rerender(<ModalHeader modalHasContent={false} theme={modalNovo} />);
    expect(screen.getByTestId('MODAL_HEADER')).toHaveStyle('padding: 16px');
  });
});
