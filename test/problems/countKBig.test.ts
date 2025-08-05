import { test, expect } from '../fixtures';
import kBigIndices from '@/problems/countKBig';
import { case3nums } from './data/countKBig';

test.describe('Count the number of k big indices', () => {
  test('should find 2 big indices', () => {
    expect(kBigIndices([2, 3, 6, 5, 2, 3], 2)).toEqual(2);
  });

  test('should find 0 big indices', () => {
    expect(kBigIndices([1, 1, 1], 3)).toEqual(0);
  });

  test(`should find 206 big indices in ${case3nums.length} array in 40ms`, ({
    measured,
    expectWithinTolerance,
  }) => {
    const { time } = measured(kBigIndices)(case3nums, 23_311);
    expect(kBigIndices(case3nums, 23_311)).toEqual(206);
    expectWithinTolerance(time, 30, 0.5);
  });
});
