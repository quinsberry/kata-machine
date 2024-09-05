import bfs from "@code/BFSGraphList";
import { list2 } from "./data/graph";
import { describe, expect, test } from "bun:test";

describe("BFSGraphList", function () {
    test("graph with no path", function () {
        const graph = [
            [{ to: 1, weight: 1 }],
            [{ to: 2, weight: 1 }],
            [{ to: 3, weight: 1 }],
            [],
        ];

        expect(bfs(graph, 0, 3)).toEqual([0, 1, 2, 3]);
        expect(bfs(graph, 0, 4)).toEqual(null);
    });

    test("graph with multiple paths", function () {
        expect(bfs(list2, 0, 6)).toEqual([0, 1, 4, 5, 6]);
        expect(bfs(list2, 6, 0)).toEqual(null);
    });

    test("graph with cycles", function () {
        const graph = [
            [{ to: 1, weight: 1 }],
            [{ to: 2, weight: 1 }],
            [{ to: 0, weight: 1 }],
            [{ to: 2, weight: 1 }],
        ];
        expect(bfs(graph, 0, 2)).toEqual([0, 1, 2]);
    });
});
