import { test, expect } from '../fixtures';
import mergeSortIP from '@/algo/mergeSortIP';
import { testJumboSort } from './testers';

test.describe('mergeSortIP', () => {
  test('should sort tiny array', () => {
    const arr = [8, 2, 4];
    mergeSortIP(arr);
    expect(arr).toEqual([2, 4, 8]);
  });

  test('should sort an array', () => {
    const arr = [5, 3, 8, 2, 1, 4];
    mergeSortIP(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5, 8]);
  });

  test('should sort an array with duplicates', () => {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    mergeSortIP(arr);
    expect(arr).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
  });

  test('should sort correctly', ({ randomUtils }) => {
    const length = 200;
    const arr = randomUtils.randomIntArray(length);

    const sorted = [...arr].sort((a, b) => a - b);
    mergeSortIP(arr);

    expect(arr).toEqual(sorted);
  });

  test('should sort correctly with duplicates', ({ randomUtils }) => {
    const length = 200;
    const arr = randomUtils.randomIntArray(length, 100);

    const sorted = [...arr].sort((a, b) => a - b);
    mergeSortIP(arr);

    expect(arr).toEqual(sorted);
  });

  test('should sort jumbo in 1 sec', ({ measured, randomUtils, expectWithinTolerance }) => {
    testJumboSort(
      'mergeSortIP',
      mergeSortIP,
      4_000_000,
      900,
      {
        measured,
        randomUtils,
        expectWithinTolerance,
      },
      0.5,
    );
  });
});
