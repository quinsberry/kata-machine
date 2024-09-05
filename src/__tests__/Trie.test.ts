import Trie from "@code/Trie";
import { describe, expect, test } from "bun:test";

describe("Trie", function () {
    test("initialization", () => {
        const trie = new Trie();
        expect(trie).toBeInstanceOf(Trie);
    });

    test("insertions", () => {
        const trie = new Trie();
        trie.insert("apple");
        trie.insert("app");
        trie.insert("apricot");

        expect(trie.find("app")).toEqual(["app", "apple"]);
        expect(trie.find("apr")).toEqual(["apricot"]);
        expect(trie.find("a").sort()).toEqual(["app", "apple", "apricot"]);
    });

    test("deletions", () => {
        const trie = new Trie();
        trie.insert("apple");
        trie.insert("app");
        trie.insert("apricot");

        trie.delete("app");
        expect(trie.find("app")).toEqual(["apple"]);
        expect(trie.find("apr")).toEqual(["apricot"]);
        expect(trie.find("a").sort()).toEqual(["apple", "apricot"]);

        trie.delete("apple");
        expect(trie.find("app")).toEqual([]);
        expect(trie.find("a")).toEqual(["apricot"]);
    });

    test("find with partial match", () => {
        const trie = new Trie();
        trie.insert("apple");
        trie.insert("app");
        trie.insert("apricot");
        trie.insert("banana");

        expect(trie.find("app")).toEqual(["app", "apple"]);
        expect(trie.find("apr")).toEqual(["apricot"]);
        expect(trie.find("ban")).toEqual(["banana"]);
        expect(trie.find("b")).toEqual(["banana"]);
        expect(trie.find("z")).toEqual([]);
    });
});
