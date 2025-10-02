export default function getParagraph(isParagraph, theme) {
  if (isParagraph) {
    return `padding-bottom: ${theme.typographyPaddingBottomParagraph};`;
  }

  return undefined;
}
