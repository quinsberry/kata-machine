import insertion_sort from "@code/InsertionSort";
import { describe, expect, test } from "bun:test";
import { test_sort } from "./data/SortTest";
import { sortFasterThanExponential } from "./performance";

describe("InsertionSort", () => {
    test_sort(insertion_sort);

    test("Should be faster than O(n^2)", () => {
        expect(sortFasterThanExponential(insertion_sort)).toBeTrue();
    });
});