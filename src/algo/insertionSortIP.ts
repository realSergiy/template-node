const insertionSortIP = (arr: number[], start = 0, end = arr.length - 1) => {
  for (let i = start + 1; i <= end; i++) {
    const current = arr[i];
    let j = i - 1;
    while (j >= start && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
};

export default insertionSortIP;
