import post_order_search from "@code/BTPostOrder";
import { tree } from "./data/tree";
import { describe, expect, test } from "bun:test";

describe("BTPostOrder", () => {
    test("returns a single-element array for a tree with one node", () => {
        const head = { value: 1, left: null, right: null };
        expect(post_order_search(head)).toEqual([1]);
    });

    test("returns the correct order for a tree with multiple nodes", () => {
        expect(post_order_search(tree)).toEqual([
            7, 5, 15, 10, 29, 45, 30, 100, 50, 20,
        ]);
    });
});
