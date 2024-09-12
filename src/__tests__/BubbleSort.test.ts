import bubble_sort from "@code/BubbleSort";
import { describe, test, expect } from "bun:test";
import { test_sort } from "./data/SortTest";
import { sortFasterThanExponential } from "./performance";

describe("BubbleSort", () => {
    test_sort(bubble_sort);

    test("Should be faster than O(2^n)", () => {
        expect(sortFasterThanExponential(bubble_sort)).toBeTrue();
    });
});
