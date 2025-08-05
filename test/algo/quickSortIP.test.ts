import { test, expect } from '../fixtures';
import quickSortIP from '@/algo/quickSortIP';
import { testJumboSort } from './testers';

test.describe('quickSort', () => {
  test('should sort tiny array', () => {
    const arr = [8, 2, 4];
    const sorted = quickSortIP(arr);
    expect(sorted).toEqual([2, 4, 8]);
  });

  test('should sort an array', () => {
    const arr = [5, 3, 8, 2, 1, 4];
    const sorted = quickSortIP(arr);
    expect(sorted).toEqual([1, 2, 3, 4, 5, 8]);
  });

  test('should sort an array with duplicates', () => {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const sorted = quickSortIP(arr);
    expect(sorted).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
  });

  test('should sort jumbo under 1 sec', ({ measured, randomUtils, expectWithinTolerance }) => {
    testJumboSort('quickSortIP', quickSortIP, 5_000_000, 825, {
      measured,
      randomUtils,
      expectWithinTolerance,
    });
  });
});
