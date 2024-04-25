import ArrayList from "@code/ArrayList";
import { test_list } from "./data/ListTest";
import { test } from "bun:test";

test("array-list", function () {
    const list = new ArrayList(3);
    test_list(list);
});
