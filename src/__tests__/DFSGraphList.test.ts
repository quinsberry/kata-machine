import dfs from "@code/DFSGraphList";
import { circleList2 } from "./data/graph";
import { describe, expect, test } from "bun:test";

describe("DFSGraphList", () => {
    test("finds path in a simple graph", () => {
        expect(dfs(circleList2, 0, 6)).toEqual([0, 1, 4, 5, 6]);
    });

    test("returns null if no path exists", () => {
        expect(dfs(circleList2, 6, 0)).toEqual(null);
    });

    test("returns single node path if source is the same as needle", () => {
        expect(dfs(circleList2, 3, 3)).toEqual([3]);
    });

    test("handles graph with no edges", () => {
        const noEdgesGraph = [[]];
        expect(dfs(noEdgesGraph, 0, 0)).toEqual([0]);
        expect(dfs(noEdgesGraph, 0, 1)).toEqual(null);
    });
});
