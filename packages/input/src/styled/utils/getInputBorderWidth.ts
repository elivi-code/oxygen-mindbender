import { InputFieldWrapperProps } from '../InputFieldWrapperProps';

type Props = Pick<
  InputFieldWrapperProps,
  'theme' | 'withSuffix' | 'withPrefix' | 'focused' | 'isReadOnly'
>;

const getInputBorderWidth = ({
  theme,
  withSuffix,
  withPrefix,
  focused,
  isReadOnly,
}: Props) => {
  let borderTop;
  let borderRight;
  let borderBottom;
  let borderLeft;
  const borderProp =
    isReadOnly && !focused ? 'borderWidthReadOnly' : 'borderWidth';
  const borderValues =
    borderProp && theme[borderProp] ? theme[borderProp].split(' ') : '';

  if (!theme[borderProp] || !borderValues) {
    console.error(`${borderProp} was not defined`); // eslint-disable-line

    return 'none';
  }

  switch (borderValues.length) {
    case 4:
      [borderTop, borderRight, borderBottom, borderLeft] = borderValues;
      break;
    case 3:
      [borderTop, borderLeft, borderBottom] = borderValues;
      borderRight = borderLeft;
      break;
    case 2:
      [borderTop, borderLeft] = borderValues;
      borderBottom = borderTop;
      borderRight = borderLeft;
      break;
    case 1:
    default:
      [borderTop] = borderValues;
      borderBottom = borderTop;
      borderLeft = borderTop;
      borderRight = borderTop;
  }

  if (withPrefix && !theme.prefixSuffixInsideInput) {
    return `${borderTop} ${borderRight} ${borderBottom} 0`;
  }

  if (withSuffix && !theme.prefixSuffixInsideInput) {
    return `${borderTop} 0 ${borderBottom} ${borderLeft}`;
  }

  return `${borderTop} ${borderRight} ${borderBottom} ${borderLeft}`;
};

export default getInputBorderWidth;
