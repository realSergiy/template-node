const listPalindromes = (input: string) => {
  const characterMap = new Map<string, number>();

  for (const c of input) {
    const count = characterMap.get(c) ?? 0;
    characterMap.set(c, count + 1);
  }

  const odds = [...characterMap.entries()].filter(([, v]) => v % 2 === 1);

  if (odds.length > 1) {
    return [];
  }

  if (characterMap.size === 1) {
    return [input];
  }

  let permutations: string[];

  if (odds.length === 1) {
    const [oddChararcter, oddCharacterCount] = odds[0];
    characterMap.set(oddChararcter, oddCharacterCount - 1);

    const allCharacters = flattenMap(characterMap);
    permutations = getPermutations(allCharacters);
    return permutations.map(p => `${p}${oddChararcter}${reverseStr(p)}`);
  } else {
    const allCharacters = flattenMap(characterMap);
    permutations = getPermutations(allCharacters);
    return permutations.map(p => `${p}${reverseStr(p)}`);
  }
};

const flattenMap = (chMap: Map<string, number>) =>
  [...chMap.entries()]
    .flatMap<string>(([k, v]) => Array.from<string>({ length: v / 2 }).fill(k))
    .join('');

const reverseStr = (str: string) => [...str].toReversed().join('');

export const getPermutations = (word: string): string[] => {
  if (word.length === 0) {
    return [];
  }

  if (word.length === 2) {
    return [word, reverseStr(word)];
  }

  const res = [] as string[];

  for (let i = 0; i < word.length; i++) {
    const c = word[i];
    const wordAsArr = [...word];
    wordAsArr.splice(i, 1);
    const substring = wordAsArr.join('');
    const subPermutations = getPermutations(substring);
    for (const sp of subPermutations) {
      res.push(`${c}${sp}`);
    }
  }

  return res;
};

export default listPalindromes;
