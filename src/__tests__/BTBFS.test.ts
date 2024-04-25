import bfs from "@code/BTBFS";
import { tree } from "./data/tree";
import { expect, test } from "bun:test";

test("bt bfs", function () {
    expect(bfs(tree, 45)).toEqual(true);
    expect(bfs(tree, 7)).toEqual(true);
    expect(bfs(tree, 69)).toEqual(false);
});
