import { test, expect } from '../fixtures';
import Dictionary from '@/structures/dictionary';

test.describe('Dictionary', () => {
  let dictionary: Dictionary<string, number>;

  test.beforeEach(() => {
    dictionary = new Dictionary<string, number>();
  });

  test('set should add a key-value pair', () => {
    dictionary.set('one', 1);
    expect(dictionary.get('one')).toBe(1);
  });

  test('get should return the correct value for a key', () => {
    dictionary.set('two', 2);
    expect(dictionary.get('two')).toBe(2);
  });

  test('get should return undefined for a non-existent key', () => {
    expect(dictionary.get('three')).toBeUndefined();
  });

  test('remove should delete a key-value pair', () => {
    dictionary.set('four', 4);
    dictionary.remove('four');
    expect(dictionary.get('four')).toBeUndefined();
  });

  test('remove should return true if the key was found and removed', () => {
    dictionary.set('five', 5);
    expect(dictionary.remove('five')).toBe(true);
  });

  test('remove should return false if the key was not found', () => {
    expect(dictionary.remove('six')).toBe(false);
  });

  test('set should update the value if the key already exists', () => {
    dictionary.set('seven', 7);
    dictionary.set('seven', 77);
    expect(dictionary.get('seven')).toBe(77);
  });

  test('handles large number of items and potential hash collisions', () => {
    const itemCount = 1_000_000;
    const collisionProne = ['Aa', 'BB', 'AaAa', 'BBBB']; // These strings are known to cause collisions in some hash functions

    for (let i = 0; i < itemCount; i++) {
      dictionary.set(`key${i}`, i);
    }

    for (const [index, key] of collisionProne.entries()) {
      dictionary.set(key, index);
    }

    let success = true;
    for (let i = 0; i < itemCount; i++) {
      if (dictionary.get(`key${i}`) !== i) {
        success = false;
        break;
      }
    }
    expect(success).toBe(true);

    success = true;
    for (const [index, key] of collisionProne.entries()) {
      if (dictionary.get(key) !== index) {
        success = false;
        break;
      }
    }
    expect(success).toBe(true);

    let count = 0;
    for (let i = 0; i < itemCount; i++) {
      if (dictionary.get(`key${i}`) !== undefined) {
        count++;
      }
    }

    for (const key of collisionProne) {
      if (dictionary.get(key) !== undefined) {
        count++;
      }
    }

    expect(count).toBe(itemCount + collisionProne.length);

    for (let i = 0; i < itemCount; i += 100) {
      dictionary.remove(`key${i}`);
    }

    for (const [index, key] of collisionProne.entries()) {
      if (index % 2 === 0) {
        dictionary.remove(key);
      }
    }

    success = true;
    for (let i = 0; i < itemCount; i++) {
      if (i % 100 === 0) {
        if (dictionary.get(`key${i}`) !== undefined) {
          success = false;
          break;
        }
      } else {
        if (dictionary.get(`key${i}`) !== i) {
          success = false;
          break;
        }
      }
    }
    expect(success).toBe(true);

    success = true;
    for (const [index, key] of collisionProne.entries()) {
      if (index % 2 === 0) {
        if (dictionary.get(key) !== undefined) {
          success = false;
          break;
        }
      } else {
        if (dictionary.get(key) !== index) {
          success = false;
          break;
        }
      }
    }
    expect(success).toBe(true);
  });
});
