import React, { useState, useRef } from 'react';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import FilterList, { FilterType } from '@8x8/oxygen-filter-list';
import Button from '@8x8/oxygen-button';
import Modal, {
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@8x8/oxygen-modal';
import {
  dateTimeRangeFilter,
  generateFilterDefinitions,
  stringOperators,
} from './config';

export function FilterListInsideModal(args) {
  const [currentFilters, setCurrentFilters] = useState<FilterType[]>([]);
  const popoverPortalRef = useRef<HTMLDivElement | null>(null);

  const [modalOpen, setModalOpen] = useState<boolean>(true);

  return (
    <>
      <Doc>
        <h1>
          <code>FilterList</code> inside a modal
        </h1>
        <pre>
          {`import FilterList from '@8x8/oxygen-filter-list';
import Button from '@8x8/oxygen-button';
import Modal, {
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@8x8/oxygen-modal';

<Button onClick={() => setModalOpen(true)}>Open Modal</Button>
{modalOpen && (
        <Modal portalRef={popoverPortalRef}>
            <ModalHeader title="Select in Modal" />
            <ModalContent>
              <FilterList
                currentFilters={currentFilters}
                filterDefinitions={args.filterDefinitions}
                onChange={setCurrentFilters}
                popoverPortalRef={popoverPortalRef}
              />
            </ModalContent>
            <ModalFooter>
              <Button onClick={() => setModalOpen(false)}>Close</Button>
            </ModalFooter>
          </Modal>
        )}
`}
        </pre>
      </Doc>

      <ComponentSection block style={{ position: 'relative', zIndex: 2 }}>
        <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
        {modalOpen && (
          <Modal portalRef={popoverPortalRef}>
            <ModalHeader title="Select in Modal" />
            <ModalContent>
              <FilterList
                currentFilters={currentFilters}
                filterDefinitions={args.filterDefinitions}
                onChange={setCurrentFilters}
                popoverPortalRef={popoverPortalRef}
              />
            </ModalContent>
            <ModalFooter>
              <Button onClick={() => setModalOpen(false)}>Close</Button>
            </ModalFooter>
          </Modal>
        )}
      </ComponentSection>
    </>
  );
}

const stringFilterDefinitions = generateFilterDefinitions(
  1,
  10,
  20,
  stringOperators,
);

FilterListInsideModal.args = {
  filterDefinitions: [...stringFilterDefinitions, dateTimeRangeFilter],
};

FilterListInsideModal.storyName = 'render in Modal';
