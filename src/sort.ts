export const sortByKey = (array: any[], key: string, ascending: boolean): any[] => {
  return array.sort((a, b) => {
    const x: string = a[key] as string;
    const y: string = b[key] as string;
    const xLowerCased = x.toLowerCase();
    const yLowerCased = y.toLowerCase();

    let result: number = xLowerCased < yLowerCased ? -1 : xLowerCased > yLowerCased ? 1 : 0;
    if (!ascending) {
      result = result * -1;
    }
    return result;
  });
};
