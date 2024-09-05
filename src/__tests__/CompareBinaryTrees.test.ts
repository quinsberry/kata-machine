import compare from "@code/CompareBinaryTrees";
import { tree, tree2 } from "./data/tree";
import { describe, expect, test } from "bun:test";

describe("CompareBinaryTrees", () => {
    test("returns true for two empty trees", () => {
        expect(compare(null, null)).toEqual(true);
    });

    test("returns false for one empty tree and one non-empty tree", () => {
        const head: BinaryNode<number> = { value: 1, left: null, right: null };
        expect(compare(head, null)).toEqual(false);
        expect(compare(null, head)).toEqual(false);
    });

    test("returns true for two identical trees", () => {
        expect(compare(tree, tree)).toEqual(true);
    });

    test("returns false for two trees with different structures and values", () => {
        expect(compare(tree, tree2)).toEqual(false);
    });
});
