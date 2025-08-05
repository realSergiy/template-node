export const stringToHash32 = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.codePointAt(i) ?? 0;
    hash = (hash << 5) - hash + char;
  }
  return Math.abs(hash);
};
