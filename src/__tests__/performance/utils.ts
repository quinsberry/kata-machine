import { hrtime } from "node:process";
/**
 * Measures the execution time of a given function.
 *
 * @param fn - The function to be executed and timed.
 * @returns The duration of the function execution in milliseconds.
 */
export function time(fn: () => void): number {
    const start = hrtime();
    fn();
    const end = hrtime(start);
    const durationInNanoseconds = end[0] * 1e9 + end[1];
    const durationInMs = durationInNanoseconds / 1e6;
    return durationInMs;
}
