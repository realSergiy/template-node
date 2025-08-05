// https://leetcode.com/problems/best-meeting-point/

// Given an m x n binary grid grid where each 1 marks the home of one friend, return the minimal total travel distance.
// The total travel distance is the sum of the distances between the houses of the friends and the meeting point.
// The distance is calculated using Manhattan Distance, where distance(p1, p2) = |p2.x - p1.x| + |p2.y - p1.y|.

const minTotalDistance = (grid: number[][]): number => {
  const xs = flattenToOccupiedXIndices(grid);
  const ys = flattenToOccupiedYIndices(grid);

  const midX = medianFloored(xs);
  const midY = medianFloored(ys);

  let total = 0;
  for (const [iy, element] of grid.entries()) {
    for (const [ix, element_] of element.entries()) {
      if (element_ === 1) {
        total += Math.abs(midX - ix) + Math.abs(midY - iy);
      }
    }
  }

  return total;
};

export const medianFloored = (arr: number[]) => {
  const nums = arr.sort((a, b) => a - b);
  if (arr.length % 2 === 0) {
    const midIdx = arr.length / 2 - 1;
    return nums[midIdx];
  } else {
    const midIdx = (arr.length + 1) / 2 - 1;
    return nums[midIdx];
  }
};

export const flattenToOccupiedXIndices = (grid: number[][]) => {
  const result: number[] = [];
  for (const row of grid) {
    result.push(...toOccupiedIndicies(row));
  }
  return result;
};

export const flattenToOccupiedYIndices = (grid: number[][]) => {
  const result: number[] = [];
  for (const [i, current] of grid.entries()) {
    result.push(...current.filter(x => x === 1).map(() => i));
  }
  return result;
};

export const toOccupiedIndicies = (arr: number[]) => {
  const result: number[] = [];
  for (const [i, current] of arr.entries()) {
    if (current === 1) {
      result.push(i);
    }
  }
  return result;
};

export default minTotalDistance;
