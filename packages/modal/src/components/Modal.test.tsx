import React from 'react';
import { render } from '@testing-library/react';

import Modal from './Modal';

describe('Modal', () => {
  it('supports isVsible', () => {
    const { rerender } = render(<Modal isVisible />);

    rerender(<Modal isVisible={false} />);
  });
});
