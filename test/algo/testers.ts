import { expect } from '@playwright/test';
import type { measured } from '@/utils/performance';
import type { randomIntArray } from '@/utils/random';
import type { expectWithinTolerance } from '../fixtures';

export const testBasicSortIP = (
  algoName: string,
  algo: (arr: number[], start?: number, end?: number) => void,
) => {
  const arr = [5, 3, 8, 2, 1, 4];
  algo(arr);
  expect(arr, `Basic ${algoName} must be working`).toEqual([1, 2, 3, 4, 5, 8]);
};

export const testSortWithDuplicatesIP = (
  algoName: string,
  algo: (arr: number[], start?: number, end?: number) => void,
) => {
  const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  algo(arr);
  expect(arr, `${algoName} with duplicates must be working`).toEqual([
    1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9,
  ]);
};

type JumboSortFixtures = {
  measured: typeof measured;
  randomUtils: {
    randomIntArray: typeof randomIntArray;
  };
  expectWithinTolerance: typeof expectWithinTolerance;
};

export const testJumboSort = (
  algoName: string,
  algo: (arr: number[], start?: number, end?: number) => number[] | undefined,
  length: number,
  expectedTime: number,
  fixtures: JumboSortFixtures,
  tolerance = 0.75,
) => {
  const { measured, randomUtils, expectWithinTolerance } = fixtures;
  const arr = randomUtils.randomIntArray(length);
  const sort = measured(algo)(arr);
  console.log(`${algoName} time for ${length} array:`, sort.time);

  expectWithinTolerance(sort.time, expectedTime, tolerance);
};
