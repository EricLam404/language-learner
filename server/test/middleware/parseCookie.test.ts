import { describe, test, expect, vi } from "vitest";
import { Request, Response, NextFunction } from "express";
import parseCookies from "../../src/utils/middleware/parseCookie";
import { authTokenName } from "../../src/utils/config/config";
import { GraphQLError } from "graphql";

const encodedToken = Buffer.from("testToken").toString("base64");

vi.mock("../../src/utils/config/config", () => ({
    authTokenName: "authToken",
    isProduction: false,
}));

describe("parseCookies middleware", () => {
    const next: NextFunction = vi.fn();

    test("should set an empty cookies object when no cookies are provided", () => {
        const req = { headers: {} } as Request;
        const res = {} as Response;

        parseCookies()(req, res, next);

        expect(req.cookies).toEqual({});
        expect(next).toHaveBeenCalled();
    });

    test("should parse simple cookies into an object", () => {
        const req = {
            headers: {
                cookie: `authToken=${encodedToken}; key=value; anotherKey=anotherValue`,
            },
        } as Request;
        const res = {} as Response;

        parseCookies()(req, res, next);

        expect(req.cookies).toEqual({
            key: "value",
            anotherKey: "anotherValue",

            authToken: "testToken",
        });
        expect(next).toHaveBeenCalled();
    });

    test("should decode and parse JSON cookies", () => {
        const req = {
            headers: {
                cookie: `authToken=${encodedToken}; key=${encodeURIComponent(
                    JSON.stringify({ test: 123 })
                )}`,
            },
        } as Request;
        const res = {} as Response;

        parseCookies()(req, res, next);

        expect(req.cookies).toEqual({
            authToken: "testToken",
            key: { test: 123 },
        });
        expect(next).toHaveBeenCalled();
    });

    test("should handle segmented cookies correctly", () => {
        const req = {
            headers: {
                cookie: `${authTokenName}.0=${encodedToken}; ${authTokenName}.1=${encodedToken}`,
            },
        } as Request;
        const res = {} as Response;

        parseCookies()(req, res, next);

        expect(req.cookies).toHaveProperty(authTokenName, "testTokentestToken");
        expect(next).toHaveBeenCalled();
    });

    test("should throw an error if introspection and auth token are missing in non-production mode", () => {
        const req = { headers: { cookie: "key=value" } } as Request;
        const res = {} as Response;

        expect(() => parseCookies()(req, res, next)).toThrowError(
            new GraphQLError("User is not authenticated", {
                extensions: {
                    code: "UNAUTHENTICATED",
                    http: { status: 401 },
                },
            })
        );
    });

    test("should decode and parse base64-encoded authToken", () => {
        const token = Buffer.from(
            JSON.stringify({ user: "testUser" }),
            "utf-8"
        ).toString("base64");
        const req = {
            headers: { cookie: `${authTokenName}=base64-${token}` },
        } as Request;
        const res = {} as Response;

        parseCookies()(req, res, next);

        expect(req.cookies).toHaveProperty(authTokenName, { user: "testUser" });
        expect(next).toHaveBeenCalled();
    });
});
