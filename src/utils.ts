import { generateRandomHandles } from './helpers';

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

export function generateEmailAddress(): string {
  const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'example.com'];
  const usernameLength = generateNumber(5, 10);
  const username = generateString(usernameLength);
  const randomDomain = generateRandomElement(domains);
  return `${username}@${randomDomain}`;
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

// Function to generate a random file name with extension
export function generateFileName(extension: string): string {
  const fileNameLength = generateNumber(5, 10);
  const fileName = generateString(fileNameLength);
  return `${fileName}.${extension}`;
}

// Function to generate a random URL
export function generateURL(): string {
  const protocol = generateRandomElement(['http', 'https']);
  const domainLength = generateNumber(5, 10);
  const domain = generateString(domainLength);
  const pathLength = generateNumber(1, 5);
  const path = generateString(pathLength);
  return `${protocol}://${domain}/${path}`;
}

// Function to generate a random currency code
export function generateCurrencyCode(): string {
  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD', 'PKR', 'INR'];
  return generateRandomElement(currencies);
}

// Function to generate a random job title
export function generateJobTitle(): string {
  const jobTitles = [
    'Software Developer',
    'Data Analyst',
    'Project Manager',
    'UX Designer',
    'Marketing Specialist',
    'Financial Analyst',
  ];
  return generateRandomElement(jobTitles);
}

// Function to generate a random country
export function generateCountry(): string {
  const countries = [
    'USA',
    'Canada',
    'Germany',
    'France',
    'Australia',
    'Japan',
    'Brazil',
    'India',
    'China',
    'Italy',
    'Pakistan',
    'India',
  ];
  return generateRandomElement(countries);
}

// Function to generate a random credit card number (dummy)
export function generateCreditCardNumber(): string {
  let creditCardNumber = '';
  for (let i = 0; i < 16; i++) {
    creditCardNumber += generateNumber(0, 9).toString();
  }
  return creditCardNumber;
}

// Function to generate a random boolean value with a given probability
export function generateBooleanWithProbability(probability: number): boolean {
  return Math.random() < probability;
}

// Function to generate a random password with a given length and complexity
export function generatePassword(
  length: number,
  includeUppercase: boolean,
  includeNumbers: boolean,
  includeSymbols: boolean,
): string {
  let characters = 'abcdefghijklmnopqrstuvwxyz';
  if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (includeNumbers) characters += '0123456789';
  if (includeSymbols) characters += '!@#$%^&*()';

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  return password;
}

// Function to generate a random username
export function generateUsername(): string {
  const usernameLength = generateNumber(5, 10);
  const username = generateString(usernameLength);
  return username;
}

// Function to generate a random address
export function generateAddress(): string {
  const streetNames = ['Main St', 'First Ave', 'Oak Lane', 'Cedar Rd', 'Maple Avenue'];
  const cities = ['New York', 'Los Angeles', 'London', 'Paris', 'Tokyo'];
  const randomStreet = generateRandomElement(streetNames);
  const randomCity = generateRandomElement(cities);
  const randomNumber = generateNumber(100, 999);
  return `${randomNumber} ${randomStreet}, ${randomCity}`;
}

// Function to generate a random sentence
export function generateSentence(wordCount: number): string {
  const words = [
    'Lorem',
    'ipsum',
    'dolor',
    'sit',
    'amet',
    'consectetur',
    'adipiscing',
    'elit',
    'sed',
    'do',
    'eiusmod',
    'tempor',
    'incididunt',
  ];
  let sentence = '';
  for (let i = 0; i < wordCount; i++) {
    const randomWord = generateRandomElement(words);
    sentence += randomWord + ' ';
  }
  return sentence.trim();
}

// Function to generate a random paragraph
export function generateParagraph(sentenceCount: number, wordsPerSentence: number): string {
  let paragraph = '';
  for (let i = 0; i < sentenceCount; i++) {
    const randomSentence = generateSentence(wordsPerSentence);
    paragraph += randomSentence + '. ';
  }
  return paragraph.trim();
}

// Function to generate a random URL slug
export function generateSlug(title: string): string {
  const slug = title.toLowerCase().replace(/\s+/g, '-');
  return slug;
}

// Function to generate a random avatar URL
export function generateAvatar(avatarSize = 200): string {
  const gravatarBaseUrl = 'https://www.gravatar.com/avatar/';
  const avatarDesigns = ['identicon', 'monsterid', 'wavatar']; // Specify the available avatar designs
  const randomEmail = generateEmailAddress();
  const randomDesign = generateRandomElement(avatarDesigns); // Randomly select an avatar design
  const gravatarUrl = `${gravatarBaseUrl}${encodeURIComponent(randomEmail)}?s=${avatarSize}&d=${randomDesign}`;
  return gravatarUrl;
}

// Function to generate a random social media handle
export function generateSocialMediaHandle(): string {
  const prefixes = ['@', '#'];
  const handles = generateRandomHandles();
  const randomPrefix = generateRandomElement(prefixes);
  const randomHandle = generateRandomElement(handles);
  return randomPrefix + randomHandle;
}

// Function to generate a random ISBN (International Standard Book Number)
export function generateISBN(): string {
  const prefix = '978';
  const group = generateNumber(0, 9).toString();
  const publisher = generateNumber(0, 9999).toString().padStart(4, '0');
  const title = generateNumber(0, 99999).toString().padStart(5, '0');
  const checksum = generateNumber(0, 9).toString();
  return `${prefix}-${group}-${publisher}-${title}-${checksum}`;
}

