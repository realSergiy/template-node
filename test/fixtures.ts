import { test as base, expect } from '@playwright/test';
import { measured } from '@/utils/performance';
import {
  randomIntArray,
  randomIntArray2,
  //  randomIntArray3,
  randomNumberArray,
  // randomNumberArray2,
  // randomNumberArray3,
} from '@/utils/random';

export const expectWithinTolerance = (
  actual: number,
  expected: number,
  tolerance: number,
  verbose = false,
) => {
  const message = `Expected to be within +- ${tolerance * expected} of ${expected}, got ${actual}`;

  if (verbose) {
    console.log(message);
  }

  expect(expected * tolerance, message).toBeGreaterThan(Math.abs(actual - expected));
};

// Define custom fixtures
export const test = base.extend<{
  // Performance measurement fixtures
  measured: typeof measured;

  // Custom expect utilities fixtures
  expectWithinTolerance: typeof expectWithinTolerance;

  // Random data generation fixtures
  randomUtils: {
    randomIntArray: typeof randomIntArray;
    randomIntArray2: typeof randomIntArray2;
    // randomIntArray3: typeof randomIntArray3;
    randomNumberArray: typeof randomNumberArray;
    // randomNumberArray2: typeof randomNumberArray2;
    // randomNumberArray3: typeof randomNumberArray3;
  };
}>({
  // Performance measurement fixture
  measured: async ({}, use) => {
    await use(measured);
  },

  // Custom expect utilities fixture
  expectWithinTolerance: async ({}, use) => {
    await use(expectWithinTolerance);
  },

  // Random data generation fixture
  randomUtils: async ({}, use) => {
    const utils = {
      randomIntArray,
      randomIntArray2,
      // randomIntArray3,
      randomNumberArray,
      // randomNumberArray2,
      // randomNumberArray3,
    };
    await use(utils);
  },
});

export { expect } from '@playwright/test';
