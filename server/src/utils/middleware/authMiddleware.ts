import { Request, Response, NextFunction } from "express";
import { GraphQLError } from "graphql";

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        throw new GraphQLError("Authorization header missing", {
            extensions: {
                code: "UNAUTHENTICATED",
                http: { status: 401 },
            },
        });
    }

    const tokenParts = authHeader.split(" ");

    if (tokenParts[0] !== "Bearer" || tokenParts.length !== 2) {
        throw new GraphQLError("Invalid Authorization format", {
            extensions: {
                code: "UNAUTHENTICATED",
                http: { status: 400 },
            },
        });
    }
    next();
};
