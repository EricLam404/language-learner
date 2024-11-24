import { URI } from "./utils/config/config.js";

module.exports = {
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    {
                        key: "Access-Control-Allow-Origin",
                        value: URI,
                    },
                    {
                        key: "Access-Control-Allow-Credentials",
                        value: "true",
                    },
                ],
            },
        ];
    },
};
