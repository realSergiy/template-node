const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 2) {
    if (arr.length === 2 && arr[0] > arr[1]) {
      [arr[0], arr[1]] = [arr[1], arr[0]];
    }
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return mergeSorted(mergeSort(left), mergeSort(right));
};

export const mergeSorted = (left: number[], right: number[]) => {
  const merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    merged.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    merged.push(right[rightIndex]);
    rightIndex++;
  }

  return merged;
};

export default mergeSort;
