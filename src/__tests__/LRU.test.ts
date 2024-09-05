import LRU from "@code/LRU";
import { describe, expect, test } from "bun:test";

describe("LRU", () => {
    test("LRU Empty Cache", () => {
        const lru = new LRU<string, number>(2) as ILRU<string, number>;
        expect(lru.get("nonexistent")).toBeUndefined();
    });

    test("LRU Update and Get", () => {
        const lru = new LRU<string, number>(2) as ILRU<string, number>;

        lru.update("foo", 1);
        expect(lru.get("foo")).toEqual(1);

        lru.update("bar", 2);
        expect(lru.get("bar")).toEqual(2);
        expect(lru.get("foo")).toEqual(1);
    });

    test("LRU Capacity", () => {
        const lru = new LRU<string, number>(2) as ILRU<string, number>;

        lru.update("foo", 1);
        lru.update("bar", 2);
        lru.update("baz", 3);

        expect(lru.get("foo")).toBeUndefined();
        expect(lru.get("bar")).toEqual(2);
        expect(lru.get("baz")).toEqual(3);
    });

    test("LRU Order", () => {
        const lru = new LRU<string, number>(2) as ILRU<string, number>;

        lru.update("foo", 1);
        lru.update("bar", 2);

        // Access "foo" to make it most recently used
        expect(lru.get("foo")).toEqual(1);

        // Add a new item, which should evict "bar"
        lru.update("baz", 3);

        expect(lru.get("bar")).toBeUndefined();
        expect(lru.get("foo")).toEqual(1);
        expect(lru.get("baz")).toEqual(3);
    });

    test("LRU Overwrite", () => {
        const lru = new LRU<string, number>(2) as ILRU<string, number>;

        lru.update("foo", 1);
        expect(lru.get("foo")).toEqual(1);

        lru.update("foo", 2);
        expect(lru.get("foo")).toEqual(2);
    });

    test("LRU Single Item Capacity", () => {
        const lru = new LRU<string, number>(1) as ILRU<string, number>;

        lru.update("foo", 1);
        expect(lru.get("foo")).toEqual(1);

        lru.update("bar", 2);
        expect(lru.get("foo")).toBeUndefined();
        expect(lru.get("bar")).toEqual(2);
    });

    test("LRU Non-Existent Key", () => {
        const lru = new LRU<string, number>(2) as ILRU<string, number>;

        lru.update("foo", 1);
        expect(lru.get("bar")).toBeUndefined();
    });

    test("LRU Large Capacity", () => {
        const lru = new LRU<string, number>(1000) as ILRU<string, number>;

        for (let i = 0; i < 1000; i++) {
            lru.update(`key${i}`, i);
        }

        for (let i = 0; i < 1000; i++) {
            expect(lru.get(`key${i}`)).toEqual(i);
        }

        lru.update("newKey", 1001);
        expect(lru.get("newKey")).toEqual(1001);
        expect(lru.get("key0")).toBeUndefined(); // The first key should be evicted
    });
});
