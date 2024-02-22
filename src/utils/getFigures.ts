
export const getFigures = (text: string): string[] => {
  const regex = /\{% figure '(.*?)' %\}/g;
  const matches = text.split(regex);
  const result = matches.filter(str => str.trim() !== '');
  return result;
};
