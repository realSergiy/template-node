import { test } from '../fixtures';
import mergeSort from '@/algo/mergeSort';
import mergeSortIP from '@/algo/mergeSortIP';
import quickSortIP from '@/algo/quickSortIP';

test.describe('sort times', () => {
  test('compare sort algo', ({ measured, randomUtils, expectWithinTolerance }) => {
    const length = 1_000_000;
    const rarr = randomUtils.randomIntArray(length);

    let rarrClone = [...rarr];
    const merge = measured(mergeSort)(rarrClone);

    rarrClone = [...rarr];
    const mergeIP = measured(mergeSortIP)(rarrClone);

    rarrClone = [...rarr];
    const quickIP = measured(quickSortIP)(rarrClone);

    //    rarrClone = [...rarr];
    //    const insertionIP = measureTime(() => insertionSortIP(rarrClone));

    rarrClone = [...rarr];
    const native = measured(rarrClone.sort, rarrClone)((a, b) => a - b);

    expectWithinTolerance(quickIP.time, 200, 0.5);
    expectWithinTolerance(mergeIP.time, 210, 0.5);
    expectWithinTolerance(merge.time, 340, 0.5);
    expectWithinTolerance(native.time, 660, 0.5);
  });
});
