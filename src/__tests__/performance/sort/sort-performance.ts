import {
    bogoSort,
    bruteForceSort,
    bubbleSort,
    bucketSort,
    countingSort,
    heapSort,
    insertionSort,
    mergeSort,
    quickSort,
    radixSort,
    selectionSort,
} from "./sort-algorythms";
import { time } from "../utils";

export function sortFasterThanLinear(fn: (arr: number[]) => void): boolean {
    const arr = Array.from({ length: 10_000 }, (_, i) => 10_000 - i);
    const arr1 = [...arr];
    const arr2 = [...arr];

    const countingSortTime = time(() => countingSort(arr1));
    const radixSortTime = time(() => radixSort(arr1));
    const bucketSortTime = time(() => bucketSort(arr1));
    const maxLinearTime = Math.max(
        countingSortTime,
        radixSortTime,
        bucketSortTime,
    );

    const fnTime = time(() => fn(arr2));

    return fnTime < maxLinearTime;
}

export function sortFasterThanLinearithmic(
    fn: (arr: number[]) => void,
): boolean {
    const arr = Array.from({ length: 10_000 }, (_, i) => 10_000 - i);
    const arr1 = [...arr];
    const arr2 = [...arr];

    const mergeSortTime = time(() => mergeSort(arr1));
    const heapSortTime = time(() => heapSort(arr1));
    const quickSortTime = time(() => quickSort(arr1));
    const maxLinearTime = Math.max(mergeSortTime, heapSortTime, quickSortTime);

    const fnTime = time(() => fn(arr2));

    return fnTime < maxLinearTime;
}

export function sortFasterThanQuadratic(fn: (arr: number[]) => void): boolean {
    const arr = Array.from({ length: 10_000 }, (_, i) => 10_000 - i);
    const arr1 = [...arr];
    const arr2 = [...arr];

    const bubbleSortTime = time(() => bubbleSort(arr1));
    const insertionSortTime = time(() => insertionSort(arr1));
    const selectionSortTime = time(() => selectionSort(arr1));
    const maxLinearTime = Math.max(
        bubbleSortTime,
        insertionSortTime,
        selectionSortTime,
    );

    const fnTime = time(() => fn(arr2));

    return fnTime < maxLinearTime;
}

export function sortFasterThanExponential(
    fn: (arr: number[]) => void,
): boolean {
    const arr = Array.from({ length: 10_000 }, (_, i) => 10_000 - i);
    const arr1 = [...arr];
    const arr2 = [...arr];

    const bogoSortTime = time(() => bogoSort(arr1));
    const fnTime = time(() => fn(arr2));

    return fnTime < bogoSortTime;
}

export function sortFasterThanFactorial(fn: (arr: number[]) => void): boolean {
    const arr = Array.from({ length: 10_000 }, (_, i) => 10_000 - i);
    const arr1 = [...arr];
    const arr2 = [...arr];

    const bruteForceSortTime = time(() => bruteForceSort(arr1));
    const fnTime = time(() => fn(arr2));

    return fnTime < bruteForceSortTime;
}
