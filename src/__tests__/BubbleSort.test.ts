import bubble_sort from "@code/BubbleSort";
import { describe, expect, test } from "bun:test";

describe("BubbleSort", () => {
    test("sorts an array in ascending order", () => {
        const arr = [9, 3, 7, 4, 69, 420, 42];
        bubble_sort(arr);
        expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
    });

    test("sorts an array with negative numbers", () => {
        const arr = [-2, 3, -1, 8, -6];
        bubble_sort(arr);
        expect(arr).toEqual([-6, -2, -1, 3, 8]);
    });

    test("sorts an array with duplicate numbers", () => {
        const arr = [5, 3, 8, 3, 6];
        bubble_sort(arr);
        expect(arr).toEqual([3, 3, 5, 6, 8]);
    });

    test("sorts an already sorted array", () => {
        const arr = [1, 2, 3, 4, 5];
        bubble_sort(arr);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    test("sorts an array with one number", () => {
        const arr = [1];
        bubble_sort(arr);
        expect(arr).toEqual([1]);
    });

    test("sorts an empty array", () => {
        const arr: number[] = [];
        bubble_sort(arr);
        expect(arr).toEqual([]);
    });
});
