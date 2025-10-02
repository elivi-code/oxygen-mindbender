import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SwitchBase from './SwitchBase';

const user = userEvent.setup();

describe('SwitchBase  events', () => {
  it('onChange fired on click', async () => {
    const onChange = jest.fn();

    render(<SwitchBase onChange={onChange} />);
    const input = screen.getByRole('checkbox');

    expect(onChange).not.toHaveBeenCalled();
    await user.click(input);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it('onChange fired on Space', async () => {
    const onChange = jest.fn();

    render(<SwitchBase onChange={onChange} />);
    const input = screen.getByRole('checkbox');

    expect(onChange).not.toHaveBeenCalled();

    input.focus();
    await user.keyboard(' ');
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it('onChange is not fired on Enter, wrapper form is submitted', async () => {
    const onChange = jest.fn();
    const onSubmit = jest.fn();

    render(
      <form onSubmit={onSubmit}>
        <SwitchBase onChange={onChange} />
        <button type="submit">Submit</button>
      </form>,
    );
    const input = screen.getByRole('checkbox');

    expect(onChange).not.toHaveBeenCalled();
    expect(onSubmit).not.toHaveBeenCalled();

    input.focus();
    await user.keyboard('[Enter]');

    expect(onChange).not.toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
  it('onChange is not fired on Enter, wrapper form is NOT submitted is disabled', async () => {
    const onChange = jest.fn();
    const onSubmit = jest.fn();

    render(
      <form onSubmit={onSubmit}>
        <SwitchBase onChange={onChange} isDisabled />
        <button type="submit">Submit</button>
      </form>,
    );
    const input = screen.getByRole('checkbox');

    expect(onChange).not.toHaveBeenCalled();
    expect(onSubmit).not.toHaveBeenCalled();

    input.focus();
    await user.keyboard('[Enter]');
    expect(onChange).not.toHaveBeenCalled();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('onFocus fired on click', async () => {
    const onFocus = jest.fn();

    render(<SwitchBase onFocus={onFocus} />);
    const input = screen.getByRole('checkbox');

    expect(onFocus).not.toHaveBeenCalled();
    await user.click(input);
    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  it('should set isFocused state to false and call onBlur prop on blur', async () => {
    const onBlur = jest.fn();

    render(<SwitchBase onBlur={onBlur} />);

    const input = screen.getByRole('checkbox');

    input.focus();
    expect(input).toHaveFocus();

    await user.tab(); // Move focus away from the input
    expect(input).not.toHaveFocus();
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('should set isFocused state to true and call onFocus prop on focus', async () => {
    const onFocus = jest.fn();

    render(<SwitchBase onFocus={onFocus} />);

    const input = screen.getByRole('checkbox');

    input.focus();
    expect(input).toHaveFocus();
    expect(onFocus).toHaveBeenCalledTimes(1);
  });
});
