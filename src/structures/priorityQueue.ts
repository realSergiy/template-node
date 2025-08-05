import { MinHeap } from './heap';

type PriorityQueueItem<T> = {
  value: T;
  priority: number;
};

class PriorityQueue<T> {
  private heap: MinHeap<PriorityQueueItem<T>>;

  constructor() {
    this.heap = new MinHeap<PriorityQueueItem<T>>((a, b) => a.priority - b.priority);
  }

  enqueue(value: T, priority: number): void {
    this.heap.insert({ value, priority });
  }

  dequeue(): T | undefined {
    return this.heap.extractRoot()?.value;
  }

  peek(): T | undefined {
    return this.heap.peek()?.value;
  }

  isEmpty(): boolean {
    return this.heap.size() === 0;
  }

  size(): number {
    return this.heap.size();
  }
}

export default PriorityQueue;
