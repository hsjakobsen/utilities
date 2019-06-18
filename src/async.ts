export const asyncForEach = async (array:any[], callback: (item:object) => void) => {
  for (let item of array) {
    await callback(item);
  }
}