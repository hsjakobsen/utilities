export const sortByKey = (array: any[], key: string, ascending: boolean): any[] => {
  return array.sort((a, b) => {
    let x: string = a[key] as string;
    let y: string = b[key] as string;

    if (typeof x === 'string') {
      x = x.toLowerCase();
      y = y.toLowerCase();
    }

    let result: number = x < y ? -1 : x > y ? 1 : 0;
    if (!ascending) {
      result = result * -1;
    }
    return result;
  });
};
