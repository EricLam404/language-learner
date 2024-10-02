// import { GraphQLError } from "graphql";

import { Request, Response, NextFunction } from "express";
import { GraphQLError } from "graphql";

export default function parseCookies() {
    return function parseCookies(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const tokenName = "sb-127-auth-token";
        if (!req.headers.cookie) {
            req.cookies = {};
            next();
            return;
        }

        const cookieObject: { [key: string]: string } = {};
        const cookies = req.headers.cookie.split("; ");

        for (let cookie of cookies) {
            let [name, value] = cookie.split("=");
            if (name === tokenName) {
                value = value.replace(/^base64-/, "");
                value = atob(value);
            }

            cookieObject[name] = parseJSONCookies(decodeURIComponent(value));
        }
        if (!cookieObject["sb-127-auth-token"]) {
            throw new GraphQLError("User is not authenticated", {
                extensions: {
                    code: "UNAUTHENTICATED",
                    http: { status: 401 },
                },
            });
        }

        req.cookies = cookieObject;
        next();
    };
}

function parseJSONCookies(cookie: string) {
    try {
        return JSON.parse(cookie);
    } catch {
        return cookie;
    }
}
