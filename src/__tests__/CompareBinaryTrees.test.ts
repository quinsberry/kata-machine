import compare from "@code/CompareBinaryTrees";
import { tree, tree2 } from "./data/tree";
import { expect, test } from "bun:test";

test("Compare Binary Trees", function () {
    expect(compare(tree, tree)).toEqual(true);
    expect(compare(tree, tree2)).toEqual(false);
});
