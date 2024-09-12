/**
 * Measures the execution time of a given function.
 *
 * @param fn - The function to be executed and timed.
 * @returns The duration of the function execution in milliseconds.
 */
export function time(fn: () => void): number {
    const t0 = performance.now();
    fn();
    const t1 = performance.now();
    const duration = t1 - t0;
    return duration;
}
