import ArrayList from "@code/ArrayList";
import { test_list } from "./data/ListTest";
import { describe } from "bun:test";

describe("array-list", function () {
    test_list(() => new ArrayList(3));
});