// Function to generate a random movie title
export function generateMovieTitle(): string {
  const adjectives = ['Fantastic', 'Amazing', 'Incredible', 'Spectacular', 'Thrilling'];
  const nouns = ['Adventure', 'Journey', 'Quest', 'Mystery', 'Legacy'];
  const randomAdjective = generateRandomElement(adjectives);
  const randomNoun = generateRandomElement(nouns);
  return `${randomAdjective} ${randomNoun}`;
}

// Function to generate a random book title
export function generateBookTitle(): string {
  const adjectives = ['The Great', 'The Secret', 'The Lost', 'The Hidden', 'The Forgotten'];
  const nouns = ['Book', 'Tome', 'Novel', 'Chronicle', 'Saga'];
  const randomAdjective = generateRandomElement(adjectives);
  const randomNoun = generateRandomElement(nouns);
  return `${randomAdjective} ${randomNoun}`;
}

// Function to generate a random quote
export function generateQuote(): string {
  const quotes = [
    'The only way to do great work is to love what you do. - Steve Jobs',
    'Innovation distinguishes between a leader and a follower. - Steve Jobs',
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    'The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt',
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  ];
  return generateRandomElement(quotes);
}

// Function to generate a random license plate number
export function generateLicensePlate(): string {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  let licensePlate = '';
  for (let i = 0; i < 3; i++) {
    licensePlate += generateRandomElement(letters.split(''));
  }
  licensePlate += '-';
  for (let i = 0; i < 4; i++) {
    licensePlate += generateRandomElement(numbers.split(''));
  }
  return licensePlate;
}

// Function to generate a random company name
export function generateCompanyName(): string {
  const prefixes = ['ABC', 'XYZ', 'Global', 'International', 'National'];
  const suffixes = ['Corp', 'Inc', 'Ltd', 'Group', 'Solutions'];
  const randomPrefix = generateRandomElement(prefixes);
  const randomSuffix = generateRandomElement(suffixes);
  return `${randomPrefix} ${randomSuffix}`;
}

// Function to generate a random Twitter handle
export function generateTwitterHandle(): string {
  const handleLength = generateNumber(5, 10);
  const handle = generateString(handleLength);
  return `@${handle}`;
}

// Function to generate a random social security number
export function generateSSN(): string {
  const ssn =
    generateNumber(100, 999).toString() +
    '-' +
    generateNumber(10, 99).toString() +
    '-' +
    generateNumber(1000, 9999).toString();
  return ssn;
}

// Function to generate a random vehicle registration number
export function generateRegistrationNumber(): string {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  let regNumber = '';
  for (let i = 0; i < 3; i++) {
    regNumber += generateRandomElement(letters.split(''));
  }
  regNumber += '-';
  for (let i = 0; i < 4; i++) {
    regNumber += generateRandomElement(numbers.split(''));
  }
  return regNumber;
}

// Function to generate a random domain name
export function generateDomainName(): string {
  const extensions = ['.com', '.net', '.org', '.io', '.co'];
  const words = ['example', 'domain', 'website', 'company', 'business'];
  const randomWord = generateRandomElement(words);
  const randomExtension = generateRandomElement(extensions);
  return randomWord + randomExtension;
}

// Function to generate a random fruit
export function generateFruit(): string {
  const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Strawberry'];
  return generateRandomElement(fruits);
}

// Function to generate a random programming language
export function generateProgrammingLanguage(): string {
  const languages = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];
  return generateRandomElement(languages);
}

// Function to generate a random university name
export function generateUniversityName(): string {
  const universities = ['Harvard', 'MIT', 'Stanford', 'Cambridge', 'Oxford'];
  return generateRandomElement(universities);
}

// Function to generate a random sports team name
export function generateSportsTeamName(): string {
  const teams = ['Lions', 'Tigers', 'Eagles', 'Panthers', 'Sharks'];
  const randomPrefix = generateRandomElement(teams);
  const randomSuffix = generateRandomElement(teams);
  return `${randomPrefix} ${randomSuffix}`;
}

// Function to generate a random programming framework
export function generateProgrammingFramework(): string {
  const frameworks = ['React', 'Angular', 'Vue', 'Node.js', 'Django'];
  return generateRandomElement(frameworks);
}

// Function to generate a random Zodiac sign
export function generateZodiacSign(): string {
  const signs = [
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagittarius',
    'Capricorn',
    'Aquarius',
    'Pisces',
  ];
  return generateRandomElement(signs);
}

// Function to generate a random job industry
export function generateJobIndustry(): string {
  const industries = ['Technology', 'Finance', 'Healthcare', 'Education', 'Retail'];
  return generateRandomElement(industries);
}

// Function to generate a random currency symbol
export function generateCurrencySymbol(): string {
  const symbols = ['$', '€', '£', '¥', '₹'];
  return generateRandomElement(symbols);
}

// Function to generate a random job level
export function generateJobLevel(): string {
  const levels = ['Entry Level', 'Mid Level', 'Senior Level', 'Executive Level'];
  return generateRandomElement(levels);
}

// Function to generate a random vehicle make
export function generateVehicleMake(): string {
  const makes = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW'];
  return generateRandomElement(makes);
}

// Function to generate a random time zone
export function generateTimeZone(): string {
  const timeZones = ['UTC-5', 'UTC+1', 'UTC-8', 'UTC+9', 'UTC+3'];
  return generateRandomElement(timeZones);
}
