import { MinNumberHeap } from '@/structures/heap';

export const heapSort = (arr: number[]): number[] => {
  const maxHeap = new MinNumberHeap(arr);
  const sorted: number[] = [];

  do {
    const element = maxHeap.extractRoot();
    if (element === undefined) {
      break;
    } else {
      sorted.push(element);
    }
  } while (maxHeap.size() > 0);

  return sorted;
};
