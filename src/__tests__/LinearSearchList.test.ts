import linear_fn from "@code/LinearSearchList";
import { describe, expect, test } from "bun:test";
import { searchFasterThanLinearithmic } from "./performance";

describe("LinearSearch", function () {
    test("finds element in the middle of the array", () => {
        expect(linear_fn([1, 2, 3, 4, 5], 3)).toBeTrue();
    });

    test("finds element at the beginning of the array", () => {
        expect(linear_fn([1, 2, 3, 4, 5], 1)).toBeTrue();
    });

    test("finds element at the end of the array", () => {
        expect(linear_fn([1, 2, 3, 4, 5], 5)).toBeTrue();
    });

    test("returns false if element is not in the array", () => {
        expect(linear_fn([1, 2, 3, 4, 5], 6)).toBeFalse();
    });

    test("returns false if array is empty", () => {
        expect(linear_fn([], 1)).toBeFalse();
    });

    test("finds element in array of length 1", () => {
        expect(linear_fn([1], 1)).toBeTrue();
    });

    test("returns false if element is not in array of length 1", () => {
        expect(linear_fn([1], 2)).toBeFalse();
    });

    test("should search faster than O(n log n)", () => {
        expect(searchFasterThanLinearithmic(linear_fn)).toBeTrue();
    });
});
