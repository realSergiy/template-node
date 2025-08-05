class Heap<T> {
  private isMin: boolean;
  private heap: T[];
  private compare: (a: T, b: T) => number;

  constructor(isMin: boolean, compare: (a: T, b: T) => number, arr: T[] = []) {
    this.isMin = isMin;
    this.compare = compare;
    this.heap = arr;
    this.heapify();
  }

  private heapify(): void {
    for (let i = this.getLastNonLeafIndex(); i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  private getLastNonLeafIndex() {
    return Math.floor(this.heap.length / 2) - 1;
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  private getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  private swap(index1: number, index2: number): void {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  getRoot(): T | undefined {
    return this.heap[0];
  }

  extractRoot(): T | undefined {
    if (this.heap.length === 0) {
      return undefined;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const root = this.heap[0];
    const popped = this.heap.pop();
    if (popped !== undefined) {
      this.heap[0] = popped;
      this.heapifyDown(0);
    }
    return root;
  }

  insert(key: T): void {
    this.heap.push(key);
    this.heapifyUp(this.heap.length - 1);
  }

  private heapifyUp(index: number): void {
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.isMin) {
        if (this.compare(this.heap[index], this.heap[parentIndex]) >= 0) {
          break;
        }
      } else {
        if (this.compare(this.heap[index], this.heap[parentIndex]) <= 0) {
          break;
        }
      }
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  private heapifyDown(index: number): void {
    const lastIndex = this.heap.length - 1;
    while (true) {
      let swapTargetIndex = index;
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      if (this.isMin) {
        if (
          leftChildIndex <= lastIndex &&
          this.compare(this.heap[leftChildIndex], this.heap[swapTargetIndex]) < 0
        ) {
          swapTargetIndex = leftChildIndex;
        }

        if (
          rightChildIndex <= lastIndex &&
          this.compare(this.heap[rightChildIndex], this.heap[swapTargetIndex]) < 0
        ) {
          swapTargetIndex = rightChildIndex;
        }
      } else {
        if (
          leftChildIndex <= lastIndex &&
          this.compare(this.heap[leftChildIndex], this.heap[swapTargetIndex]) > 0
        ) {
          swapTargetIndex = leftChildIndex;
        }

        if (
          rightChildIndex <= lastIndex &&
          this.compare(this.heap[rightChildIndex], this.heap[swapTargetIndex]) > 0
        ) {
          swapTargetIndex = rightChildIndex;
        }
      }

      if (swapTargetIndex === index) {
        break;
      }

      this.swap(index, swapTargetIndex);
      index = swapTargetIndex;
    }
  }

  peek(): T | undefined {
    return this.heap[0];
  }

  size(): number {
    return this.heap.length;
  }
}

export class MinHeap<T> extends Heap<T> {
  constructor(compare: (a: T, b: T) => number, arr: T[] = []) {
    super(true, compare, arr);
  }
}

export class MaxHeap<T> extends Heap<T> {
  constructor(compare: (a: T, b: T) => number, arr: T[] = []) {
    super(false, compare, arr);
  }
}

export class MinNumberHeap extends MinHeap<number> {
  constructor(arr: number[] = []) {
    super((a, b) => a - b, arr);
  }
}

export class MaxNumberHeap extends MaxHeap<number> {
  constructor(arr: number[] = []) {
    super((a, b) => a - b, arr);
  }
}
