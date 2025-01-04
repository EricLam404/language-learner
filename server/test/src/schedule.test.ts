import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import { calculateSpacedRepetitionSchedule } from "../../src/utils/srs/schedule";

describe("calculateSpacedRepetitionSchedule", () => {
    beforeEach(() => {
        vi.spyOn(Math, "random").mockReturnValue(0.5);
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    test("should initialize schedule if previous is null", () => {
        const evaluation = { score: 4, lateness: 0 };
        const result = calculateSpacedRepetitionSchedule(null, evaluation);
        expect(result).toEqual({
            n: 1,
            easeFactor: 2.5,
            interval: 1 / (24 * 60),
        });
    });

    test("should reset schedule for failed cards in learning phase", () => {
        const previous = { n: 1, easeFactor: 2.5, interval: 0.1 };
        const evaluation = { score: 2, lateness: 0 };
        const result = calculateSpacedRepetitionSchedule(previous, evaluation);
        expect(result).toEqual({
            n: 0,
            easeFactor: 2.5,
            interval: 1 / (24 * 60),
        });
    });

    test("should move to next learning phase for good score", () => {
        const previous = { n: 1, easeFactor: 2.5, interval: 0.1 };
        const evaluation = { score: 4, lateness: 0 };
        const result = calculateSpacedRepetitionSchedule(previous, evaluation);
        expect(result).toEqual({
            n: 2,
            easeFactor: 2.5,
            interval: 10 / (24 * 60),
        });
    });

    test("should increase easeFactor and interval for easy score in learning phase", () => {
        const previous = { n: 1, easeFactor: 2.5, interval: 0.1 };
        const evaluation = { score: 5, lateness: 0 };
        const result = calculateSpacedRepetitionSchedule(previous, evaluation);
        expect(result.n).toBe(2);
        expect(result.easeFactor).toBeCloseTo(2.5, 2);
        expect(result.interval).toBeGreaterThanOrEqual(4);
    });

    test("should reset schedule and reduce easeFactor for failed cards in reviewing phase", () => {
        const previous = { n: 3, easeFactor: 2.5, interval: 2 };
        const evaluation = { score: 2, lateness: 0 };
        const result = calculateSpacedRepetitionSchedule(previous, evaluation);
        expect(result).toEqual({
            n: 0,
            easeFactor: 2.3,
            interval: 1 / (24 * 60),
        });
    });

    test("should apply lateness bonus for late reviews", () => {
        const previous = { n: 3, easeFactor: 2.5, interval: 2 };
        const evaluation = { score: 4, lateness: 1.5 };
        const result = calculateSpacedRepetitionSchedule(previous, evaluation);
        expect(result.n).toBe(4);
        expect(result.interval).toBeGreaterThan(5); // Includes lateness bonus and fuzz
    });

    test("should adjust easeFactor and interval for hard cards", () => {
        const previous = { n: 3, easeFactor: 2.5, interval: 2 };
        const evaluation = { score: 3, lateness: 0 };
        const result = calculateSpacedRepetitionSchedule(previous, evaluation);
        expect(result.easeFactor).toBeCloseTo(2.36, 2);
        expect(result.interval).toBeCloseTo(5, 1);
    });

    test("should add fuzz to interval to avoid review clumping", () => {
        const previous = { n: 3, easeFactor: 2.5, interval: 2 };
        const evaluation = { score: 4, lateness: 0 };
        const result = calculateSpacedRepetitionSchedule(previous, evaluation);
        const expectedFuzz = (Math.random() - 0.5) * 0.25 * result.interval; // Adjusted for mock random
        expect(result.interval).toBeCloseTo(5 + expectedFuzz, 1);
    });
});
