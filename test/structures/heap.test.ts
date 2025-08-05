import { test, expect } from '../fixtures';
import { MaxNumberHeap, MinNumberHeap } from '@/structures/heap';

test.describe('Heap', () => {
  test('should insert and extract min', () => {
    const minHeap = new MinNumberHeap();
    minHeap.insert(10);
    minHeap.insert(5);
    minHeap.insert(15);
    minHeap.insert(20);
    minHeap.insert(30);
    minHeap.insert(25);
    expect(minHeap.extractRoot()).toEqual(5);
    expect(minHeap.extractRoot()).toEqual(10);
    expect(minHeap.extractRoot()).toEqual(15);
    expect(minHeap.extractRoot()).toEqual(20);
    expect(minHeap.extractRoot()).toEqual(25);
    expect(minHeap.extractRoot()).toEqual(30);
    expect(minHeap.extractRoot()).toBeUndefined();
  });

  test('should insert and extract max', () => {
    const maxHeap = new MaxNumberHeap();
    maxHeap.insert(10);
    maxHeap.insert(5);
    maxHeap.insert(15);
    maxHeap.insert(20);
    maxHeap.insert(30);
    maxHeap.insert(25);
    expect(maxHeap.extractRoot()).toEqual(30);
    expect(maxHeap.extractRoot()).toEqual(25);
    expect(maxHeap.extractRoot()).toEqual(20);
    expect(maxHeap.extractRoot()).toEqual(15);
    expect(maxHeap.extractRoot()).toEqual(10);
    expect(maxHeap.extractRoot()).toEqual(5);
    expect(maxHeap.extractRoot()).toBeUndefined();
  });

  test('heapify minHeap', () => {
    const minHeap = new MinNumberHeap([10, 5, 15, 20, 30, 25]);
    expect(minHeap.extractRoot()).toEqual(5);
    expect(minHeap.extractRoot()).toEqual(10);
    expect(minHeap.extractRoot()).toEqual(15);
    expect(minHeap.extractRoot()).toEqual(20);
    expect(minHeap.extractRoot()).toEqual(25);
    expect(minHeap.extractRoot()).toEqual(30);
    expect(minHeap.extractRoot()).toBeUndefined();
  });

  test('heapify maxHeap', () => {
    const maxHeap = new MaxNumberHeap([10, 5, 15, 20, 30, 25]);
    expect(maxHeap.extractRoot()).toEqual(30);
    expect(maxHeap.extractRoot()).toEqual(25);
    expect(maxHeap.extractRoot()).toEqual(20);
    expect(maxHeap.extractRoot()).toEqual(15);
    expect(maxHeap.extractRoot()).toEqual(10);
    expect(maxHeap.extractRoot()).toEqual(5);
    expect(maxHeap.extractRoot()).toBeUndefined();
  });
});
