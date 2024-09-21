import { dsa } from "./dsa";
import { Algorythm, DSA } from "./types";

export const theLastAlgorithmsCourseYoullNeedPart1: Algorythm[] = [
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
];

export const theLastAlgorithmsCourseYoullNeedPart2: Algorythm[] = [];

export const allAlgorithms: Algorythm[] = Object.keys(dsa) as (keyof DSA)[];
