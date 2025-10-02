const getTextareaBorderWidth = ({ theme, readOnly }) => {
  if (readOnly) {
    return theme.borderWidthReadOnly;
  }

  return theme.borderWidth;
};

export default getTextareaBorderWidth;
