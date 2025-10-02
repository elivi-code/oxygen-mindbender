import React, { useEffect, useMemo, useState } from 'react';
import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { StoryFn } from '@storybook/react';
import { TableOfContents, Item } from '@8x8/oxygen-table-of-contents';
import styled from 'styled-components';
import { tocItems } from './tocItems';
import { TextItem } from './TextItem';

const Container = styled.div`
  max-height: 400px;
  overflow-y: auto;
  padding-left: 10px;
`;

interface Props {
  selectedItem?: string;
}

export const TableOfContentsStory: StoryFn<Props> = args => {
  const [currentItem, setCurrentItem] = useState('');
  const { selectedItem } = args;

  useEffect(() => {
    setCurrentItem(selectedItem ?? '');
  }, [selectedItem]);

  const createOnClick =
    (label: string, ref: React.RefObject<HTMLDivElement>) => () => {
      setCurrentItem(label);
      ref.current?.scrollIntoView();
    };
  const isItemActive = (itemName: string) => currentItem === itemName;

  const itemsWithFontSize = useMemo(
    () =>
      tocItems.map(item => ({
        label: item,
        fontSize: Math.floor(10 + Math.random() * 9),
      })),
    [tocItems],
  );

  const items = itemsWithFontSize.map(({ label, fontSize }) => {
    const ref = React.createRef<HTMLDivElement>();

    return {
      label,
      onClick: createOnClick(label, ref),
      isActive: isItemActive(label),
      ref,
      fontSize,
    };
  });

  return (
    <>
      <Doc>
        <h1>TOC rendered from an array</h1>
        <p>The TableOfContents component is initialized from an array</p>
      </Doc>
      <ComponentSection
        style={{
          height: '80%',
          width: '70%',
          flexWrap: 'nowrap',
          justifyContent: 'space-between',
        }}
      >
        <TableOfContents>
          {items.map(({ label, onClick, isActive }) => (
            <Item key={label} onClick={onClick} isActive={isActive}>
              {label}
            </Item>
          ))}
        </TableOfContents>
        <Container>
          {items.map(({ label, ref, fontSize }) => (
            <TextItem key={label} id={label} fontSize={fontSize} ref={ref} />
          ))}
        </Container>
      </ComponentSection>
    </>
  );
};

TableOfContentsStory.args = {
  selectedItem: undefined,
};
TableOfContentsStory.argTypes = {
  selectedItem: {
    options: [undefined, ...tocItems],
    control: { type: 'select' },
  },
};
TableOfContentsStory.storyName = 'Table of contents scrollIntoView';
