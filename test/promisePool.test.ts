import { test, expect } from '@playwright/test';
import promisePool from '@problems/promisePool';

test.describe('promisePool', () => {
  test('should respond with array', async () => {
    const functions = [
      () => new Promise(res => setTimeout(res, 300)),
      () => new Promise(res => setTimeout(res, 400)),
      () => new Promise(res => setTimeout(res, 200)),
    ];

    const parallelMax = 2;

    expect(await promisePool(functions, parallelMax)).toBeInstanceOf(Array);
  });
});
