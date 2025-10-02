import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as constants from '@8x8/oxygen-constants';

import {
  Label,
  Section,
  Headline,
  ComponentSection,
} from '@8x8/oxygen-storybook-utils';

const ConstantContainer = styled.div`
  display: flex;
  width: ${({ width }) => width};
  flex-direction: row;
  align-items: center;
  font-family: ${constants.font.family};
`;

ConstantContainer.propTypes = {
  width: PropTypes.string,
};

ConstantContainer.defaultProps = {
  width: '100%',
};

const ConstantValue = styled.div`
  margin-left: 16px;
  font-size: ${constants.font.sizeSm};
`;

const ColorBullet = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin-right: 8px;
`;

const ColorHexa = styled.span`
  width: 85px;
  display: inline-block;
  text-align: left;
`;

const TypographyExample = styled.div`
  margin-left: 24px;
  font-size: ${constants.font.sizeSm};
`;

const LineHeightExample = styled.div`
  font-size: ${constants.font.sizeSm};
  margin: 16px 0 16px 24px;
  text-align: left;
`;

const KeyCode = styled.div`
  width: 44px;
  height: 40px;
  margin-right: 12px;
  font-size: ${constants.font.sizeMd};
  border: 1px solid #eee;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const loremIpsum =
  '(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus nisi vel felis molestie, ' +
  'ut volutpat ex consectetur. Aenean ut gravida mi, ac scelerisque diam. Etiam dui est, pulvinar in elit ac, viverra' +
  'fermentum dolor. Duis interdum non urna eu luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
  'Etiam volutpat dui arcu, id maximus mi venenatis sed. Aenean rhoncus nisl fringilla viverra imperdiet. ' +
  'Aliquam erat volutpat. Nunc solli';

