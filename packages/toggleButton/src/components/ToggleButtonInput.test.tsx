import React from 'react';
import TestRenderer from 'react-test-renderer';

import { toggleButton as theme } from '@8x8/oxygen-constants';
import { ToggleButton } from './ToggleButton';

describe('ToggleButton', () => {
  const mockProps = {
    id: 'mockedId',
    label: 'mockedLabel',
    value: 'mockedValue',
    name: 'mockedName',
    inputProps: {
      'aria-label': 'test',
    },
  };

  it('should include aria-label in toggle-button component', () => {
    const testRenderer = TestRenderer.create(
      <ToggleButton theme={theme} {...mockProps} />,
    );
    const testInstance = testRenderer.root;
    const el = testInstance.findByProps({ 'data-test-id': 'TOGGLE_BUTTON' });

    expect(el.props['aria-label']).toEqual('test');
  });
});
