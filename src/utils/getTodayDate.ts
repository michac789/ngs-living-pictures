
export const getTodayDate = () => {
  const today = new Date();
  const month = today.toLocaleString('default', { month: 'long' });
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date} ${month.substring(0, 3)} ${year}`;
}
