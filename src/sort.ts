export function sortByKey(array: any[], key: string) {
  return array.sort((a, b) => {
    const x: any = a[key];
    const y: any = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
}
