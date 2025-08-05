import { test, expect } from '../fixtures';
import { buildMatrix } from '@/problems/matrixConditions';

test.describe('Build a Matrix With Conditions', () => {
  test('should build a matrix with conditions', () => {
    const k = 3;
    const rowConditions = [
      [1, 2],
      [3, 2],
    ];
    const colConditions = [
      [2, 1],
      [3, 2],
    ];
    const result = buildMatrix(k, rowConditions, colConditions);
    expect(result).toEqual([
      [0, 0, 1],
      [3, 0, 0],
      [0, 2, 0],
    ]);
  });

  test('should return empty matrix', () => {
    const k = 3;
    const rowConditions = [
      [1, 2],
      [2, 3],
      [3, 1],
      [2, 3],
    ];
    const colConditions = [[2, 1]];
    const result = buildMatrix(k, rowConditions, colConditions);
    expect(result).toEqual([]);
  });
});
