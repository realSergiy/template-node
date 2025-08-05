import { test, expect } from '../fixtures';

const compareFn = (a: number, b: number) => a - b;

test.describe('randomArray', () => {
  test('ensure random generation', ({ randomUtils }) => {
    const length = 10_000;
    const range = 10;
    const expectedIncidence = length / range;
    const expectedIncidenceTolerance = 0.1 * expectedIncidence;

    const arr = randomUtils.randomIntArray(length, range);
    expect(arr.length).toBe(length);
    expect(arr.every(x => Number.isInteger(x))).toBe(true);

    const incidences = new Map<number, number>();

    for (const x of arr) {
      incidences.set(x, (incidences.get(x) ?? 0) + 1);
    }

    expect(incidences.size).toBe(range);
    expect(
      [...incidences.values()].every(
        x => Math.abs(x - expectedIncidence) < expectedIncidenceTolerance,
      ),
    ).toBe(true);
  });

  test('measure random integers creation', ({ measured, randomUtils, expectWithinTolerance }) => {
    const { time } = measured(randomUtils.randomIntArray)(10_000_000);
    expectWithinTolerance(time, 200, 0.5);
  });

  test('measure random numbers creation', ({ measured, randomUtils, expectWithinTolerance }) => {
    const { time } = measured(randomUtils.randomNumberArray)(10_000_000);
    expectWithinTolerance(time, 200, 0.5);
  });

  test('compare random numbers creation methods', ({
    measured,
    randomUtils,
    expectWithinTolerance,
  }) => {
    const length = 10_000_000;
    const result1 = measured(randomUtils.randomNumberArray)(length);
    // const result2 = measured(randomUtils.randomNumberArray2)(length);
    // const result3 = measured(randomUtils.randomNumberArray3)(length);

    expectWithinTolerance(result1.time, 200, 0.5);
    // expectWithinTolerance(result2.time, 900, 0.5);
    // expectWithinTolerance(result3.time, 850, 0.5);
  });

  test('compare random int creation methods', ({
    measured,
    randomUtils,
    expectWithinTolerance,
  }) => {
    const length = 10_000_000;
    const result1 = measured(randomUtils.randomIntArray)(length);
    // const result2 = measured(randomUtils.randomIntArray2)(length);
    // const result3 = measured(randomUtils.randomIntArray3)(length);

    expectWithinTolerance(result1.time, 200, 0.5);
    // expectWithinTolerance(result2.time, 550, 0.5);
    // expectWithinTolerance(result3.time, 800, 0.5);
  });

  test('native sort time', ({ measured, randomUtils, expectWithinTolerance }) => {
    const length = 1_000_000;
    const arr = randomUtils.randomIntArray(length);
    const measuredNativeSort = measured(arr.sort, arr);
    const { time } = measuredNativeSort(compareFn);
    expectWithinTolerance(time, 750, 0.5);
  });
});
