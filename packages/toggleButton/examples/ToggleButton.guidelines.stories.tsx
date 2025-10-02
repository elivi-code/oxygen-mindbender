import React, { useState } from 'react';

import ToggleButton, { ToggleButtonGroup } from '@8x8/oxygen-toggle-button';

import {
  Label,
  Section,
  Headline,
  ComponentSection,
} from '@8x8/oxygen-storybook-utils';

export default {
  title: 'Components/ToggleButton',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const toggleToggleButton = (value: string) => {
    setChecked({
      ...checked,
      [value]: !checked[value],
    });
  };

  return (
    <>
      <Section>
        <Headline>Toggle Button</Headline>
        <ComponentSection>
          <div>
            <ToggleButton
              key="tb1"
              name="tb1"
              value="tb1"
              isChecked={checked.tb1}
              label="Example Label"
              onChange={() => toggleToggleButton('tb1')}
            />
          </div>
        </ComponentSection>
      </Section>
      <Section>
        <Headline>Toggle Button - Guidelines</Headline>
        <ComponentSection>
          <div>
            <Label>ON state</Label>
            <ToggleButton
              data-prop="data-prop"
              label="Example Label"
              isChecked
            />
          </div>
          <div>
            <Label>OFF state</Label>
            <ToggleButton label="Example Label" />
          </div>
          <div>
            <Label>Indeterminate state (deprecated)</Label>
            <ToggleButton isIndeterminate label="Example Label" />
          </div>
        </ComponentSection>
        <ComponentSection>
          <div>
            <Label>Disabled ON state</Label>
            <ToggleButton isChecked isDisabled label="Example Label" />
          </div>
          <div>
            <Label>Disabled OFF state</Label>
            <ToggleButton isDisabled label="Example Label" />
          </div>
          <div>
            <Label>Disabled indeterminate state (deprecated)</Label>
            <ToggleButton label="Example Label" isDisabled isIndeterminate />
          </div>
        </ComponentSection>
      </Section>
      <Section>
        <Headline>Toggle Button - Multi-line Label</Headline>
        <ComponentSection>
          <div style={{ width: '350px' }}>
            <ToggleButton
              key="tb2"
              name="tb2"
              value="tb2"
              isChecked={checked.tb2}
              onChange={() => toggleToggleButton('tb2')}
              label="A singular toggle button with a long label that
                  requires multiple lines to display its contents and is
                  centered according to the input"
            />
          </div>
        </ComponentSection>
      </Section>
      <Section>
        <Headline>ToggleButton - Groups</Headline>
        <ComponentSection>
          <div>
            <ToggleButtonGroup isHorizontal>
              <legend>Horizontal Group</legend>
              {['t3', 't4', 't5'].map(id => (
                <ToggleButton
                  key={id}
                  name={id}
                  value={id}
                  label={`Example label ${id}`}
                  isChecked={checked[id]}
                  onChange={() => toggleToggleButton(id)}
                />
              ))}
            </ToggleButtonGroup>
          </div>
        </ComponentSection>
        <ComponentSection>
          <div>
            <ToggleButtonGroup>
              <legend>Vertical Group</legend>
              {['t6', 't7', 't8'].map(id => (
                <ToggleButton
                  key={id}
                  name={id}
                  value={id}
                  label={`Example label ${id}`}
                  isChecked={checked[id]}
                  onChange={() => toggleToggleButton(id)}
                />
              ))}
            </ToggleButtonGroup>
          </div>
        </ComponentSection>
      </Section>
      <Section>
        <Headline>ToggleButton - with InfoBox</Headline>
        <ComponentSection>
          <div>
            <ToggleButtonGroup isHorizontal>
              <legend>Horizontal Group</legend>
              {['t9', 't10', 't11'].map(id => (
                <ToggleButton
                  key={id}
                  name={id}
                  value={id}
                  label={`Example label ${id}`}
                  infoBoxText="Example text in tooltip"
                  infoBoxButtonLabel="Example Button"
                  isChecked={checked[id]}
                  onChange={() => toggleToggleButton(id)}
                />
              ))}
            </ToggleButtonGroup>
          </div>
        </ComponentSection>
        <ComponentSection>
          <div>
            <ToggleButtonGroup>
              <legend>Vertical Group</legend>
              {['t12', 't13', 't14'].map(id => (
                <ToggleButton
                  key={id}
                  name={id}
                  value={id}
                  label={`Example label ${id}`}
                  infoBoxText="Example text in tooltip"
                  infoBoxButtonLabel="Example Button"
                  isChecked={checked[id]}
                  onChange={() => toggleToggleButton(id)}
                />
              ))}
            </ToggleButtonGroup>
          </div>
        </ComponentSection>
      </Section>
      <Section>
        <Headline>Toggle Buttons - with Multi-line Labels</Headline>
        <ComponentSection>
          <div>
            <ToggleButtonGroup isHorizontal>
              <legend>Horizontal Group</legend>
              <ToggleButton
                key="tb15"
                name="tb15"
                value="tb15"
                isChecked={checked.tb15}
                onChange={() => toggleToggleButton('tb15')}
                label="Horizontal group toggle button 1"
              />
              <ToggleButton
                key="tb16"
                name="tb16"
                value="tb16"
                isChecked={checked.tb16}
                onChange={() => toggleToggleButton('tb16')}
                label="Horizontal group toggle button 2 with a
                    long label"
              />
              <ToggleButton
                key="tb17"
                name="tb17"
                value="tb17"
                isChecked={checked.tb17}
                onChange={() => toggleToggleButton('tb17')}
                label="Horizontal group toggle button 3 with a long label
                    that requires multiple lines to display its contents and is
                    centered according to the input"
              />
            </ToggleButtonGroup>
          </div>
        </ComponentSection>
        <ComponentSection>
          <div style={{ width: '350px' }}>
            <ToggleButtonGroup>
              <legend>Vertical Group</legend>
              <ToggleButton
                key="tb20"
                name="tb20"
                value="tb20"
                isChecked={checked.tb20}
                onChange={() => toggleToggleButton('tb20')}
                label="Vertical group toggle button 1 with a long label
                    that requires multiple lines to display its contents and is
                    centered according to the input"
              />
              <ToggleButton
                key="tb18"
                name="tb18"
                value="tb18"
                isChecked={checked.tb18}
                onChange={() => toggleToggleButton('tb18')}
                label="Vertical group toggle button 2 with a long label
                    that requires multiple lines to display its contents and is
                    centered according to the input"
              />
              <ToggleButton
                key="tb19"
                name="tb19"
                value="tb19"
                isChecked={checked.tb19}
                onChange={() => toggleToggleButton('tb19')}
                label="Vertical group toggle button 3 with a long label
                    that requires multiple lines to display its contents and is
                    centered according to the input"
              />
            </ToggleButtonGroup>
          </div>
        </ComponentSection>
      </Section>
    </>
  );
};

Guidelines.storyName = '01. Guidelines';
