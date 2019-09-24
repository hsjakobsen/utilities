export const sortByKey = (array: any[], key: string, ascending: boolean) => {
  return array.sort((a, b) => {
    const x: any = a[key];
    const y: any = b[key];
    let result: number = x < y ? -1 : x > y ? 1 : 0;
    if (!ascending) {
      result = result * -1;
    }
    return result;
  });
}
