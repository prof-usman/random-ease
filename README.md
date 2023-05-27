# random-ease

[![npm](https://img.shields.io/npm/v/random-ease.svg)](https://www.npmjs.com/package/random-ease)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/prof-usman/random-ease/blob/main/LICENSE)

<!-- [![Downloads](https://badgen.net/npm/dt/random-ease)](https://www.npmjs.com/package/random-ease) -->

<!-- [![Known Vulnerabilities](https://snyk.io/test/npm/random-ease/badge.svg)](https://snyk.io/test/npm/random-ease) -->

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

// Generate a random number
console.log(randomEase.generateNumber(10, 10000));

// Generate a random string
console.log(randomEase.generateString(25));

// Generate a random array
console.log(randomEase.generateArray(5, 10, 15));
```

or in typescript

```typescript
import randomEase from 'random-ease';
// or
// import { generateNumber } from 'random-ease';

// Generate a random number
console.log(randomEase.generateNumber(10, 10000));
```

## Available Helper Functions

| Method          | Purpose                  | Definition                                                          |
| --------------- | ------------------------ | ------------------------------------------------------------------- |
| generateNumber  | Generate a random number | generateNumber(min: number, max: number): number                    |
| generateString  | Generate Random String   | generateString(length: number): string                              |
| generateArray   | Generate Random Array    | generateArray(length: number, min: number, max: number): number\[\] |
| generateBoolean | Generate Random Boolean  | generateBoolean(): boolean                                          |

## License

This package is open-source and released under the MIT License.
