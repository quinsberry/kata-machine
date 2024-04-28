import Queue from "@code/Queue";
import { describe, expect, test } from "bun:test";

describe("Queue", () => {
    test("enqueue adds items to the queue", () => {
        const queue = new Queue<number>();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.length).toBe(2);
    });

    test("deque removes items from the queue", () => {
        const queue = new Queue<number>();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.deque()).toBe(1);
        expect(queue.length).toBe(1);
    });

    test("deque returns undefined when called on an empty queue", () => {
        const queue = new Queue<number>();
        expect(queue.deque()).toBeUndefined();
    });

    test("peek returns the first item without removing it", () => {
        const queue = new Queue<number>();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.peek()).toBe(1);
        expect(queue.length).toBe(2);
    });

    test("peek returns undefined when called on an empty queue", () => {
        const queue = new Queue<number>();
        expect(queue.peek()).toBeUndefined();
    });

    test("length returns the number of items in the queue", () => {
        const queue = new Queue<number>();
        expect(queue.length).toBe(0);
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.length).toBe(2);
        queue.deque();
        expect(queue.length).toBe(1);
    });
});
