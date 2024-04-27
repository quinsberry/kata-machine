import LinkedList from "@code/DoublyLinkedList";
import { test_list } from "./data/ListTest";
import { describe } from "bun:test";

describe("DoublyLinkedList", function () {
    test_list(() => new LinkedList<number>());
});
