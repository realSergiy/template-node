import { test, expect } from '../fixtures';
import PriorityQueue from '@/structures/priorityQueue';

test.describe('PriorityQueue', () => {
  test('should enqueue and dequeue', () => {
    const pq = new PriorityQueue<string>();
    pq.enqueue('Task One', 1);
    pq.enqueue('Task A', 2);
    pq.enqueue('Task Two', 0);
    pq.enqueue('Task Zero', 3);
    pq.enqueue('Task Last', 5);
    pq.enqueue('Task Later', 4);
    expect(pq.dequeue()).toEqual('Task Two');
    expect(pq.dequeue()).toEqual('Task One');
    expect(pq.dequeue()).toEqual('Task A');
    expect(pq.dequeue()).toEqual('Task Zero');
    expect(pq.dequeue()).toEqual('Task Later');
    expect(pq.dequeue()).toEqual('Task Last');
    expect(pq.dequeue()).toBeUndefined();
  });
});
