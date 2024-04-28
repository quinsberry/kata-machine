import RingBuffer from "@code/RingBuffer";
import { describe, expect, test, beforeEach } from "bun:test";

describe("RingBuffer", () => {
    let buffer: RingBuffer<number>;

    beforeEach(() => {
        buffer = new RingBuffer<number>(3);
    });

    test("push adds items to the buffer", () => {
        buffer.push(1);
        buffer.push(2);
        expect(buffer.length).toBe(2);
    });

    test("push overwrites the oldest item when the buffer is full", () => {
        buffer.push(1);
        buffer.push(2);
        buffer.push(3);
        expect(buffer.get(0)).toBe(1);
        buffer.push(4);
        expect(buffer.get(0)).toBe(2);
        expect(buffer.length).toBe(3);
    });

    test("get returns the item at the given index", () => {
        buffer.push(1);
        buffer.push(2);
        buffer.push(3);
        expect(buffer.get(1)).toBe(2);
    });

    test("get returns undefined when the index is out of bounds", () => {
        buffer.push(1);
        buffer.push(2);
        buffer.push(3);
        expect(buffer.get(3)).toBeUndefined();
    });

    test("pop removes and returns the oldest item", () => {
        buffer.push(1);
        buffer.push(2);
        buffer.push(3);
        expect(buffer.pop()).toBe(1);
        expect(buffer.length).toBe(2);
    });

    test("pop returns undefined when the buffer is empty", () => {
        expect(buffer.pop()).toBeUndefined();
    });
});
