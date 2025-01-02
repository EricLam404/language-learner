import { describe, test, expect, vi } from "vitest";
import { authMiddleware } from "../../src/utils/middleware/auth";
import { Request, Response } from "express";
import { GraphQLError } from "graphql";

describe("authMiddleware", () => {
    const createMockReq = (headers = {}) =>
        ({
            headers,
        } as Partial<Request> as Request);

    const createMockRes = () => ({} as Partial<Response> as Response);

    const createMockNext = () => vi.fn();

    test("should throw error when Authorization header is missing", () => {
        const req = createMockReq();
        const res = createMockRes();
        const next = createMockNext();

        expect(() => authMiddleware(req, res, next)).toThrowError(
            new GraphQLError("Authorization header missing", {
                extensions: {
                    code: "UNAUTHENTICATED",
                    http: { status: 401 },
                },
            })
        );

        expect(next).not.toHaveBeenCalled();
    });

    test("should throw error when Authorization header format is invalid", () => {
        const req = createMockReq({ authorization: "InvalidToken" });
        const res = createMockRes();
        const next = createMockNext();

        expect(() => authMiddleware(req, res, next)).toThrowError(
            new GraphQLError("Invalid Authorization format", {
                extensions: {
                    code: "UNAUTHENTICATED",
                    http: { status: 400 },
                },
            })
        );

        expect(next).not.toHaveBeenCalled();
    });

    test("should throw error when Authorization header is missing Bearer", () => {
        const req = createMockReq({ authorization: "Token abc123" });
        const res = createMockRes();
        const next = createMockNext();

        expect(() => authMiddleware(req, res, next)).toThrowError(
            new GraphQLError("Invalid Authorization format", {
                extensions: {
                    code: "UNAUTHENTICATED",
                    http: { status: 400 },
                },
            })
        );

        expect(next).not.toHaveBeenCalled();
    });

    test("should call next() when Authorization header is valid", () => {
        const req = createMockReq({ authorization: "Bearer valid-token" });
        const res = createMockRes();
        const next = createMockNext();

        authMiddleware(req, res, next);

        expect(next).toHaveBeenCalledOnce();
    });
});
