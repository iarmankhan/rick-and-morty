export function debounce<T extends (...args: unknown[]) => unknown>(func: T, timeout: number): T {
  let timer: NodeJS.Timeout | undefined;
  return ((...args: Parameters<T>): void => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), timeout);
  }) as T;
}
