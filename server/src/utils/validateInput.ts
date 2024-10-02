import { GraphQLError } from "graphql";

export function hasAtLeastOneInput(obj?: { [s: string]: any } | null) {
    if (!obj) return false;
    return Object.values(obj).some((value) => {
        if (value !== null && value !== undefined) {
            if (Array.isArray(value) && value.length > 0) {
                return true;
            }
            return typeof value === "string" ? value.trim() !== "" : true;
        }
        return false;
    });
}

export function validateInput(obj?: { [s: string]: any } | null) {
    if(!hasAtLeastOneInput(obj) || obj === null || obj === undefined) {
        throw new GraphQLError("Need at least one field to update", {
            extensions: {
                code: "STORY_UPDATE_FAILED",
            },
        });
    }
}