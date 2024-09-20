#!/usr/bin/env node
import { select } from "@inquirer/prompts";
import { generateAlgorithms } from "./utils/generateAlgorithms";
import { LigmaConfig } from "./utils/types";
import { allAlgorithms } from "./utils/dsa";

const Algorithms = {
    Part1: "1",
    Part2: "2",
    All: "all",
} as const;

const AlgorithmsConfigs: Record<Algorithms, LigmaConfig> = {
    [Algorithms.Part1]: {
        dsa: [
            "LinearSearchList",
            "BinarySearchList",
            "TwoCrystalBalls",
            "BubbleSort",
            "SinglyLinkedList",
            "DoublyLinkedList",
            "Queue",
            "Stack",
            "ArrayList",
            "RingBuffer",
            "MazeSolver",
            "QuickSort",
            "BTPreOrder",
            "BTPostOrder",
            "BTBFS",
            "DFSOnBST",
            "CompareBinaryTrees",
            "MinHeap",
            "Trie",
            "BFSGraphMatrix",
            "DFSGraphList",
            "DijkstraList",
            "Map",
            "LRU",
        ],
    },
    [Algorithms.Part2]: {
        dsa: [],
    },
    [Algorithms.All]: {
        dsa: allAlgorithms,
    },
} as const;

type Algorithms = (typeof Algorithms)[keyof typeof Algorithms];

async function run() {
    const answer = await select<Algorithms>({
        message: "What algorithms do you want to generate?",
        choices: [
            {
                value: Algorithms.Part1,
                short: "Part 1",
                name: "The last algorithms course you'll need Part 1",
            },
            {
                value: Algorithms.Part2,
                short: "Part 2",
                name: "The last algorithms course you'll need Part 2",
                disabled: true,
            },
            {
                value: Algorithms.All,
                name: "All",
            },
        ],
    });

    const config = AlgorithmsConfigs[answer];

    await generateAlgorithms(config);

    console.log("Done.");
}

run();
