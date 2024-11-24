module.exports = {
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    {
                        key: "Access-Control-Allow-Origin",
                        value: process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_LOCAL_URI : process.env.NEXT_PUBLIC_PROD_URI,
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
