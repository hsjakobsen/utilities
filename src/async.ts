export const asyncForEach = async (
  array: any[],
  callback: (item: any) => void,
) => {
  for (const item of array) {
    await callback(item);
  }
};
