import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import themes from '@8x8/oxygen-theme';
import { OxygenProvider } from '@8x8/oxygen-config';

import {
  AccordionWrapper,
  InteractiveHeader,
  NonInteractiveHeader,
  ContentContainer,
  Content,
  IconContainer,
  Title,
  SecondaryText,
} from './Accordion';

describe('Accordion styled components', () => {
  it('should render AccordionWrapper', () => {
    const { container } = render(
      <OxygenProvider themeName="light">
        <AccordionWrapper />
      </OxygenProvider>,
    );

    expect(container.firstChild).toHaveStyleRule(
      'border-bottom',
      `1px solid ${themes.novo.ui01}`,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render InteractiveHeader', () => {
    const { container } = render(
      <OxygenProvider themeName="light">
        <InteractiveHeader isNotClickable={false} />
      </OxygenProvider>,
    );

    expect(container.firstChild).toHaveStyleRule(
      'color',
      themes.novo.textColor01,
    );

    expect(container.firstChild).toHaveStyleRule(
      'box-shadow',
      `0 0 0 2px inset ${themes.novo.action01}`,
      {
        modifier: ':focus-visible',
      },
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render NonInteractiveHeader', () => {
    const { container } = render(
      <OxygenProvider themeName="light">
        <NonInteractiveHeader />
      </OxygenProvider>,
    );

    expect(container.firstChild).toHaveStyleRule(
      'color',
      themes.novo.textColor01,
    );

    expect(container.firstChild).toHaveStyleRule('cursor', 'default');
    expect(container.firstChild).toMatchSnapshot();
  });

  it.each`
    isExpanded | height | hasFixedHeight | expectedHeight | expectedTransition
    ${true}    | ${10}  | ${true}        | ${'10px'}      | ${'grid-template-rows 150ms cubic-bezier(0.2,0,1,0.9), height 150ms cubic-bezier(0.2,0,1,0.9)'}
    ${false}   | ${0}   | ${true}        | ${'0'}         | ${'grid-template-rows 150ms cubic-bezier(0.2,0,1,0.9), height 150ms cubic-bezier(0.2,0,1,0.9)'}
    ${false}   | ${10}  | ${true}        | ${'0'}         | ${'grid-template-rows 150ms cubic-bezier(0.2,0,1,0.9), height 150ms cubic-bezier(0.2,0,1,0.9)'}
    ${true}    | ${10}  | ${false}       | ${undefined}   | ${'grid-template-rows 150ms cubic-bezier(0.2,0,1,0.9)'}
    ${false}   | ${0}   | ${false}       | ${undefined}   | ${'grid-template-rows 150ms cubic-bezier(0.2,0,1,0.9)'}
  `(
    'should render ContentContainer with props { isExpanded: $isExpanded, height: $height, hasFixedHeight: $hasFixedHeight }',
    ({
      isExpanded,
      height,
      hasFixedHeight,
      expectedHeight,
      expectedTransition,
    }) => {
      const { container } = render(
        <ContentContainer
          hasFixedHeight={hasFixedHeight}
          height={height}
          isExpanded={isExpanded}
        />,
      );

      if (hasFixedHeight) {
        expect(container.firstChild).toHaveStyleRule('height', expectedHeight);
      } else {
        expect(container.firstChild).not.toHaveStyleRule('height');
      }
      expect(container.firstChild).toHaveStyleRule(
        'transition',
        expectedTransition,
      );
      expect(container.firstChild).toMatchSnapshot();
    },
  );

  it('should render Content', () => {
    const { container } = render(
      <OxygenProvider themeName="light">
        <Content />
      </OxygenProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render Content with hasFixedHeight true', () => {
    const { container } = render(
      <OxygenProvider themeName="light">
        <Content hasFixedHeight />
      </OxygenProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render IconContainer', () => {
    const { container } = render(
      <OxygenProvider themeName="light">
        <IconContainer />
      </OxygenProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render Title', () => {
    const { container } = render(
      <OxygenProvider themeName="light">
        <Title />
      </OxygenProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render SecondaryText', () => {
    const { container } = render(
      <OxygenProvider themeName="light">
        <SecondaryText />
      </OxygenProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
