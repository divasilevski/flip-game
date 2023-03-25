export function shuffle<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const value = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = value;
  }
  return array;
}
