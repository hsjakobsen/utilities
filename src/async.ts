export const asyncForEach = async (array:Array<Object>, callback:Function) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}