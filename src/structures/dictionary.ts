import { stringToHash32 } from '@/utils/hash';

type Bucket<K, V> = { key: K; value: V }[];
type Hashtable<K, V> = Bucket<K, V>[];

class Dictionary<K, V> {
  private table: Hashtable<K, V>;
  private count: number;

  constructor(expectedCapacity = 1024) {
    const initialCapacity = Math.max(16, expectedCapacity);
    this.table = this.getNewHashtable(initialCapacity);
    this.count = 0;
  }

  private getNewHashtable(capacity: number) {
    const newTable = new Array<Bucket<K, V>>(capacity);

    for (let i = 0; i < capacity; i++) {
      newTable[i] = [];
    }

    return newTable;
  }

  private hashFunction(key: K): number {
    const keyString = JSON.stringify(key);
    return stringToHash32(keyString) % this.table.length;
  }

  private findBucket(key: K): Bucket<K, V> {
    const index = this.hashFunction(key);
    return this.table[index];
  }

  public set(key: K, value: V): void {
    const bucket = this.findBucket(key);

    for (const element of bucket) {
      if (element.key === key) {
        element.value = value;
        return;
      }
    }

    bucket.push({ key, value });
    this.count++;

    if (this.count > this.table.length) {
      this.resize();
    }
  }

  public get(key: K): V | undefined {
    const bucket = this.findBucket(key);

    for (const pair of bucket) {
      if (pair.key === key) {
        return pair.value;
      }
    }

    return undefined;
  }

  public remove(key: K): boolean {
    const bucket = this.findBucket(key);

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket.splice(i, 1);
        this.count--;
        return true;
      }
    }

    return false;
  }

  private resize(): void {
    const oldTable = this.table;
    this.table = this.getNewHashtable(oldTable.length * 2);
    this.count = 0;

    for (const oldBucket of oldTable) {
      for (const oldKV of oldBucket) {
        this.set(oldKV.key, oldKV.value);
      }
    }
  }

  public getCount(): number {
    return this.count;
  }
}

export default Dictionary;
