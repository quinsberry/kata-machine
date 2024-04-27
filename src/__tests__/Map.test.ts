import MyMap from "@code/Map";
import { expect, test } from "bun:test";

test("Map", function () {
    const map = new MyMap<string, number>();
    map.set("foo", 55);
    expect(map.size()).toEqual(1);
    map.set("fool", 75);
    expect(map.size()).toEqual(2);
    map.set("foolish", 105);
    expect(map.size()).toEqual(3);
    map.set("bar", 69);
    expect(map.size()).toEqual(4);

    expect(map.get("bar")).toEqual(69);
    expect(map.get("blaz")).toBeUndefined();

    map.delete("barblabr");
    expect(map.size()).toEqual(4);

    map.delete("bar");
    expect(map.size()).toEqual(3);
    expect(map.get("bar")).toBeUndefined();
});
