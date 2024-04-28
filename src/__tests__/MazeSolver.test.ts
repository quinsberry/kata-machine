import maze_solver from "@code/MazeSolver";
import { describe, expect, test } from "bun:test";

describe("MazeSolver", () => {
    test("it finds the correct path in a maze", () => {
        const maze = [
            "xxxxxxxxxx x",
            "x        x x",
            "x        x x",
            "x xxxxxxxx x",
            "x          x",
            "x xxxxxxxxxx",
        ];
        const start = { x: 10, y: 0 };
        const end = { x: 1, y: 5 };
        const path = maze_solver(maze, "x", start, end);
        expect(path).toEqual([
            { x: 10, y: 0 },
            { x: 10, y: 1 },
            { x: 10, y: 2 },
            { x: 10, y: 3 },
            { x: 10, y: 4 },
            { x: 9, y: 4 },
            { x: 8, y: 4 },
            { x: 7, y: 4 },
            { x: 6, y: 4 },
            { x: 5, y: 4 },
            { x: 4, y: 4 },
            { x: 3, y: 4 },
            { x: 2, y: 4 },
            { x: 1, y: 4 },
            { x: 1, y: 5 },
        ]);
    });

    test("it returns an empty path when there is no solution", () => {
        const maze = [".....", ".xxx.", "xx.x.", ".x..x", "....."];
        const start = { x: 0, y: 0 };
        const end = { x: 4, y: 4 };
        const path = maze_solver(maze, "x", start, end);
        expect(path).toEqual([]);
    });

    test("it returns a path of length 1 when start and end are the same", () => {
        const maze = ["..."];
        const start = { x: 1, y: 0 };
        const end = { x: 1, y: 0 };
        const path = maze_solver(maze, "x", start, end);
        expect(path).toEqual([{ x: 1, y: 0 }]);
    });
    
    test("it returns an empty path when start is out of bounds", () => {
        const maze = ["..."];
        const start = { x: 3, y: 0 };
        const end = { x: 0, y: 0 };
        const path = maze_solver(maze, "x", start, end);
        expect(path).toEqual([]);
    });
    
    test("it returns an empty path when end is out of bounds", () => {
        const maze = ["..."];
        const start = { x: 0, y: 0 };
        const end = { x: 3, y: 0 };
        const path = maze_solver(maze, "x", start, end);
        expect(path).toEqual([]);
    });
    
    test("it returns an empty path when start is on a wall", () => {
        const maze = ["x.."];
        const start = { x: 0, y: 0 };
        const end = { x: 2, y: 0 };
        const path = maze_solver(maze, "x", start, end);
        expect(path).toEqual([]);
    });
    
    test("it returns an empty path when end is on a wall", () => {
        const maze = ["..x"];
        const start = { x: 0, y: 0 };
        const end = { x: 2, y: 0 };
        const path = maze_solver(maze, "x", start, end);
        expect(path).toEqual([]);
    });
});
