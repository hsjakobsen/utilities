export function stringifyAndParse(itemToManipulate: any): any {
  return JSON.parse(JSON.stringify(itemToManipulate));
}
