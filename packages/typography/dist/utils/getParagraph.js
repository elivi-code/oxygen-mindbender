export default function getParagraph(isParagraph, theme) {
  if (isParagraph) {
    return "padding-bottom: ".concat(theme.typographyPaddingBottomParagraph, ";");
  }
  return undefined;
}