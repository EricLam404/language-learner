"use client";
import { URI } from "@/utils/config/config";
// ^ this file needs the "use client" pragma

import { ApolloLink, HttpLink, concat } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
    ApolloNextAppProvider,
    ApolloClient,
    InMemoryCache,
    SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";
import { getCookie, getCookies } from "cookies-next";

// have a function to create a client for you
function makeClient() {
    const authLink = setContext((_, { headers }) => {
        try {
            // get the authentication token from local storage if it exists
            const cookies = getCookies();
            const authTokenName = process.env.NEXT_PUBLIC_AUTH_TOKEN_NAME!;
            // const cookie = getCookie(process.env.NEXT_PUBLIC_AUTH_TOKEN_NAME!)!;
            // let value = cookie.replace(/^base64-/, "");
            // value = Buffer.from(value, "base64").toString("utf-8");
            // const token = JSON.parse(value);
            const tokenSegments: { [key: string]: string[] } = {};
            for (let cookie in cookies) {
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
                }
            }
            let token;
            if (tokenSegments[authTokenName]) {
                const concatenatedToken = tokenSegments[authTokenName].join("");
                const value = Buffer.from(concatenatedToken, "base64").toString(
                    "utf-8"
                );
                token = JSON.parse(value);
            } else {
                const cookie = getCookie(
                    process.env.NEXT_PUBLIC_AUTH_TOKEN_NAME!
                )!;
                let value = cookie.replace(/^base64-/, "");
                value = Buffer.from(value, "base64").toString("utf-8");
                token = JSON.parse(value);
            }
            // return the headers to the context so httpLink can read them
            return {
                headers: {
                    ...headers,
                    authorization: token?.access_token
                        ? `Bearer ${token.access_token}`
                        : "",
                },
            };
        } catch (e) {
            console.error(e);
            return {
                headers: {
                    ...headers,
                },
            };
        }
    });
    const httpLink = new HttpLink({
        // this needs to be an absolute url, as relative urls cannot be used in SSR
        uri: URI,
        credentials: "include",
        // you can disable result caching here if you want to
        // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
        fetchOptions: { cache: "no-store" },
        // you can override the default `fetchOptions` on a per query basis
        // via the `context` property on the options passed as a second argument
        // to an Apollo Client data fetching hook, e.g.:
        // const { data } = useSuspenseQuery(MY_QUERY, { context: { fetchOptions: { cache: "force-cache" }}});
    });

    // use the `ApolloClient` from "@apollo/experimental-nextjs-app-support"
    return new ApolloClient({
        // use the `InMemoryCache` from "@apollo/experimental-nextjs-app-support"
        cache: new InMemoryCache(),
        link: authLink.concat(httpLink),
    });
}

// you need to create a component to wrap your app in
export function ApolloWrapper({ children }: React.PropsWithChildren) {
    return (
        <ApolloNextAppProvider makeClient={makeClient}>
            {children}
        </ApolloNextAppProvider>
    );
}
