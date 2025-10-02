import React from 'react';
import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';

import { ModalPortal } from './ModalPortal';
import { ModalHeader } from './ModalHeader';
import { ModalFooter } from './ModalFooter';

describe('ModalPortal', () => {
  it('should not render anything if not visible', () => {
    expect(shallow(<ModalPortal isVisible={false} />).get(0)).toEqual(null);
  });
  it('should pass in modalHasContent=false to ModalHeader and ModalFooter if there is no other content', () => {
    const wrapper = shallow(
      <ModalPortal isVisible>
        <ModalHeader theme={{}} />
        <ModalFooter theme={{}} />
      </ModalPortal>,
    );

    expect(wrapper.find(ModalHeader).prop('modalHasContent')).toEqual(false);
    expect(wrapper.find(ModalFooter).prop('modalHasContent')).toEqual(false);
  });
  it.each`
    content      | expected
    ${null}      | ${false}
    ${undefined} | ${false}
    ${'a'}       | ${true}
    ${(<div />)} | ${true}
  `(
    'should pass in modalHasContent=$expected to ModalHeader and ModalFooter for other content as $content',
    ({ content, expected }) => {
      const wrapper = shallow(
        <ModalPortal isVisible>
          <ModalHeader theme={{}} />
          {content}
          <ModalFooter theme={{}} />
        </ModalPortal>,
      );

      expect(wrapper.find(ModalHeader).prop('modalHasContent')).toEqual(
        expected,
      );
      expect(wrapper.find(ModalFooter).prop('modalHasContent')).toEqual(
        expected,
      );
    },
  );

  it('should render ModalPortal with role dialog and aria-labelledby', async () => {
    const testId = 'MODAL_CONTENT_TEST_ID';
    const headerTestId = 'MODAL_HEADER_TITLE_ID';
    const headerTitle = 'MODAL_HEADER_TITLE';

    render(
      <ModalPortal
        isVisible
        testId={testId}
        title={headerTitle}
        shouldUseFocusTrap={false}
      >
        <ModalHeader theme={{}} title={headerTitle} testId={headerTestId} />
        <ModalFooter theme={{}} />
      </ModalPortal>,
    );

    const headerTitleId = screen.getByText(headerTitle).getAttribute('id');

    expect(screen.getByTestId(testId)).toHaveAttribute('role', 'dialog');
    expect(screen.getByTestId(testId)).toHaveAttribute(
      'aria-labelledby',
      headerTitleId,
    );
    expect(screen.getByTestId(testId)).toHaveAttribute('aria-modal');
    expect(screen.getByText(headerTitle)).toHaveAttribute('id', headerTitleId);
  });
});
