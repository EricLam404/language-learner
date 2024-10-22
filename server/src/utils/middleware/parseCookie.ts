// import { GraphQLError } from "graphql";

import { Request, Response, NextFunction } from "express";
import { GraphQLError } from "graphql";
import { authTokenName, isProduction } from "../config/config";

export default function parseCookies() {
    return function parseCookies(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        if (!req.headers.cookie) {
            req.cookies = {};
            next();
            return;
        }

        const cookieObject: { [key: string]: string } = {};
        const cookies = req.headers.cookie.split("; ");

        const tokenSegments: { [key: string]: string[] } = {};
        for (let cookie of cookies) {
            let [name, value] = cookie.split("=");
            const segmentMatch = name.match(
                new RegExp(`^(${authTokenName})\.(\\d+)$`)
            );
            if (segmentMatch) {
                const [, baseName, index] = segmentMatch;

                if (!tokenSegments[baseName]) {
                    tokenSegments[baseName] = [];
                }

                tokenSegments[baseName][Number(index)] =
                    decodeURIComponent(value);
            } else if (name === authTokenName) {
                value = decodeURIComponent(value.replace(/^base64-/, ""));
                cookieObject[name] = parseJSONCookies(value);
            } else {
                cookieObject[name] = parseJSONCookies(
                    decodeURIComponent(value)
                );
            }
        }

        for (const [baseName, segments] of Object.entries(tokenSegments)) {
            if (segments.length > 0) {
                const concatenatedToken = segments.join("");
                cookieObject[baseName] = parseJSONCookies(concatenatedToken);
            }
        }

        if (
            !isProduction &&
            !cookieObject["introspection"] &&
            !cookieObject[authTokenName]
        ) {
            throw new GraphQLError("User is not authenticated", {
                extensions: {
                    code: "UNAUTHENTICATED",
                    http: { status: 401 },
                },
            });
        }
        if (cookieObject[authTokenName]) {
            let value = cookieObject[authTokenName].replace(/^base64-/, "");
            value = Buffer.from(value, 'base64').toString('utf-8');
            cookieObject[authTokenName] = parseJSONCookies(value);
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
