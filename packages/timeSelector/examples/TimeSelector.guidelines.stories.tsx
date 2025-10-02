import React, { Component } from 'react';

import PropTypes from 'prop-types';

import TimeSelector from '@8x8/oxygen-time-selector';
import { FaceFrownIcon } from '@8x8/oxygen-icon';

import {
  Section,
  Headline,
  ComponentSection,
  ComponentItem,
  Label,
} from '@8x8/oxygen-storybook-utils';

class TimeSelectorStory extends Component {
  static propTypes = {
    timeSelectorProps: PropTypes.object,
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
    hasInitialValue: PropTypes.bool,
  };

  static defaultProps = {
    timeSelectorProps: {},
    hours: 16,
    minutes: 33,
    seconds: 54,
    hasInitialValue: true,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.hasInitialValue
        ? {
            hours: props.hours,
            minutes: props.minutes,
            seconds: props.seconds,
          }
        : undefined,
    };
  }

  onTimeChange = value => this.setState({ value });

  render() {
    const { value } = this.state;
    const { timeSelectorProps } = this.props;

    return (
      <TimeSelector
        {...timeSelectorProps}
        value={value}
        onChange={this.onTimeChange}
      />
    );
  }
}

export default {
  title: 'Components/TimeSelector',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => (
  <>
    <Section>
      <Headline>Time Selector - Guidelines</Headline>
      <ComponentSection>
        <ComponentItem width="50%">
          <Label>Default size</Label>
          <TimeSelectorStory hours={10} minutes={45} seconds={0} />
        </ComponentItem>
        <ComponentItem width="50%">
          <Label>Small size</Label>
          <TimeSelectorStory timeSelectorProps={{ size: 'small' }} />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <ComponentItem>
          <Label>Full width</Label>
          <TimeSelectorStory
            hasInitialValue={false}
            timeSelectorProps={{ placeholder: 'Placeholder text...' }}
          />
        </ComponentItem>
      </ComponentSection>
    </Section>
    <Section>
      <Headline>Time Selector - States</Headline>
      <ComponentSection>
        <ComponentItem width="50%">
          <Label>Default</Label>
          <TimeSelectorStory
            hasInitialValue={false}
            timeSelectorProps={{ placeholder: 'Placeholder text' }}
          />
        </ComponentItem>

        <ComponentItem width="50%">
          <Label>Filled</Label>
          <TimeSelectorStory
            hours={7}
            timeSelectorProps={{ placeholder: 'Placeholder text' }}
          />
        </ComponentItem>
      </ComponentSection>

      <ComponentSection>
        <ComponentItem width="33%">
          <Label>Disabled</Label>
          <TimeSelectorStory
            hasInitialValue={false}
            timeSelectorProps={{
              placeholder: 'Placeholder text',
              isDisabled: true,
            }}
          />
        </ComponentItem>

        <ComponentItem width="33%">
          <Label>Disabled - filled</Label>
          <TimeSelectorStory
            timeSelectorProps={{
              isDisabled: true,
            }}
          />
        </ComponentItem>

        <ComponentItem width="33%">
          <Label>Has error</Label>
          <TimeSelectorStory
            minutes={59}
            timeSelectorProps={{
              hasError: true,
            }}
          />
        </ComponentItem>
      </ComponentSection>

      <ComponentSection>
        <ComponentItem width="33%">
          <Label>With default icon</Label>
          <TimeSelectorStory
            hasInitialValue={false}
            timeSelectorProps={{
              placeholder: 'Placeholder text',
              isLeftIconVisible: true,
            }}
          />
        </ComponentItem>

        <ComponentItem width="33%">
          <Label>With icon - filled</Label>
          <TimeSelectorStory
            hours={21}
            minutes={41}
            timeSelectorProps={{
              placeholder: 'Placeholder text',
              isLeftIconVisible: true,
            }}
          />
        </ComponentItem>

        <ComponentItem width="33%">
          <Label>With custom icon</Label>
          <TimeSelectorStory
            hasInitialValue={false}
            timeSelectorProps={{
              placeholder: 'Placeholder text',
              isLeftIconVisible: true,
              iconLeft: FaceFrownIcon,
            }}
          />
        </ComponentItem>
      </ComponentSection>
    </Section>

    <Section>
      <Headline>Time Selector - Formatting</Headline>

      <ComponentSection>
        <ComponentItem width="50%">
          <Label>Default (h:mm a)</Label>
          <TimeSelectorStory
            hours={8}
            minutes={19}
            timeSelectorProps={{
              placeholder: 'Select time',
              isLeftIconVisible: true,
            }}
          />
        </ComponentItem>

        <ComponentItem width="50%">
          <Label>24 hours (HH:mm)</Label>
          <TimeSelectorStory
            hours={20}
            minutes={45}
            seconds={null}
            timeSelectorProps={{
              placeholder: 'Select time',
              timeDisplayFormat: 'HH:mm',
              isLeftIconVisible: true,
            }}
          />
        </ComponentItem>
      </ComponentSection>

      <ComponentSection>
        <ComponentItem width="50%">
          <Label>Seconds, custom separator, 24 hours (HH.mm.ss)</Label>
          <TimeSelectorStory
            hours={18}
            minutes={45}
            seconds={33}
            timeSelectorProps={{
              placeholder: 'Select time',
              timeDisplayFormat: 'HH.mm.ss',
              isLeftIconVisible: true,
            }}
          />
        </ComponentItem>

        <ComponentItem width="50%">
          <Label>Seconds, custom separator (hh:mm:ss a)</Label>
          <TimeSelectorStory
            hours={19}
            minutes={0}
            seconds={15}
            timeSelectorProps={{
              placeholder: 'Select time',
              timeDisplayFormat: 'hh:mm:ss a',
              isLeftIconVisible: true,
            }}
          />
        </ComponentItem>
      </ComponentSection>
    </Section>
  </>
);

Guidelines.storyName = '01. Guidelines';
