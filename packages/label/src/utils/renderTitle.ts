const renderTitle = (title: React.ReactNode) => {
  if (typeof title === 'number' || typeof title === 'string') {
    return String(title);
  }

  return undefined;
};

export default renderTitle;
