// https://leetcode.com/problems/count-the-number-of-k-big-indices/

import { MaxNumberHeap } from '@/structures/heap';

// You are given a 0-indexed integer array nums and a positive integer k.

// We call an index i k-big if the following conditions are satisfied:

// There exist at least k different indices idx1 such that idx1 < i and nums[idx1] < nums[i].
// There exist at least k different indices idx2 such that idx2 > i and nums[idx2] < nums[i].
// Return the number of k-big indices.

const kBigIndices = (nums: number[], k: number): number => {
  const n = nums.length;
  let kBigCount = 0;
  const leftKBig = new Array(n).fill(false);

  const leftHeap = new MaxNumberHeap();

  for (let i = 0; i < n; i++) {
    const current = nums[i];

    if (leftHeap.size() >= k) {
      const maxElement = leftHeap.peek();

      if (maxElement !== undefined && current > maxElement) {
        leftKBig[i] = true;
      }

      if (maxElement !== undefined && current < maxElement) {
        leftHeap.extractRoot();
        leftHeap.insert(current);
      }
    } else {
      leftHeap.insert(current);
    }
  }

  const rightHeap = new MaxNumberHeap();
  for (let i = n - 1; i >= 0; i--) {
    const current = nums[i];

    if (rightHeap.size() >= k) {
      const maxElement = rightHeap.peek();

      if (maxElement !== undefined && current > maxElement && leftKBig[i]) {
        kBigCount++;
      }

      if (maxElement !== undefined && current < maxElement) {
        rightHeap.extractRoot();
        rightHeap.insert(current);
      }
    } else {
      rightHeap.insert(current);
    }
  }

  return kBigCount;
};

export default kBigIndices;
