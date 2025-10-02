import React, { useRef } from 'react';
import { render, screen } from '@testing-library/react';
import { SubMenuItem } from './SubMenuItem';

const CompWithRegularRef = () => {
  const ref = useRef<HTMLElement | null>(null);

  return (
    <>
      <SubMenuItem label="menu-label" ref={ref} />;
      <button
        type="button"
        onClick={() => {
          ref.current?.focus();
        }}
      >
        click to focus
      </button>
    </>
  );
};

const CompWithCallbackRef = () => {
  const ref = useRef<HTMLElement | null>(null);

  return (
    <>
      <SubMenuItem
        label="menu-label"
        ref={node => {
          ref.current = node;
        }}
      />
      ;
      <button
        type="button"
        onClick={() => {
          ref.current?.focus();
        }}
      >
        click to focus
      </button>
    </>
  );
};

describe('<SubMenuItem />', () => {
  it('allows passtrough html attributes', () => {
    render(<SubMenuItem label="menu-label" aria-label="test-label" />);
    expect(screen.getByText('menu-label')).toHaveAttribute(
      'aria-label',
      'test-label',
    );
  });
  it('supports regular refs', () => {
    render(<CompWithRegularRef />);
    expect(screen.getByText('menu-label')).not.toHaveFocus();
    screen.getByText('click to focus').click();
    expect(screen.getByText('menu-label')).toHaveFocus();
  });
  it('supports callback refs', () => {
    render(<CompWithCallbackRef />);
    expect(screen.getByText('menu-label')).not.toHaveFocus();
    screen.getByText('click to focus').click();
    expect(screen.getByText('menu-label')).toHaveFocus();
  });
});
