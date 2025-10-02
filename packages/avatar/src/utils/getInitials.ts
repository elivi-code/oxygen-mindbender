const getInitials = (name: string, maxChars: number) =>
  name
    .replace(/\s+/g, ' ')
    .split(' ')
    .slice(0, maxChars)
    .reduce((acc, next) => acc + next.charAt(0).toUpperCase(), '');

export default getInitials;
