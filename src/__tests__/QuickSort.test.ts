import quick_sort from "@code/QuickSort";
import { describe } from "bun:test";
import { test_sort } from "./data/SortTest";

describe("QuickSort", function () {
    test_sort(quick_sort);
});
