import React, { useState } from 'react';

import Checkbox, { CheckboxGroup } from '@8x8/oxygen-checkbox';

import {
  Section,
  Headline,
  ComponentSection,
} from '@8x8/oxygen-storybook-utils';

export default {
  title: 'Components/Checkbox',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const toggleCheckbox = (value?: string) => {
    setChecked({
      ...checked,
      [value]: !checked[value],
    });
  };

  return (
    <>
      <Section>
        <Headline>Checkbox - States</Headline>
        <ComponentSection>
          <CheckboxGroup>
            <Checkbox isChecked label="Checkbox" />
            <Checkbox label="Unchecked" />
            <Checkbox isIndeterminate label="Indeterminate" />
          </CheckboxGroup>
          <CheckboxGroup>
            <Checkbox isDisabled isChecked label="Disabled" />
            <Checkbox isDisabled label="Disabled Unchecked" />
            <Checkbox
              isDisabled
              isIndeterminate
              label="Disabled Indeterminate"
            />
          </CheckboxGroup>
        </ComponentSection>
      </Section>
      <Section>
        <Headline>Checkbox - Multi-line Label</Headline>
        <ComponentSection>
          <div style={{ width: '350px' }}>
            <Checkbox
              key="ml1"
              name="ml1"
              value="ml1"
              isChecked={checked.ml1}
              onChange={toggleCheckbox}
              label="A singular checked check box with a long label that
                requires multiple lines to display its contents and is centered
                according to the input"
            />
          </div>
        </ComponentSection>
      </Section>
      <Section>
        <Headline>Checkbox Groups</Headline>
        <ComponentSection>
          <div>
            <CheckboxGroup isHorizontal>
              <legend>Horizontal Group</legend>
              {['c1', 'c2', 'c3'].map(id => (
                <Checkbox
                  key={id}
                  name={id}
                  value={id}
                  isChecked={checked[id]}
                  label={`Example label ${id}`}
                  onChange={toggleCheckbox}
                />
              ))}
            </CheckboxGroup>
          </div>
        </ComponentSection>
        <ComponentSection>
          <div>
            <CheckboxGroup>
              <legend>Vertical Group</legend>
              {['c4', 'c5', 'c6'].map(id => (
                <Checkbox
                  key={id}
                  name={id}
                  value={id}
                  isChecked={checked[id]}
                  label={`Example label ${id}`}
                  onChange={toggleCheckbox}
                />
              ))}
            </CheckboxGroup>
          </div>
        </ComponentSection>
      </Section>
      <Section>
        <Headline>Checkbox Groups - with InfoBox</Headline>
        <ComponentSection>
          <div>
            <CheckboxGroup isHorizontal>
              <legend>Horizontal Group</legend>
              {['c7', 'c8', 'c9'].map(id => (
                <Checkbox
                  key={id}
                  name={id}
                  value={id}
                  isChecked={checked[id]}
                  label={`Example label ${id}`}
                  infoBoxText={`Example text in tooltip for ${id}`}
                  infoBoxButtonLabel={`Example Button for ${id}`}
                  onChange={toggleCheckbox}
                />
              ))}
            </CheckboxGroup>
          </div>
        </ComponentSection>
        <ComponentSection>
          <div>
            <CheckboxGroup>
              <legend>Vertical Group</legend>
              {['c10', 'c11', 'c12'].map(id => (
                <Checkbox
                  key={id}
                  name={id}
                  value={id}
                  isChecked={checked[id]}
                  label={`Example label ${id}`}
                  infoBoxText={`Example text in tooltip for ${id}`}
                  infoBoxButtonLabel={`Example Button for ${id}`}
                  onChange={toggleCheckbox}
                />
              ))}
            </CheckboxGroup>
          </div>
        </ComponentSection>
      </Section>
      <Section>
        <Headline>Checkbox Groups - with Multi-line Labels </Headline>
        <ComponentSection>
          <div>
            <CheckboxGroup isHorizontal>
              <legend>Horizontal Group</legend>
              <Checkbox
                name="c13"
                value="c13"
                isChecked={checked.c13}
                label="Horizontal group checkbox c13"
                onChange={toggleCheckbox}
              />
              <Checkbox
                name="c14"
                value="c14"
                isChecked={checked.c14}
                label="Horizontal group checkbox c14 with a long label"
                onChange={toggleCheckbox}
              />
              <Checkbox
                name="c15"
                value="c15"
                isChecked={checked.c15}
                label="Horizontal group checkbox c15 with a long label
                    that requires multiple lines to display its contents and is
                    centered according to the input"
                onChange={toggleCheckbox}
              />
            </CheckboxGroup>
          </div>
        </ComponentSection>
        <ComponentSection>
          <div style={{ width: '350px' }}>
            <CheckboxGroup>
              <legend>Vertical Group</legend>
              {['c16', 'c17', 'c18'].map(id => (
                <Checkbox
                  key={id}
                  name={id}
                  value={id}
                  isChecked={checked[id]}
                  label={`Vertical group checkbox ${id} with a long label
                    that requires multiple lines to display its contents and is
                    centered according to the input`}
                  onChange={toggleCheckbox}
                />
              ))}
            </CheckboxGroup>
          </div>
        </ComponentSection>
      </Section>
    </>
  );
};

Guidelines.storyName = '01. Guidelines';
