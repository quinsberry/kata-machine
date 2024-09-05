import bfs from "@code/BFSGraphMatrix";
import { matrix2 } from "./data/graph";
import { describe, expect, test } from "bun:test";

describe("BFSGraphMatrix", function () {
    const graph2: WeightedAdjacencyMatrix = [
        [0, 1, 0, 0],
        [1, 0, 0, 0],
        [0, 0, 0, 1],
        [0, 0, 1, 0],
    ];

    const graph3: WeightedAdjacencyMatrix = [[0]];

    const graph4: WeightedAdjacencyMatrix = [
        [0, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
    ];

    const graph5: WeightedAdjacencyMatrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];

    test("matrix2 path exists", function () {
        expect(bfs(matrix2, 0, 6)).toEqual([0, 1, 4, 5, 6]);
    });

    test("matrix2 no path", function () {
        expect(bfs(matrix2, 6, 0)).toEqual(null);
    });

    test("graph2 no path", function () {
        expect(bfs(graph2, 0, 3)).toEqual(null);
    });

    test("graph3 single node", function () {
        expect(bfs(graph3, 0, 0)).toEqual([0]);
    });

    test("graph4 multiple paths", function () {
        expect(bfs(graph4, 0, 3)).toEqual([0, 1, 3]);
    });

    test("graph5 disconnected graph", function () {
        expect(bfs(graph5, 0, 2)).toEqual(null);
    });
});
