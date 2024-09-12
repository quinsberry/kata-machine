import quick_sort from "@code/QuickSort";
import { describe, test, expect } from "bun:test";
import { test_sort } from "./data/SortTest";
import { sortFasterThanQuadratic } from "./performance";

describe("QuickSort", () => {
    test_sort(quick_sort);

    test("Should sort faster than O(n^2)", () => {
        expect(sortFasterThanQuadratic(quick_sort)).toBeTrue();
    });
});
