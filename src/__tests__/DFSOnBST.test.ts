import dfs from "@code/DFSOnBST";
import { tree } from "./data/tree";
import { expect, test } from "bun:test";

test("DFS on BST", function () {
    expect(dfs(tree, 45)).toEqual(true);
    expect(dfs(tree, 7)).toEqual(true);
    expect(dfs(tree, 69)).toEqual(false);
});
