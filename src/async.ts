export const asyncForEach = async (array:any[], callback: (item:object) => void) => {
  for (var item of array) {
    await callback(item);
  }
}