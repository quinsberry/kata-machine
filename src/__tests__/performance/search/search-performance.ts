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
    const worstCaseForInterpolationSearch = Array.from(
        { length: 10_000 },
        (_, i) => (i === 10_000 - 1 ? i : 1),
    ); // [1, 1, 1 ... 10_000 - 1]
    const target = 10_000 - 1;

    const interpolationSearchTime = time(() =>
        interpolationSearch(worstCaseForInterpolationSearch, target),
    );
    const fnTime = time(() => fn(worstCaseForInterpolationSearch, target));

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
    const arr = Array.from({ length: 10 }, (_, i) => 10 - i);
    const target = 0;

    const subsetSumTime = time(() => subsetSum(arr, target));
    const fnTime = time(() => fn(arr, target));

    return fnTime < subsetSumTime;
}

export function searchFasterThanFactorial(
    fn: (arr: number[], target: number) => void,
): boolean {
    const arr = Array.from({ length: 10 }, (_, i) => 10 - i);
    const target = 0;

    const bruteForceSearchTime = time(() => bruteForceSearch(arr, target));
    const fnTime = time(() => fn(arr, target));

    return fnTime < bruteForceSearchTime;
}
