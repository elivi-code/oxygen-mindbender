const getFont = ({ theme: { fontFamily, fontSize, fontStretch, fontStyle, fontWeight, letterSpacing, lineHeight, }, }) => `
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-stretch: ${fontStretch};
  font-style: ${fontStyle};
  font-weight: ${fontWeight};
  letter-spacing: ${letterSpacing};
  line-height: ${lineHeight};
`;
export default getFont;
