import in_order_search from "@code/BTInOrder";
import { tree } from "./data/tree";
import { describe, expect, test } from "bun:test";

describe("BTInOrder", () => {
    test("returns a single-element array for a tree with one node", () => {
        const head = { value: 1, left: null, right: null };
        expect(in_order_search(head)).toEqual([1]);
    });

    test("returns the correct order for a tree with multiple nodes", () => {
        expect(in_order_search(tree)).toEqual([
            5, 7, 10, 15, 20, 29, 30, 45, 50, 100,
        ]);
    });
});
