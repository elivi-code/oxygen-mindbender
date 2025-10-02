import React, { Component } from 'react';

import Radio, { RadioGroup } from '@8x8/oxygen-radio';

import {
  Section,
  Headline,
  ComponentSection,
  ComponentItem,
} from '@8x8/oxygen-storybook-utils';

class RadioStory extends Component {
  state = {
    selectedValueGroup0: { id: 'value1' },
    selectedValueGroup1: 'value1',
    selectedValueGroup2: 'value20',
    selectedValueGroup3: 'value0',
    selectedValueGroup4: 'value0',
    selectedValueGroup5: 'value50',
  };

  onChangeGroup0 = value => {
    this.setState({ selectedValueGroup0: value });
  };

  onChangeGroup1 = value => {
    this.setState({ selectedValueGroup1: value });
  };

  onChangeGroup2 = value => {
    this.setState({ selectedValueGroup2: value });
  };

  onChangeGroup3 = value => {
    this.setState({ selectedValueGroup3: value });
  };

  onChangeGroup4 = value => {
    this.setState({ selectedValueGroup4: value });
  };

  onChangeGroup5 = value => {
    this.setState({ selectedValueGroup5: value });
  };

  render() {
    const {
      selectedValueGroup0,
      selectedValueGroup1,
      selectedValueGroup2,
      selectedValueGroup3,
      selectedValueGroup4,
      selectedValueGroup5,
    } = this.state;

    return (
      <>
        <Section>
          <Headline>Radio Button - States</Headline>
          <ComponentSection>
            <ComponentItem width="50%">
              <RadioGroup
                value={selectedValueGroup2}
                onChange={this.onChangeGroup2}
              >
                <legend>Selected and unselected</legend>
                <Radio label="An unselected radio button" value="value20" />
                <Radio label="A selected radio button" value="value21" />
              </RadioGroup>
            </ComponentItem>
            <ComponentItem width="50%">
              <RadioGroup value={selectedValueGroup3}>
                <legend>Disabled and selected and unselected</legend>
                <Radio
                  isChecked
                  isDisabled
                  label="A selected disabled radio button"
                  value="value30"
                />
                <Radio
                  label="A disabled radio button"
                  value="value31"
                  isDisabled
                />
              </RadioGroup>
            </ComponentItem>
          </ComponentSection>
        </Section>
        <Section>
          <Headline>Radio Button - Multi-line Label</Headline>
          <ComponentSection>
            <div style={{ width: '350px' }}>
              <Radio
                label="A singular unselected radio button with a long label that
                requires multiple lines to display its contents and is centered
                according to the input"
                name="radio0"
              />
            </div>
          </ComponentSection>
        </Section>
        <Section>
          <Headline>Radio Buttons - Group</Headline>
          <ComponentSection>
            <div>
              <RadioGroup
                name="radioName0"
                value={selectedValueGroup0}
                onChange={this.onChangeGroup0}
                as="div"
                role="radiogroup"
                aria-labelledby="group_label_0"
              >
                <p id="group_label_0">Radio buttons group vertical</p>
                <Radio label="Checkboxes" value="value0" />
                <Radio label="Buttons" value={{ id: 'value1' }} />
                <Radio label="Calendars" value="value2" />
                <Radio label="Radio buttons" value="value3" />
              </RadioGroup>
            </div>
          </ComponentSection>
          <ComponentSection>
            <div>
              <RadioGroup
                isHorizontal
                name="radioName1"
                value={selectedValueGroup1}
                onChange={this.onChangeGroup1}
              >
                <legend>Radio buttons group horizontal</legend>
                <Radio label="Checkboxes" value="value0" />
                <Radio label="Buttons" value="value1" />
                <Radio label="Calendars" value="value2" />
                <Radio label="Radio buttons" value="value3" />
              </RadioGroup>
            </div>
          </ComponentSection>
        </Section>
        <Section>
          <Headline>Radio Buttons - with InfoBox</Headline>
          <ComponentSection>
            <div>
              <RadioGroup
                name="radioName2"
                value={selectedValueGroup0}
                onChange={this.onChangeGroup0}
              >
                <legend>Radio buttons group vertical</legend>
                <Radio
                  label="Checkboxes"
                  value="value0"
                  infoBoxText="Example text in tooltip"
                  infoBoxButtonlabel="Example Button"
                />
                <Radio
                  label="Buttons"
                  value={{ id: 'value1' }}
                  infoBoxText="Example text in tooltip"
                  infoBoxButtonlabel="Example Button"
                />
                <Radio
                  label="Calendars"
                  value="value2"
                  infoBoxText="Example text in tooltip"
                  infoBoxButtonlabel="Example Button"
                />
                <Radio
                  label="Radio buttons"
                  value="value3"
                  infoBoxText="Example text in tooltip"
                />
              </RadioGroup>
            </div>
          </ComponentSection>
          <ComponentSection>
            <div>
              <RadioGroup
                isHorizontal
                name="radioName3"
                value={selectedValueGroup3}
                onChange={this.onChangeGroup3}
              >
                <legend>Radio buttons group horizontal</legend>
                <Radio
                  label="Checkboxes"
                  value="value0"
                  infoBoxText="Example text in tooltip"
                />
                <Radio
                  label="Buttons"
                  value="value1"
                  infoBoxText="Example text in tooltip"
                />
                <Radio
                  label="Calendars"
                  value="value2"
                  infoBoxText="Example text in tooltip"
                />
                <Radio
                  label="Radio buttons"
                  value="value3"
                  infoBoxText="Example text in tooltip"
                />
              </RadioGroup>
            </div>
          </ComponentSection>
        </Section>
        <Section>
          <Headline>Radio Buttons - with Multi-line Labels</Headline>
          <ComponentSection>
            <div
              style={{
                width: '350px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <RadioGroup
                name="radioName0"
                value={selectedValueGroup4}
                onChange={this.onChangeGroup4}
              >
                <legend>Radio buttons group vertical</legend>
                <Radio
                  label="Option 1 radio button with a long label that requires
                  multiple lines to display its contents and is centered
                  according to the input"
                  value="value0"
                />
                <Radio
                  label="Option 2 radio button with a long label that requires
                  multiple lines to display its contents and is centered
                  according to the input"
                  value="value1"
                />
                <Radio
                  label="Option 3 radio button with a long label that requires
                  multiple lines to display its contents and is centered
                  according to the input"
                  value="value2"
                />
                <Radio
                  label="Option 4 radio button with a long label that requires
                  multiple lines to display its contents and is centered
                  according to the input"
                  value="value3"
                />
              </RadioGroup>
            </div>
          </ComponentSection>
          <ComponentSection>
            <div>
              <RadioGroup
                isHorizontal
                name="radioName1"
                value={selectedValueGroup5}
                onChange={this.onChangeGroup5}
              >
                <legend>Radio buttons group horizontal</legend>
                <Radio
                  label="Horizontal group radio Option 1"
                  value="value50"
                />
                <Radio
                  label="Horizontal group radio Option 2 with a long label"
                  value="value1"
                />
                <Radio
                  label="Horizontal group radio Option 3 with a long label
                    that requires multiple lines to display"
                  value="value2"
                />
                <Radio
                  label="Horizontal group radio Option 4 with a long label
                    that requires multiple lines to display its contents and is
                    centered according to the input"
                  value="value3"
                />
              </RadioGroup>
            </div>
          </ComponentSection>
        </Section>
      </>
    );
  }
}

export default {
  title: 'Components/Radio',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => <RadioStory />;
Guidelines.storyName = '01. Guidelines';
