import { test, expect } from '../fixtures';
import minTotalDistance, {
  toOccupiedIndicies,
  flattenToOccupiedXIndices,
  flattenToOccupiedYIndices,
  medianFloored,
} from '@problems/bestMeetingPoint';

test.describe('Best Meeting Point', () => {
  test('should return occupied indices', () => {
    expect(toOccupiedIndicies([1, 0, 0, 0, 1])).toEqual([0, 4]);
    expect(toOccupiedIndicies([1, 0, 1, 1, 0, 0, 1])).toEqual([0, 2, 3, 6]);
    expect(toOccupiedIndicies([0, 0, 0, 1])).toEqual([3]);
  });

  test('should flatten to occupied X indices', () => {
    const grid = [
      [1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
    ];

    expect(flattenToOccupiedXIndices(grid)).toEqual([0, 4, 2]);
  });

  test('should flatten to occupied Y indices', () => {
    const grid = [
      [1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
    ];

    expect(flattenToOccupiedYIndices(grid)).toEqual([0, 0, 2]);
  });

  test('should return median x', () => {
    expect(medianFloored([0, 4, 2])).toBe(2);
  });

  test('should return median y', () => {
    expect(medianFloored([0, 0, 2])).toBe(0);
  });

  test('should return median', () => {
    expect(medianFloored([0, 0])).toBe(0);
    expect(medianFloored([1, 5])).toBe(1);
    expect(medianFloored([5, 1, 3, 4])).toBe(3);
  });

  test('should find min total distance 1', () => {
    const grid = [
      [1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
    ];

    expect(minTotalDistance(grid)).toBe(6);
  });

  test('should find min total distance 2', () => {
    const grid = [[1, 1]];

    expect(minTotalDistance(grid)).toBe(1);
  });
});
