import dfs from "@code/DFSOnBST";
import { tree } from "./data/tree";
import { describe, expect, test } from "bun:test";

describe("DFSOnBST", function () {
    test("should return true when target value is found in the tree", () => {
        expect(dfs(tree, 45)).toEqual(true);
    });

    test("should return true when target value is found in the tree", () => {
        expect(dfs(tree, 7)).toEqual(true);
    });

    test("should return false when target value is not found in the tree", () => {
        expect(dfs(tree, 69)).toEqual(false);
    });
});
