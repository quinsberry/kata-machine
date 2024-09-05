import MyMap from "@code/Map";
import { describe, expect, test } from "bun:test";

describe("Map", () => {
    test("get method retrieves correct value", function () {
        const map = new MyMap<string, number>();
        map.set("alpha", 1);
        map.set("beta", 2);
        expect(map.get("alpha")).toEqual(1);
        expect(map.get("beta")).toEqual(2);
        expect(map.get("gamma")).toBeUndefined();
    });

    test("set method adds and updates key-value pairs", function () {
        const map = new MyMap<string, number>();
        map.set("alpha", 1);
        expect(map.get("alpha")).toEqual(1);
        map.set("alpha", 2);
        expect(map.get("alpha")).toEqual(2);
    });

    test("delete method removes key-value pairs and returns deleted value", function () {
        const map = new MyMap<string, number>();
        map.set("alpha", 1);
        map.set("beta", 2);
        expect(map.delete("alpha")).toEqual(1);
        expect(map.get("alpha")).toBeUndefined();
        expect(map.size()).toEqual(1);
        expect(map.delete("gamma")).toBeUndefined();
    });

    test("size method returns correct number of key-value pairs", function () {
        const map = new MyMap<string, number>();
        expect(map.size()).toEqual(0);
        map.set("alpha", 1);
        expect(map.size()).toEqual(1);
        map.set("beta", 2);
        expect(map.size()).toEqual(2);
        map.delete("alpha");
        expect(map.size()).toEqual(1);
    });
});
