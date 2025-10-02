const getFocusedBorderColor = ({ theme, hasError }) => {
  if (hasError) {
    return theme.textareaBorderColorError;
  }

  return theme.textareaBorderColorFocus;
};

export default getFocusedBorderColor;
