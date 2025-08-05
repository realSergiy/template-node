export const randomIntArray = (length: number, max = Number.MAX_SAFE_INTEGER) => {
  const arr = new Array<number>(length);
  //  const arr = Array.from({length});   // this one has poor performance
  for (let i = 0; i < length; i++) {
    arr[i] = Math.floor(Math.random() * max);
  }
  return arr;
};

export const randomIntArray2 = (length: number) =>
  Array.from({ length }, () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));

// export const randomIntArray3 = (length: number) =>
//   [...new Array(length)].map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));

export const randomNumberArray = (length: number) => {
  const arr = new Array<number>(length);
  for (let i = 0; i < length; i++) {
    arr[i] = Math.random();
  }
  return arr;
};

// export const randomNumberArray2 = (length: number) => Array.from({ length }, () => Math.random());

// export const randomNumberArray3 = (length: number) =>
//   [...new Array(length)].map(() => Math.random());
