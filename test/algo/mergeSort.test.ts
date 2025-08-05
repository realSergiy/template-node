import { test, expect } from '../fixtures';
import mergeSort, { mergeSorted } from '@/algo/mergeSort';
import { testJumboSort } from './testers';

test.describe('mergeSort', () => {
  test('should sort tiny array', () => {
    const arr = [8, 2, 4];
    const sorted = mergeSort(arr);
    expect(sorted).toEqual([2, 4, 8]);
  });

  test('should sort an array', () => {
    const arr = [5, 3, 8, 2, 1, 4];
    const sorted = mergeSort(arr);
    expect(sorted).toEqual([1, 2, 3, 4, 5, 8]);
  });

  test('should sort an array with duplicates', () => {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const sorted = mergeSort(arr);
    expect(sorted).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
  });

  test('should sort jumbo in 1 sec', ({ measured, randomUtils, expectWithinTolerance }) => {
    testJumboSort('mergeSort', mergeSort, 3_000_000, 1150, {
      measured,
      randomUtils,
      expectWithinTolerance,
    });
  });
});

test.describe('mergeSorted', () => {
  test('should merge number with empty', () => {
    const left: number[] = [];
    const right = [2];
    const merged = mergeSorted(left, right);
    expect(merged).toEqual([2]);
  });

  test('should merge two numbers', () => {
    const left = [3];
    const right = [2];
    const merged = mergeSorted(left, right);
    expect(merged).toEqual([2, 3]);
  });

  test('should merge number with array', () => {
    const left = [3];
    const right = [1, 4];
    const merged = mergeSorted(left, right);
    expect(merged).toEqual([1, 3, 4]);
  });

  test('should merge two tiny arrays', () => {
    const left = [3, 9];
    const right = [1, 4];
    const merged = mergeSorted(left, right);
    expect(merged).toEqual([1, 3, 4, 9]);
  });

  test('should merge two sorted arrays', () => {
    const left = [1, 3, 5];
    const right = [2, 4, 6];
    const merged = mergeSorted(left, right);
    expect(merged).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should merge two sorted arrays with duplicates', () => {
    const left = [1, 3, 5, 5, 5];
    const right = [2, 4, 6];
    const merged = mergeSorted(left, right);
    expect(merged).toEqual([1, 2, 3, 4, 5, 5, 5, 6]);
  });

  test('should merge two sorted arrays with duplicates across', () => {
    const left = [1, 3, 4];
    const right = [2, 4, 6, 6, 6];
    const merged = mergeSorted(left, right);
    expect(merged).toEqual([1, 2, 3, 4, 4, 6, 6, 6]);
  });
});
