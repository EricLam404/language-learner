export const difficultyLevels: Record<number, string> = {
    1: "Beginner",
    2: "Intermediate",
    3: "Advanced",
};

export const DifficultyToNumber: Record<string, number> = Object.fromEntries(
    Object.entries(difficultyLevels).map((a) => a.reverse())
);

export const levels = Object.values(difficultyLevels);
