import pre_order_search from "@code/BTPreOrder";
import { tree } from "./data/tree";
import { describe, expect, test } from "bun:test";

describe("BTPreOrder", () => {
    test("returns a single-element array for a tree with one node", () => {
        const head = { value: 1, left: null, right: null };
        expect(pre_order_search(head)).toEqual([1]);
    });

    test("returns the correct order for a tree with multiple nodes", () => {
        expect(pre_order_search(tree)).toEqual([
            20, 10, 5, 7, 15, 50, 30, 29, 45, 100,
        ]);
    });
});
