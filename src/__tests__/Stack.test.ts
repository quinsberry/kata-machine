import Stack from "@code/Stack";
import { describe, expect, test } from "bun:test";

describe("Stack", () => {
    test("push adds items to the stack", () => {
        const stack = new Stack<number>();
        stack.push(1);
        stack.push(2);
        expect(stack.length).toBe(2);
    });

    test("pop removes items from the stack", () => {
        const stack = new Stack<number>();
        stack.push(1);
        stack.push(2);
        expect(stack.pop()).toBe(2);
        expect(stack.length).toBe(1);
    });

    test("pop returns undefined when called on an empty stack", () => {
        const stack = new Stack<number>();
        expect(stack.pop()).toBeUndefined();
        stack.push(1)
        expect(stack.pop()).toBe(1);
        expect(stack.pop()).toBeUndefined();
        expect(stack.pop()).toBeUndefined();
    });

    test("peek returns the top item without removing it", () => {
        const stack = new Stack<number>();
        stack.push(1);
        stack.push(2);
        expect(stack.peek()).toBe(2);
        expect(stack.length).toBe(2);
    });

    test("peek returns undefined when called on an empty stack", () => {
        const stack = new Stack<number>();
        expect(stack.peek()).toBeUndefined();
    });

    test("length returns the number of items in the stack", () => {
        const stack = new Stack<number>();
        expect(stack.length).toBe(0);
        stack.push(1);
        stack.push(2);
        expect(stack.length).toBe(2);
        stack.pop();
        expect(stack.length).toBe(1);
        stack.pop();
        expect(stack.length).toBe(0);
        stack.pop();
        expect(stack.length).toBe(0);
    });
});
