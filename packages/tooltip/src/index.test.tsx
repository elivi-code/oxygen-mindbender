import React from 'react';
import { render } from '@testing-library/react';

import Tooltip, {
  orientation,
  directions, // deprecated
  showOn,
  showOnTypes, // deprecated
} from '.';

import type { TooltipProps } from '.';

// Tests that we export all required types
interface ComponentProps {
  orientationProp: TooltipProps['orientation'];
  showOnProp: TooltipProps['showOn'];
}
const Component: React.FunctionComponent<ComponentProps> = ({
  orientationProp,
  showOnProp,
}) => {
  return (
    <Tooltip orientation={orientationProp} showOn={showOnProp} title="title" />
  );
};

describe('Tooltip main exports', () => {
  it('provides a default export', () => {
    expect(Tooltip).toBeDefined();
  });
  it('exports objects for orientations and showOn', () => {
    expect(orientation).toBeDefined();
    expect(showOn).toBeDefined();
  });
  it('exports deprecated objects for directions and showOnTypes', () => {
    expect(directions).toBeDefined();
    expect(showOnTypes).toBeDefined();
  });
  it('exports all required types', () => {
    // TS compiler will complain if we're missing types
    render(<Component orientationProp="top" showOnProp="hover" />);
  });
});
