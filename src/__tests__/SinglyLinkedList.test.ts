import SinglyLinkedList from "@code/SinglyLinkedList";
import { test_list } from "./data/ListTest";
import { test } from "bun:test";

test("linked-list", function () {
    const list = new SinglyLinkedList<number>();
    test_list(list);
});
