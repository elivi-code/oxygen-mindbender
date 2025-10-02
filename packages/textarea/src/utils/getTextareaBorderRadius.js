const getInputBorderRadius = ({ theme, readOnly }) => {
  if (readOnly) {
    return theme.textareaBorderRadiusReadOnly;
  }

  return theme.textareaBorderRadius;
};

export default getInputBorderRadius;
