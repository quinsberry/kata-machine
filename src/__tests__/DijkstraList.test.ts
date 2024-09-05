import dijkstra_list from "@code/DijkstraList";
import { circleList1, circleList2, noPathList } from "./data/graph";
import { describe, expect, test } from "bun:test";

describe("dijkstra via adj list", () => {
    test("dijkstra_list graph with cycle", () => {
        expect(dijkstra_list(0, 6, circleList1)).toEqual([0, 1, 4, 5, 6]);
    });

    test("dijkstra_list another graph with cycle", () => {
        expect(dijkstra_list(0, 3, circleList2)).toEqual([0, 2, 3]);
    });

    test("dijkstra_list no path", () => {
        expect(dijkstra_list(0, 3, noPathList)).toEqual([]);
    });
});
