import SinglyLinkedList from "@code/SinglyLinkedList";
import { test_list } from "./data/ListTest";
import { describe } from "bun:test";

describe("SinglyLinkedList", function () {
    test_list(() => new SinglyLinkedList<number>());
});
