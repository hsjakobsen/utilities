export const asyncForEach = async (array:any[], callback: (item:object) => void) => {
  for (const item of array) {
    await callback(item);
  }
}