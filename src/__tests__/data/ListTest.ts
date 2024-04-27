import { test, beforeEach, expect } from "bun:test";

export function test_list(createList: () => List<number>): void {
    let list: List<number>;

    beforeEach(() => {
        list = createList();
    });

    test("prepend", () => {
        list.prepend(1);
        expect(list.get(0)).toBe(1);
    });

    test("append", () => {
        list.append(1);
        expect(list.get(0)).toBe(1);
    });

    test("insertAt", () => {
        list.append(1);
        list.append(3);
        list.insertAt(2, 1);
        expect(list.get(1)).toBe(2);
    });

    test("remove", () => {
        list.append(1);
        list.remove(1);
        expect(list.get(0)).toBeUndefined();
    });

    test("removeAt", () => {
        list.append(1);
        list.append(2);
        list.removeAt(0);
        expect(list.get(0)).toBe(2);
        expect(list.length).toBe(1);
    });

    test("length", () => {
        list.append(1);
        list.append(2);
        expect(list.length).toBe(2);
    });

    test("insertAt with invalid index", () => {
        list.append(1);
        list.append(3);
        expect(() => list.insertAt(2, 3)).toThrow();
    });

    test("remove non-existing element", () => {
        list.append(1);
        expect(list.remove(2)).toBeUndefined();
    });

    test("removeAt with invalid index", () => {
        list.append(1);
        list.append(2);
        expect(list.removeAt(3)).toBeUndefined();
    });

    test("get with invalid index", () => {
        list.append(1);
        list.append(2);
        expect(list.get(3)).toBeUndefined();
    });
}