export default {
  title: 'Components/Constants',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => (
  <>
    <Section>
      <Headline>Colors</Headline>
      <ComponentSection style={{ justifyContent: 'flex-start' }}>
        {Object.entries(constants.color).map(([colorName, color]) => (
          <ConstantContainer width="50%" key={colorName}>
            <ColorBullet style={{ background: color }} />
            <Label>
              <ColorHexa>{color}</ColorHexa>
              {`color.${colorName}`}
            </Label>
          </ConstantContainer>
        ))}
      </ComponentSection>
    </Section>

    <Section>
      <Headline>Typography</Headline>
      <ComponentSection>
        <ConstantContainer>
          <Label>font.family</Label>
          <TypographyExample>
            {constants.font.family}
            {` (Almost before we knew it, we had left the ground)`}
          </TypographyExample>
        </ConstantContainer>
      </ComponentSection>

      <ComponentSection>
        <ConstantContainer>
          <Label>font.sizeXs</Label>
          <TypographyExample style={{ fontSize: constants.font.sizeXs }}>
            {constants.font.sizeXs}
            {` (The quick brown fox jumps over the lazy dog)`}
          </TypographyExample>
        </ConstantContainer>

        <ConstantContainer>
          <Label>font.sizeSm</Label>
          <TypographyExample style={{ fontSize: constants.font.sizeSm }}>
            {constants.font.sizeSm}
            {` (The quick brown fox jumps over the lazy dog)`}
          </TypographyExample>
        </ConstantContainer>

        <ConstantContainer>
          <Label>font.sizeMd</Label>
          <TypographyExample style={{ fontSize: constants.font.sizeMd }}>
            {constants.font.sizeMd}
            {` (The quick brown fox jumps over the lazy dog)`}
          </TypographyExample>
        </ConstantContainer>

        <ConstantContainer>
          <Label>font.sizeLg</Label>
          <TypographyExample style={{ fontSize: constants.font.sizeLg }}>
            {constants.font.sizeLg}
            {` (The quick brown fox jumps over the lazy dog)`}
          </TypographyExample>
        </ConstantContainer>

        <ConstantContainer>
          <Label>font.sizeXl</Label>
          <TypographyExample style={{ fontSize: constants.font.sizeXl }}>
            {constants.font.sizeXl}
            {` (The quick brown fox jumps over the lazy dog)`}
          </TypographyExample>
        </ConstantContainer>

        <ConstantContainer>
          <Label>font.sizeXxl</Label>
          <TypographyExample style={{ fontSize: constants.font.sizeXxl }}>
            {constants.font.sizeXxl}
            {` (The quick brown fox jumps over the lazy dog)`}
          </TypographyExample>
        </ConstantContainer>
      </ComponentSection>

      <ComponentSection>
        <ConstantContainer>
          <Label>font.weightDefault</Label>
          <TypographyExample
            style={{
              fontSize: constants.font.sizeMd,
              fontWeight: constants.font.weightDefault,
            }}
          >
            {constants.font.weightDefault}
            {` (It was going to be a lonely trip back)`}
          </TypographyExample>
        </ConstantContainer>

        <ConstantContainer>
          <Label>font.weightAttention</Label>
          <TypographyExample
            style={{
              fontSize: constants.font.sizeMd,
              fontWeight: constants.font.weightAttention,
            }}
          >
            {constants.font.weightAttention}
            {` (It was going to be a lonely trip back)`}
          </TypographyExample>
        </ConstantContainer>

        <ConstantContainer>
          <Label>font.weightAttentionMax</Label>
          <TypographyExample
            style={{
              fontSize: constants.font.sizeMd,
              fontWeight: constants.font.weightAttentionMax,
            }}
          >
            {constants.font.weightAttentionMax}
            {` (It was going to be a lonely trip back)`}
          </TypographyExample>
        </ConstantContainer>
      </ComponentSection>

      <ComponentSection>
        <ConstantContainer>
          <Label>font.lineHeightXs</Label>
          <LineHeightExample
            style={{ lineHeight: constants.font.lineHeightXs }}
          >
            {constants.font.lineHeightXs}
            {` (${loremIpsum})`}
          </LineHeightExample>
        </ConstantContainer>

        <ConstantContainer>
          <Label>font.lineHeightSm</Label>
          <LineHeightExample
            style={{ lineHeight: constants.font.lineHeightSm }}
          >
            {constants.font.lineHeightSm}
            {` (${loremIpsum})`}
          </LineHeightExample>
        </ConstantContainer>

        <ConstantContainer>
          <Label>font.lineHeightMd</Label>
          <LineHeightExample
            style={{ lineHeight: constants.font.lineHeightMd }}
          >
            {constants.font.lineHeightMd}
            {` (${loremIpsum})`}
          </LineHeightExample>
        </ConstantContainer>

        <ConstantContainer>
          <Label>font.lineHeightLg</Label>
          <LineHeightExample
            style={{ lineHeight: constants.font.lineHeightLg }}
          >
            {constants.font.lineHeightLg}
            {` (${loremIpsum})`}
          </LineHeightExample>
        </ConstantContainer>

        <ConstantContainer>
          <Label>font.lineHeightXl</Label>
          <LineHeightExample
            style={{ lineHeight: constants.font.lineHeightXl }}
          >
            {constants.font.lineHeightXl}
            {` (${loremIpsum})`}
          </LineHeightExample>
        </ConstantContainer>

        <ConstantContainer>
          <Label>font.lineHeightXxl</Label>
          <LineHeightExample
            style={{ lineHeight: constants.font.lineHeightXxl }}
          >
            {constants.font.lineHeightXxl}
            {` (${loremIpsum})`}
          </LineHeightExample>
        </ConstantContainer>
      </ComponentSection>
    </Section>

    <Section>
      <Headline>Sizes</Headline>
      <ComponentSection>
        {Object.entries(constants.size).map(([sizeName, sizeValue]) => (
          <ConstantContainer width="33%" key={sizeName}>
            <Label>{`size.${sizeName}`}</Label>
            <ConstantValue>{sizeValue}</ConstantValue>
          </ConstantContainer>
        ))}
      </ComponentSection>
    </Section>

    <Section>
      <Headline>Spacings</Headline>
      <ComponentSection>
        {Object.entries(constants.spacing).map(
          ([spacingName, spacingValue]) => (
            <ConstantContainer width="33%" key={spacingName}>
              <Label>{`spacing.${spacingName}`}</Label>
              <ConstantValue>{spacingValue}</ConstantValue>
            </ConstantContainer>
          ),
        )}
      </ComponentSection>
    </Section>

    <Section>
      <Headline>Timing</Headline>
      <ComponentSection>
        {Object.entries(constants.timing).map(([timingName, timingValue]) => (
          <ConstantContainer width="33%" key={timingName}>
            <Label>{`timing.${timingName}`}</Label>
            <ConstantValue>{timingValue}</ConstantValue>
          </ConstantContainer>
        ))}
      </ComponentSection>
    </Section>

    <Section>
      <Headline>zIndex</Headline>
      <ComponentSection>
        {Object.entries(constants.zIndex).map(([zIndexName, zIndexValue]) => (
          <ConstantContainer width="33%" key={zIndexName}>
            <Label>{`zIndex.${zIndexName}`}</Label>
            <ConstantValue>{zIndexValue}</ConstantValue>
          </ConstantContainer>
        ))}
      </ComponentSection>
    </Section>

    <Section>
      <Headline>Key codes</Headline>
      <ComponentSection>
        {Object.entries(constants.keyCode).map(([keyName, keyCode]) => (
          <ConstantContainer width="25%" key={keyName}>
            <KeyCode>{keyCode}</KeyCode>
            <Label>{`keyCode.${keyName}`}</Label>
          </ConstantContainer>
        ))}
      </ComponentSection>
    </Section>
  </>
);

Guidelines.storyName = '01. Guidelines';
