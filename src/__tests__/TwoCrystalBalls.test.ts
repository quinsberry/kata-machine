import two_crystal_balls from "@code/TwoCrystalBalls";
import { describe, expect, test } from "bun:test";

describe('TwoCrystalBalls', () => {
    test('returns -1 when no ball breaks', () => {
        expect(two_crystal_balls([false, false, false, false, false])).toBe(-1);
    });

    test('returns the index of the first break', () => {
        expect(two_crystal_balls([false, false, true, false, false])).toBe(2);
    });

    test('returns the index of the first break when it is at the beginning', () => {
        expect(two_crystal_balls([true, true, true, true, true])).toBe(0);
    });

    test('returns the index of the first break when it is at the end', () => {
        expect(two_crystal_balls([false, false, false, false, true])).toBe(4);
    });

    test('returns -1 when array is empty', () => {
        expect(two_crystal_balls([])).toBe(-1);
    });

    test('returns the index of the first break in array of length 1', () => {
        expect(two_crystal_balls([true])).toBe(0);
    });

    test('returns -1 if no break in array of length 1', () => {
        expect(two_crystal_balls([false])).toBe(-1);
    });

    test('returns the index of the first break when it is at the jump point', () => {
        expect(two_crystal_balls([false, false, false, true, false, false, false, false, false, false])).toBe(3);
    });
});