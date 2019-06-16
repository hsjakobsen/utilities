export function stringifyAndParse(itemToManipulate) {
    return JSON.parse(JSON.stringify(itemToManipulate));
}