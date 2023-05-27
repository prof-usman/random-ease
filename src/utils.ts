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

// Function to generate a random integer within a given range
export function generateInteger(min: number, max: number): number {
  return generateNumber(min, max);
}

// Function to generate a random floating-point number within a given range
export function generateFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

// Function to generate a random element from an array
export function generateRandomElement<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Function to generate a random date within a given range
export function generateRandomDate(start: Date, end: Date): Date {
  const startTime = start.getTime();
  const endTime = end.getTime();
  const randomTime = Math.random() * (endTime - startTime) + startTime;
  return new Date(randomTime);
}

// Function to generate a random RGB color value
export function generateRandomRgbColor(): string {
  const r = generateNumber(0, 255);
  const g = generateNumber(0, 255);
  const b = generateNumber(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}

// Function to generate a random hexadecimal color value
export function generateRandomHexColor(): string {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
}

// Function to shuffle an array randomly
export function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
  }
  return shuffledArray;
}

// Function to generate a random phone number
export function generatePhoneNumber(): string {
  const countryCode = generateNumber(1, 99).toString().padStart(2, '0');
  const areaCode = generateNumber(100, 999).toString().padStart(3, '0');
  const number = generateNumber(1000000, 9999999).toString().padStart(7, '0');
  return `+${countryCode}-${areaCode}-${number}`;
}

// Function to generate a random email address
export function generateEmailAddress(): string {
  const usernameLength = generateNumber(5, 10);
  const domainLength = generateNumber(5, 10);
  const username = generateString(usernameLength);
  const domain = generateString(domainLength);
  return `${username}@${domain}.com`;
}

// Function to generate a random GUID (Globally Unique Identifier)
export function generateGUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Function to generate a random IPv4 address
export function generateIPv4Address(): string {
  return `${generateNumber(1, 255)}.${generateNumber(0, 255)}.${generateNumber(0, 255)}.${generateNumber(1, 254)}`;
}

// Function to generate a random MAC address
export function generateMACAddress(): string {
  const hexDigits = '0123456789ABCDEF';
  let macAddress = '';
  for (let i = 0; i < 6; i++) {
    macAddress += `${hexDigits.charAt(generateNumber(0, 15))}${hexDigits.charAt(generateNumber(0, 15))}`;
    if (i < 5) {
      macAddress += ':';
    }
  }
  return macAddress;
}

// Function to generate a random UUID (Universally Unique Identifier)
export function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Function to generate a random time in 24-hour format
export function generateRandomTime(): string {
  const hours = generateNumber(0, 23).toString().padStart(2, '0');
  const minutes = generateNumber(0, 59).toString().padStart(2, '0');
  const seconds = generateNumber(0, 59).toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}
