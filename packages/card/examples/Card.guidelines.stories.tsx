import React from 'react';

import Button from '@8x8/oxygen-button';
import { card as theme } from '@8x8/oxygen-constants';
import Card, { Statistics, Separator } from '@8x8/oxygen-card';

import {
  ComponentSection,
  Headline,
  Label,
  Section,
} from '@8x8/oxygen-storybook-utils';
import {
  IconSeparatorWrapper,
  StyledHeader,
  StyledIcon,
} from './Card.examples.styled';

const propsNoError = {
  data: [
    {
      statistics: '1/3',
      label: 'Items used',
    },
    {
      statistics: '5',
      label: 'Total items',
    },
    {
      statistics: '50',
      label: 'Cent',
    },
  ],
};

const propsWithError = {
  data: [
    {
      statistics: '1/3',
      label: 'Items used',
      hasError: true,
    },
    {
      statistics: '5',
      label: 'Total items',
    },
    {
      statistics: '50',
      label: 'Cent',
    },
  ],
};

const halfSeparatorTheme = { ...theme, cardSeparatorWidth: '125px' };

const StatisticsCard = props => {
  return (
    <>
      <StyledHeader>Oxygen card with Statistics</StyledHeader>
      <IconSeparatorWrapper>
        <Separator theme={halfSeparatorTheme} />
        <StyledIcon />
        <Separator theme={halfSeparatorTheme} />
      </IconSeparatorWrapper>
      <Statistics {...props} />
      <Button testId="CARD_EDIT_BUTTON" title="EDIT">
        Action
      </Button>
    </>
  );
};

const HeaderIconSeparatorCard = () => {
  return (
    <>
      <StyledHeader>Oxygen Card</StyledHeader>

      <IconSeparatorWrapper>
        <Separator theme={halfSeparatorTheme} />

        <StyledIcon />

        <Separator theme={halfSeparatorTheme} />
      </IconSeparatorWrapper>
    </>
  );
};

const HeaderSeparatorCard = () => {
  return (
    <>
      <StyledHeader>Oxygen Card</StyledHeader>
      <Separator />
    </>
  );
};

export default {
  title: 'Components/Card',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => (
  <Section>
    <Headline>Card - Guidelines</Headline>

    <ComponentSection>
      <div>
        <Label>Simple card</Label>
        <Card testId="SIMPLE_CARD" />
      </div>
    </ComponentSection>

    <ComponentSection>
      <div>
        <Label>Card with header</Label>
        <Card testId="CARD_WITH_HEADER">
          <StyledHeader>Oxygen Card</StyledHeader>
        </Card>
      </div>
    </ComponentSection>

    <ComponentSection>
      <div>
        <Label>Card with header and separator</Label>
        <Card testId="CARD_WITH_HEADER_SEPARATOR">
          <HeaderSeparatorCard />
        </Card>
      </div>
    </ComponentSection>

    <ComponentSection>
      <div>
        <Label>Card with header, icon and separator</Label>
        <Card testId="CARD_WITH_HEADER_ICON_SEPARATOR">
          <HeaderIconSeparatorCard />
        </Card>
      </div>
    </ComponentSection>

    <ComponentSection>
      <div>
        <Label>Card with Statistics component</Label>
        <Card testId="STATISTICS_CARD">
          <StatisticsCard {...propsNoError} />
        </Card>
      </div>
    </ComponentSection>

    <ComponentSection>
      <div>
        <Label>Card with Statistics component and error on data</Label>
        <Card testId="STATISTICS_CARD_WITH_ERROR">
          <StatisticsCard {...propsWithError} />
        </Card>
      </div>
    </ComponentSection>
  </Section>
);

Guidelines.storyName = '01. Guidelines';
