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

| Method                         | Purpose                                                                       | Definition                                                                                                            |
| ------------------------------ | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| generateNumber                 | Generates a random number within a specified range                            | generateNumber(min: number, max: number): number                                                                      |
| generateString                 | Generates a random string of a specified length using alphanumeric characters | generateString(length: number): string                                                                                |
| generateArray                  | Generates an array of random numbers within a given range                     | generateArray(length: number, min: number, max: number): number\[\]                                                   |
| generateBoolean                | Generates a random boolean value                                              | generateBoolean(): boolean                                                                                            |
| generateFloat                  | Generates a random floating-point number within a given range                 | generateFloat(min: number, max: number): number                                                                       |
| generateRandomElement          | Generates a random element from an array                                      | generateRandomElement\<T>(array: T\[\]): T                                                                            |
| generateRandomDate             | Generates a random date within a given range                                  | generateRandomDate(start: Date, end: Date): Date                                                                      |
| generateRandomColor            | Generates a random RGB color value                                            | generateRandomColor(): string                                                                                         |
| generateRandomHexColor         | Generates a random hexadecimal color value                                    | generateRandomHexColor(): string                                                                                      |
| shuffleArray                   | To shuffle an array randomly                                                  | shuffleArray\<T>(array: T\[\]): T\[\]                                                                                 |
| generateEmailAddress           | Generates a random email address                                              | generateEmailAddress(): string                                                                                        |
| generateGUID                   | Generates a random GUID (Globally Unique Identifier)                          | generateGUID(): string                                                                                                |
| generateIPv4Address            | Generates a random IPv4 address                                               | generateIPv4Address(): string                                                                                         |
| generateMACAddress             | Generates a random MAC address                                                | generateMACAddress(): string                                                                                          |
| generateUUID                   | Generates a random UUID (Universally Unique Identifier)                       | generateUUID(): string                                                                                                |
| generateRandomTime             | Generates a random time in 24-hour format                                     | generateRandomTime(): string                                                                                          |
| generatePhoneNumber            | Generates a random phone number                                               | generatePhoneNumber(): string                                                                                         |
| generateFileName               | Generates a random file name with extension                                   | generateFileName(extension: string): string                                                                           |
| generateURL                    | Generates a random URL                                                        | generateURL(): string                                                                                                 |
| generateCurrencyCode           | Generates a random currency code                                              | generateCurrencyCode(): string                                                                                        |
| generateJobTitle               | Generate a random job title                                                   | generateJobTitle(): string                                                                                            |
| generateCreditCardNumber       | Generates a random credit card number (dummy)                                 | generateCreditCardNumber(): string                                                                                    |
| generateCountry                | Generates a random country                                                    | generateCountry(): string                                                                                             |
| generateBooleanWithProbability | Generates a random boolean value with a given probability                     | generateBooleanWithProbability(probability: number): boolean                                                          |
| generatePassword               | Generates a random password with a given length and complexity                | generatePassword(length: number, includeUppercase: boolean, includeNumbers: boolean, includeSymbols: boolean): string |
| generateUsername               | Generates a random username                                                   | generateUsername(): string                                                                                            |

## License

This package is open-source and released under the MIT License.
