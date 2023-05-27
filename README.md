# random-ease

[![npm](https://img.shields.io/npm/v/random-ease.svg)](https://www.npmjs.com/package/random-ease)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/prof-usman/random-ease/blob/main/LICENSE)
[![Known Vulnerabilities](https://snyk.io/test/npm/random-ease/badge.svg)](https://snyk.io/test/npm/random-ease)
[![Downloads](https://badgen.net/npm/dt/random-ease)](https://www.npmjs.com/package/random-ease)

A powerful and easy-to-use npm package for generating random data. It provides a wide range of helper functions to generate random numbers, strings, dates, and more.

## Installation

Install the package using npm:

```bash
npm install random-ease
```

## Usage

Import the package and start generating random data with ease:

```javascript
const randomEase = require('random-ease');

// Generates a random number within a specified range
console.log(randomEase.generateNumber(10, 10000));

// Generates a random string of a specified length using alphanumeric characters
console.log(randomEase.generateString(25));

// Generates an array of random numbers within a given range
console.log(randomEase.generateArray(5, 10, 15));
```

or in typescript

```typescript
import randomEase from 'random-ease';
// or
// import { generateNumber } from 'random-ease';

// Generates a random boolean value
console.log(randomEase.generateBoolean());
```

## Available Helper Functions

| Definition                                                                                                            | Purpose                                                                       |
| --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| generateNumber(min: number, max: number): number                                                                      | Generates a random number within a specified range                            |
| generateString(length: number): string                                                                                | Generates a random string of a specified length using alphanumeric characters |
| generateArray(length: number, min: number, max: number): number\[\]                                                   | Generates an array of random numbers within a given range                     |
| generateBoolean(): boolean                                                                                            | Generates a random boolean value                                              |
| generateFloat(min: number, max: number): number                                                                       | Generates a random floating-point number within a given range                 |
| generateRandomElement\<T>(array: T\[\]): T                                                                            | Generates a random element from an array                                      |
| generateRandomDate(start: Date, end: Date): Date                                                                      | Generates a random date within a given range                                  |
| generateRandomColor(): string                                                                                         | Generates a random RGB color value                                            |
| generateRandomHexColor(): string                                                                                      | Generates a random hexadecimal color value                                    |
| shuffleArray\<T>(array: T\[\]): T\[\]                                                                                 | To shuffle an array randomly                                                  |
| generateEmailAddress(): string                                                                                        | Generates a random email address                                              |
| generateGUID(): string                                                                                                | Generates a random GUID (Globally Unique Identifier)                          |
| generateIPv4Address(): string                                                                                         | Generates a random IPv4 address                                               |
| generateMACAddress(): string                                                                                          | Generates a random MAC address                                                |
| generateUUID(): string                                                                                                | Generates a random UUID (Universally Unique Identifier)                       |
| generateRandomTime(): string                                                                                          | Generates a random time in 24-hour format                                     |
| generatePhoneNumber(): string                                                                                         | Generates a random phone number                                               |
| generateFileName(extension: string): string                                                                           | Generates a random file name with extension                                   |
| generateURL(): string                                                                                                 | Generates a random URL                                                        |
| generateCurrencyCode(): string                                                                                        | Generates a random currency code                                              |
| generateJobTitle(): string                                                                                            | Generate a random job title                                                   |
| generateCreditCardNumber(): string                                                                                    | Generates a random credit card number (dummy)                                 |
| generateCountry(): string                                                                                             | Generates a random country                                                    |
| generateBooleanWithProbability(probability: number): boolean                                                          | Generates a random boolean value with a given probability                     |
| generatePassword(length: number, includeUppercase: boolean, includeNumbers: boolean, includeSymbols: boolean): string | Generates a random password with a given length and complexity                |
| generateUsername(): string                                                                                            | Generates a random username                                                   |
| generateAddress(): string                                                                                             | Generates a random address                                                    |
| generateSentence(wordCount: number): string                                                                           | Generates a random sentence                                                   |
| generateParagraph(sentenceCount: number, wordsPerSentence: number): string                                            | Generates a random paragraph                                                  |
| generateSlug(title: string): string                                                                                   | Generates a random URL slug                                                   |
| generateAvatar(avatarSize = 200): string                                                                              | Generates a random avatar URL                                                 |
| generateSocialMediaHandle(): string                                                                                   | Generates a random social media handle                                        |
| generateISBN(): string                                                                                                | Generates a random ISBN (International Standard Book Number)                  |
| generateMovieTitle(): string                                                                                          | Generates a random movie title                                                |
| generateBookTitle(): string                                                                                           | Generates a random book title                                                 |
| generateQuote(): string                                                                                               | Generates a random quote                                                      |
| generateLicensePlate(): string                                                                                        | Generates a random license plate number                                       |
| generateCompanyName(): string                                                                                         | Generates a random company name                                               |
| generateTwitterHandle(): string                                                                                       | Generates a random Twitter handle                                             |

## License

This package is open-source and released under the MIT License.
