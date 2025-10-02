import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import { input as theme } from '@8x8/oxygen-constants';
import TextField from './TextField';

describe('<TextField>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(
        <TextField
          theme={theme}
          id="text-field"
          name="text-field"
          {...props}
        />,
      )
      .toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with label', () => {
    wrapper = setup({ label: 'Label text' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with description', () => {
    wrapper = setup({ description: 'Description text' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly TextFieldDescription component with id', () => {
    render(
      <TextField
        placeholder="test-value"
        description={<div id="custom-id">description</div>}
        inputProps={{
          inputProps: {
            'aria-describedby': 'custom-id',
          },
        }}
      />,
    );
    expect(screen.getByText('description')).toHaveAttribute('id', 'custom-id');
    expect(screen.getByPlaceholderText('test-value')).toHaveAttribute(
      'aria-describedBy',
      'custom-id',
    );
  });
});
