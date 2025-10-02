import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { button, buttonNovo } from '@8x8/oxygen-constants';
import { buttonVariant } from '../types';

import { ButtonRegularStyled, ButtonCircularStyled } from './ButtonStyled';

describe('<ButtonRegularStyled /> styles', () => {
  it('should render the correct styles', () => {
    const { container } = render(
      <ThemeProvider theme={buttonNovo}>
        <ButtonRegularStyled>text</ButtonRegularStyled>
      </ThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
  it.each`
    variant
    ${'primary'}
    ${'secondary'}
    ${'tertiary'}
    ${'tertiaryReversed'}
    ${'destructive'}
    ${'success'}
  `(
    'should render typography theme props for each variant: $variant',
    ({ variant }) => {
      const { container } = render(
        <ThemeProvider theme={buttonNovo}>
          <ButtonRegularStyled variant={variant}>text</ButtonRegularStyled>
        </ThemeProvider>,
      );

      expect(container.firstChild).toMatchSnapshot();
    },
  );
  it.each`
    size        | fontSize                     | fontFamily                     | fontWeight                     | lineHeight                     | letterSpacing
    ${'large'}  | ${buttonNovo.fontSizeLarge}  | ${buttonNovo.fontFamilyLarge}  | ${buttonNovo.fontWeightLarge}  | ${buttonNovo.lineHeightLarge}  | ${buttonNovo.letterSpacingLarge}
    ${'small'}  | ${buttonNovo.fontSizeSmall}  | ${buttonNovo.fontFamilySmall}  | ${buttonNovo.fontWeightSmall}  | ${buttonNovo.lineHeightSmall}  | ${buttonNovo.letterSpacingSmall}
    ${'medium'} | ${buttonNovo.fontSizeMedium} | ${buttonNovo.fontFamilyMedium} | ${buttonNovo.fontWeightMedium} | ${buttonNovo.lineHeightMedium} | ${buttonNovo.letterSpacingMedium}
  `(
    `should map the correct theme props for size: $size: { fontSize: $fontSize, fontFamily: $fontFamily, fontWeight: $fontWeight, lineHeight: $lineHeight, letterSpacing: $letterSpacing }`,
    ({ size, fontSize, fontFamily, fontWeight, lineHeight, letterSpacing }) => {
      const { container } = render(
        <ThemeProvider theme={buttonNovo}>
          <ButtonRegularStyled size={size}>text</ButtonRegularStyled>
        </ThemeProvider>,
      );

      expect(container.firstChild).toHaveStyleRule('font-size', fontSize);
      expect(container.firstChild).toHaveStyleRule(
        'font-family',
        fontFamily.split(', ').join(','),
      );
      expect(container.firstChild).toHaveStyleRule(
        'font-weight',
        String(fontWeight),
      );
      expect(container.firstChild).toHaveStyleRule('line-height', lineHeight);
      expect(container.firstChild).toHaveStyleRule(
        'letter-spacing',
        letterSpacing,
      );
    },
  );
  it('should render typography theme props correctly based on different tokens for the Classic theme', () => {
    const { container } = render(
      <ThemeProvider theme={button}>
        <ButtonRegularStyled size="large">text</ButtonRegularStyled>
      </ThemeProvider>,
    );

    expect(container.firstChild).toHaveStyleRule('font-size', button.fontSize);
    expect(container.firstChild).toHaveStyleRule(
      'font-family',
      button.fontFamily.split(', ').join(','),
    );
    expect(container.firstChild).toHaveStyleRule(
      'font-weight',
      String(button.fontWeight),
    );
    expect(container.firstChild).toHaveStyleRule(
      'line-height',
      button.lineHeight,
    );
    expect(container.firstChild).toHaveStyleRule('letter-spacing', 'unset');
  });
  it('should render theme props correctly when isActive', () => {
    const { container } = render(
      <ThemeProvider theme={buttonNovo}>
        <ButtonRegularStyled isActive>text</ButtonRegularStyled>
      </ThemeProvider>,
    );

    expect(container.firstChild).toHaveStyleRule(
      'box-shadow',
      '0 0 0 0 inset unset',
    );
    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      buttonNovo.backgroundColorPrimaryActive,
    );
    expect(container.firstChild).toHaveStyleRule(
      'color',
      buttonNovo.fontColorPrimary,
    );
  });
  it('should render correct theme props when isActive with borderSize', () => {
    const { container } = render(
      <ThemeProvider theme={buttonNovo}>
        <ButtonRegularStyled isActive variant="tertiary">
          text
        </ButtonRegularStyled>
      </ThemeProvider>,
    );

    expect(container.firstChild).toHaveStyleRule(
      'box-shadow',
      `0 0 0 ${buttonNovo.borderSizeTertiary} inset ${buttonNovo.backgroundColorTertiaryActive}`,
    );
  });
  it('should render correct theme props when isDisabled', () => {
    const { container } = render(
      <ThemeProvider theme={buttonNovo}>
        <ButtonRegularStyled disabled>text</ButtonRegularStyled>
      </ThemeProvider>,
    );

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      buttonNovo.backgroundColorPrimaryDisabled,
      { modifier: '&[aria-disabled="true"]' },
    );
    expect(container.firstChild).toHaveStyleRule(
      'box-shadow',
      `0 0 0 ${buttonNovo.borderSize} inset ${buttonNovo.borderColorPrimaryDisabled}`,
      {
        modifier: '&[aria-disabled="true"]',
      },
    );
    expect(container.firstChild).toHaveStyleRule(
      'color',
      buttonNovo.fontColorPrimaryDisabled,
      { modifier: '&[aria-disabled="true"]' },
    );
  });
  it.each`
    isCircular | size         | width                       | height                      | minHeight                   | padding
    ${false}   | ${'large'}   | ${undefined}                | ${undefined}                | ${buttonNovo.heightLargeV2} | ${buttonNovo.paddingLargeV2}
    ${false}   | ${'small'}   | ${undefined}                | ${undefined}                | ${buttonNovo.heightSmall}   | ${buttonNovo.paddingSmall}
    ${false}   | ${'big'}     | ${undefined}                | ${undefined}                | ${buttonNovo.heightLarge}   | ${buttonNovo.paddingLarge}
    ${false}   | ${'medium'}  | ${undefined}                | ${undefined}                | ${buttonNovo.heightMedium}  | ${buttonNovo.paddingMedium}
    ${false}   | ${undefined} | ${undefined}                | ${undefined}                | ${buttonNovo.heightMedium}  | ${buttonNovo.paddingMedium}
    ${true}    | ${'large'}   | ${buttonNovo.heightLargeV2} | ${buttonNovo.heightLargeV2} | ${undefined}                | ${buttonNovo.paddingLargeV2}
    ${true}    | ${'small'}   | ${buttonNovo.heightSmall}   | ${buttonNovo.heightSmall}   | ${undefined}                | ${buttonNovo.paddingSmall}
    ${true}    | ${'big'}     | ${buttonNovo.heightLarge}   | ${buttonNovo.heightLarge}   | ${undefined}                | ${buttonNovo.paddingLarge}
    ${true}    | ${'medium'}  | ${buttonNovo.heightMedium}  | ${buttonNovo.heightMedium}  | ${undefined}                | ${buttonNovo.paddingMedium}
    ${true}    | ${undefined} | ${buttonNovo.heightMedium}  | ${buttonNovo.heightMedium}  | ${undefined}                | ${buttonNovo.paddingMedium}
  `(
    'should render correct dimensions for { isCircular: $isCircular, size: $size }',
    ({ isCircular, size, width, height, minHeight, padding }) => {
      const { container } = render(
        <ThemeProvider theme={buttonNovo}>
          <ButtonRegularStyled isCircular={isCircular} size={size}>
            text
          </ButtonRegularStyled>
        </ThemeProvider>,
      );

      expect(container.firstChild).toHaveStyleRule('min-height', minHeight);
      expect(container.firstChild).toHaveStyleRule('width', width);
      expect(container.firstChild).toHaveStyleRule('height', height);
      expect(container.firstChild).toHaveStyleRule('padding', padding);
    },
  );
});

describe('<ButtonCircularStyled /> styles', () => {
  it('should render the correct styles', () => {
    const { container } = render(
      <ButtonCircularStyled theme={buttonNovo}>text</ButtonCircularStyled>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
  it.each`
    variant
    ${'primary'}
    ${'secondary'}
    ${'tertiary'}
    ${'tertiaryReversed'}
    ${'destructive'}
    ${'success'}
  `(
    'should render typography theme props for each variant: $variant',
    ({ variant }) => {
      const { container } = render(
        <ButtonCircularStyled theme={buttonNovo} variant={variant}>
          <div />
        </ButtonCircularStyled>,
      );

      expect(container.firstChild).toMatchSnapshot();
    },
  );
});

describe('<ButtonRegularStyled /> destructive and variant styles', () => {
  const renderWithTheme = props =>
    render(
      <ThemeProvider theme={buttonNovo}>
        <ButtonRegularStyled {...props}>text</ButtonRegularStyled>
      </ThemeProvider>,
    );

  it('should render all the correct destructive styles for primary variant', () => {
    const { container } = renderWithTheme({
      isDestructive: true,
      variant: buttonVariant.primary,
    });

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      buttonNovo.backgroundColorDestructive,
    );
    expect(container.firstChild).toHaveStyleRule(
      'color',
      buttonNovo.fontColorDestructive,
    );

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      buttonNovo.backgroundColorDestructiveHover,
      { modifier: ':hover' },
    );

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      buttonNovo.backgroundColorDestructiveActive,
      { modifier: ':active' },
    );
  });

  it('should render all the correct destructive styles for secondary variant', () => {
    const { container } = renderWithTheme({
      isDestructive: true,
      variant: buttonVariant.secondary,
    });

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      buttonNovo.backgroundColorDestructive,
    );
    expect(container.firstChild).toHaveStyleRule(
      'color',
      buttonNovo.fontColorDestructive,
    );

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      buttonNovo.backgroundColorDestructiveHover,
      { modifier: ':hover' },
    );

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      buttonNovo.backgroundColorDestructiveActive,
      { modifier: ':active' },
    );
  });

  it('should render all the correct destructive styles for text variant', () => {
    const { container } = renderWithTheme({
      isDestructive: true,
      variant: buttonVariant.text,
    });

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      'transparent',
    );
    expect(container.firstChild).toHaveStyleRule(
      'color',
      buttonNovo.backgroundColorDestructive,
    );

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      'transparent',
      { modifier: ':hover' },
    );
    expect(container.firstChild).toHaveStyleRule(
      'color',
      buttonNovo.backgroundColorDestructiveHover,
      { modifier: ':hover' },
    );

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      'transparent',
      { modifier: ':active' },
    );
  });

  it('should render all the correct styles for primary variant', () => {
    const { container } = renderWithTheme({
      isDestructive: false,
      variant: buttonVariant.primary,
    });

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      buttonNovo.backgroundColorPrimary,
    );
    expect(container.firstChild).toHaveStyleRule(
      'color',
      buttonNovo.fontColorPrimary,
    );

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      buttonNovo.backgroundColorPrimaryHover,
      { modifier: ':hover' },
    );

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      buttonNovo.backgroundColorPrimaryActive,
      { modifier: ':active' },
    );
  });

  it('should render all the correct styles for secondary variant', () => {
    const { container } = renderWithTheme({
      isDestructive: false,
      variant: buttonVariant.secondary,
    });

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      buttonNovo.backgroundColorSecondary,
    );
    expect(container.firstChild).toHaveStyleRule(
      'color',
      buttonNovo.fontColorSecondary,
    );

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      buttonNovo.backgroundColorSecondaryHover,
      { modifier: ':hover' },
    );

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      buttonNovo.backgroundColorSecondaryActive,
      { modifier: ':active' },
    );
  });

  it('should render all the correct styles for text variant', () => {
    const { container } = renderWithTheme({
      isDestructive: false,
      variant: buttonVariant.text,
    });

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      'transparent',
    );
    expect(container.firstChild).toHaveStyleRule(
      'color',
      buttonNovo.backgroundColorPrimary,
    );

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      'transparent',
      { modifier: ':hover' },
    );
    expect(container.firstChild).toHaveStyleRule(
      'color',
      buttonNovo.backgroundColorPrimaryHover,
      { modifier: ':hover' },
    );

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      'transparent',
      { modifier: ':active' },
    );
  });
});
