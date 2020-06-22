export const numberWithCommas = (x: string): string => {
  const parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

export const formatNumberReadable = (numberToFormat: number): string => {
  return numberToFormat.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};
