import React, { useEffect, useState } from 'react';
import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { StoryFn } from '@storybook/react';
import { Item, TableOfContents } from '@8x8/oxygen-table-of-contents';
import { action, HandlerFunction } from 'storybook/actions';

interface Props {
  selectedItemIndex?: number;
  onClickAction: HandlerFunction;
}

const items = [
  '8x8 work phone with more text in here',
  'Emergency addresses some very long text',
  'Caller ID',
];

export const TocDeclarativeStory: StoryFn<Props> = args => {
  const [currentItem, setCurrentItem] = useState('');
  const { selectedItemIndex, onClickAction } = args;

  useEffect(() => {
    const item =
      selectedItemIndex !== undefined ? items[selectedItemIndex] : '';

    setCurrentItem(item);
  }, [selectedItemIndex]);

  const createOnClick = (itemName: string) => () => {
    onClickAction({ itemName });
    setCurrentItem(itemName);
  };
  const isActive = (itemName: string) => currentItem === itemName;
  const [item0, item1, item2] = items;

  return (
    <>
      <Doc>
        <h1>
          <code>TableOfContents</code> usage
        </h1>
        <p>
          The <code>TableOfContents</code> component is meant to navigate to
          anchors within a document. The component invokes a callback when one
          of the TOC items is pressed.
        </p>
        <pre>
          {`
import { Item, TableOfContents } from '@8x8/oxygen-table-of-contents';

const items = [
  '8x8 work phone with more text in here',
  'Emergency addresses some very long text',
  'Caller ID',
];

const TocExample = () => {
  const [currentItem, setCurrentItem] = useState('');
  const createOnClick = (itemName: string) => () => setCurrentItem(itemName);
  const isActive = (itemName: string) => currentItem === itemName;
  const [item0, item1, item2] = items;

  return (
    <TableOfContents>
      <Item onClick={createOnClick(item0)} isActive={isActive(item0)}>{item0}</Item>
      <Item onClick={createOnClick(item1)} isActive={isActive(item1)}>{item1}</Item>
      <Item onClick={createOnClick(item2)} isActive={isActive(item2)}>{item2}</Item>
    </TableOfContents>
  );
}
          `}
        </pre>
      </Doc>
      <ComponentSection block>
        <TableOfContents>
          <Item onClick={createOnClick(item0)} isActive={isActive(item0)}>
            {item0}
          </Item>
          <Item onClick={createOnClick(item1)} isActive={isActive(item1)}>
            {item1}
          </Item>
          <Item onClick={createOnClick(item2)} isActive={isActive(item2)}>
            {item2}
          </Item>
        </TableOfContents>
      </ComponentSection>
    </>
  );
};

TocDeclarativeStory.args = {
  selectedItemIndex: undefined,
  onClickAction: action('onClick'),
};
TocDeclarativeStory.argTypes = {
  selectedItemIndex: {
    options: [undefined, 0, 1, 2],
    control: { type: 'select' },
  },
};
TocDeclarativeStory.storyName = 'Table of contents';
