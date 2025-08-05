const quickSortIP = (arr: number[], start = 0, end = arr.length - 1): number[] => {
  const idxDiff = end - start;

  if (idxDiff < 1) {
    return arr;
  }

  const [f, l] = [arr[start], arr[end]];

  if (idxDiff === 1) {
    if (f > l) {
      [arr[start], arr[end]] = [l, f];
    }
    return arr;
  }

  const mid = Math.floor((start + end) / 2);
  const m = arr[mid];

  let pivot;

  if (m < f) {
    if (l > f) {
      [arr[start], arr[mid]] = [m, f];
      pivot = f;
    } else if (l < m) {
      [arr[start], arr[end]] = [l, f];
      pivot = m;
    } else {
      [arr[start], arr[mid], arr[end]] = [m, l, f];
      pivot = l;
    }
  } else if (l < f) {
    [arr[start], arr[mid], arr[end]] = [l, f, m];
    pivot = f;
  } else if (l < m) {
    [arr[mid], arr[end]] = [l, m];
    pivot = l;
  } else {
    pivot = m;
  }

  if (idxDiff === 2) {
    return arr;
  }

  let l_idx = start,
    r_idx = end;

  while (l_idx <= r_idx) {
    while (arr[l_idx] < pivot) {
      l_idx++;
    }

    while (arr[r_idx] > pivot) {
      r_idx--;
    }

    if (l_idx <= r_idx) {
      [arr[l_idx], arr[r_idx]] = [arr[r_idx], arr[l_idx]];
      l_idx++;
      r_idx--;
    }
  }

  if (start < l_idx - 1) {
    quickSortIP(arr, start, l_idx - 1);
  }

  if (l_idx < end) {
    quickSortIP(arr, l_idx, end);
  }

  return arr;
};

export default quickSortIP;
