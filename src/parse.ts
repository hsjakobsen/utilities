export function stringifyAndParse(itemToManipulate:any) {
  return JSON.parse(JSON.stringify(itemToManipulate));
}
