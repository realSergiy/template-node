export const measured = <T extends (...args: never[]) => unknown>(
  fn: T,
  context?: ThisParameterType<T>,
) => {
  return (...args: Parameters<T>): { result: ReturnType<T>; time: number } => {
    const start = performance.now();
    const result = fn.apply(context, args) as ReturnType<T>;
    const time = performance.now() - start;

    return { result, time };
  };
};
