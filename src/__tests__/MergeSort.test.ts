import merge_sort from "@code/MergeSort";
import { describe, expect, test } from "bun:test";
import { test_sort } from "./data/SortTest";
import { sortFasterThanQuadratic } from "./performance";

describe("MergeSort", () => {
    test_sort(merge_sort);

    test("Should be faster than O(n^2)", () => {
        expect(sortFasterThanQuadratic(merge_sort)).toBeTrue();
    });
});
