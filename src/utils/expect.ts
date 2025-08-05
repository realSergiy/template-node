import { expect as playwrightExpect } from '@playwright/test';

export const expectWithinTolerance = (actual: number, expected: number, tolerance: number) => {
  const message = `Expected to be within +- ${
    tolerance * expected
  } of ${expected}, but got ${actual}`;
  playwrightExpect(expected * tolerance, message).toBeGreaterThan(Math.abs(actual - expected));
};
