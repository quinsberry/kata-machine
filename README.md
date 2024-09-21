## Developed live on twitch

[ThePrimeagen](https://twitch.tv/ThePrimeagen)

## Naming

### Lig-Machine

Lengthy Instrumentation Generating Massive Anticompetitive Computational Help for Intermediate Coders // n9

### Ligmata

Literal Improvement Gaining Master and Tutelage on Algorithms Let's Intelligently Generate Multiple Algorithm Training Assessments // permdaddy

### Sugma Nuts

Studious Users Get Major Abilities. New Useful Training for Students

### Ligma Farts

Learn Intermediate Groundbreaking Massive Algorithms. Free Algorithm Research & Training System

### If you have a suggestion

make an issue and we will come up with the potential name.

### WARNING

I have just started to add algorithms, so the number of supported algorithms is limited at the moment, but will grow fairly quick.

### Supported Algorithm

-   Bubble Sort
-   Insertion Sort
-   Merge Sort
-   Quick Sort
-   Dijkstra's Shortest Path (Adjacency List)
-   Prim's Minimum Spanning Tree (Adjacency List)
-   Binary Search
-   Linear Search
-   Two Crystal Balls Problem
-   Maze Solver
-   Pre-Order Traversal (Binary Tree)
-   In-Order Traversal (Binary Tree)
-   Post-Order Traversal (Binary Tree)
-   Breadth-First Search (Binary Tree)
-   Compare Binary Trees
-   Depth-First Search (Binary Search Tree)
-   Depth-First Search (Adjacency List)
-   Breadth-First Search (Adjacency List)
-   Breadth-First Search (Adjacency Matrix)

### Supported Data Structures

-   Array list
-   Singly linked list
-   Doubly linked list
-   Ring Buffer
-   Queue
-   Stack
-   Trie
-   Map
-   MinHeap
-   LRU Cache

### How It Works

Make sure you have [Bun](https://bun.sh/) and bun installed.

clone the repo and install the dependencies

```bash
bun install
```

### 1. Using CLI

Run the `cli` command and choose the options

```bash
bun run cli
```

### 2. Manualy

edit the `ligma.config.ts` file

```typescript
export const config: LigmaConfig = {
    dsa: [
        "InsertionSort",
        "MergeSort",
        "Queue",
        "Stack",
        "QuickSort",
        "DijkstraList",
        "PrimsList",
        ...
    ],
}
```

create a day of katas, this will use the list in the `ligma.config.ts`.

```bash
bun generate
```

this will progressively create folders named

```
src/day1
src/day2
...
```

`bun generate` will also update the `tsconfig.json` to point the latest `day` folder via tspaths. This allows us to avoid updating anything for testing each day.

#### Testing

```
bun test
```

I have yet to create a testing strategy for next sets of algorithms, but we will get there when i cross that bridge.

### Help wanted

A simple way to specify test, thinking something like `tests.json` and `cat test.json 2> /dev/null` to specify the tests to run. tests.json wouldn't be committed.
