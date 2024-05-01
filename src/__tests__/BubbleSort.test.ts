import bubble_sort from "@code/BubbleSort";
import { describe } from "bun:test";
import { test_sort } from "./data/SortTest";

describe("BubbleSort", () => {
    test_sort(bubble_sort);
});
