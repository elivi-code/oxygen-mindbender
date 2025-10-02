import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Tooltip from './Tooltip';

describe('Tooltip renderContainer', () => {
  it('renders in a custom renderContainer with a generated UUID', () => {
    const Comp = () => {
      const [renderContainer, setRenderContainer] = React.useState();
      const saveRefToState = ref => setRenderContainer(ref);

      return (
        <>
          <Tooltip title="content" renderContainer={renderContainer}>
            <div>child</div>
          </Tooltip>
          <div ref={saveRefToState}>sibling</div>
        </>
      );
    };

    const result = render(<Comp />);

    // need to use native JS to traverse the DOM up to the parent (body) to fetch the root portal
    // uuid.js mock returns incrementing numbers, starts with 1
    const root = result.container.parentElement?.querySelector('[id="1"]');
    const defaultIdElement = result.container.parentElement?.querySelector(
      '#oxygen-tooltip-root',
    );

    expect(root).toBeInTheDocument();
    expect(defaultIdElement).not.toBeInTheDocument();
  });
});
