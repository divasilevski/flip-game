export function merge<T extends object>(array: T[], item: T, key: keyof T) {
  const index = array.findIndex((element) => element[key] === item[key]);

  if (index >= 0) {
    array[index] = item;
    return [...array];
  } else {
    return [...array, item];
  }
}
