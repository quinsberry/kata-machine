import bfs from "@code/BTBFS";
import { tree } from "./data/tree";
import { describe, expect, test } from "bun:test";

describe("BTBFS", () => {
    test("returns true for a tree with one node when the needle is present", () => {
        const head: BinaryNode<number> = { value: 1, left: null, right: null };
        expect(bfs(head, 1)).toEqual(true);
    });

    test("returns false for a tree with one node when the needle is not present", () => {
        const head: BinaryNode<number> = { value: 2, left: null, right: null };
        expect(bfs(head, 1)).toEqual(false);
    });

    test("returns true for a tree with multiple nodes when the needle is present", () => {
        expect(bfs(tree, 45)).toEqual(true);
        expect(bfs(tree, 7)).toEqual(true);
    });

    test("returns false for a tree with multiple nodes when the needle is not present", () => {
        expect(bfs(tree, 69)).toEqual(false);
    });
});
