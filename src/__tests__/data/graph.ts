/**
 * Structure:
 *
 *      (1) ---> (4) ---> (5)
 *     /  |       |       /|
 *   (0)  | ------|------- |
 *     \  |/      |        |
 *      (2) ---> (3) ---> (6)
 */
export const circleList1: WeightedAdjacencyList = [];
circleList1[0] = [
    { to: 1, weight: 3 },
    { to: 2, weight: 1 },
];
circleList1[1] = [
    { to: 0, weight: 3 },
    { to: 2, weight: 4 },
    { to: 4, weight: 1 },
];
circleList1[2] = [
    { to: 1, weight: 4 },
    { to: 3, weight: 7 },
    { to: 0, weight: 1 },
];
circleList1[3] = [
    { to: 2, weight: 7 },
    { to: 4, weight: 5 },
    { to: 6, weight: 1 },
];
circleList1[4] = [
    { to: 1, weight: 1 },
    { to: 3, weight: 5 },
    { to: 5, weight: 2 },
];
circleList1[5] = [
    { to: 6, weight: 1 },
    { to: 4, weight: 2 },
    { to: 2, weight: 18 },
];
circleList1[6] = [
    { to: 3, weight: 1 },
    { to: 5, weight: 1 },
];

/**
 * Structure:
 *
 *      > (1) <--> (4) ----> (5)
 *     /          |        / |
 *   (0)    ------|--------  |
 *     \   v      v         v
 *      > (2) --> (3) <---- (6)
 */
export const circleList2: WeightedAdjacencyList = [];
circleList2[0] = [
    { to: 1, weight: 3 },
    { to: 2, weight: 1 },
];
circleList2[1] = [{ to: 4, weight: 1 }];
circleList2[2] = [{ to: 3, weight: 7 }];
circleList2[3] = [];
circleList2[4] = [
    { to: 1, weight: 1 },
    { to: 3, weight: 5 },
    { to: 5, weight: 2 },
];
circleList2[5] = [
    { to: 2, weight: 18 },
    { to: 6, weight: 1 },
];
circleList2[6] = [{ to: 3, weight: 1 }];

/**
 * Structure:
 *
 *      (0) --> (2)     (1) --> (3)
 *               |
 *               v
 *              (4)     (5)
 */
export const noPathList: WeightedAdjacencyList = [];

noPathList[0] = [{ to: 2, weight: 1 }];
noPathList[1] = [{ to: 3, weight: 1 }];
noPathList[2] = [{ to: 4, weight: 1 }];
noPathList[3] = [];
noPathList[4] = [];
noPathList[5] = [];

//     >(1)<--->(4) ---->(5)
//    /          |       /|
// (0)     ------|------- |
//    \   v      v        v
//     >(2) --> (3) <----(6)
export const matrix2: WeightedAdjacencyMatrix = [
    [0, 3, 1, 0, 0, 0, 0], // 0
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 7, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 5, 0, 2, 0],
    [0, 0, 18, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 1],
];
