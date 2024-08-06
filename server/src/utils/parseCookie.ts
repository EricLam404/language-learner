// import { GraphQLError } from "graphql";

import { Request, Response, NextFunction } from "express";

export default function parseCookies(){
    return function parseCookies(req: Request, res: Response, next: NextFunction){
        if (!req.headers.cookie) {
            req.cookies = {};
            next();
            return;
        }

        const cookieObject: { [key: string]: string } = {};
        const cookies = req.headers.cookie.split('; ');

        for (let cookie of cookies) {
            const [name, value] = cookie.split('=');
            cookieObject[name] = parseJSONCookies(decodeURIComponent(value));
        }

        req.cookies = cookieObject;
        next();
    }
}

function parseJSONCookies(cookie: string){
    try {
        return JSON.parse(cookie);
    } catch {
        return cookie;
    }
}

// export default function parseCookies(cookieString: string) {
//     const cookieObject: { [key: string]: string } = {};
//     const cookies = cookieString.split('; ');

//     for (let cookie of cookies) {
//         const [name, value] = cookie.split('=');
//         cookieObject[name] = decodeURIComponent(value);
//     }

//     // throw new GraphQLError('User is not authenticated', {
//     //     extensions: {
//     //       code: 'UNAUTHENTICATED',
//     //       http: { status: 401 },
//     //     },
//     //   });

//     return cookieObject;
// }