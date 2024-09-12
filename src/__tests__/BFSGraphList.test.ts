import bfs from "@code/BFSGraphList";
import { circleList2 } from "./data/graph";
import { describe, expect, test } from "bun:test";

describe("BFSGraphList", function () {
    test("finds path in a simple graph", () => {
        expect(bfs(circleList2, 0, 6)).toEqual([0, 1, 4, 5, 6]);
    });

    test("returns null if no path exists", () => {
        expect(bfs(circleList2, 6, 0)).toEqual(null);
    });

    test("returns single node path if source is the same as needle", () => {
        expect(bfs(circleList2, 3, 3)).toEqual([3]);
    });

    test("handles graph with no edges", () => {
        const noEdgesGraph = [[]];
        expect(bfs(noEdgesGraph, 0, 0)).toEqual([0]);
        expect(bfs(noEdgesGraph, 0, 1)).toEqual(null);
    });
});
