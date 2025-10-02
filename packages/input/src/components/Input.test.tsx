import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { SearchIcon } from '@8x8/oxygen-icon';
import { input as theme } from '@8x8/oxygen-constants';

import Input from './Input';

describe('<Input>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<Input theme={theme} {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly as focus', () => {
    wrapper = setup({ focus: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with prefix', () => {
    wrapper = setup({ prefix: '20%' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with suffix', () => {
    wrapper = setup({ suffix: '20%' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with iconLeft', () => {
    wrapper = setup({ iconLeft: SearchIcon });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with iconLeft and value', () => {
    wrapper = setup({ iconLeft: SearchIcon, value: 'vader' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with iconRight', () => {
    wrapper = setup({ iconRight: SearchIcon });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with iconRight and value', () => {
    wrapper = setup({ iconRight: SearchIcon, value: 'vader' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with max attribute', () => {
    wrapper = setup({ type: 'number', max: 99 });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with min attribute', () => {
    wrapper = setup({ type: 'number', min: 1 });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with maxLength attribute', () => {
    wrapper = setup({ maxLength: 10 });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with autoComplete property', () => {
    wrapper = setup({ autoComplete: 'off' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly as required', () => {
    wrapper = setup({ isRequired: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly as disabled', () => {
    wrapper = setup({ isDisabled: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly as readonly', () => {
    wrapper = setup({ isReadonly: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly as invalid', () => {
    wrapper = setup({ hasError: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly aria attributes with inputProps', () => {
    render(
      <Input
        placeholder="test-value"
        inputProps={{
          'aria-describedBy': 'description-id',
          'aria-labelledBy': 'label-id',
        }}
      />,
    );
    expect(screen.getByPlaceholderText('test-value')).toHaveAttribute(
      'aria-describedBy',
      'description-id',
    );
    expect(screen.getByPlaceholderText('test-value')).toHaveAttribute(
      'aria-labelledBy',
      'label-id',
    );
  });

  it('should be focusable when disabled', async () => {
    const user = userEvent.setup();
    const placeholder = 'placeholder-input-field-value';

    render(<Input placeholder={placeholder} type="text" isDisabled />);

    const input = screen.getByPlaceholderText(placeholder);

    expect(document.body).toHaveFocus();

    // Attempt to focus the input
    await user.tab();

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-disabled', 'true');
    expect(input).toHaveFocus();
  });

  it('should prevent typing into text input when disabled', async () => {
    const user = userEvent.setup();
    const placeholder = 'placeholder-input-field-value';

    render(<Input placeholder={placeholder} type="text" isDisabled />);

    const input = screen.getByPlaceholderText(placeholder);

    // Attempt to type into the input
    await user.type(input, 'Hello, World!');

    // Assert that the input value has not changed
    expect(input).toHaveValue('');
  });
});
