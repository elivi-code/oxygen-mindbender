import React, { useRef } from 'react';
import Select from '@8x8/oxygen-select';
import { action } from 'storybook/actions';
import { SelectInstance } from 'react-select';
import Button from '@8x8/oxygen-button';

import {
  Doc,
  ComponentSection,
  PlaygroundDecorator,
} from '@8x8/oxygen-storybook-utils';

import { ArgsConfig, argsConfig, argTypesConfig } from '../config';

export const FocusableSelect = (args: ArgsConfig) => {
  const selectRef = useRef<SelectInstance>(null);

  const handleFocusSelect = () => {
    if (selectRef.current) {
      selectRef.current.focus();
    }
  };

  return (
    <>
      <Doc>
        <p>
          A select component which is programatically focusable, when disabled
        </p>
        <p>
          React hook forms scrolls onto and focuses a component when the
          associated field has a validation error
        </p>
      </Doc>

      <ComponentSection block>
        <div>
          <Select
            {...args}
            ref={selectRef}
            onFocus={e => action('Select focused')(e)}
            onChange={(newValue, actionMeta) => {
              action('Select changed')(newValue, actionMeta);
            }}
          />
          <div style={{ marginTop: '12px' }}>
            <Button onClick={handleFocusSelect}>Focus Select</Button>
          </div>
        </div>
      </ComponentSection>
    </>
  );
};
FocusableSelect.args = {
  ...argsConfig,
};
FocusableSelect.argTypes = argTypesConfig;
FocusableSelect.storyName = '11. Focusable disabled';

export default {
  title: 'Components/Select',
  component: Select,
  decorators: [PlaygroundDecorator],
};
