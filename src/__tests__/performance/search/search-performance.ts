import {
    linearSearch,
    binarySearch,
    interpolationSearch,
    bubbleSortSearch,
    subsetSum,
    bruteForceSearch,
} from "./search-algorythms";
import { time } from "../utils";

export function searchFasterThanLogarithmic(
    fn: (arr: number[], target: number) => void,
): boolean {
    const arr = Array.from({ length: 10_000 }, (_, i) => 10_000 - i);
    const target = 0;

    const binarySearchTime = time(() => binarySearch(arr, target));
    const fnTime = time(() => fn(arr, target));

    return fnTime < binarySearchTime;
}

export function searchFasterThanLinear(
    fn: (arr: number[], target: number) => void,
): boolean {
    const arr = Array.from({ length: 10_000 }, (_, i) => 10_000 - i);
    const target = 0;

    const linearSearchTime = time(() => linearSearch(arr, target));
    const fnTime = time(() => fn(arr, target));

    return fnTime < linearSearchTime;
}

export function searchFasterThanLinearithmic(
    fn: (arr: number[], target: number) => void,
): boolean {
    const arr = Array.from({ length: 10_000 }, (_, i) => 10_000 - i);
    const target = 0;

    const interpolationSearchTime = time(() =>
        interpolationSearch(arr, target),
    );
    const fnTime = time(() => fn(arr, target));

    return fnTime < interpolationSearchTime;
}

export function searchFasterThanQuadratic(
    fn: (arr: number[], target: number) => void,
): boolean {
    const arr = Array.from({ length: 10_000 }, (_, i) => 10_000 - i);
    const target = 0;

    const bubbleSortSearchTime = time(() => bubbleSortSearch(arr, target));
    const fnTime = time(() => fn(arr, target));

    return fnTime < bubbleSortSearchTime;
}

export function searchFasterThanExponential(
    fn: (arr: number[], target: number) => void,
): boolean {
    const arr = Array.from({ length: 10_000 }, (_, i) => 10_000 - i);
    const target = 0;

    const subsetSumTime = time(() => subsetSum(arr, target));
    const fnTime = time(() => fn(arr, target));

    return fnTime < subsetSumTime;
}

export function searchFasterThanFactorial(
    fn: (arr: number[], target: number) => void,
): boolean {
    const arr = Array.from({ length: 10_000 }, (_, i) => 10_000 - i);
    const target = 0;

    const bruteForceSearchTime = time(() => bruteForceSearch(arr, target));
    const fnTime = time(() => fn(arr, target));

    return fnTime < bruteForceSearchTime;
}
