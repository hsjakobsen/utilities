export const sortByKey = (array: any[], key: string, ascending: boolean): any[] => {
  return array.sort((a, b) => {
    const x: string = (a[key] as string).toLowerCase();
    const y: string = (b[key] as string).toLowerCase();

    let result: number = x < y ? -1 : x > y ? 1 : 0;
    if (!ascending) {
      result = result * -1;
    }
    return result;
  });
};
