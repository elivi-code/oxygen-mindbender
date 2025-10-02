import React from 'react';
import Select from '@8x8/oxygen-select';
import ReactSelect from 'react-select';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from '../config';

const selectOptions = [
  { value: 'One', label: 'Option One' },
  { value: 'Two', label: 'Option Two' },
  {
    value: 'Three',
    label: `Option Three really long to have the content clipped. Lorem ipsum
    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.`,
  },
  { value: 'Four', label: 'Option Four' },
  { value: 'Five', label: 'Option Five' },
  { value: 'Six', label: 'Option Six' },
  { value: 'Seven', label: 'Option Seven' },
  { value: 'Eight', label: 'Option Eight' },
  { value: 'Secret', label: 'Secret Option' },
  { value: 'Disabled', label: 'Disabled Option', isDisabled: true },
];

export const DoubleClickIssue = args => (
  <>
    <Doc>
      <h1>
        Issue with removing items from a large where the first click only
        scrolls the selection
      </h1>
      <p>
        Testcase for <a href="https://agile.8x8.com/browse/OX-1517">OX-1517</a>
      </p>
      <p>
        If there are selected items that create a scrollable area, when the user
        attempt to click on the [x] to remove an item from the selection, the
        first click does not remove it. Instead it focuses and scrolls the
        selection.
      </p>
      <p>
        A different UI should be used in this case, but we are trying to improve
        the UX a bit if possible.
      </p>
      <hr />
      <p>
        For this testcase we use a small container width to more easily achieve
        a scrollable selection. This issue reproduces only with the{' '}
        <code>isMulti</code> prop. It also seems to reproduce with a single row
        and horizontal overflow, but it&apos;s harder to test & verify
      </p>
      <p>To reproduce in the below example:</p>
      <ol>
        <li>add items until there are 3 rows visible</li>
        <li>ensure the inner part is scrolled up (should be by default)</li>
        <li>
          ensure you don&apos;t have the Select focused (click somewhere
          outside)
        </li>
        <li>
          attempt to click on the [x] on one of the items in the first row
        </li>
      </ol>
      <p>Expected results: the item is removed from the selection</p>
      <p>
        Actual results: the Select is focused, opened and the inner selected
        option list is scrolled down. The item is not removed
      </p>
      <p>
        On the right there is an original React Select, which does not exhibit
        the problem, which implies that it is caused by our codebase. There is a{' '}
        <code>mouseDown.preventDefault()</code> in the original MultiValue code
        which we have lost. The fix attaches all original events.
      </p>
    </Doc>
    <ComponentSection>
      <div style={{ width: '400px', margin: '0 auto' }}>
        <Select
          {...args}
          isMulti
          multipleSelectMaxRows={2}
          options={selectOptions}
        />
      </div>
      <div style={{ width: '400px', margin: '0 auto' }}>
        <ReactSelect
          isMulti
          options={selectOptions}
          styles={{
            valueContainer: baseStyles => ({
              ...baseStyles,
              height: '50px',
              overflow: 'auto',
            }),
          }}
        />
      </div>
    </ComponentSection>
  </>
);
DoubleClickIssue.args = argsConfig;
DoubleClickIssue.argTypes = argTypesConfig;
DoubleClickIssue.storyName = 'Select doubleClick to remove issue OX-1517';

export default {
  title: 'Components/Select',
  component: Select,
};
