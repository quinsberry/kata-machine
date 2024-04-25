import LinkedList from "@code/DoublyLinkedList";
import { test_list } from "./data/ListTest";
import { test } from "bun:test";

test("DoublyLinkedList", function () {
    const list = new LinkedList<number>();
    test_list(list);
});
