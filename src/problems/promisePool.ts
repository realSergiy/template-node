type F = () => Promise<unknown>;

export const promisePool = async (functions: F[], parallelMax: number): Promise<unknown[]> => {
  let i = 0;
  const results: unknown[] = [];

  while (i < functions.length) {
    const batch = functions.slice(i, i + parallelMax);
    const promises = batch.map(f => f());
    const settled = await Promise.allSettled(promises);
    for (const result of settled) {
      if (result.status === 'fulfilled') {
        results.push(result.value);
      } else {
        results.push(result.reason);
      }
    }
    i += parallelMax;
  }

  return results;
};

export default promisePool;
