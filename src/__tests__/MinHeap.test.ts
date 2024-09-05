import MinHeap from "@code/MinHeap";
import { describe, expect, test } from "bun:test";

describe("MinHeap", function () {
    test("initialization", () => {
        const heap = new MinHeap();
        expect(heap.length).toEqual(0);
    });

    test("insertions", () => {
        const heap = new MinHeap();
        heap.insert(10);
        heap.insert(5);
        heap.insert(20);
        heap.insert(1);

        expect(heap.length).toEqual(4);
        expect(heap.delete()).toEqual(1);
        expect(heap.delete()).toEqual(5);
        expect(heap.delete()).toEqual(10);
        expect(heap.delete()).toEqual(20);
    });

    test("deletions", () => {
        const heap = new MinHeap();
        heap.insert(15);
        heap.insert(10);
        heap.insert(5);

        expect(heap.delete()).toEqual(5);
        expect(heap.delete()).toEqual(10);
        expect(heap.delete()).toEqual(15);
        expect(heap.delete()).toEqual(-1); // Deleting from an empty heap
    });

    test("heap property maintenance", () => {
        const heap = new MinHeap();

        expect(heap.length).toEqual(0);

        heap.insert(5);
        heap.insert(3);
        heap.insert(69);
        heap.insert(420);
        heap.insert(4);
        heap.insert(1);
        heap.insert(8);
        heap.insert(7);

        expect(heap.length).toEqual(8);
        expect(heap.delete()).toEqual(1);
        expect(heap.delete()).toEqual(3);
        expect(heap.delete()).toEqual(4);
        expect(heap.delete()).toEqual(5);
        expect(heap.length).toEqual(4);
        expect(heap.delete()).toEqual(7);
        expect(heap.delete()).toEqual(8);
        expect(heap.delete()).toEqual(69);
        expect(heap.delete()).toEqual(420);
        expect(heap.length).toEqual(0);
    });
});
