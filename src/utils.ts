// Function to generate a random number within a given range
export function generateNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to generate a random string of a specified length
export function generateString(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

// Function to generate an array of random numbers within a given range
export function generateArray(length: number, min: number, max: number): number[] {
  const array: number[] = [];
  for (let i = 0; i < length; i++) {
    array.push(generateNumber(min, max));
  }
  return array;
}

// Function to generate a random boolean value
export function generateBoolean(): boolean {
  return Math.random() < 0.5;
}
