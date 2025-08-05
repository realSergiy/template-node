const mergeSortIP = (arr: number[], start = 0, end = arr.length - 1) => {
  if (end - start <= 1) {
    if (end - start === 1 && arr[start] > arr[end]) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
    }
    return arr;
  }

  const mid = Math.floor((start + end) / 2);
  mergeSortIP(arr, start, mid);
  mergeSortIP(arr, mid, end);
  merge(arr, start, mid, end);
};

const merge = (arr: number[], start: number, mid: number, end: number) => {
  const left = arr.slice(start, mid);
  const rightLength = end - mid + 1;

  let leftIndex = 0,
    rightIndex = 0,
    mergedIndex = start;

  while (leftIndex < left.length && rightIndex < rightLength) {
    if (left[leftIndex] <= arr[mid + rightIndex]) {
      arr[mergedIndex++] = left[leftIndex++];
    } else {
      arr[mergedIndex++] = arr[mid + rightIndex];
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    arr[mergedIndex++] = left[leftIndex++];
  }
};

export default mergeSortIP;
