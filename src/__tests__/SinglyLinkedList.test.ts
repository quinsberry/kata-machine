import SinglyLinkedList from "@code/SinglyLinkedList";
import { test_list } from "./data/ListTest";
import { describe } from "bun:test";

describe("linked-list", function () {
    test_list(() => new SinglyLinkedList<number>());
});
